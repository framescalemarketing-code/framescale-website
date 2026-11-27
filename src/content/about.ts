import { principal } from "@/lib/site";

export const aboutHero = {
  headline: `Hi, I'm ${principal.fullName}`,
  lead:
    "I'm an optical marketing consultant. I worked in a full service optical lab, then the sales floor, managed stores and " +
    "then earned an MBA in marketing. Now I help independent practices find what is holding them back, and then " +
    "I fix it.",
} as const;

/** The heading over the story. "From the lab to the sales floor" is the spine of this page. */
export const chaptersIntro = {
  title: "From The Lab To The Sales Floor",
} as const;

export type Chapter = {
  marker: string;
  title: string;
  body: string;
};

/**
 * The real story, told the way it would be told out loud. Facts are only those
 * Jonathan gave on 2026-11-26 (lab wording corrected the same day): he worked
 * in a full service lab, not only on finished glasses, and did maintenance and
 * repairs on the heavy machinery, then managed at LensCrafters and at Site for
 * Sore Eyes. The store names appear here and nowhere else on the site.
 */
export const chapters: Chapter[] = [
  {
    marker: "01",
    title: "In The Lab",
    body:
      "My first job in optical was in a full service lab. I did the lab work, and I did maintenance and repairs " +
      "on the heavy machinery the lab ran on. It taught me how a pair of glasses " +
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
      "understand why some businesses grow and others just stay busy, and I wanted to learn it well enough to " +
      "teach it.",
  },
  {
    marker: "05",
    title: "Using Both Halves",
    body:
      "These days I work with independent optical practices on their message, their website and their reporting.",
  },
];

export type CredentialDetail = {
  label: string;
  value: string;
  note: string;
};

/** Heading over the credential list on /about. The order is the order it happened. */
export const credentialsIntro = {
  title: "The Background",
} as const;

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
    note: "A full service lab, repairing its heavy machinery, then the sales floor.",
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
    "You can reach me by phone or email.",
    "You get a monthly report and a review every 90 days.",
    "I will tell you if I cannot help you.",
  ],
} as const;

export const philosophy = {
  title: "You Should Understand Your Own Business",
  body:
    "I go through everything with you as we do it.",
} as const;
