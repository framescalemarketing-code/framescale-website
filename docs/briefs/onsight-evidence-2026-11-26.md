# On-Sight evidence note (2026-11-26)

Aggregates only. No names, emails, phones or messages. Every figure names its source and date. Anything not confirmed is marked unverified. Feeds `src/content/onsight.ts` (each figure there carries the same `source` and `asOf`).

## 1. On-Sight website traffic (GA4, property 506679676, read 2026-11-26)

GA4 returns data from July 2026 only. There is no earlier baseline.

| Month | Sessions | Organic Search | Direct | Referral | Organic Social |
|---|---|---|---|---|---|
| 2026-07 | 265 | 47 | 187 | 19 | 7 |
| 2026-08 | 256 | 74 | 149 | 26 | 3 |
| 2026-09 | 276 | 88 | 145 | 32 | 6 |
| 2026-10 | 254 | 93 | 115 | 23 | 3 |
| 2026-11 (to the 25th, partial) | 257 | 90 | 133 | 18 | 7 |

- Organic Search sessions, July to October: 47 to 93, an increase of 98% (rounded). Use the full months only.
- Organic Search share of sessions: 17.7% in July, 36.6% in October.
- Total sessions held between 254 and 276 a month.
- November is partial and is not used in any percentage.

## 2. Events (GA4, 2026-07 to 2026-11-25)

Form and lead counts are under 5 a month, and several events only began around September, so none supports a percentage claim. Groups under 5 are shown as "<5".

| Event | Sep | Oct | Nov (partial) |
|---|---|---|---|
| contact_form_submit | <5 | <5 | <5 |
| generate_lead | <5 | <5 | <5 |
| onsite_inquiry_submit | <5 | <5 | <5 |
| program_register_submit | <5 | 7 | <5 |
| showroom_booking_click | 20 | 16 | 16 |
| directions_click | 12 | 9 | 6 |
| call_click | <5 | <5 | <5 |

`program_register_start` (12, 38, 46, 49, 53 for Jul to Nov) counts end users starting a program registration. It does not count companies asking for a program, so it is not used for "inbound corporate programs".

## 3. Walk-ins (source: osso-website `docs/showroom-scoreboard.md`, tally started 2026-09-15)

Total counted since the tally began: 8. Other weeks are blank, meaning nobody counted. The breakdown by reason is shown to Jonathan in chat only: every reason is a group under 5, so it is not stored here.

No baseline exists, so no percentage. The claim stays in Jonathan's words: more walk-in customers.

## 4. Reviews

- Google reviews at the showroom: 27 on 2026-10-20 (osso-website `marketing/review-cards/review-asks-and-replies.md`); "under 25" in `docs/marketing-plan.md` of 2026-09-16.
- Jonathan states +8 Google and +2 Yelp reviews "in the past few months". No dated before and after totals exist for Yelp, and none after 2026-10-20 for Google. No percentage is computed. Unverified.

## 5. Search Console and Business Profile (source: osso-website `docs/search-performance.md`)

Snapshots from 2026-08-25 and 2026-09-15 (clicks 158 over 47 days, then 107 over 28 days). They show shape, not growth, and are not used for percentages.

## 6. What Jonathan built (git history, read 2026-11-26)

- osso-website: 758 of 776 commits from the repo's first commit on 2026-05-13 to 2026-11-11.
- osso-app (ordering and operations dashboard): 550 of 557 commits from 2026-05-09 to 2026-11-24 come from two FrameScale accounts; 7 are Dependabot. 781 source files, 171 migrations, 486 test files. Whether the second account is also Jonathan is unconfirmed.
- Not used on any page: commit counts.

## 7. Contact form counts (Supabase)

Not run. The read-only Supabase connection needs Jonathan's sign-in through `/mcp`. When it connects: confirm the project is the osso-website one, then aggregate SQL only (counts by month, request type and heard-about, groups under 5 shown as "<5", no row selected).

## 8. Pricing result (Jonathan's own statement, 2026-11-26)

New pricing structure with On-Sight: about 10 to 15% more revenue per account depending on the structure each company chose, over $100,000 a year across existing accounts. No document in either repo records this (osso-website `docs/pricing-normalization.md` is a v0.1 proposal dated 2026-09-16). Unverified, used as he gave it, behind its own switch, and cleared with On-Sight's owner before any push.

Coverage: 5 of 5 source docs read to the last line (showroom-scoreboard, search-performance, the two review notes, GA4 reports); not read: Supabase (not connected), Yelp (site not on the allowed list); unverified: Section 4 review gains, Section 8 pricing figures, second commit account.
