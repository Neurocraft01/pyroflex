-- Run this inside your Supabase SQL Editor to enable the CMS table
CREATE TABLE IF NOT EXISTS site_content (
  id uuid default uuid_generate_v4() primary key,
  section_key text not null unique,
  content_data jsonb default '{}'::jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table site_content enable row level security;

-- Allow public read access
create policy "Public read access"
  on site_content for select
  using ( true );

-- Allow anon to update for now if you want to bypass NextAuth, but normally Next.js SSR handles it so we can just use the service role key or let anon push. Since Next.js API uses anon key, we'll let authenticated API hit it. If you want everyone to be able to edit for testing:
create policy "Allow API updates"
  on site_content for insert
  with check ( true );

create policy "Allow API update"
  on site_content for update
  using ( true );
