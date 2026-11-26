import { principal } from "@/lib/site";

/**
 * Plain and direct, in one person's voice. Every line is a real sentence with
 * a subject and an active verb. Clipped noun-phrase fragments stacked in
 * parallel ("Big invoice, plenty of talk.") read as machine-written, so they
 * stay out. Warmth comes from what is said, not from padding around it.
 *
 * Facts come from Jonathan's own account of his career and from the credentials
 * in `site.ts`. No statistics, prices or client results appear here.
 */
export const hero = {
  headline: "Marketing For Independent Optical Practices, Explained Plainly",
  lead:
    `I'm ${principal.fullName}, an optical practice marketing consultant who started in manufacturing, moved to ` +
    "the sales floor and went on to manage stores. You work with me directly, from the first call to the " +
    "monthly report.",
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
  { value: "Optical", label: "from the back room to the sales floor" },
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
 */
export const marketingScope = {
  title: "Marketing Is More Than Social Media",
  lead:
    "Most owners I meet were told marketing means posting online. Posting is one small part of a list that is " +
    "longer and more useful.",
} as const;

export const marketingParts: MarketingPart[] = [
  {
    title: "Who Your Customer Is",
    body: "Everything else depends on this. I start with who buys from you now and who you want more of.",
  },
  {
    title: "How You Compare",
    body: "I look at what other practices offer and charge, so you can decide where yours stands.",
  },
  {
    title: "What Your Website Says",
    body:
      "A visitor decides in seconds whether to book. The site has to say what you offer, who it is for and " +
      "how to reach you.",
  },
  {
    title: "Whether People Can Find You",
    body:
      "Search engines and AI assistants answer questions about glasses and eye care every day. I work on the " +
      "pages and wording that decide whether your name appears.",
  },
  {
    title: "Which Numbers Matter",
    body: "A report should tell you which marketing brought in appointments. If yours does not, I can build one that does.",
  },
];

export type Differentiator = {
  title: string;
  body: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "You Work With Me",
    body: "You call, I answer, and I did the work you are calling about.",
  },
  {
    title: "You See The Homework First",
    body:
      "I study your market and your customers before I recommend spending anything. If you do not need what " +
      "you came to me for, I will tell you.",
  },
  {
    title: "Built For Your Practice",
    body: "I do not hand you something I built for someone else with the logo swapped out.",
  },
  {
    title: "You Will Understand Your Numbers",
    body: "If you cannot explain your marketing to someone else when we finish, I did it wrong.",
  },
];

/**
 * The condensed version of the story told in full on /about. Keep the two in
 * step: manufacturing, then the sales floor, then managing, then the ceiling
 * that sent him back to school.
 */
export const aboutStrip = {
  title: "I Started On The Floor, Not In An Office",
  body: [
    "My first job was in manufacturing, making the product in the back of an optical company. They moved me out " +
      "front to sell it, and before long I was managing the store with a number to hit every month.",
    "I did that in corporate stores, in franchises and in small independents. After enough years of it I could " +
      "see where that road ended, and I did not want to get stuck on it.",
    "So I went back to school. I earned a bachelor's at UC Riverside and then an MBA in marketing, because I " +
      "wanted to know why some businesses grow while others just stay busy. When you talk about payroll or a " +
      "quarter that went sideways, I know what you mean.",
  ],
  cta: "Read My Story",
} as const;

/**
 * A short signed note about how the work runs. The marketing-is-misunderstood
 * point lives in its own section above, so this note covers the working
 * arrangement: explained as it happens, owned by the practice, free first call.
 */
export const personalNote = {
  body: [
    "I explain the work while I do it, and I show you the numbers behind it. Everything we build sits in your " +
      "own accounts, so you can keep running it without me.",
    "If you have been putting this off, the first call costs you nothing.",
  ],
  signOff: principal.firstName,
} as const;

export const closingCta = {
  title: "Let's Talk About Your Practice",
  lead: "Tell me what is going on and we will set up a call. If I cannot help, I will say so.",
  cta: "Book A Free Call",
} as const;
