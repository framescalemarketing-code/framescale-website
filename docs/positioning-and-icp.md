# FrameScale positioning & ideal customer profiles

> **Predates the 2026-08-20 rebuild. Read as history, not as current direction.**
> The site now positions to small business generally. The optical, dental, and
> retail verticals described below were dropped on purpose, and the industry
> pages that served them were retired and are 308-redirected in `next.config.ts`.
> Do not reintroduce vertical targeting from this document. The current
> positioning lives in `src/content/*.ts` and the entity graph in
> `src/lib/schema.ts`.

Internal reference aligned to public site copy (as of this document). Use this when writing case studies, proposals, ads, or future page updates.

---

## Core positioning

**One-liner:** FrameScale is a growth marketing and advisory practice that works **directly with owners**, **teaches while executing**, and uses **deep research** before campaigns so clients can **scale with clarity** and eventually **own their systems**.

**How we work (difference):**

- **Human, direct relationship:** Clients work with the principal directly. That means no chatbot and no rotating cast of junior account managers.
- **Educator mindset:** Explain the “why” in terms that respect your time. Bring rigor when the decision matters. Goal is to **guide and teach** so the business is less dependent over time, not more.
- **Credentials:** Bachelor’s and master’s degrees in **business**, applied to positioning, economics of growth, and how marketing connects to operations.
- **Selective roster:** Only engagements we genuinely want. **Few concurrent clients** (cap communicated on site as a small number) so each gets **depth**, not surface-level reporting.
- **Research before spend:** No campaign work until the market, offer, and customer context are understood.
- **Custom web:** Marketing sites are **built custom** for the business. We do not rent templates on **WordPress** or **Wix**.

**Parity (table stakes we still deliver well):**

- Professional **websites** and landing experiences tied to conversion.
- **SEO**, **Google Business Profile** optimization, **Google Analytics** (and measurement that leadership can actually use).
- **Paid media** on the platforms that fit the client (e.g. Google, Meta), planned and optimized like a serious marketing partner, not vanity spend.

**What we are not:**

- Not a **social media content creator** shop. No “posting for posting’s sake.”
- Not a volume agency model: we are a **marketing specialist and business-minded partner** for a small set of serious operators.

---

## Global ideal customer profile (ICP)

**Demographics / firmographics**

- Typically **30 to 55** years old; owners or senior decision-makers in **small to mid-size** businesses.
- Business has usually been operating **5+ years**. They know how to **run** the business day to day.
- **Not highly tech-savvy**, but aware that **systems and digital presence** are required to grow.

**Psychographics**

- They feel the ceiling: “We’re good at delivery, but **we don’t know how to scale**.”
- Common tension: **people but not systems**, or **systems but not the right people**. Marketing and tech feel fragmented.
- Want **trust**, **clarity**, and **direct access** to someone who can connect strategy to execution without handoffs.

**Jobs to be done**

- Turn scattered marketing into **repeatable acquisition**.
- Build a **credible web presence** that matches how good the business really is.
- Understand **what to measure** and **what to do next** without becoming a full-time marketer themselves.

---

## Industry ICPs & messaging angles

### Healthcare, **primary: optical**

**Who:** Independent optical practices, optical retail with exam lanes, regional groups; secondary: dental and specialty medical where similar local-search and booking dynamics apply.

**Why optical leads:** Deep lived experience in optical. Speak to frame boards, exam scheduling, managed care realities, and local competition without sounding generic.

**Tone:** Personal, human, **highly educated**, and direct when a concept needs unpacking, like a **trusted educator** who respects the owner’s time.

**Angles:** Local patient demand, schedule density, reputation and reviews, compliant measurement, **booking** as the north star. Not “viral content.”

### Retail & e-commerce

**Who:** Physical retail, e-commerce, and hybrid brands selling real products, typically SMB with growth goals and margin pressure.

**Tone:** Same **educator / partner** voice: clear, non-jargony, respectful of operators who live in inventory and payroll.

**Angles:** Acquisition cost, conversion, repeat purchase, tying spend to revenue. Not channel fads.

### Professional services, **primary: consultants**

**Who:** **Management and strategy consultants**, fractional leaders, and advisory firms first; **legal** and **accounting** as adjacent verticals with similar trust-and-pipeline challenges.

**Why consultants lead:** SMB professional buyers who need **authority**, **clear offers**, and **pipeline** without looking like a commodity directory listing.

**Tone:** Credible, calm, precise, still human, not stiff corporate-speak.

**Angles:** Qualified conversations, proof and case structure, **firm-grade** web presence, attribution that respects long sales cycles.

---

## Voice & copy guidelines

- Prefer **“you / your business”** on marketing pages; use **first person** where authenticity helps (About, contact follow-up framing).
- **Teach in place:** short explanations that build confidence; avoid lecturing.
- Avoid implying **unlimited capacity** or **large account teams**.
- Do not promise specific ROAS or rankings; emphasize **process**, **research**, and **fit**.
- Avoid em dash punctuation in public copy. Prefer separate sentences or commas. Skip decorative parentheses unless legally required.

---

## Open items to refine (next iterations)

1. **Principal name / photo:** Site uses “FrameScale” and “we” in places; adding a named founder block on About (optional) would strengthen “work with me directly” without sounding contradictory.
2. **Exact client cap:** “No more than three clients” is stated in positioning. Confirm it remains accurate before hard-coding everywhere. Consider soft language like “selective roster” or “by invitation” if the number can flex slightly.
3. **Degrees:** Copy references bachelor’s and master’s in business. Add **institution optional** only if you choose to disclose for trust.
4. **Service menu detail:** Which CRMs, ESPs, and ad platforms you **default** to vs. “we integrate with your stack” is worth a one-pager for sales.
5. **Optical proof:** Case bullets, logos, or anonymized outcomes (schedule fill, review growth) when available are the strongest credibility lever for the optical ICP.
6. **Consulting sub-niches:** Industry pages can later split “strategy consultants” vs. “IT / HR consulting” if you want even tighter SEO and landing pages.
7. **Legal / compliance:** Any bar association or industry-specific ad rules for legal clients. Review with counsel before publishing channel-specific claims.
8. **Social proof:** Testimonials and LinkedIn recommendations aligned to **teaching + depth** positioning.

---

## Related files

- Global blurbs: `src/lib/site.ts`
- Page copy: `src/components/design-pages/*.tsx`, `src/components/design-pages/industries/*.tsx`
- SEO titles/descriptions: `src/app/**/page.tsx` (route metadata), `src/app/layout.tsx`
- Photography & layout plan: `docs/image-placement-plan.md`
