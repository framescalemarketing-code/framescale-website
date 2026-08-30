import { location, principal } from "@/lib/site";

export const aboutHero = {
  headline: `Hi, I'm ${principal.firstName}`,
  lead: `I help small business owners in ${location.city} work out what's holding them back, and then I go fix it.`,
} as const;

export type Chapter = {
  marker: string;
  kicker: string;
  title: string;
  body: string;
  /**
   * Optional photo for the chapter. These are Jonathan's own product
   * photographs from the optical years, not stock. Credits in
   * `docs/photo-credits.md`.
   */
  image?: { src: string; alt: string };
};

/** The real story, told the way it would be told out loud. */
export const chapters: Chapter[] = [
  {
    marker: "01",
    kicker: "Where I Started",
    title: "In The Back Of The Shop",
    body:
      "My first job was at an optical company, in the back, making the product. Not glamorous. After a while they " +
      "moved me out front to sell, and eventually I ended up managing the store, which meant a number to hit every " +
      "month and a team to hit it with.",
    image: {
      src: "/photos/story/rayban-frame.webp",
      alt: "Close-up of a black Ray-Ban optical frame at a low angle, the temple signature in focus.",
    },
  },
  {
    marker: "02",
    kicker: "What Happened",
    title: "Hitting A Ceiling",
    body:
      "I worked in corporate stores, in franchises, and in small independents. Spend enough time doing that and you " +
      "can see the whole road in front of you. Mine didn't go as far as I wanted it to, which is an uncomfortable " +
      "thing to work out about your own job.",
  },
  {
    marker: "03",
    kicker: "What I Did About It",
    title: "Back To School",
    body:
      "So I went back. Bachelor's degree at UC Riverside, then a master's in business with a marketing focus. What " +
      "I wanted to understand was why some businesses grow and others just stay busy. I'd worked in both and " +
      "couldn't have told you the difference at the time.",
  },
  {
    marker: "04",
    kicker: "Where I Am Now",
    title: "Using Both Halves",
    body:
      "These days I use both sides of that. Nearly every small business I meet is already good at the thing it " +
      "does. What's missing is usually a clear message, a website that pulls its weight, and numbers the owner can " +
      "read without help.",
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
  title: "What you get",
  points: [
    "Someone who has worked a sales floor, not just read about one.",
    "Business sense and marketing in the same conversation.",
    "My direct number.",
    "A straight answer about whether I can help you, including when the answer is no.",
  ],
} as const;

export const philosophy = {
  title: "You should understand your own business",
  body:
    "You shouldn't need to call a marketing person to have your own numbers explained back to you. I go through " +
    "everything with you as we do it, so when we're finished you can keep it running yourself. Plenty of people " +
    "in this line of work would rather you couldn't.",
} as const;
