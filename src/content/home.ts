import { location, principal } from "@/lib/site";

/**
 * Plain, in one person's voice. Say the thing the way you would say it out
 * loud to an owner across a counter. If a line would sound odd spoken, it is
 * wrong here.
 *
 * Five habits make copy read as machine-written, and all five have shown up
 * in this file at some point:
 *
 * 1. The antithesis pivot, which is the worst of them: negate a thing, pause,
 *    then reveal the replacement. "The marketing isn't the problem. It's who
 *    you're talking to." "Built for you, not pulled off a shelf." "A plan
 *    built for your business, not a template." Say it affirmatively and keep
 *    going instead: "Most owners don't realize how much depends on who
 *    they're marketing to and what they say to them."
 * 2. Clever headings. "Busy But Flat", "The Handoff", "Same Side Of The
 *    Counter". A heading names the thing plainly: "Busy But Not Growing".
 *    Question-framed headings are just as bad ("What Usually Needs Fixing").
 * 3. Dropped contractions. "It is not", "I am", "you are" read stiff. Write
 *    "isn't", "I'm", "you're", the way it is actually said.
 * 4. The aphoristic closer, a short punchy line bolted onto a longer sentence
 *    to sound wise. "That is most of the job." One is a voice. Four is a tic.
 * 5. Hedges. "Usually", "mostly", "a bit", "plenty of" each take a degree off
 *    a claim that was fine at full strength.
 *
 * Body copy stays in full sentences with a subject and an active verb.
 */
export const hero = {
  headline: `Grow your ${location.city} small business`,
  lead:
    `I'm ${principal.firstName}. I made glasses in the back of an optical shop, then sold them out front, then ` +
    "ran the store. After that I got an MBA in marketing. You won't be paying me to learn how a small business " +
    "works.",
  primaryCta: "Book A Free Call",
  secondaryCta: "See How I Help",
} as const;

export type Credential = {
  value: string;
  label: string;
};

/**
 * Four slots, four pieces of evidence. Two of these used to restate the
 * audience and the city, which the rest of the page already says, so they
 * carried nothing. The shop floor belongs here: it is the one item on the
 * list a competitor cannot copy.
 */
export const credentials: Credential[] = [
  { value: "MBA", label: "Marketing concentration" },
  { value: "UC Riverside", label: "Bachelor's in business" },
  { value: "Shop Floor", label: "Where I started" },
  { value: location.city, label: "In person, one on one" },
];

export type Problem = {
  title: string;
  body: string;
};

export const problems: Problem[] = [
  {
    title: "You Can't Tell What Your Marketing Did",
    body: "A report lands every month. You still can't point at the part of it that made you money.",
  },
  {
    title: "People Leave Your Website",
    body: "They find you, look for a few seconds, and book with whoever came up next.",
  },
  {
    title: "Local Customers Can't Find You",
    body: "Someone two miles away searches for what you sell. The place down the road comes up instead.",
  },
  {
    title: "Busy But Not Growing",
    body: "You haven't had a slow week in months. The business is still the size it was.",
  },
];

export const problemSection = {
  title: "Common Problems",
  lead: "Most owners I meet have at least one of these. Plenty have all four.",
} as const;

export type Differentiator = {
  title: string;
  body: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "You Work With Me",
    body:
      "You call, I answer, and I did the work you're calling about. The person going through your numbers is " +
      "the same person who built the thing.",
  },
  {
    title: "Research First",
    body:
      "I study your market and your customers before I tell you to spend anything. If you don't need what you " +
      "came to me for, I'll tell you on the first call.",
  },
  {
    title: "Built For You",
    body:
      "Everything I build gets put together for your business, from what it says to how it works. I start with how " +
      "you actually take work in, because a website that fights the way you run things gets abandoned in a month.",
  },
  {
    title: "Numbers You Can Read",
    body:
      "If you can't explain your marketing to someone else when we're done, I did it wrong. I'll sit with you and " +
      "go through the reporting until it makes sense.",
  },
];

/**
 * The condensed version of the story told in full on /about. Keep the two in
 * step: manufacturing, then the sales floor, then managing, then the ceiling
 * that sent him back to school.
 */
export const aboutStrip = {
  title: "My Background",
  body: [
    "My first job was in manufacturing, making the product in the back of an optical company. They moved me out " +
      "front to sell it, and then I was managing the store with a number to hit every month.",
    "I did that in corporate stores, in franchises, and in small independents. I could see where that road " +
      "ended, and I didn't want to get stuck on it.",
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
    "Most owners think marketing means posting on social media. That's one small piece of it. Marketing is also " +
      "who your customer really is, what you charge, what your website says, and whether anyone can find you on " +
      "Google.",
    "Social media managers and marketers rarely explain any of that. You get a monthly report and an invoice, " +
      "and you still can't say what either one did for you.",
    "I explain the work while I do it, and I show you the numbers behind it. Everything we build sits in your " +
      "accounts, so you can keep running it without me.",
    "If you've been putting this off, the call costs you nothing.",
  ],
  signOff: principal.firstName,
} as const;

export const closingCta = {
  title: "Tell me what isn't working",
  lead: "Half an hour on the phone is usually enough to find it. If I can't help, I'll say so on that call.",
} as const;
