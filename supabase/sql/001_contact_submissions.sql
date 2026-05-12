-- Run this in Supabase SQL Editor.
-- Creates a durable table for website contact form leads.

create extension if not exists pgcrypto;

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 5 and 320),
  company text,
  industry text,
  message text not null check (char_length(message) >= 10),
  source_page text,
  user_agent text,
  ip_address text,
  status text not null default 'new' check (status in ('new', 'reviewed', 'closed')),
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists contact_submissions_status_idx
  on public.contact_submissions (status);

create index if not exists contact_submissions_email_idx
  on public.contact_submissions (lower(email));

alter table public.contact_submissions enable row level security;

-- Explicitly deny anon/authenticated direct table access.
-- Inserts should go through the server route using service role key.
drop policy if exists contact_submissions_no_public_access on public.contact_submissions;
create policy contact_submissions_no_public_access
  on public.contact_submissions
  for all
  to anon, authenticated
  using (false)
  with check (false);
