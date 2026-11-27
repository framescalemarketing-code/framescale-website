/**
 * The On-Sight Safety Optics case study, its two switches and every number on
 * it. This file imports nothing, so `site.ts`, the schema and the sitemap can
 * all read the switches without a cycle.
 *
 * On-Sight is a client, not an optical practice and not Jonathan's employer.
 * Every number that appears anywhere on the site about On-Sight is a row in
 * `figures` below, with the place it came from and the date it was read. No
 * other number is allowed in this copy. The evidence behind each row is in
 * `docs/briefs/onsight-evidence-2026-11-26.md`.
 */

/**
 * Switch one. When false, nothing on the site mentions On-Sight: the case study
 * route returns 404, the sitemap and footer drop it, and the links, FAQ answer
 * and schema node that point to it disappear. Ships true because Jonathan chose
 * to name his client. Jonathan said in chat on 2026-11-26 that he has the owner's
 * consent, so no push waits on it.
 */
export const onSightApproved = true;

/**
 * Switch two. When false, the page keeps the work and the search figures but
 * drops the review gains, the pricing change and the yearly revenue figure.
 * Those four come from Jonathan's own account. He confirmed on 2026-11-26 that
 * the owner of On-Sight consented, so the revenue lines may go live.
 */
export const onSightFiguresApproved = true;

export const onSightName = "On-Sight Safety Optics";
export const onSightUrl = "https://onsightoptics.com";
export const caseStudyPath = "/case-studies/on-sight-safety-optics";

export type FigureSource = "on-sight-published" | "ga4" | "jonathan" | "author";

export type Figure = {
  value: string;
  label: string;
  source: FigureSource;
  /** ISO date the number was read, or the date Jonathan gave it. */
  asOf: string;
  /** A sentence of context, shown under the number. */
  note?: string;
};

export const sourceLabels: Record<FigureSource, string> = {
  "on-sight-published": "Published by On-Sight",
  ga4: "On-Sight's Google Analytics",
  jonathan: "Confirmed by On-Sight's owner",
  author: "Author's estimate",
};

/** "+98%" to "98%", so a sentence can say "rose 98%" from the same row the stat tile reads. */
const plain = (value: string) => value.replace("+", "");

/**
 * Every number. `source` and `asOf` are required on every row, so a number
 * cannot be added without saying where it came from and when.
 */
export const figures = {
  // On-Sight's own published figures (its home page, read 2026-11-26).
  yearsInBusiness: { value: "9", label: "Years in business", source: "on-sight-published", asOf: "2026-11-26" },
  activePrograms: { value: "40+", label: "Active programs", source: "on-sight-published", asOf: "2026-11-26" },
  endUsers: { value: "6,500+", label: "End users", source: "on-sight-published", asOf: "2026-11-26" },
  serviceRegions: { value: "3", label: "Service regions", source: "on-sight-published", asOf: "2026-11-26" },

  // Google Analytics for the On-Sight website. The data starts in July 2026.
  organicGrowth: {
    value: "+98%",
    label: "Visits from organic search",
    source: "ga4",
    asOf: "2026-11-26",
    note: "From 47 visits in July 2026 to 93 in October 2026.",
  },
  organicBefore: { value: "47", label: "Organic search visits, July 2026", source: "ga4", asOf: "2026-11-26" },
  organicAfter: { value: "93", label: "Organic search visits, October 2026", source: "ga4", asOf: "2026-11-26" },
  totalBefore: { value: "265", label: "Total visits, July 2026", source: "ga4", asOf: "2026-11-26" },
  organicShareBefore: { value: "18%", label: "Organic search share, July 2026", source: "ga4", asOf: "2026-11-26" },
  organicShareAfter: { value: "37%", label: "Organic search share, October 2026", source: "ga4", asOf: "2026-11-26" },
  totalLow: { value: "254", label: "Fewest total visits in a month", source: "ga4", asOf: "2026-11-26" },
  totalHigh: { value: "276", label: "Most total visits in a month", source: "ga4", asOf: "2026-11-26" },

  // Given by Jonathan on 2026-11-26 and confirmed by On-Sight's owner. No
  // document records these, so they sit behind `onSightFiguresApproved`.
  // Review totals now: Google 31, Yelp 6. The earlier totals are the totals now
  // minus the gains he gave (+8 and +2). The percentages follow from those.
  googleBefore: { value: "23", label: "Google reviews, before", source: "jonathan", asOf: "2026-11-26" },
  googleAfter: { value: "31", label: "Google reviews, now", source: "jonathan", asOf: "2026-11-26" },
  yelpBefore: { value: "4", label: "Yelp reviews, before", source: "jonathan", asOf: "2026-11-26" },
  yelpAfter: { value: "6", label: "Yelp reviews, now", source: "jonathan", asOf: "2026-11-26" },
  googleReviews: {
    value: "+35%",
    label: "Google reviews",
    source: "jonathan",
    asOf: "2026-11-26",
    note: "From 23 to 31 reviews in the past few months.",
  },
  yelpReviews: {
    value: "+50%",
    label: "Yelp reviews",
    source: "jonathan",
    asOf: "2026-11-26",
    note: "From 4 to 6 reviews in the past few months.",
  },
  // Pricing, as given by Jonathan on 2026-11-26. The earlier "10 to 15%" and
  // "$100,000+" figures were removed: they did not match these ranges.
  pricingAccounts: { value: "40", label: "Accounts on the revised pricing", source: "jonathan", asOf: "2026-11-26" },
  pricingBefore: { value: "$2,500 to $3,000", label: "Annual fee per account, before", source: "jonathan", asOf: "2026-11-26" },
  pricingAfter: { value: "$3,000 to $5,000", label: "Annual fee per account, now", source: "jonathan", asOf: "2026-11-26" },
  // Calculated from the two ranges above: the lowest fee before ($2,500) against the lowest
  // fee now ($3,000) is +20%. Jonathan decided on 2026-11-26 to state it as "at least". That
  // wording is his call: an account at $3,000 before and $3,000 now would be 0%.
  pricingPercent: {
    value: "At least +20%",
    label: "Increase in annual fee per account",
    source: "jonathan",
    asOf: "2026-11-26",
    note:
      "About 40 accounts, from January 2026. Fees went from about $2,500 to $3,000 to about $3,000 to $5,000 a " +
      "year, so the increase varies by account.",
  },

  // An estimate by Jonathan, not a count. No earlier count exists to check it against.
  inquiryIncrease: {
    value: "1 to 3",
    label: "Added inquiries a month",
    source: "author",
    asOf: "2026-11-26",
  },
} satisfies Record<string, Figure>;

export type FigureId = keyof typeof figures;

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-11-26" to "November 26, 2026", so a reader never sees a machine date. */
export function formatAsOf(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${monthNames[month - 1]} ${day}, ${year}`;
}

/** The shape the StatRow component takes. Source and date are always appended to the note. */
export function toMetric(id: FigureId) {
  const figure: Figure = figures[id];
  const origin = `${sourceLabels[figure.source]}, ${formatAsOf(figure.asOf)}.`;
  return {
    value: figure.value,
    label: figure.label,
    note: figure.note ? `${figure.note} ${origin}` : origin,
  };
}

export const caseStudyMeta = {
  title: `${onSightName} Case Study | Jonathan Mejia`,
  description:
    `A case study of the website and marketing program developed for ${onSightName}, ` +
    "with the source and date of every figure.",
  breadcrumb: "On-Sight Case Study",
  /** The label for links to the page, in the footer and in body copy. */
  linkLabel: "On-Sight Case Study",
} as const;

export const caseStudyHero = {
  headline: `${onSightName} Case Study`,
  subhead: "Website, Marketing And Ordering Application In Development",
  lead:
    `This case study describes the website and marketing program that Jonathan Mejia developed for ` +
    `${onSightName}, a client of FrameScale, and an ordering application that is still in development.`,
} as const;

export const caseStudyWho = {
  title: "Background",
  body: [
    `${onSightName} is a prescription safety eyewear business that serves companies through corporate eyewear ` +
      "programs. Its customers are employers, which distinguishes it from an independent optical practice.",
    // The sentence that carries the published figures is built in the page from `figures`, so the numbers
    // can only come from the table.
    "Independent practices share these problems. The website has to be found, reviews have to build up, and " +
      "the owner has to be able to read the reporting.",
  ],
  /** Lead-in for the sentence that lists On-Sight's own figures. The page appends the numbers. */
  publishedLead: "On-Sight reports",
  publishedTail: "These figures are published by On-Sight on its website and were recorded on",
} as const;

/** The top-of-page results box. Two groups, so a reader sees which figures are documented and which are reported. */
export const caseStudyGlance = {
  title: "Results At A Glance",
  documentedTitle: "Documented Figures",
  reportedTitle: "Reported Figures",
} as const;

/**
 * The starting position. The first paragraph is built in the page from `figures`
 * (July 2026 baseline). The rest is Jonathan's account of the situation before
 * the work, given 2026-11-26, so it is attributed to him by name. The pricing
 * sentence sits behind `onSightFiguresApproved` with the other revenue lines.
 */
export const caseStudyChallenge = {
  title: "The Challenge",
  reportedLead: "On-Sight began the engagement with the following limitations.",
  items: [
    "The existing website did not track visitor behavior, so there was nothing to measure.",
    "There was no ordering application.",
  ],
  /** Shown only while `onSightFiguresApproved` is true. */
  pricingItem:
    "Pricing was scattered and not categorized, so it did not capture the full value of the services provided, " +
    "and revenue that was available went uncollected.",
} as const;

export type WorkItem = { title: string; body: string };

export const caseStudyWork = {
  title: "Actions And Timeline",
  lead:
    "The new website went live in January 2026, and the revised pricing took effect the same month. Work on " +
    "the application, marketing, content and analytics began in approximately March 2026 and continues. The " +
    "ordering application is still in development.",
  items: [
    { title: "Website Development", body: "A custom website was designed and built for On-Sight." },
    { title: "App Development", body: "An ordering and operations application is in development for the business." },
    { title: "Marketing Strategy", body: "The strategy sets the message, the audience and the channels." },
    { title: "Content And Posting", body: "Content is written and published on an ongoing basis." },
    { title: "Business Analytics", body: "Reporting shows which activity is producing results." },
    { title: "Pricing Strategy", body: "A revised pricing structure was designed for the companies that On-Sight serves." },
  ] satisfies WorkItem[],
} as const;

export type WorkScreen = { src: string; alt: string; aspect: string };

/**
 * Screenshots of the live On-Sight website, taken 2026-11-26 at 1440 pixels wide and
 * cropped to the first screen. The pictures inside them belong to On-Sight. No visible
 * captions: Jonathan removed photo captions site-wide on 2026-11-26.
 */
export const caseStudyScreens = {
  title: "The Website Today",
  lead: "These are three pages of the On-Sight website as they appeared on November 26, 2026.",
  items: [
    {
      src: "/photos/onsight/onsight-home.webp",
      alt: "The On-Sight Safety Optics home page, headed On-Site Safety Eyewear Solutions, with a photo of a person trying on safety glasses",
      aspect: "aspect-1440/815",
    },
    {
      src: "/photos/onsight/onsight-how-it-works.webp",
      alt: "The On-Sight how it works page, explaining how an on-site safety eyewear program is rolled out, with an illustrated map of a work site",
      aspect: "aspect-1440/815",
    },
    {
      src: "/photos/onsight/onsight-corporate-programs.webp",
      alt: "The On-Sight corporate prescription safety eyewear programs page, with a photo of an optician adjusting a pair of glasses at a workbench",
      aspect: "aspect-1440/722",
    },
  ] satisfies WorkScreen[],
} as const;

export const caseStudyMethod = {
  title: "Method Of Measurement",
  search:
    "Search figures come from Google Analytics for the On-Sight website. Organic share is the number of organic " +
    "search visits divided by total visits in the same month. Data begins in July 2026, so July is the " +
    "baseline, and October is the last full month used.",
  published:
    "On-Sight's own figures were read from its public website, as dated in the Background section. The " +
    "engagement timeline, the walk-in increase and the inquiry estimate come from the author's account of the " +
    "engagement.",
  /** Shown only while `onSightFiguresApproved` is true. */
  reported:
    "The review counts and the pricing figures were confirmed by the owner of On-Sight Safety Optics. They " +
    "are not published elsewhere.",
} as const;

export const caseStudyChanged = {
  title: "Observed Outcomes",
  lead:
    "Online visibility increased. Walk-in customers also increased, but no count exists. Inbound inquiries " +
    `from companies seeking corporate eyewear programs rose by an estimated ${figures.inquiryIncrease.value} a ` +
    "month. The estimate is the author's, and no earlier count exists to check it against.",
  searchTitle: "Organic Search Traffic",
  searchBody:
    `Organic search visits to the On-Sight website increased by ${plain(figures.organicGrowth.value)} between ` +
    `July and October 2026, from ${figures.organicBefore.value} to ${figures.organicAfter.value} per month. ` +
    `Total monthly visits remained between ${figures.totalLow.value} and ${figures.totalHigh.value}, so the ` +
    `share of traffic arriving from organic search rose from ${figures.organicShareBefore.value} to ` +
    `${figures.organicShareAfter.value}. Google Analytics data for the site begins in July 2026, which makes ` +
    "July the earliest month available as a baseline.",
  businessTitle: "Reviews And Pricing",
  businessBody:
    `Over the past few months, On-Sight's Google reviews rose from ${figures.googleBefore.value} to ` +
    `${figures.googleAfter.value}, an increase of ${plain(figures.googleReviews.value)}. Its Yelp reviews rose ` +
    `from ${figures.yelpBefore.value} to ${figures.yelpAfter.value}, an increase of ` +
    `${plain(figures.yelpReviews.value)}. Both percentages rest on small review counts. The revised pricing took effect in January 2026, and ` +
    `about ${figures.pricingAccounts.value} accounts moved to it. Annual fees per account were previously about ` +
    `${figures.pricingBefore.value} and are now about ${figures.pricingAfter.value}. The increase varies by ` +
    `account and is at least ${plain(figures.pricingPercent.value.replace("At least ", ""))}, calculated from those ranges.`,
  disclaimer: "These figures describe a single past engagement. See Limitations below.",
  businessDisclaimer:
    "These figures were confirmed by the owner of On-Sight. They describe a single past engagement. See " +
    "Limitations below.",
} as const;

/**
 * Replaces the one-line "no result is guaranteed" disclaimer. The FTC's
 * endorsement guides (16 CFR 255.2) say a generic disclaimer is unlikely to
 * work, so the page states what the figures cannot show, including that no
 * typical result has been established. Items marked `reported` drop out with
 * the revenue lines when `onSightFiguresApproved` is false.
 */
export const caseStudyLimitations = {
  title: "Limitations",
  lead: "The figures above should be read with the following limits in mind.",
  items: [
    { text: "This is a single engagement, measured over four monthly readings from July to October 2026.", reported: false },
    {
      text:
        "No analytics data exists for the period before July 2026. The new website went live in January 2026, " +
        "so the July baseline falls six months after launch.",
      reported: false,
    },
    {
      text: "The review and pricing figures were confirmed by the owner of On-Sight and are not published or independently documented.",
      reported: true,
    },
    {
      text: "The website, the pricing change and the marketing work overlapped, so no single result can be attributed to one cause.",
      reported: false,
    },
    {
      text:
        "Walk-in customers are not counted. The increase of " +
        `${figures.inquiryIncrease.value} inquiries a month is the author's estimate, with no earlier count to check it against.`,
      reported: false,
    },
    {
      text:
        "On-Sight serves employers, so its results are not representative of an independent practice that " +
        "serves patients. No typical result has been established.",
      reported: false,
    },
  ],
} as const;

/**
 * The client's own words. `null` until On-Sight's owner supplies a quote and
 * agrees to it being published. Jonathan asked for a placeholder for now: the
 * section shows a labeled placeholder everywhere except the production
 * deployment, and shows nothing there until this is filled in. Never write a
 * quote that the owner did not give.
 *
 * Filled in 2026-11-26 from the owner's words as Jonathan relayed them in chat.
 * Only spelling and grammar were fixed ("moral" to "morale", "a easygoing" to
 * "an easygoing"). No name is given, so the attribution is the role alone. Jonathan
 * confirmed the owner's consent on 2026-11-26 (A-12).
 */
export const clientQuote: { text: string; name?: string; role: string } | null = {
  text:
    "Jonathan's work has helped improve the business substantially and provided great morale and the " +
    "opportunity to grow. Working with Jonathan has been an easygoing and helpful learning experience. " +
    "Highly recommend to small business owners.",
  role: "Owner",
};

export const caseStudyQuote = {
  title: "Client Perspective",
  placeholder: "A short statement from the owner of On-Sight Safety Optics will be added here.",
} as const;

/** True on every deployment except Vercel production, so a placeholder never reaches the live site. */
export const showQuotePlaceholder = process.env.VERCEL_ENV !== "production";

/** For the page's structured data. */
export const caseStudyDates = { published: "2026-11-26", modified: "2026-11-26" } as const;

export const caseStudyBridge = {
  title: "Implications For An Independent Practice",
  body:
    "An independent practice has its own market, schedule and starting point, so its results will differ. The " +
    "method is constant: study the market, build a website that books appointments, make the practice easy to " +
    "find, and report on what is working.",
  methodLink: "See The Method",
  servicesLink: "See The Services",
} as const;

export const caseStudyCta = {
  title: "Want This For Your Practice?",
  button: "Book A Free Call",
  lead: "The first call lasts half an hour. It establishes where the work should begin and whether this is the right fit.",
} as const;

/** The short proof band on the home page. Rendered only while `onSightApproved` is true. */
export const proofStrip = {
  title: "Work I Have Done",
  body:
    `I built the website for ${onSightName}, a prescription safety eyewear business, and I am building its ` +
    "ordering app. I also work on its marketing, analytics and pricing.",
  cta: "Read The Case Study",
} as const;

/** One sentence each for the optical page and the about page, plus the home FAQ question and answer. */
export const proofLinks = {
  about: "I also built the website for a prescription safety eyewear client, and I am building its ordering app.",
  aboutLink: "Read The Case Study",
  optical: "For proof of the work, I wrote up the website and marketing I did for a client.",
  opticalLink: "Read The Case Study",
  faqQuestion: "Do you have examples of your work?",
  faqAnswer:
    `Yes. I built the website for ${onSightName}, a prescription safety eyewear business, and I work on its ` +
    "marketing, analytics and pricing. The case study on this site shows what changed and where each number " +
    "comes from.",
} as const;
