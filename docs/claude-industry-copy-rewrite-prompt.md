# Claude prompt: shorter, higher-impact industry copy + layout tuning

Copy everything below the line into Claude (or another writer model). Attach or paste the current content files listed in **Files to edit**.

---

## Your role

You are a senior conversion copywriter and a pragmatic Next.js UI editor working on the **FrameScale** marketing site (growth marketing for owners, principal-led, selective roster).

**Goal:** Rewrite industry and related marketing copy so it is **shorter, scannable, and more effective**, while keeping (or improving) visual impact on the page. You may propose **small layout adjustments** in shared industry components when shorter copy needs stronger hierarchy, not more words.

**Do not:** invent new routes, packages, env vars, APIs, or services not already on the site. Do not add WordPress/Wix as offerings. Do not promise specific ROAS, rankings, or HIPAA compliance beyond what copy already implies.

---

## Brand and voice (non-negotiable)

- **Audience:** Owner-operators, 30+, California-first (US remote OK). Primary focus: **independent optical / dispensary-forward** practices.
- **Positioning:** Research before spend. Custom sites (not template rentals). Work **directly with the principal**. **Teach** so clients need you less over time. Not a social-posting shop.
- **Proof (honest):** 6+ years optical **retail + lab** management; bachelor’s and master’s in business; selective small roster; client names possible but **outcomes still in progress** (do not invent metrics).
- **Tone:** Clear, direct, educator when it matters. Respect owner time. No stiff corporate speak.
- **Copy rules:**
  - **No em dash** (U+2014). Use periods, commas, or colons.
  - **No single-sentence praise/criticism flip** (e.g. avoid “great at X but bad at Y” in one sentence). Use two sentences.
  - Prefer **“you / your practice / your firm”** on industry pages.
- **Primary CTA:** Book a call → `/book` (label: “Schedule intro call” in components).

---

## Ideal customer (use for message fit, not length)

### Healthcare / optical (primary)

- Independent optical, dispensary-strong; referrals drive patients; **website under-sells** the practice (dated, not mobile, bad photos, wrong message; social = humor/trends only).
- Owner: 30+, highly involved, built the business; frustrated by trend-chasing marketing; may say: tried agency, steady patients, “AI can do that.”
- Site jobs when someone looks them up after a referral: **prove trust**, **easy booking**, **arm referrers** with shareable proof.
- Why FrameScale: optical operator background + 1:1 principal + teaching/sustainability (not AI-only shortcuts).

### Retail & e-commerce

- Online-first **hybrid**, ~5–15 employees; strong product/sales; pain = **CAC/margin** when message, audience, or **channel/place** is wrong.
- Wants a **collaborative** partner, not hype-only execution.

### Professional services

- Consultants lead; law/accounting secondary. Referral-strong; **no real website** or placeholder; wants **firm site + cases**, inbound that is **not salesy** or volume lead-gen.

### Anti-fit (do not write copy that attracts these)

- Social-only / vanity metrics shoppers; cheapest-price only; owners who won’t invest any time; ads-only mindset (paid is fine, but not *only* ads/social).

---

## Word budgets (strict — impact through brevity)

| Field | Max words | Notes |
|-------|-----------|--------|
| Hero `badge` | 4 | Uppercase in UI |
| Hero `title` | 12 | One clear idea; headline strength |
| Hero `description` | 45 | **Cut current drafts by ~40%** |
| Section header `badge` | 4 | |
| Section header `title` | 10 | |
| Section header `description` | 25 | One sentence preferred |
| Highlight `label` | 5 | |
| Highlight `description` | 12 | |
| Challenge `title` | 6 | |
| Challenge `description` | 28 | |
| Solution column `title` | 5 | |
| Solution bullet | 8 each | **Max 3 bullets per column** (reduce from 4 if needed) |
| CTA `title` | 10 | |
| CTA `body` | 40 | |

If a section feels empty after cuts, **fix layout** (see below), do not add filler copy.

---

## Copy craft rules

1. **One idea per block.** Headline = outcome or tension. Subhead = who it’s for. Body = one proof or one mechanism.
2. **Verbs over adjectives.** “Book online without phone tag” beats “seamless digital experience.”
3. **Concrete nouns** for optical: dispensary, referrals, exam lane, reviews, booking, frames, lab — sparingly, not jargon soup.
4. **Objection hooks** (optical): address agency burnout, “we’re full,” and AI shortcuts in **one challenge card** or **one hero clause**, not three repetitive cards.
5. **Secondary verticals** (dental, legal): one short clause max per page; optical stays hero focus on healthcare page.
6. Read aloud: if it sounds like a brochure paragraph, cut it in half.

---

## Page structure (do not change route tree)

Each industry page is:

1. `IndustryHero` — badge, title, description, 2 CTAs  
2. `IndustryHighlightGrid` — 3 specialty cards  
3. `ChallengeGrid` — 4 cards, 2×2 grid  
4. `SolutionGrid` — 3 columns, bullet lists  
5. `IndustryCta` — title, body, 2 buttons  

Files:

- Copy/data: `src/lib/industry-content/healthcare.ts`, `retail.ts`, `professional-services.ts`
- Also align: `src/lib/home-content.ts`, `src/lib/site.ts` (nav blurbs only), `src/components/design-pages/AboutPage.tsx` (story paragraph + industry blurbs), `src/app/industries/*/page.tsx` (metadata title + description only)
- Shared layout: `src/components/design-pages/industries/_shared/*.tsx`

Run after edits: `npm run lint` and `npm run brand:check`.

---

## Layout adjustments (allowed — prefer these over long copy)

When copy gets shorter, **increase impact with hierarchy and space**, not more text.

### A. Hero (`IndustryHero.tsx`)

- Reduce hero `description` to `text-lg lg:text-xl` and `max-w-2xl` if under 40 words.
- Optional: add **3 short hero chips** under description (new optional field or hardcode in component for healthcare only):
  - Example chips: `Referral-proof web` · `Booking that staff uses` · `Research before ad spend`
- Consider `min-h-[60vh]` instead of `70vh` when copy is tight (less empty space).

### B. Section headers (`SectionHeader` usage)

- If `description` is empty or under 12 words, pass **no description** (may require making `description` optional in types + component) OR use description as a single punchy subline only.

### C. Challenges (`ChallengeGrid.tsx`)

- Option 1: **3 cards** in one row on `lg` (`lg:grid-cols-3`) instead of 4, if you merge two pains.
- Option 2: Keep 4 cards but use **larger title, shorter body** (`text-lg` title, `text-sm` body).
- Add `max-w-prose` on challenge body text so lines don’t stretch wide and feel “essay-like.”

### D. Solutions (`SolutionGrid.tsx`)

- Cap bullets at **3 per column** in content files.
- Increase bullet size slightly (`text-base`) when fewer bullets.
- Optional: add one **outcome line** under each column title (8 words max) — requires extending `IndustrySolution` type with optional `outcome?: string` if you implement layout change.

### E. CTA (`IndustryCta.tsx`)

- Short body: reduce `mb-12` to `mb-8`, tighten `max-w-xl`.
- Optional: split CTA into **headline + one line + buttons** (drop paragraph when under 25 words).

### F. Home industry cards (`home-content.ts` + `IndustriesSection.tsx`)

- Card `description`: max **20 words**; move detail to industry page.
- `examples` line: max **8 words**.

### G. Optical-first home hero (optional, only if asked)

- Do not rewrite entire home hero unless requested; if you do, keep under 35 words in subcopy.

**Implementation rule:** Any layout change must stay consistent across all three industry pages unless explicitly optical-only. Prefer shared `_shared` components over one-off page forks.

---

## Deliverables (output format)

1. **Rewritten JSON-like blocks** for each `industry-content/*.ts` file (full export ready to paste), preserving imports and icons.
2. **Short changelog** (bullet list): what you cut, which objections you kept, word counts per hero.
3. **Layout diff list:** which `_shared` files to edit and exact Tailwind/class changes (or minimal TSX patches).
4. **Metadata** lines for the three `src/app/industries/*/page.tsx` files (title ≤ 60 chars, description ≤ 155 chars).
5. Flag any claim that needs owner approval before publish.

---

## Before / after quality bar (healthcare hero example)

**Too long (current direction):**

> Independent optical with a real dispensary is where six years of retail and lab experience meet graduate-level business training. Most patients may still come from referrals. Your site should prove trust, make booking easy, and give happy patients something worth sharing…

**Target pattern:**

- **Title:** Your practice is stronger than your website.  
- **Description (≤45 words):** Referrals already send patients. Your site should prove trust, open booking, and match your dispensary. I ran optical retail and the lab for six years. You work with me directly. Research before spend. California and beyond.

---

## Priority order

1. `healthcare.ts` (optical-led) — highest scrutiny  
2. `home-content.ts` + `site.ts` nav blurbs  
3. `retail.ts`  
4. `professional-services.ts`  
5. `AboutPage.tsx` — tighten optical paragraph to ≤60 words  
6. Layout tweaks in `_shared` only if needed for visual balance  

---

## Self-check before you finish

- [ ] No em dashes  
- [ ] Hero descriptions ≤45 words  
- [ ] Each challenge description ≤28 words  
- [ ] Max 3 solution bullets per column  
- [ ] Primary CTA still `/book`  
- [ ] Optical proof is educator-led, not resume spam  
- [ ] No invented case study metrics  
- [ ] `npm run lint` and `npm run brand:check` would pass (TypeScript strict, no `any`)  

---

*End of prompt. Owner: FrameScale / framescale-website repo.*
