import { location, principal } from "@/lib/site";

/**
 * Plain and direct, in one person's voice. Every line is a real sentence with
 * a subject and an active verb. Clipped noun-phrase fragments stacked in
 * parallel ("Big invoice, plenty of talk.") read as machine-written, so they
 * stay out. Warmth comes from what is said, not from padding around it.
 */
export const hero = {
  headline: `Grow your ${location.city} small business`,
  lead:
    `Hi, I'm ${principal.firstName}. I find out what's holding your business back, then I fix it. ` +
    "You work with me directly, start to finish.",
  primaryCta: "Book A Free Call",
  secondaryCta: "See How I Help",
} as const;

export type Credential = {
  value: string;
  label: string;
};

export const credentials: Credential[] = [
  { value: "MBA", label: "In marketing" },
  { value: "UC Riverside", label: "Bachelor's degree" },
  { value: "Small Businesses", label: "Who I work with" },
  { value: location.city, label: "Local, one on one" },
];

export type Problem = {
  title: string;
  body: string;
};

export const problems: Problem[] = [
  {
    title: "You Don't Know What Your Marketing Did",
    body: "A report arrives every month, and you still can't say which part of it made you money.",
  },
  {
    title: "People Land On Your Site And Leave",
    body: "They find you, look for a few seconds, and book with whoever came up next.",
  },
  {
    title: "Nearby Customers Can't Find You",
    body: "Someone two miles away searches for what you sell, and the place down the road comes up.",
  },
  {
    title: "You're Busy But Not Growing",
    body: "You haven't had a slow week in months. The business is still the size it was.",
  },
];

export const problemSection = {
  title: "Where most owners get stuck",
  lead: "Most owners I meet have at least one of these.",
} as const;

export type Differentiator = {
  title: string;
  body: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "You Work With Me",
    body: "You call, I answer, and I did the work you're calling about.",
  },
  {
    title: "You See The Homework First",
    body:
      "I study your market and your customers before I recommend spending anything. If you don't need what you " +
      "came to me for, I'll tell you.",
  },
  {
    title: "Built For Your Business",
    body: "I won't hand you something I built for someone else with the logo swapped out.",
  },
  {
    title: "You'll Understand Your Own Numbers",
    body: "If you can't explain your marketing to someone else when we're done, I did it wrong.",
  },
];

export const differentiatorSection = {
  title: "Why people hire me",
} as const;

/**
 * The condensed version of the story told in full on /about. Keep the two in
 * step: manufacturing, then the sales floor, then managing, then the ceiling
 * that sent him back to school.
 */
export const aboutStrip = {
  title: "I started on the floor, not in an office",
  body: [
    "My first job was in manufacturing, making the product in the back of an optical company. They moved me out " +
      "front to sell it, and before long I was managing the store with a number to hit every month.",
    "I did that in corporate stores, in franchises, and in small independents. After enough years of it I could " +
      "see exactly where that road ended, and I did not want to get stuck on it.",
    "So I went back to school. A bachelor's at UC Riverside, then an MBA in marketing, because I wanted to know " +
      "why some businesses grow while others just stay busy. When you talk about payroll or a quarter that went " +
      "sideways, I know what you mean.",
  ],
  cta: "Read My Story",
} as const;

/**
 * A short signed note. The most personal thing on the page, and the only place
 * that corrects the assumption most owners arrive with: that marketing means
 * social media. Widening the definition is what earns the call.
 */
export const personalNote = {
  body: [
    "Most owners think marketing means posting on social media. That is one small piece of it. Marketing is also " +
      "who your customer really is, what you charge, what your website says, and whether anyone can find you on " +
      "Google.",
    "Social media managers and marketers rarely explain any of that. You get a monthly report and an invoice, and " +
      "you still can't say what either one did for you.",
    "I explain the work while I do it, and I show you the numbers behind it. Everything we build sits in your " +
      "accounts, so you can keep running it without me.",
    "If you've been putting this off, a call costs you nothing.",
  ],
  signOff: principal.firstName,
} as const;

export const closingCta = {
  title: "Let's talk",
  lead: "Tell me what's going on and we'll set up a call. If I can't help, I'll say so.",
} as const;
