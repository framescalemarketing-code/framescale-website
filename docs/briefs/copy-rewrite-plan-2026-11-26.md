# Site-wide copy and heading rewrite: plan and brief

Size: normal      Lane(s): 1 for copy, 2 for moving inline copy into `src/content`
Status: draft, nothing built. No site file has changed.
Note 2026-11-26: the Insights section was later removed at Jonathan's request, so every Insights line in this file is history.
Asked by Jonathan on 2026-11-26: "go ahead and look through all our skills grab the ones most useful and look at the copy an dh eahding of the website and then make a plan to rewrite it all better"

Skills used for the read: copy-critique (scoring format), quality-frameworks with its anti-slop reference, marketing-copy, humanizer, copywriting. Named for the build: headline-formulas, brand-copy, conversion-copy, ux-copy, better-writing. A mechanical scan (`copyscan2.mjs`, scratchpad) read 73 files in `src/content`, `src/app`, `src/components` and `src/lib/site.ts`.

## 1. Goal
- Who it is for: an independent optical practice owner who lands on the site and has not met Jonathan.
- What they can do afterwards: say in one breath what Jonathan does, what they get, and what to do next, from any page.
- Business result: more booked first calls. Assumed: A1.

## What the read found (plain words)
1. **The word-level problems are already gone.** The scan found zero dashes, zero "not X but Y", zero banned AI words in 73 files. The remaining problems are about structure, so a synonym pass would change nothing.
2. **The same promises repeat on almost every page.** "Half an hour on the phone" appears 11 times in 10 files. "I will tell you where I would start" or "if I cannot help, I will say so" appears 11 times in 7 files. The monthly report and 90-day review appear 13 times in 6 files. A reader who visits three pages meets each line three times, and it starts to sound like a template.
3. **The Home hero lead lists jobs and promises no result.** "I handle the strategy, the website, the search work and the reporting" tells a reader what Jonathan does, not what changes for them.
4. **Fragment lists break the house rule that every line has a subject and a verb.** `contactSteps` (renders on both /book and /contact) and the five points in `workingWithMe` on /about.
5. **Home repeats the "You ..." opening.** Three of the four differentiator titles start with "You", and the paragraph-opening audit in anti-slop flags that rhythm.
6. **Six closing bands say the same thing.** Each page ends with a different version of "half an hour, I will tell you where I would start".
7. **The /optical-marketing lead is one very long sentence.**
8. **Some copy sits inside TSX files**, against the AGENTS.md rule that copy lives in `src/content`. Page leads, CtaBand text, section titles, the 404 text and the footer line.
9. **The 404 heading "That page is not here" is sentence case**, and the rule is Title Case.
10. **Home "What Working With Me Looks Like" overlaps About "What You Get" and the Method page.** Three places describe how the work goes.

## What is strong and stays (do not rewrite)
- The four `opticalDifferences` blocks (insurance, exam schedule, frame board, recall). They are first-hand and specific, the best copy on the site.
- The nine optical FAQs. Each is 60 words or fewer and feeds the FAQPage JSON-LD. The "REVIEW BEFORE LAUNCH" comment stays.
- The About chapters (lab, sales floor, stores, school, both halves).
- The SCALE phase paragraphs from `cc35dbc`.
- The On-Sight case study and its figures table. It is third person and formal on purpose. This plan does not touch it.
- Home H1 "Marketing For Independent Optical Practices". Jonathan chose it word for word.
- The services anchors `#strategy`, `#websites`, `#local-seo`, `#analytics`.

## 2. Scores (copy-critique rubric)
These are my read, not a tool measurement. The scan is the only machine-run part. Scale 1 to 10, AI-Tell 0 to 10 with lower better. Threshold from quality-frameworks: AI-Tell 3 or higher, or Overall under 7, means revise. Target for every rewritten page: AI-Tell 2 or lower and Overall 7 or higher.

| Page | Clarity | Specific | Voice | AI-Tell | Persuasion | Action | Overall | Verdict |
|---|---|---|---|---|---|---|---|---|
| Home | 7 | 6 | 7 | 3 | 5 | 7 | 6 | revise |
| Optical | 6 | 9 | 8 | 2 | 7 | 7 | 7 | fix the lead only |
| About | 8 | 8 | 8 | 3 | 6 | 6 | 7 | revise one block |
| Services | 7 | 6 | 6 | 3 | 5 | 6 | 6 | revise |
| Method | 8 | 8 | 8 | 2 | 6 | 6 | 7 | CTA band only |
| Pricing and FAQs | 7 | 7 | 7 | 2 | 6 | 7 | 7 | light |
| Book and Contact | 7 | 6 | 5 | 5 | 5 | 6 | 5 | rewrite |
| Case study | 8 | 9 | 7 | 2 | 6 | 7 | 7 | leave |

Headings: the 4Us were built for ads and headlines. "Urgent" cannot be scored honestly on a consulting site, and fake urgency is banned, so the plan applies the other three. Each H2 needs Useful, Specific and Unique at 2 or better, or it is a plain label and should say what the section is. Home H1 scores Useful 2, Specific 2 (names the audience), Unique 1. That is acceptable because the H1 is a fixed choice and the first screen carries the rest.

## 3. Line-level issues and concrete fixes
Every fix is a DRAFT. Jonathan edits it into his own voice, and no claim goes in that is not in the facts list in `copy-pass-2026-11-26.md` section 4.

| # | Where | Line now | Problem | Draft fix | Severity |
|---|---|---|---|---|---|
| 1 | home.ts hero lead | "I handle the strategy, the website, the search work and the reporting for independent optical practices, so you can see which marketing brings in appointments. You work with me directly, from the first call to the monthly report." | Task list, no result, two ideas in a row | "I'm {fullName}, and I work with independent optical practices. Each month you get a plain report that shows which of your marketing brought in appointments." (names the result only, matches Q4 answer A) | high |
| 2 | home.ts marketingScope lead | "Marketing covers more than posting online. Posting is one small part of a list that is longer and more useful." | Soft contrast and a vague "more useful" | "Many owners hear the word marketing and think of social posts. Posting is one small part. Five other parts sit around it." (the five `marketingParts` are customer, compare, website, findability, numbers, so posting is not one of them) | medium |
| 3 | home.ts differentiator titles | "You Work With Me", "You See The Homework First", "You Will Understand Your Numbers" | Three of four open with "You" | "Direct Access To Me", "Homework Before Spending", "Made For Optical", "Numbers In Plain Words" (none claims more than the facts list, none echoes the Services title "Reports You Can Read") | medium |
| 4 | home.ts aboutStrip | "What Working With Me Looks Like" | Third place that says how the work goes | Retitle "A Short Version Of My Background" with two lines and the "Read My Story" link, or cut it | medium |
| 5 | contact.ts contactSteps | "We talk for half an hour." and its three fragment siblings | Fragments, no subject and verb, renders on two pages | "You pick a time and tell me what is going on. We talk for half an hour while I ask about your practice. Then I tell you where I would start." (/book and /contact own the first-call promise) | high |
| 5b | contact.ts contactSection.lead | "Tell me what's going on. Half an hour is enough to work out where to start." | Repeats the steps beside it | "Tell me what is going on and we will work out where to start." | medium |
| 6 | about.ts workingWithMe points | "A consultant who has worked a lab bench and a sales floor." and four more | Noun fragments | Four sentences: "I have worked a lab bench and a sales floor." / "Business and marketing come up in the same conversation." / "You reach me directly by phone or email." / "Everything we build sits in your own accounts, and I explain the work as I do it." (the last two facts already live in the Home personal note). The monthly report and "if I am not the right fit" stay with their owners in section 4. | high |
| 7 | optical.ts opticalHero lead | One sentence ending "so you will not spend the first month explaining your week to me." | One very long sentence | Cut at the comma before "so you will not". Two sentences of 25 words or fewer each | medium |
| 8 | optical page CtaBand | "Half an hour on the phone. I will tell you where I would start, and whether I am the right person at all." | Repeated promise | "Tell me whether insurance, the exam schedule, the frame board or recall is where you are stuck." | medium |
| 9 | services page CtaBand | "Not Sure Which One You Need?" with "That is what the first call is for. Tell me what is going on and I will tell you where I would start." | Repeated promise | "Tell me which of the four sounds closest to your problem." | medium |
| 10 | about page CtaBand | "Half an hour on the phone, just the two of us." | Fragment, repeated promise | "Tell me what you are working on and I will say where my background applies." | medium |
| 11 | method page CtaBand | "Tell me about the practice on a free call. I will tell you which phase I would start in, and what that would involve." | Repeated promise | "Tell me which phase your practice is in right now." | low |
| 12 | book page meta description | "Half an hour on the phone. Pick a time, tell me what's going on, and leave knowing what I'd do first." | Fragment opener, repeated promise | "Pick a time and tell me what is going on. You leave the call knowing where I would start." (no "half an hour", /book body owns it) | low |
| 13 | not-found.tsx heading | "That page is not here" | Sentence case | "That Page Is Not Here" | low |
| 14 | pricing.ts point title | "No Surprise Invoices" | Reads as a negation list | Leave unless Jonathan prefers "Every Invoice Matches The Quote" | low |

## 4. One owner per repeated fact
| Fact | Owning page | Everywhere else |
|---|---|---|
| The first call (half an hour, free) | /book (booking.ts) | Home hero and closing keep the button and one clause. Pricing and the FAQ keep one plain answer each, because FAQ text feeds JSON-LD. No other page repeats it. |
| "If I cannot help, I will say so" | Home closing | One FAQ answer. Removed from CtaBands and the Optical lead. |
| Monthly report and 90-day review | /method (Analytics phase) | One FAQ, one line in Home personal note, one line in Services "Reports You Can Read". Removed from About, CtaBands and the Contact steps. |
| Marketing means more than posting | Home marketingScope | Not repeated. |
| Lab, sales floor, store management, MBA | /about | One line each on Home and Optical credentials. |

## 5. Acceptance checks
Each line is when/then, with the check that proves it. The scripts live in the scratchpad (`inspect\` and `pw\`) and are re-run, not rewritten.

| ID | When ... then ... | Proved by |
|---|---|---|
| A-1 | When `npm run check` runs, then lint, brand guard and build exit 0 and the route list is unchanged. | `npm run check` output |
| A-2 | When every route is fetched, then each has one h1, Home h1 is exactly "Marketing For Independent Optical Practices", no h1 over 8 words, every h2 is 10 words or fewer and in Title Case (404 heading included). | `pagecheck.mjs` heading list |
| A-3 | When src is scanned, then zero U+2014 and U+2013, no not-X-but-Y or banned words, no San Diego or Google Business Profile outside `src/app/terms/page.tsx`, CTAs in Title Case. | `copyscan2.mjs` plus a bad-file self-test |
| A-4 | When src is searched case-insensitively for `half( an)? hour`, then hits are only in `booking.ts`, `contact.ts`, `faq.ts`, `pricing.ts`, the frozen `onsight.ts` and `insights/[slug]/page.tsx` (hidden drafts, out of scope). When searched for `I will say so\|where I would start\|I am not the right\|right person\|If I cannot help`, hits are only in `home.ts`, `faq.ts`, `optical.ts` (FAQ answer), `booking.ts`, `contact.ts`, `app/book/page.tsx` (its meta description, added 2026-11-26 because /book owns the first-call promise) and `insights/[slug]/page.tsx` (hidden drafts, out of scope). | `repeatcheck.mjs` (new): lists every hit by file against the allowed list, tested on a file that should fail; before and after output quoted |
| A-5 | When `contactSteps` and `workingWithMe` are read, then every line is a full sentence with a subject and a verb. | listing of every sentence of 4 words or fewer in copy, each remaining one named and agreed (new script `shortlines.mjs`) |
| A-6 | When the Home hero lead is read, then it is 45 words or fewer, names a result the owner gets, and has no list of jobs. | word count plus read |
| A-7 | When hero and lead strings are measured, then no sentence is over 30 words. | `shortlines.mjs` long-sentence mode |
| A-8 | When the diff is grepped for digits, then every number is 90, 60, "half an hour", a row of `onsight.ts`, or a number already live, and every claim traces to the facts list. | `git diff -U0` digit grep, quoted |
| A-9 | When each FAQ list is read, then answers are 60 words or fewer and the FAQPage JSON-LD text equals the visible text. | `pagecheck.mjs` FAQ check |
| A-10 | When the build route list and the services page are read, then anchors `#strategy #websites #local-seo #analytics` exist and `next.config.ts` redirects are untouched. | route list, grep of ids, `git diff --stat` |
| A-11 | When `git diff --stat` is read, then `src/content/onsight.ts` and the two switches are unchanged. (The Insights part of this line is void: Insights was removed.) | `git diff --stat`, grep |
| A-12 | When titles and descriptions are read, then titles are 60 characters or fewer, descriptions 50 to 155, unique, no LocalBusiness. | `pagecheck.mjs` |
| A-13 | When the rewritten pages are opened at 375 and 1440, then no horizontal scroll, one h1, and a call to action in the first screen. | `scrollshot.mjs` screenshots |
| A-14 | When a fresh Sonnet checker scores each rewritten page with the copy-critique rubric, then AI-Tell is 2 or lower and Overall is 7 or higher. | checker YAML quoted, after one scored example |
| A-15 | When batch 3 is built, then the pages and sections touched hold no copy string of 25 characters or more inline. | grep over `page.tsx` and `components/sections`, remaining hits listed |
| A-16 | Owner-run: after each batch Jonathan reads the new copy and says it sounds like him. | his reply or edits quoted |

## 6. Edge and failure cases
- Empty or hidden: with `onSightApproved` or `bookingLive` false, no rewritten line may name On-Sight or send people to /book. Both stay as they are. Proved by `toggle.mjs`.
- Done twice: the batches are independent, so applying one twice changes nothing.
- Outside service: no form, email or booking logic changes. The `contactReceipt` email is read only and changes only if it fails the scan (A-3).
- FAQ drift: a changed answer that no longer matches the visible text breaks JSON-LD. A-9 catches it.
- Phone: A-13.

## 7. Data changes
None.

## 8. Files likely touched (scope list)
- `src/content/home.ts`, `optical.ts`, `about.ts`, `services.ts`, `faq.ts`, `pricing.ts`, `contact.ts`, `booking.ts`: the rewrites.
- `src/content/` new section keys for page leads and CtaBand text moved out of TSX (batch 3).
- `src/app/page.tsx`, `optical-marketing/page.tsx`, `services/page.tsx`, `about/page.tsx`, `method/page.tsx`, `book/page.tsx`, `contact/page.tsx`, `not-found.tsx`: meta text, CtaBand text, 404 heading.
- `src/components/sections/Services.tsx`, `MethodPreview.tsx`, `Credentials.tsx`, `FAQ.tsx`, `ContactSection.tsx`, `BookingSection.tsx`, `CtaBand.tsx`, `layout/Footer.tsx`: only where copy moves to content.
- `src/lib/site.ts`: only if the description or tagline changes (not planned).
- Not touched: `onsight.ts` (it holds "half an hour" and stays frozen), `schema.ts` logic, `next.config.ts`, `sitemap-routes.ts`, API routes, legal pages, `Brand.tsx`.

## 9. Rules touched
- app-fundamentals: not applicable. This is a marketing site with no customer data store.
- system-design-fundamentals: none. No webhook, payment, booking, job or upload logic changes.
- secure-web-baseline: none of the 22 controls change. `contactReceipt` is the only email copy and is not planned to change.
- AGENTS.md copy rules: no dashes, no positive/negative flip, Title Case CTAs and headings, copy in `src/content`.

## 10. Out of scope
- The case study copy and figures, legal pages, design, layout, fonts and colors, forms and booking logic, the `contactReceipt` email, schema structure, new pages or retired routes.
- New proof. Nothing new is claimed. Where a line needs a claim that is not on the facts list, it is flagged `[NEED: ...]` and left out.

## 11. Assumptions (Jonathan can veto any)
- A1: The business result is more booked first calls on /book.
- A2: Copy moves out of TSX into `src/content` in batch 3, as its own unit with a fresh checker (Lane 2), because AGENTS.md requires it.
- A3: The 4Us are applied without "Urgent", since fake urgency is banned.
- A4: Every draft fix above is a starting point. Jonathan's edits win over mine.
- A5: Facts allowed in copy stay exactly those in `copy-pass-2026-11-26.md` section 4.

## 12. Risks and rollback
- Risk: new copy reads like AI again. Mitigation: before/after draft doc first (Q1), checker rescoring (A-14), and Jonathan's own read (A-16).
- Risk: a repeated line removed from a page that needed it. Mitigation: the owner table in section 4, and the screenshot read in A-13.
- Rollback: each batch is its own commit. Revert one commit to undo one batch. Nothing is pushed without Jonathan's yes.
- Past failures: the "too ChatGPT like" rejection of the contact steps fragments (see memory `copy-avoid-llm-cadence`).

## 13. What Jonathan can click on the preview
1. Open the preview after batch 1 and go to /, /book and /contact.
2. Read the Home hero, the Home headings and the three contact steps aloud.
3. You should see a hero that names what you get, and no step written as a fragment.

## Units (one card each, check written first)
| Unit | Check | Scope (files) | Lane |
|---|---|---|---|
| U0 Baseline: save the before outputs (scan, heading list, repeat counts) | outputs exist and match this brief's numbers | scratchpad only | 1 |
| U1 Draft doc: before/after for every line in section 3 and all other changed lines | Jonathan reads it and marks edits | `docs/briefs/` only | 1 |
| U2 Batch 1: Home, Book, Contact, contact steps | A-1 to A-9, A-12, A-13 on those routes | home.ts, contact.ts, booking.ts, 3 page files | 1 |
| U3 Batch 2: Optical, Services, Pricing, FAQs | same checks on those routes, plus A-9 | optical.ts, services.ts, pricing.ts, faq.ts, page files | 1 |
| U4 Batch 3: About, Method, 404, metadata, CtaBand text | same checks, plus A-10 and A-11 | about.ts, page files, not-found.tsx | 1 |
| U5 Move inline copy into `src/content` | A-15, A-1, `git diff --stat` inside section 8 | page and section TSX, `src/content` | 2 |
| U6 Verify: full A-1 to A-16, fresh Sonnet checker, local commit per batch | quoted evidence per line | none new | 2 |

## Business questions (recommended answer first, "yes" accepts all four)
1. **Draft first?** A. Write every new line as before and after in a doc, you mark edits, then I apply them (Recommended). B. Edit the files and show you the preview.
2. **How to ship?** A. Three batches, each reviewed by you, nothing pushed until your yes (Recommended). B. All at once.
3. **Repeated promises?** A. Each fact lives on one owning page, other pages link or stay silent (Recommended). B. Keep the repeats.
4. **What should the Home hero promise?** A. The result you get: a monthly report that shows which marketing brought in appointments (Recommended). B. Lead with your lab and sales floor background. C. Keep the job list.

## Read-back (sent to Jonathan, at most 10 lines)
1. What changes, and for whom: owners reading Home, Book, Contact, Optical, Services, About and Method. The hero names a result, the fragment lists become sentences, six repeated closing bands each say something different, 404 and metadata are cleaned up.
2. What stays the same: the four insurance, schedule, frame board and recall blocks, the FAQs, the About chapters, the SCALE paragraphs, the case study and its figures, your Home headline, anchors and URLs.
3. Assumed: the goal is more booked calls (A1), copy moves into the content files in the last batch (A2), 4Us without urgency (A3), my drafts are starting points (A4), no new claims (A5).
4. Tested by: lint, brand guard and build, a dash and cliche scan, repeat counts, heading list, FAQ and schema match, 375 and 1440 screenshots, a fresh scorer, and your read after each batch.
5. Size: normal. Three batches, each its own commit, nothing pushed without your yes.
OK to build?
