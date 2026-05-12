-- Consent event log for cookie/privacy consent actions.
-- Designed to work with a custom banner or Iubenda callback/webhook handler.

create extension if not exists pgcrypto;

create table if not exists public.consent_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  consent_id text not null,
  source text not null default 'website',
  policy_version text not null default 'v1',
  region text,
  consent jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  user_agent text,
  ip_address text
);

create index if not exists consent_events_created_at_idx
  on public.consent_events (created_at desc);

create index if not exists consent_events_consent_id_idx
  on public.consent_events (consent_id);

create index if not exists consent_events_source_idx
  on public.consent_events (source);

alter table public.consent_events enable row level security;

-- Public users should not read/write this table directly.
drop policy if exists consent_events_no_public_access on public.consent_events;
create policy consent_events_no_public_access
  on public.consent_events
  for all
  to anon, authenticated
  using (false)
  with check (false);
