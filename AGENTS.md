# Agent instructions (FrameScale Website)

Use this file together with **root `.cursorrules`** and **`.cursor/rules/*.mdc`**.  
`.cursorrules` holds stack- and project-specific conventions; this file and the `.mdc` rules add **workflow and safety constraints** so changes stay grounded in the real codebase.

## Repository snapshot (inspected)

| Area | Facts |
|------|--------|
| **Framework** | Next.js **App Router** only (`src/app/`). There is **no** `src/pages/` Pages Router tree. Do not add or assume one. |
| **Runtime** | React 19, TypeScript `strict`, path alias `@/*` → `src/*`. |
| **Styling** | Tailwind CSS v4, `src/app/globals.css`, `src/styles/fonts.css`. |
| **UI structure** | Primitives in `src/components/ui/`; chrome in `src/components/layout/`; page sections in `src/components/sections/`; framework plumbing in `src/components/system/`. The brand logo lives at `src/components/design/Brand.tsx` and is frozen (see brand guard). |
| **Motion / icons** | `motion` (`motion/react`), shared variants in `src/lib/motion.ts`; icons via `lucide-react`. |
| **Content** | All user-facing copy lives in `src/content/*.ts` as typed data, never inline in JSX. Site facts (name, location, phone, nav) live in `src/lib/site.ts`. |
| **Data / server** | **No database.** Supabase, Stripe, and the admin dashboard were removed in the three-page rebuild. Email via Resend is the system of record for leads. Do not reintroduce a datastore unless explicitly requested. |
| **HTTP API** | One route handler: `src/app/api/contact/route.ts`. |
| **Deployment** | Typical **Vercel** + Next (`@vercel/analytics`, `@vercel/speed-insights`); no `vercel.json` in repo. Follow existing Next/Vercel defaults unless told otherwise. |
| **Routes** | Three marketing pages (`/`, `/services`, `/about`) plus five legal pages. Retired routes are 308-redirected in `next.config.ts`; do not re-create them. |
| **SEO** | Entity graph in `src/lib/schema.ts` (Person + ProfessionalService + WebSite, plus FAQPage and Service). `LocalBusiness` is deliberately not used: there is no public street address. |
| **Quality gates** | `npm run lint`, `npm run brand:check` (see `scripts/brand-guard.mjs`). |

## Mandatory behaviors

1. **Never invent** imports, functions, components, environment variables, database tables/columns, API routes, or npm package names. If it is not already in the repo (or explicitly specified in the task), **do not add it** without confirmation.
2. **Before editing**, open and read the relevant files and follow **nearby patterns** (same folder, callers, or `src/lib/site.ts` for public site facts).
3. Prefer **small, incremental** edits over large rewrites.
4. **Preserve** existing indentation, formatting, naming, and architecture unless the task requires a deliberate change.
5. **Do not delete** code, comments, or guardrails unless the user **explicitly** asks for removal.
6. **Do not refactor** files unrelated to the task.
7. When changing typed code, **preserve or improve** TypeScript types. No `any`. Run or reason about types so the change stays sound.
8. For Next.js routing, **confirm App Router**: this app uses **`src/app/`** only. Do not mix in Pages Router patterns (`getServerSideProps`, `pages/api`, etc.).
9. For server code, preserve this repo’s patterns: **Resend** for email, **Cloudflare Turnstile** for spam gating, **environment variable naming** as in `.env.example`, and **Vercel-oriented** Next deployment. There is no database; do not add one.
10. For UI, follow the **existing design system** (Tailwind tokens, design components, motion variants). Do not introduce a parallel visual system (e.g. MUI, Bootstrap, second component library) unless explicitly requested.
11. After substantive TS/TSX edits, use **`npm run lint`**; after brand-tied changes, **`npm run brand:check`**. The brand guard freezes the three font families, the five brand colors, and the logo viewBox. It also fails while `PRINCIPAL_LAST_NAME` in `src/lib/site.ts` is still the placeholder.

## Marketing copy style (site text and docs)

When writing or editing user-facing marketing copy in this repo (including `src/content/`, `src/lib/site.ts`, and `docs/`):

1. **No em dash.** Do not use the em dash character (U+2014) for asides, pivots, or “dramatic pause” punctuation. Do not use a lone ASCII hyphen-minus as a stand-in for that role. Prefer two sentences, a comma, or a colon so the line stays clean.

2. **No single-sentence positive or negative flip.** Do not combine praise and criticism of alternatives (or bad news and silver lining) in **one** sentence. Example of what to avoid: “We are research-led, unlike agencies that skip homework” in a single clause chain. Write two sentences, or one neutral sentence, then a second that stands on its own.

3. **Clear and direct.** Avoid decorative stacks of parentheses and filler phrases. Marketing copy should sound like something you would say out loud to a serious owner.
4. **CTA capitalization is required.** All user-facing CTA labels (buttons, nav CTAs, and CTA-style links) must use Title Case. Example: "Schedule Intro Call", not "Schedule intro call".

5. **Card and section headings use Title Case.** User-facing card titles, section titles, and short UI headings should use Title Case so industry pages feel polished and consistent.

These rules apply to new copy and to edits you make to existing pages unless the user explicitly asks for an exception.

## Where to look

- **Site facts / URLs / nav:** `src/lib/site.ts` (also holds `principal`, `practice`, and `location`)
- **All marketing copy:** `src/content/{home,services,about,scale,pricing,faq}.ts`
- **API + env patterns:** `src/app/api/contact/route.ts`, `.env.example`
- **Structured data:** `src/lib/schema.ts`
- **Retired-route redirects:** `next.config.ts`
- **Stack detail and SEO/legal/brand:** `.cursorrules`

## Scoped Cursor rules

| File | Scope |
|------|--------|
| `.cursor/rules/frontend.mdc` | App Router pages, layouts, client/server components |
| `.cursor/rules/backend.mdc` | Route handlers and server-only utilities |
| `.cursor/rules/ui.mdc` | Design components, Tailwind, motion, brand |

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
