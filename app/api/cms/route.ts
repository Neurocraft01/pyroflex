import { NextRequest, NextResponse } from 'next/server';
import { readCMSData, writeCMSData } from '@/lib/cms';

export async function GET(req: NextRequest) {
  const section = req.nextUrl.searchParams.get('section');
  const data = readCMSData();
  if (section) {
    return NextResponse.json({ data: data[section] || {} });
  }
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { section, data: sectionData } = body;
    if (!section) return NextResponse.json({ error: 'Missing section' }, { status: 400 });
    const all = readCMSData();
    all[section] = { ...((all[section] as Record<string, unknown>) || {}), ...sectionData };
    writeCMSData(all);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}
