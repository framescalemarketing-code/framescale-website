# Copy ledger, all visitor-facing copy (2026-11-26)

Built with the `copy-collab` skill. Four Sonnet readers read every copy-bearing file to the last line. Their full notes (each claim marked HIM, REPO or MINE, with file and line) are in the session scratchpad folder `ledger\`: `A-content.md` (13 content files, 243 claims, 128 flags), `B1-pages-lib.md` (17 page and lib files, 211 claims, 91 flags), `B2-components.md` (30 component files, about 55 inline strings), `C-legal.md` (5 legal pages, about 85 claims). This file is the short version: what needs Jonathan before anything is rewritten. Nothing on the site has been changed by this pass.

**Update 2026-11-26:** the Insights section (drafts, `/insights` routes) was removed at Jonathan's request. Any line below about Insights drafts is history and no longer applies.

Spot checks I ran myself (Grep, same turn): onsight.ts lines 247, 276 and 299 say the figures "were confirmed by the owner"; line 337 carries the owner quote; lines 107 to 118 hold fees of $2,500 to $3,000 going to $3,000 to $5,000; faq.ts:27, faq.ts:87, pricing.ts:38, photos.ts:33 and optical.ts:125 contain the quoted claims. These are confirmed present. Everything else below is the readers' reading and is unchecked.

## Round one answers (Jonathan, 2026-11-26) and what changed

- Owner consent for On-Sight: HIM, "i have the owners consent". "Confirmed by the owner" lines and the quote stay. Pricing ranges stay.
- Ordering app: now "I am building its ordering app". Website: "I built". Home strip drops the 98% (stays on the case study).
- Month to month: HIM, stays. "Number we agreed is the number you pay": cut. One business day reply: cut (replaced with "as soon as I can"). "I read every message myself": HIM, stays.
- "I tell you where I would start" and variants: now "we discuss the best place to start" (contact, book, booking, optical, services, method, faq).
- Terms page services: matched to the four services on /services, "business clients" now "independent optical practices", date set to November 26, 2026. Money terms (refunds, deposits, ownership, processors) untouched.
- Frame board and "I already know the schedule" claim: cut (faq, about). Optical FAQ says "exam schedule" and "its frames". Unplaced photo caption replaced with a plain description.
- Industry answers (recall in weeks, search in months, buying group, optometrist/optician/retail): HIM, "8 is true". Stay.
- Credentials strip: real path, lab, sales floor and store management, then MBA (now in about.ts).
- Chain answer: HIM, "chains do not have that problem". The whole FAQ item ("There is a chain a mile away") is cut because every line of it was my research.- Not answered, still open: schema knowsAbout "paid search and paid social", priceRange "$$", hours in schema, UC Riverside wording, services-page claims, Credentials of other flagged inline strings, legal pages.

## Round two answers (Jonathan, 2026-11-26) and what changed

- Owner worries (HIM): more exams, turning exams into glasses bought, being found, patients coming back year after year, the right nearby patients finding the practice; larger practices running ads worry whether the ads do anything; metrics and analytics. The old "so a patient finds what they came looking for" clause is cut. The Sales Floor card now speaks to exam-to-glasses. A full owner-worries section is drafted in chat, not yet on the site.
- Works out the real problem before recommending: HIM, stays.
- Website either built into the site or linked to the practice's own tool: HIM, nothing on the site claims one or the other yet.
- Account ownership depends on what the owner wants: HIM. FAQ and home note now say it is settled before work starts and written in the proposal. Services page lead no longer says "what you own".
- Does all work himself, can set up and run paid ads: HIM.
- Calls can be booked hours: contact hours line now "Calls can be booked Monday to Friday, 9 to 5 Pacific."
- Schema priceRange "$$": removed.
- FrameScale Inc. is the legal name. Terms: payments, refunds, deposits and ownership now point to the written proposal; "payment processors" removed. All five legal pages say "FrameScale Inc." where they said we, us or our. Iubenda owner-facing wording replaced. California notice no longer lists "company" and names phone and calendar bookings. Accessibility: contrast and confirmation-field claims softened. Dates on California and Accessibility set to November 26, 2026.
- Form errors: "Failed to fetch" and "Payload too large." replaced with plain sentences. FAQ default title is "Common Questions". CtaBand label comes from `ctaLabels`.

## What the site can say today (HIM or REPO)

HIM: full service lab and heavy machinery repair; sales floor; store management; MBA in marketing; asking customers what they need beats pushing the top item; monthly report and 90-day review; first call half an hour and free; no published prices; remote, independent optical practices, United States; marketing is misunderstood; On-Sight work (website, ordering app, analytics, pricing, marketing).
REPO: phone, email, hours (hours are hard-coded in contact.ts:23, not in site.ts), URLs, GA4 figures in onsight.ts.

## Needs Jonathan (every MINE claim that is live, grouped)

### A. Facts that may be untrue or that he rejected
1. On-Sight owner consent. The case study says three times the review and pricing figures were "confirmed by the owner", and shows the owner's quote, while the file's own comments say consent is still open. (onsight.ts:247, 276, 299, 337)
2. On-Sight pricing numbers. The file holds $2,500 to $3,000 rising to $3,000 to $5,000 (about 40 accounts, "at least +20%"), with a comment saying you gave these on 2026-11-26 and that "10 to 15%" and "$100,000+" were dropped. Earlier you gave 10 to 15% and over $100,000 a year. Which is right? (onsight.ts:104 to 120)
3. "I built the website and ordering app" (Home strip, About link) against the case study saying the app is "still in development". (onsight.ts:170, 223, 372, 380)
4. Home strip "organic visits rose 98%" sits beside "I built the website" with no base numbers. (onsight.ts:370 to 374)
5. Insurance: faq.ts:27 says "I already know the schedule, the frame board and how vision insurance works". You said you do know insurance, so that part may be fine, but "the frame board" and "the schedule" are not yours yet. Also about.ts:65 and optical.ts:125 (frame board).
6. Chain answer: "chains have trouble staffing the exam itself" (optical.ts:129 to 134). You managed LensCrafters, so you can say if this is true.
7. Photos captions, unplaced: "A frame board is inventory..." and "The product I started out making" (photos.ts:33, 38).

### B. Business terms nobody confirmed
8. "Ongoing work is month to month, and you can stop" (faq.ts:87).
9. "The number we agreed is the number you pay" (pricing.ts:36 to 39).
10. "I reply within one business day" and "I read every message myself" (contact page meta and body, site.ts:66 "you work with me directly").
11. "I tell you where I would start" repeats on 5 pages plus content files.
12. Terms page (terms/page.tsx): "Google Business Profile support" (line 21, dropped service), paid social and email marketing (line 22), fees not refundable (94), deposits and late payment (91), deliverable ownership (118), "payment processors" (127), "business clients" (57), no governing law, and a client-naming line that has to match the case study switch (145 to 148).
13. Schema (schema.ts): "Paid search and paid social advertising" in knowsAbout (117), priceRange "$$" against no published prices (63), weekday 9 to 5 with no time zone (70 to 75), UC Riverside and "Marketing Concentration" (95 to 98).

### C. Industry claims written as plain fact (MINE, A reader flagged 162 rows mixing HIM and MINE)
14. FAQ "How long before the schedule starts filling": recall in weeks, search takes months (optical.ts:109 to 114).
15. "Do you work with optometrists, opticians, or optical retail": exam lanes, dispensary without an OD (optical.ts:122 to 127). Trade jargon.
16. Buying group website answer (optical.ts:103 to 107).
17. About chapter 05: "You already know how to run the exam lane and the frame board."
18. Services text: "a website that books appointments", "I work out the real problem before I recommend anything", "what you own", "Most practices need more than one" (services page and Services.tsx).
19. Optical card "The Sales Floor": "so a patient finds what they came looking for" (optical.ts:48 to 50, logged as invented in the skill) and "I know what customers want when they walk in".
20. Credentials strip: "and a lot of years on a sales floor" (Credentials.tsx:16). Wrong order, invented duration, leaves out the lab and stores.
21. FAQ component default title "Questions I Get A Lot" (implies a volume nobody confirmed), ScaleMethod "These hold in every phase", "Four" hard-coded in Services.tsx.
22. "Your patient list" (optical.ts:93 to 95) implies access to patient data.
23. Hidden Insights drafts: closed, removed with the Insights section.

### D. Wrong-place and wrong-shape problems (no question needed, fix after answers)
- About 55 visitor strings sit inline in components, against the repo rule that copy lives in src/content (BookingSection, ContactSection, ScaleMethod, Services, FAQ, CtaBand, Footer, AccessibilityWidget, ContactForm, BookingForm).
- Booking step 1 "I read your message myself" shows on /book, where the visitor writes no message (BookingSection via contact.ts:9).
- ContactForm and BookingForm show raw browser or API errors ("Failed to fetch", "Payload too large.").
- Five CtaBand titles are sentences or questions; not-found "That page is not here" and the Accessibility widget buttons are sentence case; CtaBand "Book A Free Call" is hard-coded; GAEventTracker counts CTA clicks by English substrings, so a rewrite of a button label can silently stop tracking.
- "From The Lab To The Sales Floor" repeats on three pages; "Half an hour on the phone" repeats on about 10 places; optical-marketing page lead "From the lab to the sales floor, I know optical" is the job-title-plus-"I know" pattern and "bring patients back" reads as a recall promise.
- Legal pages: "we" voice and owner-facing wording "your Iubenda-hosted full policy" shown to visitors (privacy:21, cookie-policy:19); "company" listed as collected but no field exists (california-privacy:44); accessibility claims with no test evidence (WCAG 2.2 AA, contrast checked, confirmation fields); inconsistent hard-coded dates.

### E. Clean
No em or en dashes and no "actually" anywhere in src (three readers ran the search). No "second pair", "attach rate", "finished glasses" or "cannot run promotions" text.

## Coverage
Coverage: 67 of 67 files read to the last line by the four readers (13 content, 17 pages and lib, 30 components, 7 legal and route files). Not read: the iubenda-hosted privacy and cookie policy text (external site); src/lib/booking and the API route strings except where named; docs. Unverified: how any page looks rendered; the Cartier and Ray-Ban caption details; whether FAQ answers are under 60 words (counted for one); whether /method#phase-e exists; the onsight.ts review totals against the evidence file.

## Round three and the filler sweep (2026-11-26)
Jonathan's notes: saying what each section includes and who it is for is too obvious and sounds like ChatGPT; some lines are obvious or only sound like a benefit. Three read-only readers swept 51 files (flags: content 85, pages 39, components 7; notes in the session scratchpad).

Applied (no new facts added; every rewrite is shorter than the line it replaced):
- Section announcements and "here is how" leads cut: about, optical, Home, services, method, contact card, onsight.
- Benefit-sounding lines cut or made plain: "without a translator", "pulls its weight", "logo swapped out", "putting this off", "trend as it forms", "no surprise invoices".
- Stock phrase "the best place to start" reduced from 11 uses to 1.
- Legal pages: filler sentences cut, "FrameScale Inc." throughout, unconfirmed contrast claim cut from the accessibility statement.
- Site description and meta descriptions: "keep patients coming back" dropped (retention is not one of the four services).

Held for Jonathan (not changed):
1. Retention: what does he do for it? The chain FAQ and the optical FAQ promise it.
2. Timings in the FAQs ("a few weeks" for research, "a few months" for search, "recall within weeks"): his own numbers?
3. Does he do recall work at all? It is not one of the four services.
4. Optical FAQ "optometrists, opticians or optical retail": does he work with all three, and do the exam-lane and dispensary sentences stand?
5. Buying-group sites "shared template that is hard to change": has he seen them?
6. About: is "I wanted to understand why some businesses grow and others just stay busy" his reason for the MBA? Is his bachelor's in business?
7. Service titles "A Website That Books Appointments" and "Reports You Can Read" and the footer labels (rename touches anchors, schema, footer).
8. Schema `knowsAbout` list and opening hours in the entity graph: which does he stand behind?
9. Photo captions: where the panther sits on the Cartier rimless frame; the "product I started out making" caption (not placed on any page).
10. Hidden Insights drafts, articles 2 and 3: closed, the whole Insights section was removed.
11. onsight.ts lines 206 and 290 (announcement sentences) need a page change to cut; left.

Added by me (each states something beyond his words, so he can veto it):
- "I explain the numbers until you can explain them to someone else" (Home, Numbers In Plain Words)
- "I check that the site says what you offer, who it is for and how to reach you" (Home)
- "I build each site for your practice from the start" (Home, Made For Optical)
- Optical hero lead now opens "I work with independent optical practices on their message, website, search visibility and reports" in place of the definition sentence (his call for answer engines)
- About: "I go through everything with you as we do it" (the "keep it running yourself" claim was cut); chapter 05 now lists message, website and reporting
- "No Surprise Invoices" renamed "Changes Are Agreed First"
- Terms: "I read every message myself" still shows on /contact (confirmed fact, repeated in about five places in content files)

## Round four: his answers to the 11 held items (2026-11-26)
HIM (now confirmed): retention means better workflows and follow-up systems, proper communication and consistency. He does not do recall himself; he helps work out the best way for staff to implement it. He works with, and has worked in, all three (optometrists, opticians, optical retail). Bachelor's is in business. MBA line: he wanted to understand why businesses grow and to learn it well enough to teach it. Timings and hours stay. Photo captions untouched. One "I read every message myself" only (contact step 1, worded "I read your message myself").
Applied: chain FAQ uses his retention words; buying-group FAQ cut (industry claim, not his); timing FAQ says follow-up with patients you already have; all-three FAQ shortened; service titles now Strategy, Websites, Search And AI Visibility, Reports (footer and services meta match); contact helper, success and receipt repeats removed; optical meta restored to "keep patients coming back" (153 chars).
