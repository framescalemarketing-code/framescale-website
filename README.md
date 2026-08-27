# Jonathan Mejia, MBA: Optical Practice Marketing Consultant

Personal-brand marketing site. Four marketing pages, one conversion path.

> **Before launch:** set `RESEND_API_KEY` and `CONTACT_NOTIFICATION_EMAIL` in
> `.env.local`. The contact form is the only lead path on the site, and without
> the key `src/app/api/contact/route.ts` returns its "not configured yet" error.
> Setting `CLOUDFLARE_SITE_KEY` and `CLOUDFLARE_SECRET_KEY` turns on the spam
> check; until both are set the form accepts anything. See `.env.example`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home. Full conversion sequence, ending in the contact form. |
| `/services` | Four service areas, the SCALE Method, how pricing is scoped, FAQ. |
| `/optical-marketing` | The vertical hub. Why optical is different, optical FAQ. Owns the head term. |
| `/about` | Background, credentials, philosophy. |
| `/privacy`, `/cookie-policy`, `/california-privacy`, `/accessibility`, `/terms` | Legal. Footer-linked only. |

There is no separate contact page. The form is a section at the foot of every
marketing page, anchored at `#contact`.

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
