import { principal } from "@/lib/site";

export const aboutHero = {
  headline: `Hi, I'm ${principal.firstName}`,
  lead:
    "I am an optical marketing consultant. I help independent practices work out what is holding them back, " +
    "and then I fix it.",
} as const;

export type Chapter = {
  marker: string;
  title: string;
  body: string;
};

/** The real story, told the way it would be told out loud. */
export const chapters: Chapter[] = [
  {
    marker: "01",
    title: "In The Back Of The Shop",
    body:
      "My first job was at an optical company, in the back, making the product. It was not glamorous work. After " +
      "a while they moved me out front to sell, and eventually I ended up managing the store, which meant a " +
      "number to hit every month and a team to hit it with.",
  },
  {
    marker: "02",
    title: "Hitting A Ceiling",
    body:
      "I worked in corporate stores, in franchises, and in small independents. Spend enough time doing that and you " +
      "can see the whole road in front of you. Mine didn't go as far as I wanted it to, which is an uncomfortable " +
      "thing to work out about your own job.",
  },
  {
    marker: "03",
    title: "Back To School",
    body:
      "So I went back. Bachelor's degree at UC Riverside, then a master's in business with a marketing focus. What " +
      "I wanted to understand was why some businesses grow and others just stay busy. I'd worked in both and " +
      "couldn't have told you the difference at the time.",
  },
  {
    marker: "04",
    title: "Using Both Halves",
    body:
      "These days I use both sides of that. Nearly every small business I meet is already good at the thing it " +
      "does. What is usually missing is a clear message, a website that pulls its weight, and numbers the owner " +
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
    value: "Small Business Management",
    note: "The back of the shop, then the sales floor, then running it.",
  },
  {
    label: "Experience",
    value: "Real Numbers, Real Targets",
    note: "Years of having to hit sales goals rather than just write about them.",
  },
];

export const workingWithMe = {
  title: "What You Get",
  points: [
    "Someone who has worked a sales floor, not just read about one.",
    "Business sense and marketing in the same conversation.",
    "My direct number.",
    "A straight answer about whether I can help you, including when the answer is no.",
  ],
} as const;

export const philosophy = {
  title: "You Should Understand Your Own Business",
  body:
    "You should not need a marketing person to explain your own numbers back to you. I go through everything " +
    "with you as we do it, so when we are finished you can keep it running yourself. Plenty of people in this " +
    "line of work would rather you could not.",
} as const;
