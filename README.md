# Jonathan Mejia, MBA: Optical Practice Marketing Consultant

Personal-brand marketing site. Eight marketing routes, `/book` and the On-Sight case study. Two lead
paths: booking a call (`/book`) and sending a message (`/contact`).

> **Before launch:** set `RESEND_API_KEY` and `CONTACT_NOTIFICATION_EMAIL` in
> `.env.local`. Without the key `src/app/api/contact/route.ts` returns its "not
> configured yet" error. Setting `CLOUDFLARE_SITE_KEY` and `CLOUDFLARE_SECRET_KEY`
> turns on the spam check. Any production build (the live site, Vercel previews and
> `npm run start`) refuses both forms until the two keys are set; only the local
> dev server runs without them. Booking
> also needs a calendar to read (`GOOGLE_*` or `BOOKING_EXTERNAL_CALENDAR_ICS_URL`),
> or `/book` shows the phone and email instead of times. See `.env.example`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home. Offer, credentials, services, method preview, case study proof band, FAQ, closing call to action. |
| `/services` | Four service areas, how pricing is scoped, FAQ. |
| `/optical-marketing` | The vertical hub. Why optical is different, optical FAQ. Owns the head term. |
| `/method` | The five-phase SCALE Method, with an anchor per phase (`#phase-s` to `#phase-e`). |
| `/about` | Background, credentials, philosophy. |
| `/case-studies/on-sight-safety-optics` | The On-Sight Safety Optics case study. Every number is a row in `src/content/onsight.ts` with its source and date. Two switches in that file hide the page (`onSightApproved`) or only the review, pricing and revenue lines (`onSightFiguresApproved`). |
| `/book` | Pick a time from Jonathan's calendar (`/api/booking`, Turnstile, Google Calendar). Every primary call to action points here while `bookingLive` is `true` in `src/lib/site.ts`. |
| `/contact` | The message form (Turnstile plus Resend), plus phone and email. |
| `/insights`, `/insights/[slug]` | Guides. Drafts in `src/content/insights.ts` stay hidden until `published: true`. |
| `/privacy`, `/cookie-policy`, `/california-privacy`, `/accessibility`, `/terms` | Legal. Footer-linked only. |

The message form lives only on `/contact`. The closing call to action band on
each page keeps `id="contact"`, so old `/#contact` links from emails and ads still
land on a call to action.

Routes retired in the rebuild (`/process`, `/industries/*`, `/payment`,
`/sitemap`, `/admin`) are 308-redirected in `next.config.ts`. Do not recreate them
without also removing the redirect.

## Architecture

| Layer | Location |
|---|---|
| Copy | `src/content/*.ts` as typed data. No user-facing strings inline in JSX. |
| Site facts | `src/lib/site.ts` (`principal`, `practice`, `location`, `site`, nav, footer) |
| Structured data | `src/lib/schema.ts` |
| Primitives | `src/components/ui/` |
| Chrome | `src/components/layout/` |
| Page sections | `src/components/sections/` |
| Framework plumbing | `src/components/system/` |
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
families, the five brand colors, and the logo viewBox. It also blocks launch while
the surname placeholder is still in place.

## Configuration

Copy `.env.example` to `.env.local`. Only Resend is required.

- **Resend** (required): `RESEND_API_KEY`, optionally `RESEND_NOREPLY_FROM` and `CONTACT_NOTIFICATION_EMAIL`. Email is the system of record for leads, so a missing key makes the contact form return an error rather than fail quietly.
- **Cloudflare Turnstile** (required in any production build): `CLOUDFLARE_SITE_KEY`, `CLOUDFLARE_SECRET_KEY`. On the dev server the forms work without them and the challenge simply does not render.
- **Analytics** (optional): `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Without it the GA4 scripts are not injected.
- **Consent** (optional): `NEXT_PUBLIC_IUBENDA_POLICY_ID`, `NEXT_PUBLIC_IUBENDA_SITE_ID`, `NEXT_PUBLIC_IUBENDA_WIDGET_ID`. All fall back to committed defaults.
- **Booking** (optional): `GOOGLE_CALENDAR_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` (the calendar the site reads and writes), and `BOOKING_EXTERNAL_CALENDAR_ICS_URL` (a private iCal feed of another calendar that blocks times). Without a calendar `/book` says so and shows the phone and email.

There is no database. Supabase, Stripe, and the admin dashboard were removed in
the rebuild. Google Calendar holds the bookings, and held slots live in memory
(`src/lib/booking/held-slots.ts`).

## SEO notes

The site uses one entity graph: `Person` (the primary entity) wired to
`ProfessionalService` and `WebSite`, plus `FAQPage` on the home, services, and
optical pages, `Service` nodes per pillar, and one `Service` node with a
`BusinessAudience` for the optical vertical.

`LocalBusiness` is deliberately **not** used. It expects a customer-accessible
street address, and there isn't one. `ProfessionalService` with `areaServed` is
the accurate and penalty-safe choice.

Similarly, there are no per-city landing pages. Near-duplicate location pages are
the pattern search engines demote as doorway content. The site no longer targets
a single metro at all: it works remotely nationwide, `areaServed` is one
`Country` node, and the address in the JSON-LD carries region and country only.

One vertical page exists, `/optical-marketing`, because Jonathan worked in
optical for years. A second vertical page may be added only when its copy is at
least 70% different from the first and drawn from comparable first-hand
experience. There is currently no second vertical that qualifies. Never create
city by vertical pages such as `/optical-marketing-carlsbad`. That matrix is the
doorway pattern the no-city-pages rule already forbids, and it is how solo
consultants most often get demoted.
