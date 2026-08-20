import { location, principal } from "@/lib/site";

/**
 * Copy is written for owners who are not marketing people and do not want to
 * read much. Short sentences, no jargon, one idea at a time.
 */
export const hero = {
  eyebrow: `${principal.jobTitle} · ${location.city}`,
  headline: `More customers for your ${location.city} small business`,
  lead:
    `Hi, I'm ${principal.firstName}. I help small business owners in ${location.city} work out why growth has ` +
    "stalled, then fix it. No jargon, no big agency. Just me.",
  primaryCta: "Book A Free Call",
  secondaryCta: "See How I Help",
  reassurance: "Thirty minutes, on the phone. No pressure, no obligation.",
} as const;

export type Credential = {
  value: string;
  label: string;
};

export const credentials: Credential[] = [
  { value: "MBA", label: "In marketing" },
  { value: "UC Riverside", label: "Bachelor's degree" },
  { value: "Small Business", label: "All I work on" },
  { value: location.city, label: "Local, one on one" },
];

export type Problem = {
  title: string;
  body: string;
};

export const problems: Problem[] = [
  {
    title: "You Don't Know What Your Marketing Did",
    body: "You paid for it. The reports showed up. You still can't say what worked.",
  },
  {
    title: "People Visit Your Website And Leave",
    body: "They find you, look around, then go somewhere else.",
  },
  {
    title: "Nearby Customers Can't Find You",
    body: "Your competitors show up on Google and Maps. You don't.",
  },
  {
    title: "You're Busy But Not Growing",
    body: "The work never stops, but the business stays the same size.",
  },
];

export const problemSection = {
  eyebrow: "Sound Familiar?",
  title: "Where most owners get stuck",
  lead: "Almost every small business owner I meet is dealing with one of these four.",
} as const;

export type Differentiator = {
  title: string;
  body: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "You Work With Me",
    body: "Not an assistant. Not a junior. The person you call is the person doing the work.",
  },
  {
    title: "You See The Homework First",
    body: "I look at your market and your customers before you spend a dollar.",
  },
  {
    title: "Built For Your Business",
    body: "Not a template that belonged to someone else.",
  },
  {
    title: "You'll Understand The Reports",
    body: "Plain English. If you can't explain it, I haven't finished.",
  },
];

export const differentiatorSection = {
  eyebrow: "Why People Hire Me",
  title: "Simple, honest, and yours to keep",
} as const;

export const aboutStrip = {
  eyebrow: "Who You'd Be Working With",
  title: "I started on the floor, not in an office",
  body:
    "I started out on the shop floor, then in sales, then managing a store and carrying real numbers every month. " +
    "Later I went back to school and earned an MBA in marketing. I've worked both sides of a small business.",
  cta: "Read My Story",
} as const;

/** A short signed note. The most personal thing on the page. */
export const personalNote = {
  eyebrow: "A Note From Me",
  body: [
    "I know marketing people have a reputation with small business owners. Lots of words, big invoices, and nothing you can point to at the end.",
    "That's not how I work. I explain things in plain English, I show you the numbers, and you keep everything we build together.",
    "If that sounds like what you've been looking for, let's talk.",
  ],
  signOff: principal.firstName,
} as const;

export const closingCta = {
  eyebrow: "Next Step",
  title: "Let's talk",
  lead: "Tell me what's going on. Thirty minutes, no pressure. If I'm not the right fit, I'll say so.",
} as const;
