# FrameScale Inc

Official website for FrameScale Inc.

## Pages

- / Home
- /about
- /accessibility
- /admin
- /book
- /contact
- /industries/healthcare
- /industries/professional-services
- /industries/retail
- /process
- /privacy
- /cookie-policy
- /california-privacy
- /sitemap
- /terms

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Core config

- Supabase auth and data storage use `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, and `NEXT_SECRET_SUPABASE_API_KEY`.
- Cloudflare Turnstile uses `CLOUDFLARE_SITE_KEY` and `CLOUDFLARE_SECRET_KEY`.
- Resend notifications use `RESEND_API_KEY` and optionally `CONTACT_NOTIFICATION_EMAIL`.
- Booking calendar sync optionally uses `BOOKING_EXTERNAL_CALENDAR_ICS_URL` and `BOOKING_EXTERNAL_CALENDAR_SUMMARY_MATCH`.

## Notes

- Brand colors are defined in src/app/globals.css.
- Navigation items are defined in src/lib/site.ts.
- Contact and booking submissions post to Next.js route handlers and can store records in Supabase.
