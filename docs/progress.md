# Progress: FrameScale redesign (started 2026-11-26)

Plan: `C:\Users\jonat\.claude\plans\please-take-this-repo-synchronous-lollipop-of-074bc5cd-cdb8-4926-879f-7de7183b6b22.md` (approved). Branch: `main`, local commits per unit, **one push at the end only on Jonathan's yes**.

## Units
| # | Unit | Status |
|---|---|---|
| 0 | Env, Playwright, baselines | Done except `.env.development.local` pull (Jonathan runs it; safety hook blocks Claude from `.env*` paths). Baseline: lint, brand:check, build all pass; 19 pages. |
| 1 | SEO map | Done, committed: `docs/briefs/redesign-seo-map-2026-11-26.md` |
| 2 | Design system + brand guard | Done, committed locally. `next/font/google` works through `next-from-root.mjs` (build passes, fonts self-hosted, wdth axis present). Guard now pins Bricolage + Hanken in layout.tsx and globals.css, bans a Google Fonts link; `src/styles/fonts.css` deleted. A-2 failing-case run: 5 of 5 altered cases fail, control passes. A-11 grep: every carry-over selector present. |
| 3 | Chrome: Header, Footer, MobileCTABar, site.ts nav, `/contact` repoint | Done, committed (`48598b8`). Deep masthead + footer, nav = Optical, Services, Method, About, Insights, `contactHref()` replaces `contactHrefFor`, MobileCTABar hidden on /contact. Checked at 375/1440 with Playwright (menu opens, aria-current works, no overflow). `/method`, `/insights`, `/contact` routes do not exist yet, so those links 404 until Units 6-7. |
| 4 | Home | Done, committed (`c873592`). Deep hero with Rings + portrait lens, `MarketingScope`, `ServiceOverview` (muted), `MethodPreview` (dark, SCALE letters on a shared rule), `AboutMe`, FAQ, `CtaBand` (`id="contact"`, links to `/contact`). `services.ts` rewritten (new titles, `phase` field, ids unchanged); footer Services labels updated. `ProblemList` removed. Checked at 375/1440: one h1, no overflow. Home CTA 404s until Unit 6 builds `/contact`. |
| 5 | Services, Optical, About | Done (local commit). tsc, lint, brand:check clean; one h1 and no horizontal overflow at 375 and 1440. Pages now end in `CtaBand`; `ScaleDetail` is no longer used on /services (moves to /method in Unit 6). Known leftovers for Unit 8: `schema.ts` line 93 says "Google Business Profile optimization"; `terms/page.tsx` line 21 (legal text, not touched). |
| 6 | /method, /contact | Done (local commit). `/method` has anchors `#phase-s` to `#phase-e`; `/contact` holds the form. `next.config.ts` redirects updated (`/book` to `/contact`, `/process` to `/method`, the old `/contact` to `/#contact` rule removed). `route.ts` and `Brand.tsx` diffs empty. Form check at 320/375/1440 with Cloudflare test keys: no overflow, widget fits, empty submit shows field errors; the POST was mocked, so no real email sent and the real submit stays owner-run (A-14). Only style change in `ContactForm.tsx`: Send button radius (pill to 8px). |
| 7 | /insights + 3 drafts | Done (local commit). `src/content/insights.ts` holds three drafts, all `published: false`: they are `noindex`, 404 on the Vercel production deployment, render with a "Draft, not published" label locally and on previews, and stay off the index and sitemap. `/insights` shows an honest empty state and is `noindex` until one article is published. `buildArticleGraph` emits Article schema only for published pieces. Jonathan edits each draft in his own voice, then sets `published: true` and `datePublished`. tsc, lint, brand:check clean; one h1 and no overflow at 375/1440. |
| 8 | SEO plumbing, OG images, legal/404 restyle | Done (local commit). Sitemap lists /method and /contact (and /insights plus published slugs once one exists). OG and Twitter cards share `src/lib/og-card.tsx` (deep teal, rings, built-in sans font). Manifest colors updated. `knowsAbout` no longer lists Local SEO or Google Business Profile. AboutPage, ContactPage and WebPage nodes added. Three meta descriptions shortened to fit 155. Legal pages and 404 already match the new look. A-5, A-6, A-8, A-12, A-13, A-15 proved in the acceptance JSON. Still open: `terms/page.tsx` line 21 mentions Google Business Profile support (legal text, flag to Jonathan). |
| 9 | QA, docs, cleanup | Not started |

Acceptance lines: `docs/briefs/redesign-2026-11-26.acceptance.json` (A-2 and A-11 proved so far).

Known, not mine: the iubenda banner sits first in the tab order (before the skip link) and covers the whole top of a phone screen until answered. It is third-party markup; flag to Jonathan at the end.

## Carry-forward notes
- Docs still say fonts live in `src/styles/fonts.css` and the guard bans `next/font/google` (AGENTS.md line 12, `.cursorrules` line 44, `.cursor/rules/ui.mdc` line 21). Fix all three in Unit 9 along with the false `PRINCIPAL_LAST_NAME` claim.
- New tokens: `--cta-deep-bg`, `--cta-deep-fg`, `--ring-line` (overridden under `a11y-high-contrast`). New classes: `.tick-rule`, `.ring-draw`, `.ring-fade`. New component: `src/components/design/Rings.tsx` (server component, CSS-only draw-in).
- Button `light` variant now means "aqua action on a deep band"; `quiet` is the hairline on deep.
- Still to build: a Steps motif for /method (Unit 6).
- On git bash, a leading `/` argument to node is rewritten to a Windows path; run Playwright shoot.mjs from PowerShell.

## Facts to keep
- Playwright is installed in the scratchpad (`...\scratchpad\pw`), not in the repo. `node shoot.mjs <label> <baseUrl> <paths>` writes screenshots to `pw\shots\<label>`. Baseline shots are in `pw\shots\baseline`.
- A dev server was started on port 3100 (background). Restart it after the env pull so Next loads `.env.development.local`.
- `.claude/settings.local.json` enables claude-seo for this session and is excluded in `.git/info/exclude`. Remove the plugin line when copy is done.
- Impeccable's launcher needs a binary download, so it was not run. Rules were read from its references. Impeccable bans eyebrow labels above headings and lists Instrument Sans as an overused default, so the font pair is **Bricolage Grotesque (display) + Hanken Grotesk (text)**, both confirmed available in this Next's `next/font/google` list.
- Direction contract: `docs/briefs/redesign-direction-contract-2026-11-26.md`.
- Stale Vercel env vars (Supabase, BOOKING_*) are unused by code; offer cleanup to Jonathan, do not touch.
- Never open `.env*` files or print values.
