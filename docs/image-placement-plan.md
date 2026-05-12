# Image placement plan (FrameScale website)

This maps **where** photography or illustration will have the most impact, **how** to treat it (full-bleed background vs contained frame), and **what** to put in each spot so it matches positioning: human, research-led, teaching, SMB operators, optical-first healthcare, retail, and consulting-led professional services.

**Repo reality today:** Pages use gradients and blur orbs only. `public/` has no marketing photos yet. `next/image` is not used on marketing pages yet (only a small compliance snippet elsewhere). Implement with `next/image` when you add assets, with explicit `sizes` and meaningful `alt` text.

---

## Treatment types

| Treatment | When to use | Implementation sketch |
|-----------|-------------|------------------------|
| **Full-bleed background** | Hero or section mood, emotional anchor | `absolute inset-0` image, `object-cover`, dark or light **scrim** gradient overlay so headline stays WCAG-readable |
| **Wide band (short height)** | Break up long scroll, reinforce “process / scale” without competing with copy | Full width, `h-48` to `h-72`, optional parallax at low amplitude |
| **Contained rectangle (16:9 or 4:3)** | Proof, industry context, “this is who we help” | Rounded-2xl to match cards, `overflow-hidden`, sits beside or above text in a grid |
| **Square or near-square** | Industry cards, team, icons of real places | `aspect-square` or `5:4`, good for three-up grids |

**Art direction (global):** Natural light, real businesses, no cliché “blue handshake” stock on every page. Prefer **faces optional** (hands on keyboard, wall of notes, storefront, frame boards, whiteboard strategy) so you can refresh without a full reshoot. Keep teal **#17788E / #264653** in mind for grading or overlay edges so photos feel on-brand next to existing UI.

---

## Priority (highest impact first)

1. **Home hero** and **Home “Why / difference” split**  
2. **Industry heroes** (healthcare, retail, professional services)  
3. **About hero** (trust / human)  
4. **Contact hero** (approachable, low friction)  
5. **Process** (one supporting band or per-phase small thumbs, optional)  
6. **Home industry cards** (optional thumbnails)  
7. **Legal / policy heroes** (optional, minimal; do not distract from compliance reading)

---

## Page-by-page

### Home (`HomePage.tsx`)

| Location | Treatment | What to show | Notes |
|----------|-----------|--------------|--------|
| **Hero** | Full-bleed **or** split layout (copy left, image right on `lg+`) | Calm workspace: research printouts, laptop with analytics, whiteboard with journey sketch. **Not** a crowded agency bullpen. | If full-bleed: heavy bottom/top scrim so white headline stays readable. If split: **4:5 or 3:4** portrait crop on the right. |
| **Industry grid (3 cards)** | Optional **16:9** thumbnail strip **inside** each card above the icon | **Healthcare:** optical floor or frame wall (no identifiable patients). **Retail:** aisle or checkout with brand feel. **Professional:** modern consult room or workshop table. | Keeps cards scannable; use consistent crop height per card. |
| **“Less noise…” / difference (two columns)** | **Contained** image in **left** column (swap order on mobile: image below headline) | You **or** client-side collaborative moment: two people at screen, annotated strategy doc. Supports “clarity while we build.” | Right column stays the gradient value card today; image balances the layout. |
| **Capabilities / metrics block** | Skip large photos; optional **very subtle** paper texture PNG at 5% opacity | Abstract only if anything | Avoid competing with the four metric cards. |
| **Bottom CTA (teal gradient)** | Optional **full-bleed** city or office **heavily blurred** + extra gradient | Soft bokeh only | Must not reduce button contrast. |

---

### Healthcare industry (`HealthcarePage.tsx`)

| Location | Treatment | What to show | Notes |
|----------|-----------|--------------|--------|
| **Hero** | Full-bleed background with strong left scrim (text stays on white read zone) or split | **Optical-first:** frame boards, dispensing table, lens demo, independent shop exterior. Secondary cues for dental/medical OK as alternate crops for A/B later. | No PHI. No identifiable patients without releases. |
| **Specialties (3 tiles)** | Optional small **square** image per tile above icon | Optical retail close-up; dental reception (generic); medical corridor abstract | Reinforces vertical without long copy. |
| **Challenges or solutions section** | Optional **wide short band** between sections | Patient journey as **diagram photo** (sticky notes + map), not literal waiting room | Bridges “research” story. |
| **Footer CTA** | Same as home CTA pattern; can reuse asset with different crop | Optical mood again | Consistency with healthcare journey. |

---

### Retail & e-commerce (`RetailPage.tsx`)

| Location | Treatment | What to show | Notes |
|----------|-----------|--------------|--------|
| **Hero** | Full-bleed or split | Store interior with depth, packaged product on shelf, or packing/shipping bench (DTC). | Warm, inventory-adjacent, not generic “shopping cart icon” stock. |
| **Verticals (3 tiles)** | Optional **square** per tile | Storefront / phone + shopping / unboxed product | Matches existing three-column rhythm. |
| **Mid-page** | Optional **16:9** contained | Omnichannel metaphor: POS + laptop same desk | Supports systems narrative without claiming a specific stack visually. |

---

### Professional services (`ProfessionalServicesPage.tsx`)

| Location | Treatment | What to show | Notes |
|----------|-----------|--------------|--------|
| **Hero** | Full-bleed or split | **Consultant-led:** workshop whiteboard, strategy wall, small team huddle **without** law-library cliché unless you want legal weight. | Calm, premium, not sterile hospital white. |
| **Verticals** | Optional **square** thumbnails | Consulting session; legal **abstract** (courthouse steps generic avoid); CPA desk with monitor | Rotate emphasis to **consulting** first per positioning. |

---

### About (`AboutPage.tsx`)

| Location | Treatment | What to show | Notes |
|----------|-----------|--------------|--------|
| **Hero** | **Contained** portrait or environment below headline **or** split with **5:4** image | Founder at work desk, bookshelf with business texts, or teaching moment at whiteboard. | Only use portrait if you are comfortable; environment-only is fine and stays evergreen. |
| **Story section** | Inline **small** optional | Same shoot, candid | Do not break reading flow; one image max. |
| **Values grid** | **No** photos per card (icons are enough) | — | Keeps page light. |

---

### Process (`ProcessPage.tsx`)

| Location | Treatment | What to show | Notes |
|----------|-----------|--------------|--------|
| **Hero** | Optional **wide band** under title row | Timeline sticky notes, Gantt sketch, calendar + highlighter | Single image reinforces “five phases” without illustrating each step literally. |
| **Between phases 02 and 03** | Optional **full-width short** image | “Strategy wall” moment | Natural break before “Build & tailor strategy.” |
| **Per-step columns** | Usually **skip** (steps are dense) | If anything: **small** icon-style photos 80px | Prefer clarity over decoration. |

---

### Contact (`ContactPage.tsx`)

| Location | Treatment | What to show | Notes |
|----------|-----------|--------------|--------|
| **Hero** | **Split:** form lives lower; hero can be **two column** on `lg` with **4:5** image | Open calendar on monitor, notebook “Agenda,” headset optional | Signals “discovery call” without stock phone operator imagery. |
| **Above form** | Skip | — | Form is the focus. |

---

### Legal & compliance (`privacy`, `terms`, `cookie-policy`, `accessibility`, `california-privacy`)

| Location | Treatment | What to show | Notes |
|----------|-----------|--------------|--------|
| **Hero** | **No** full-bleed photography recommended | Keep gradient + blur or single **abstract** brand pattern at low opacity | Readers are in task mode; imagery should not read as marketing. |

---

### Social / metadata (already code, not `public/`)

| Asset | Recommendation |
|-------|------------------|
| **`src/app/opengraph-image.tsx`** | Consider a **composed** layout later: brand mark + short headline + optional faint background texture. Copy there should match current homepage promise (it still says “drives growth” in one line; align when you refresh art). |
| **`twitter-image.tsx`** | Same story as OG if you maintain both. |

---

## File organization (when you implement)

Suggested paths (no files created yet):

```
public/images/
  home/
    hero-desktop.jpg          # or .webp
    hero-bg-soft.webp         # optional full-bleed only
    why-collaboration.jpg
  industries/
    healthcare-hero.webp
    retail-hero.webp
    professional-hero.webp
    healthcare-optical-thumb.jpg
    ...
  about/
    founder-or-desk.webp
  contact/
    hero-calendar.webp
```

Use **WebP** or **AVIF** for photos; keep a **JPEG** fallback only if needed. Hero sources: aim **1600–2400px** wide for full-bleed; Next `sizes` like `(max-width: 768px) 100vw, 50vw` for split layouts.

---

## What to decide next (with you)

1. **Shoot vs license:** One half-day lifestyle shoot (your office + one client location with permission) often beats ten mismatched stock packs.  
2. **Hero strategy:** Prefer **split** on home and industry pages so text never fights a busy photo; reserve **full-bleed** for optical/retail mood where scrim is easy.  
3. **People in frame:** Environment-only first; add face when you have a release and a consistent crop for About.  
4. **Implementation order:** Home hero + home “why” image first, then three industry heroes, then About, then Contact.

When you are ready to implement in code, add images under `public/images/…`, introduce `next/image` in the relevant sections, and keep **motion** respects: prefer `opacity` on wrappers or `priority` only above the fold on LCP candidate.

---

## Related

- Brand and tone: `docs/positioning-and-icp.md`  
- Components to edit when implementing: `src/components/design-pages/*.tsx`, `src/components/design-pages/industries/*.tsx`
