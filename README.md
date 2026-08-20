# Jonathan Doe, MBA — Business Growth Consultant, San Diego

Personal-brand marketing site. Three pages, one conversion path.

> **Before launch:** two placeholder values must be replaced.
>
> 1. `PRINCIPAL_LAST_NAME` in `src/lib/site.ts` (currently `"Doe"`). It renders in the nav, every `<h1>`, all title tags, and `Person` JSON-LD. `npm run brand:check` fails until it is set.
> 2. `PLACEHOLDER_AUDIT_PRICE` and `PLACEHOLDER_PARTNER_PRICE` in `src/content/pricing.ts`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home. Full conversion sequence, ending in the contact form. |
| `/services` | Four service areas, the SCALE Method, industries, pricing, FAQ. |
| `/about` | Background, credentials, San Diego, philosophy. |
| `/privacy`, `/cookie-policy`, `/california-privacy`, `/accessibility`, `/terms` | Legal. Footer-linked only. |

There is no separate contact page. The form is a section at the foot of all three
marketing pages, anchored at `#contact`.

Routes retired in the rebuild (`/process`, `/book`, `/contact`, `/industries/*`,
`/payment`, `/sitemap`, `/admin`) are 308-redirected in `next.config.ts`. Do not
recreate them without also removing the redirect.

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
- **Cloudflare Turnstile** (optional): `CLOUDFLARE_SITE_KEY`, `CLOUDFLARE_SECRET_KEY`. The form works without them; the challenge simply does not render.
- **Analytics** (optional): `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Without it the GA4 scripts are not injected.
- **Consent** (optional): `NEXT_PUBLIC_IUBENDA_POLICY_ID`, `NEXT_PUBLIC_IUBENDA_SITE_ID`, `NEXT_PUBLIC_IUBENDA_WIDGET_ID`. All fall back to committed defaults.

There is no database. Supabase, Stripe, the booking scheduler, and the admin
dashboard were removed in the rebuild.

## SEO notes

The site uses one entity graph: `Person` (the primary entity) wired to
`ProfessionalService` and `WebSite`, plus `FAQPage` on the home and services
pages and `Service` nodes per pillar.

`LocalBusiness` is deliberately **not** used. It expects a customer-accessible
street address, and there isn't one. `ProfessionalService` with `areaServed` is
the accurate and penalty-safe choice.

Similarly, there are no per-city landing pages. Near-duplicate location pages are
the pattern search engines demote as doorway content; the local signal comes from
the San Diego section on `/about`, consistent NAP between the footer and the
JSON-LD, and genuine FAQ content instead.
