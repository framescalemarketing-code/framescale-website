# Agent instructions (FrameScale Website)

Use this file together with **root `.cursorrules`** and **`.cursor/rules/*.mdc`**.  
`.cursorrules` holds stack- and project-specific conventions; this file and the `.mdc` rules add **workflow and safety constraints** so changes stay grounded in the real codebase.

## Repository snapshot (inspected)

| Area | Facts |
|------|--------|
| **Framework** | Next.js **App Router** only (`src/app/`). There is **no** `src/pages/` Pages Router tree. Do not add or assume one. |
| **Runtime** | React 19, TypeScript `strict`, path alias `@/*` → `src/*`. |
| **Styling** | Tailwind CSS v4, `src/app/globals.css`, `src/styles/fonts.css`. |
| **UI structure** | Shared chrome in `src/components/design/`; page bodies in `src/components/design-pages/` (including `industries/`). |
| **Motion / icons** | `motion` (`motion/react`), shared variants in `src/lib/motion.ts`; icons via `lucide-react`. |
| **Data / server** | Supabase via **`getSupabaseServerClient()`** in `src/lib/supabase/server.ts` (trusted server usage). **No BigQuery** (or other data warehouses) in this repository. Do not introduce them unless explicitly requested. |
| **HTTP API** | Route handlers only under `src/app/api/contact/route.ts` and `src/app/api/consent/route.ts` today. |
| **Deployment** | Typical **Vercel** + Next (`@vercel/analytics`, `@vercel/speed-insights`); no `vercel.json` in repo. Follow existing Next/Vercel defaults unless told otherwise. |
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
9. For server code, preserve this repo’s patterns: **Supabase server client**, **Resend/contact env** where already used, **environment variable naming** as in existing files, and **Vercel-oriented** Next deployment. Do not substitute generic “BigQuery” or other stacks absent from the codebase.
10. For UI, follow the **existing design system** (Tailwind tokens, design components, motion variants). Do not introduce a parallel visual system (e.g. MUI, Bootstrap, second component library) unless explicitly requested.
11. After substantive TS/TSX edits, use **`npm run lint`**; after brand-tied changes, **`npm run brand:check`**.

## Marketing copy style (site text and docs)

When writing or editing user-facing marketing copy in this repo (including `src/components/design-pages/`, `src/lib/site.ts`, and `docs/`):

1. **No em dash.** Do not use the em dash character (U+2014) for asides, pivots, or “dramatic pause” punctuation. Do not use a lone ASCII hyphen-minus as a stand-in for that role. Prefer two sentences, a comma, or a colon so the line stays clean.

2. **No single-sentence positive or negative flip.** Do not combine praise and criticism of alternatives (or bad news and silver lining) in **one** sentence. Example of what to avoid: “We are research-led, unlike agencies that skip homework” in a single clause chain. Write two sentences, or one neutral sentence, then a second that stands on its own.

3. **Clear and direct.** Avoid decorative stacks of parentheses and filler phrases. Marketing copy should sound like something you would say out loud to a serious owner.

These rules apply to new copy and to edits you make to existing pages unless the user explicitly asks for an exception.

## Where to look

- **Site copy / URLs / nav:** `src/lib/site.ts`
- **API + env patterns:** `src/app/api/contact/route.ts`, `src/app/api/consent/route.ts`
- **Supabase server:** `src/lib/supabase/server.ts`
- **Stack detail and SEO/legal/brand:** `.cursorrules`

## Scoped Cursor rules

| File | Scope |
|------|--------|
| `.cursor/rules/frontend.mdc` | App Router pages, layouts, client/server components |
| `.cursor/rules/backend.mdc` | Route handlers and server-only utilities |
| `.cursor/rules/database.mdc` | Supabase usage and table names |
| `.cursor/rules/ui.mdc` | Design components, Tailwind, motion, brand |
