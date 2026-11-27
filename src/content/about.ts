import { principal } from "@/lib/site";

export const aboutHero = {
  headline: `Hi, I'm ${principal.fullName}`,
  lead:
    "I'm an optical marketing consultant. I made glasses in a lab, worked the sales floor, managed stores and " +
    "then earned an MBA in marketing. Now I help independent practices find what is holding them back, and then " +
    "I fix it.",
} as const;

/** The heading over the story. "From the lab to the sales floor" is the spine of this page. */
export const chaptersIntro = {
  title: "From The Lab To The Sales Floor",
  lead: "This is how I got from the lab bench to marketing, in the order it happened.",
} as const;

export type Chapter = {
  marker: string;
  title: string;
  body: string;
};

/**
 * The real story, told the way it would be told out loud. Facts are only those
 * Jonathan gave on 2026-11-26: he made glasses in the lab, did maintenance and
 * repairs on the heavy machinery, then managed at LensCrafters and at Site for
 * Sore Eyes. The store names appear here and nowhere else on the site.
 */
export const chapters: Chapter[] = [
  {
    marker: "01",
    title: "In The Lab",
    body:
      "My first job in optical was in the lab. I made finished glasses, and I did maintenance and repairs on the " +
      "heavy machinery the lab ran on. It was not glamorous work. It taught me how a pair of glasses actually " +
      "gets made.",
  },
  {
    marker: "02",
    title: "On The Sales Floor",
    body:
      "After a while they moved me out front to sell. The sales floor is where I learned what patients ask and " +
      "what holds them back from buying.",
  },
  {
    marker: "03",
    title: "Managing The Stores",
    body:
      "I was a manager at LensCrafters and at Site for Sore Eyes. That meant a number to hit every month and a " +
      "team to hit it with.",
  },
  {
    marker: "04",
    title: "Back To School",
    body:
      "I went back to school for a bachelor's degree at UC Riverside and then an MBA in marketing. I wanted to " +
      "understand why some businesses grow and others just stay busy.",
  },
  {
    marker: "05",
    title: "Using Both Halves",
    body:
      "These days I put both sides to work for independent optical practices. You already know how to run the " +
      "exam lane and the frame board. I add a clear message, a website that pulls its weight and numbers you " +
      "can read without help.",
  },
];

export type CredentialDetail = {
  label: string;
  value: string;
  note: string;
};

export const credentialDetails: CredentialDetail[] = [
  {
    label: "Education",
    value: "MBA In Marketing",
    note: "Master's in business administration.",
  },
  {
    label: "Education",
    value: "University Of California, Riverside",
    note: "Bachelor's degree in business.",
  },
  {
    label: "Experience",
    value: "Optical Lab And Sales Floor",
    note: "Making glasses, repairing the lab's heavy machinery, then selling them.",
  },
  {
    label: "Experience",
    value: "Store Management",
    note: "Manager at LensCrafters and at Site for Sore Eyes, with monthly sales goals to hit.",
  },
];

export const workingWithMe = {
  title: "What You Get",
  points: [
    "A consultant who has worked a lab bench and a sales floor.",
    "Business sense and marketing in the same conversation.",
    "A direct line to me, by phone or email.",
    "A monthly report and a review every 90 days.",
    "A straight answer about whether I can help you, including when the answer is no.",
  ],
} as const;

export const philosophy = {
  title: "You Should Understand Your Own Business",
  body:
    "You should not need a marketing person to explain your own numbers back to you. I go through everything " +
    "with you as we do it, so when we are finished you can keep it running yourself.",
} as const;
