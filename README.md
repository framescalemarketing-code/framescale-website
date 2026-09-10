# Jonathan Mejia, MBA: Small Business Consultant, San Diego

Personal-brand marketing site. Four pages, a booking page, one conversion path.

> **Before launch:** set `RESEND_API_KEY` and `CONTACT_NOTIFICATION_EMAIL`.
> Email is the record of every lead, and without the key the contact and
> booking routes return their "not configured yet" error. In production
> `CLOUDFLARE_SITE_KEY` and `CLOUDFLARE_SECRET_KEY` are required too; both
> forms refuse to run unprotected there. See `.env.example`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home. Promise, problem, what I do, proof, who I am, objections, action. |
| `/services` | Four service areas, the SCALE Method, how pricing is scoped, FAQ. |
| `/optical` | The same offer for optical practices, from the years Jonathan spent in one. |
| `/about` | Background, credentials, philosophy. Emits `ProfilePage`. |
| `/book` | Free-call booking against Jonathan's Google Calendar. See below. |
| `/privacy`, `/cookie-policy`, `/california-privacy`, `/accessibility`, `/terms` | Legal. Footer-linked only. |

There is no separate contact page. The form is a section at the foot of the four
marketing pages, anchored at `#contact`, and a share line sits under it.

Routes retired in the rebuild (`/process`, `/contact`, `/industries/*`, `/payment`,
`/pricing`, `/case-studies`, `/sitemap`, `/admin`) are 308-redirected in
`next.config.ts`. Do not recreate them without also removing the redirect.

## Booking

`/book` reads availability from, and writes bookings to, a Google Calendar
through a service account (`src/lib/booking/google-calendar.ts`, no SDK).
Setup: create a Google Cloud project, enable the Calendar API, create a
service account and download its JSON key, share the calendar with the
service account's email at "Make changes to events", then set
`GOOGLE_CALENDAR_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, and
`GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`. Without them the route reports the
calendar unavailable and the page shows the phone and email instead.

`bookingLive` in `src/lib/site.ts` is the switch: while it is `false`, every
"Book A Free Call" points at the message form, `/book` is `noindex`, and it is
out of the sitemap and the footer. Flip it once the credentials are in
production. A service account cannot invite attendees on a personal calendar,
so the visitor's invite goes out as an `.ics` on the Resend confirmation.

## Architecture

| Layer | Location |
|---|---|
| Copy | `src/content/*.ts` as typed data. No user-facing strings inline in JSX. |
| Site facts | `src/lib/site.ts` (`principal`, `practice`, `location`, `site`, nav, footer, `bookingLive`) |
| Structured data | `src/lib/schema.ts` |
| Share cards | `src/content/share-cards.ts` rendered by `src/lib/og/share-card.tsx`; one `opengraph-image.tsx` per route segment |
| Fonts | Self-hosted `@font-face` in `src/styles/fonts.css`, files in `public/fonts` |
| Primitives | `src/components/ui/` |
| Chrome | `src/components/layout/` |
| Page sections | `src/components/sections/` |
| Framework plumbing | `src/components/system/` |
| Booking | `src/lib/booking/`, `src/app/api/booking/route.ts` |
| Frozen brand asset | `src/components/design/Brand.tsx` |

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev
```

Then open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Quality gates

```bash
npm run lint
npm run brand:check
```

`brand:check` freezes the parts of the design that must not drift: the three font
families, the five brand colors, and the logo viewBox. It reads source, not build
output, so it cannot tell whether the fonts actually load; check `document.fonts`
on a deployed page after touching `src/styles/fonts.css` or `layout.tsx`.

`scripts/make-icons.mjs` regenerates `src/app/apple-icon.png` and
`public/brand/logo-512.png` from `src/app/icon.svg`.

## Configuration

Copy `.env.example` to `.env.local`.

- **Resend** (required): `RESEND_API_KEY`, optionally `RESEND_NOREPLY_FROM` and `CONTACT_NOTIFICATION_EMAIL`. Email is the system of record for leads, so a missing key makes both forms return an error rather than fail quietly. Each contact message costs two sends (the alert and the visitor's receipt); each booking, two as well.
- **Cloudflare Turnstile** (required in production, optional elsewhere): `CLOUDFLARE_SITE_KEY`, `CLOUDFLARE_SECRET_KEY`. Set both or neither. If the widget never loads in the browser, the forms show the phone and email instead of a dead check.
- **Google Calendar** (booking): the three `GOOGLE_*` variables above. `BOOKING_EXTERNAL_CALENDAR_ICS_URL` optionally adds busy time from a second calendar's private iCal feed; it never replaces Google.
- **Analytics** (optional): `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Without it the GA4 scripts are not injected. Events are held until iubenda reports consent and dropped on reject.
- **Consent** (optional): `NEXT_PUBLIC_IUBENDA_POLICY_ID`, `NEXT_PUBLIC_IUBENDA_SITE_ID`, `NEXT_PUBLIC_IUBENDA_WIDGET_ID`. All fall back to committed defaults.

There is no database. Supabase, Stripe, and the admin dashboard were removed in
the rebuild; the booking scheduler came back with Google Calendar as its store.

## SEO notes

The site uses one entity graph: `Person` (the primary entity) wired to
`ProfessionalService` and `WebSite`, plus `FAQPage` on the home, services, and
optical pages, `Service` nodes per pillar, and `ProfilePage` on `/about`.
`Person.sameAs` is the personal LinkedIn profile; the company page belongs to
the practice node.

`LocalBusiness` is deliberately **not** used. It expects a customer-accessible
street address, and there isn't one. `ProfessionalService` with `areaServed` is
the accurate and penalty-safe choice. Prose says Southern California; the schema
keeps San Diego County, which is where the listed cities are.

Similarly, there are no per-city landing pages. Near-duplicate location pages are
the pattern search engines demote as doorway content; the local signal comes from
consistent NAP between the footer and the JSON-LD and genuine FAQ content instead.

Every route carries its own share card. The image URL is hashed from the route's
`opengraph-image.tsx` source, so after changing a card bump the `card revision`
comment in that file, or platforms keep serving the old one.
