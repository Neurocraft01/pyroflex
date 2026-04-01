import { supabase } from '@/lib/supabase';

export async function getCMSContent(section: string, fallback: Record<string, string>) {
  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('content_data')
      .eq('section_key', section)
      .single();
      
    if (error || !data) return fallback;
    // merge fallback with actual data to ensure all keys exist
    return { ...fallback, ...data.content_data };
  } catch (err) {
    return fallback;
  }
}
