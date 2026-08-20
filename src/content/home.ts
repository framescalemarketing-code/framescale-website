import { location, principal } from "@/lib/site";

/**
 * Written to sound like one person talking. Sentence lengths are deliberately
 * uneven, the list items are not parallel with each other, and concrete detail
 * does the work that adjectives usually get asked to do.
 */
export const hero = {
  headline: `More customers for your ${location.city} small business`,
  lead:
    `Hi, I'm ${principal.firstName}. If your business has flattened out and you can't put your finger on why, ` +
    "that's the part I'm good at. You'd be working with me, not a team you never meet.",
  primaryCta: "Book A Free Call",
  secondaryCta: "See How I Help",
  reassurance: "It's a half hour phone call, and I won't chase you afterward.",
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
    body:
      "Someone sent you a report every month. You looked at it, and you still couldn't tell your bookkeeper which " +
      "part of it made you any money.",
  },
  {
    title: "People Land On Your Site And Leave",
    body: "They find you, poke around for a few seconds, and go book with whoever came up next.",
  },
  {
    title: "Nearby Customers Can't Find You",
    body: "Someone two miles away searches for exactly what you sell, and the place down the road comes up instead.",
  },
  {
    title: "You're Busy But Not Growing",
    body: "You haven't had a slow week in months. The business is also exactly the size it was.",
  },
];

export const problemSection = {
  title: "Where most owners get stuck",
  lead: "Almost everyone I talk to has one of these.",
} as const;

export type Differentiator = {
  title: string;
  body: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "You Work With Me",
    body: "There is nobody to hand you off to. You call, I answer, and I did the work you're calling about.",
  },
  {
    title: "You See The Homework First",
    body:
      "Before I suggest spending anything I go look at your market and your customers, and you get to read what I " +
      "found. If it turns out you don't need what you came to me for, I'll tell you that.",
  },
  {
    title: "Built For Your Business",
    body: "I'm not going to hand you something I made for someone else with the logo swapped out.",
  },
  {
    title: "You'll Understand Your Own Numbers",
    body: "If you can't explain your marketing to somebody else once we're done, I did it wrong.",
  },
];

export const differentiatorSection = {
  title: "Why people hire me",
} as const;

export const aboutStrip = {
  title: "I started on the floor, not in an office",
  body:
    "I didn't come out of an agency. I started in the back of a shop making the product, moved out front to sell " +
    "it, and ended up running the place with a number I had to hit every month. School came later. So when you " +
    "talk about payroll, or a quarter that went sideways, I know what you mean.",
  cta: "Read My Story",
} as const;

/** A short signed note. The most personal thing on the page. */
export const personalNote = {
  body: [
    "Marketing people don't have a great reputation with small business owners, and a lot of that is earned. " +
      "Big invoice, plenty of talk, and at the end of it you're still not sure what you paid for.",
    "I'd rather show you the numbers and let you make up your own mind. Whatever we build sits in your accounts, " +
      "and you can keep running it without me if that's what you want.",
    "Anyway. If you've been putting this off, a phone call doesn't cost you anything.",
  ],
  signOff: principal.firstName,
} as const;

export const closingCta = {
  title: "Let's talk",
  lead:
    "Tell me roughly what's going on and we'll set up a call. If I don't think I can help, I'd rather say so on " +
    "the phone than sell you something.",
} as const;
