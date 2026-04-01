import { NextRequest, NextResponse } from 'next/server';
import { readCMSData, writeCMSData } from '@/lib/cms';

// GET /api/admin/collection?name=gallery
export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get('name');
  if (!name) return NextResponse.json({ error: 'Missing name' }, { status: 400 });
  const data = readCMSData();
  return NextResponse.json({ items: data[name] || [] });
}

// POST /api/admin/collection?name=gallery — add item
export async function POST(req: NextRequest) {
  const name = req.nextUrl.searchParams.get('name');
  if (!name) return NextResponse.json({ error: 'Missing name' }, { status: 400 });
  const body = await req.json();
  const data = readCMSData();
  const col: any[] = Array.isArray(data[name]) ? data[name] : [];
  const newItem = { ...body, id: body.id || `${name[0]}${Date.now()}` };
  col.push(newItem);
  data[name] = col;
  writeCMSData(data);
  return NextResponse.json({ success: true, item: newItem });
}

// PUT /api/admin/collection?name=gallery&id=g1 — update item
export async function PUT(req: NextRequest) {
  const name = req.nextUrl.searchParams.get('name');
  const id = req.nextUrl.searchParams.get('id');
  if (!name || !id) return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  const body = await req.json();
  const data = readCMSData();
  const col: any[] = Array.isArray(data[name]) ? data[name] : [];
  data[name] = col.map((item: any) => item.id === id ? { ...item, ...body } : item);
  writeCMSData(data);
  return NextResponse.json({ success: true });
}

// DELETE /api/admin/collection?name=gallery&id=g1
export async function DELETE(req: NextRequest) {
  const name = req.nextUrl.searchParams.get('name');
  const id = req.nextUrl.searchParams.get('id');
  if (!name || !id) return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  const data = readCMSData();
  const col: any[] = Array.isArray(data[name]) ? data[name] : [];
  data[name] = col.filter((item: any) => item.id !== id);
  writeCMSData(data);
  return NextResponse.json({ success: true });
}
