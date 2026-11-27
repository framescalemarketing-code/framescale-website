import { principal } from "@/lib/site";

/**
 * Plain and direct, in one person's voice. Every line is a real sentence with
 * a subject and an active verb. Clipped noun-phrase fragments stacked in
 * parallel ("Big invoice, plenty of talk.") read as machine-written, so they
 * stay out. Warmth comes from what is said, not from padding around it.
 *
 * Facts come from Jonathan's own account of his career (the lab, the sales
 * floor, store management) and from the credentials in `site.ts`. No
 * statistics, prices or client results appear here. Store names appear on
 * /about only. The On-Sight case study has its own file, `onsight.ts`.
 */
export const hero = {
  headline: "Marketing For Independent Optical Practices",
  subhead: "From The Lab To The Sales Floor",
  lead:
    `I'm ${principal.fullName}, and I work with independent optical practices. Each month you get a plain ` +
    "report that shows which of your marketing is bringing in appointments.",
  primaryCta: "Book A Free Call",
  secondaryCta: "See How I Work",
} as const;

export type Credential = {
  value: string;
  label: string;
};

export const credentials: Credential[] = [
  { value: "MBA", label: "in marketing" },
  { value: "UC Riverside", label: "bachelor's degree" },
  { value: "Direct", label: "you work with me, start to finish" },
  { value: "Remote", label: "across the United States" },
];

export type MarketingPart = {
  title: string;
  body: string;
};

/**
 * The corrective at the center of the pitch: owners hear "marketing" and think
 * social media, and nobody explains the rest. The five parts map onto the four
 * services and the SCALE phases, so this section is also the table of contents.
 * The title is a question on purpose, because it is the question owners type
 * into a search box and ask an AI assistant.
 */
export const marketingScope = {
  title: "What Does Optical Marketing Include?",
  lead:
    "Many owners hear marketing and think of social posts. The work covers five other things.",
} as const;

export const marketingParts: MarketingPart[] = [
  {
    title: "Who Your Customer Is",
    body: "I start with who buys from you now and who you want more of.",
  },
  {
    title: "How You Compare",
    body: "I look at what other practices offer and charge, so you can decide where yours stands.",
  },
  {
    title: "What Your Website Says",
    body: "I check that the site says what you offer, who it is for and how to reach you.",
  },
  {
    title: "Whether People Can Find You",
    body:
      "I work on the pages and wording that decide whether your name appears when people search or ask an AI " +
      "assistant.",
  },
  {
    title: "Which Numbers Matter",
    body: "I build a report that shows which marketing brought in appointments.",
  },
];

export type Differentiator = {
  title: string;
  body: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "Direct Access To Me",
    body: "You call and I answer, and I do the work myself.",
  },
  {
    title: "Homework Before Spending",
    body:
      "I study your market and your customers before I recommend spending anything. If you do not need what " +
      "you came to me for, I will tell you.",
  },
  {
    title: "Made For Optical",
    body: "I build each site for your practice from the start.",
  },
  {
    title: "Numbers In Plain Words",
    body: "I explain the numbers until you can explain them to someone else.",
  },
];

/**
 * The rhythm of the engagement, with one pointer to the story told in full on
 * /about. The home page is about what the visitor gets, so the background is a
 * single sentence that backs the claim and leaves the detail to /about.
 */
export const aboutStrip = {
  title: "What Working With Me Looks Like",
  body: [
    "You get a report from me every month and a review every 90 days. I came up through a full service optical lab, the " +
      "sales floor and store management.",
  ],
  cta: "Read My Story",
} as const;

/**
 * A short signed note about how the work runs. The marketing-is-misunderstood
 * point lives in its own section above, so this note covers the working
 * arrangement: explained as it happens, account ownership settled up front, free first call.
 */
export const personalNote = {
  body: [
    "I explain the work while I do it, and I show you the numbers behind it. Who holds each account is " +
      "settled with you before work starts.",
    "The first call is free.",
  ],
  signOff: principal.firstName,
} as const;

export const closingCta = {
  title: "Let's Talk About Your Practice",
  lead: "Tell me what is going on and we will set up a call. If I cannot help, I will say so.",
  cta: "Book A Free Call",
} as const;
