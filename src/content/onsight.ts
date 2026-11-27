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
 * to name his client. The push still waits for On-Sight's owner to agree.
 */
export const onSightApproved = true;

/**
 * Switch two. When false, the page keeps the work and the search figures but
 * drops the review gains, the pricing change and the yearly revenue figure.
 * Those four come from Jonathan's own account, and the owner of On-Sight should
 * agree to the revenue lines before they go live.
 */
export const onSightFiguresApproved = true;

export const onSightName = "On-Sight Safety Optics";
export const onSightUrl = "https://onsightoptics.com";
export const caseStudyPath = "/case-studies/on-sight-safety-optics";

export type FigureSource = "on-sight-published" | "ga4" | "jonathan";

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
  jonathan: "Reported by me",
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
  organicShareBefore: { value: "18%", label: "Organic search share, July 2026", source: "ga4", asOf: "2026-11-26" },
  organicShareAfter: { value: "37%", label: "Organic search share, October 2026", source: "ga4", asOf: "2026-11-26" },
  totalLow: { value: "254", label: "Fewest total visits in a month", source: "ga4", asOf: "2026-11-26" },
  totalHigh: { value: "276", label: "Most total visits in a month", source: "ga4", asOf: "2026-11-26" },

  // Jonathan's own account, 2026-11-26. No document records these, so they sit
  // behind `onSightFiguresApproved` and are written in the first person.
  googleReviews: {
    value: "+8",
    label: "Google reviews",
    source: "jonathan",
    asOf: "2026-11-26",
    note: "Added in the past few months.",
  },
  yelpReviews: {
    value: "+2",
    label: "Yelp reviews",
    source: "jonathan",
    asOf: "2026-11-26",
    note: "Added in the past few months.",
  },
  pricingRange: {
    value: "10 to 15%",
    label: "Revenue increase per account",
    source: "jonathan",
    asOf: "2026-11-26",
    note: "From the new pricing structure, depending on the structure each company chose.",
  },
  yearlyRevenue: {
    value: "$100,000+",
    label: "Extra revenue a year",
    source: "jonathan",
    asOf: "2026-11-26",
    note: "Across the accounts On-Sight already had.",
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
    `I built the website and ordering app for ${onSightName} and work on its marketing and analytics. ` +
    "See what changed and where each number comes from.",
  breadcrumb: "On-Sight Case Study",
  /** The label for links to the page, in the footer and in body copy. */
  linkLabel: "On-Sight Case Study",
} as const;

export const caseStudyHero = {
  headline: `${onSightName} Case Study`,
  subhead: "The Website, The App And The Marketing",
  lead:
    `${onSightName} is a client of mine. I built its website and its ordering app, and I work on its marketing, ` +
    "analytics, pricing and content.",
} as const;

export const caseStudyWho = {
  title: `Who Is ${onSightName}?`,
  body: [
    `${onSightName} is a prescription safety eyewear business that works with companies through corporate ` +
      "eyewear programs. That makes it a different kind of business from an independent optical practice.",
    // The sentence that carries the published figures is built in the page from `figures`, so the numbers
    // can only come from the table.
    "I wrote this up because the work behind it overlaps with what I do for practices. The website has to be " +
      "found, the reviews have to grow, and the owner has to be able to read the reports.",
  ],
  /** Lead-in for the sentence that lists On-Sight's own figures. The page appends the numbers. */
  publishedLead: "On-Sight reports",
  publishedTail: "These are On-Sight's own figures, from its website.",
} as const;

export type WorkItem = { title: string; body: string };

export const caseStudyWork = {
  title: "What Did I Do For On-Sight?",
  lead: "My work covers the website, the app, the marketing and the numbers behind them.",
  items: [
    { title: "Website Development", body: "I built the On-Sight website custom." },
    { title: "App Development", body: "I built an ordering and operations app for the business." },
    { title: "Marketing Strategy", body: "I decide what to say, who to say it to and where to say it." },
    { title: "Content And Posting", body: "I write the content and handle the posting." },
    { title: "Business Analytics", body: "I handle the analytics, so the numbers show what is working." },
    { title: "Pricing Strategy", body: "I designed a new pricing structure for the companies On-Sight serves." },
  ] satisfies WorkItem[],
} as const;

export const caseStudyChanged = {
  title: "What Changed For On-Sight?",
  lead:
    "Visibility went up. On-Sight has also seen more walk-in customers and more companies asking about " +
    "corporate eyewear programs. I do not have a clean before-and-after count for those two, so I am not " +
    "putting a percentage on them.",
  searchTitle: "Search Visits",
  searchBody:
    `Organic search visits to the On-Sight website rose ${plain(figures.organicGrowth.value)} from July to ` +
    `October 2026, from ${figures.organicBefore.value} a month to ${figures.organicAfter.value}. Total visits ` +
    `stayed between ${figures.totalLow.value} and ${figures.totalHigh.value} a month, so organic search grew ` +
    `from ${figures.organicShareBefore.value} to ${figures.organicShareAfter.value} of the same traffic. ` +
    "Google Analytics for the site starts in July 2026, which makes July the earliest month I can compare.",
  businessTitle: "Reviews And Pricing",
  businessBody:
    `On-Sight's Google reviews rose by ${plain(figures.googleReviews.value)} and its Yelp reviews by ` +
    `${plain(figures.yelpReviews.value)} in the past few months. The new pricing structure raised revenue by ` +
    `about ${figures.pricingRange.value} per account, depending on the structure each company chose. Across ` +
    `the accounts On-Sight already had, that came to over ${figures.yearlyRevenue.value.replace("+", "")} more a year.`,
  disclaimer:
    "These figures describe one past engagement. No specific result is guaranteed for any other business.",
  businessDisclaimer:
    "These four figures are my own account of the work. They describe one past engagement, and no specific " +
    "result is guaranteed for any other business.",
} as const;

export const caseStudyBridge = {
  title: "What This Means For Your Practice",
  body:
    "Your practice has its own market, schedule and starting point, so your results will differ. The method " +
    "stays the same: study the market, build a website that books appointments, make the practice easy to find " +
    "and report on what is working.",
  methodLink: "See The Method",
  servicesLink: "See The Services",
} as const;

export const caseStudyCta = {
  title: "Want This For Your Practice?",
  button: "Book A Free Call",
  lead: "Half an hour on the phone. I will tell you where I would start, and whether I am the right person at all.",
} as const;

/** The short proof band on the home page. Rendered only while `onSightApproved` is true. */
export const proofStrip = {
  title: "Work I Have Done",
  body:
    `I built the website and ordering app for ${onSightName}, a prescription safety eyewear business, and I ` +
    `work on its marketing, analytics and pricing. Organic search visits to its site rose ` +
    `${plain(figures.organicGrowth.value)} from July to October 2026.`,
  cta: "Read The Case Study",
} as const;

/** One sentence each for the optical page and the about page, plus the home FAQ question and answer. */
export const proofLinks = {
  about: "I also built the website and ordering app for a prescription safety eyewear client.",
  aboutLink: "Read The Case Study",
  optical: "For proof of the work, I wrote up the website and marketing I did for a client.",
  opticalLink: "Read The Case Study",
  faqQuestion: "Do you have examples of your work?",
  faqAnswer:
    `Yes. I built the website for ${onSightName}, a prescription safety eyewear business, and I work on its ` +
    "marketing, analytics and pricing. The case study on this site shows what changed and where each number " +
    "comes from.",
} as const;
