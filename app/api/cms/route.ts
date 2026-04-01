import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get('section');

  if (!section) return NextResponse.json({ error: 'Section required' }, { status: 400 });

  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('content_data')
      .eq('section_key', section)
      .single();

    if (error) {
       // Graceful fallback for missing table
       return NextResponse.json({ data: {} });
    }

    return NextResponse.json({ data: data?.content_data || {} });
  } catch (err) {
    return NextResponse.json({ data: {} });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  
  // Protect the route
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { section, data } = await request.json();

  if (!section || !data) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    // Try to update existing or insert new. Upsert by section_key.
    const { error } = await supabase
      .from('site_content')
      .upsert({ 
        section_key: section, 
        content_data: data,
        updated_at: new Date().toISOString()
      }, { onConflict: 'section_key' });

    if (error) {
      console.error("Supabase error saving content:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error saving CMS content:", err);
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}
