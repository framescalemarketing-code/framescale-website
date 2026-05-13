-- Discovery call bookings (required for /book + GET/POST /api/booking)
--
-- 1. Open Supabase Dashboard → SQL Editor → New query.
-- 2. Paste this entire file and run it once.
-- 3. Confirm the table appears under Table editor → discovery_call_bookings.
-- 4. Deploy the site with the same env you use for contact forms:
--    NEXT_PUBLIC_SUPABASE_URL, NEXT_SECRET_SUPABASE_API_KEY (service role),
--    plus RESEND_* if you want email notices on each booking.
--
-- The app never uses the anon key for inserts; the API uses the service role only.

create extension if not exists pgcrypto;

create table if not exists public.discovery_call_bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  starts_at timestamptz not null,
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 5 and 320),
  company text,
  notes text,
  user_agent text,
  ip_address text,
  status text not null default 'booked' check (status in ('booked', 'cancelled')),
  metadata jsonb not null default '{}'::jsonb,
  constraint discovery_call_bookings_starts_at_unique unique (starts_at)
);

create index if not exists discovery_call_bookings_starts_at_idx
  on public.discovery_call_bookings (starts_at);

create index if not exists discovery_call_bookings_created_at_idx
  on public.discovery_call_bookings (created_at desc);

create index if not exists discovery_call_bookings_email_idx
  on public.discovery_call_bookings (lower(email));

alter table public.discovery_call_bookings enable row level security;

drop policy if exists discovery_call_bookings_no_public_access on public.discovery_call_bookings;
create policy discovery_call_bookings_no_public_access
  on public.discovery_call_bookings
  for all
  to anon, authenticated
  using (false)
  with check (false);
