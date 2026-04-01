import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'cms-data.json');

export function readCMSData(): Record<string, any> {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function writeCMSData(data: Record<string, any>): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export async function getCMSContent(
  section: string,
  fallback: Record<string, string>
): Promise<Record<string, string>> {
  try {
    const data = readCMSData();
    if (!data[section]) return fallback;
    return { ...fallback, ...data[section] };
  } catch {
    return fallback;
  }
}

export async function getCMSCollection(section: string): Promise<any[]> {
  try {
    const data = readCMSData();
    return Array.isArray(data[section]) ? data[section] : [];
  } catch {
    return [];
  }
}
