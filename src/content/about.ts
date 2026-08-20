import { location, principal } from "@/lib/site";

export const aboutHero = {
  eyebrow: "About",
  headline: `Hi, I'm ${principal.firstName}`,
  lead: `I help ${location.city} business owners figure out what's holding them back, then help them fix it.`,
} as const;

export type Chapter = {
  marker: string;
  kicker: string;
  title: string;
  body: string;
};

/** The founder story, cut to the essentials. Short beats, plain language. */
export const chapters: Chapter[] = [
  {
    marker: "01",
    kicker: "Where I Started",
    title: "Making Glasses In A Lab",
    body:
      "My first job was at an optical company, making glasses in the back. Then I moved out to the sales floor, and " +
      "eventually into managing the store. I learned what customers actually want, and what it takes to hit numbers " +
      "every month.",
  },
  {
    marker: "02",
    kicker: "What Happened",
    title: "Hitting A Ceiling",
    body:
      "I worked in corporate stores, franchises, and small businesses. I could see exactly how far that path went, " +
      "and it wasn't as far as I wanted. So I decided to think bigger than one store.",
  },
  {
    marker: "03",
    kicker: "What I Did About It",
    title: "Back To School",
    body:
      "I went back and earned my bachelor's degree at UC Riverside, then a master's in business with a marketing " +
      "focus. I wanted to understand why some businesses grow and others just stay busy.",
  },
  {
    marker: "04",
    kicker: "Where I Am Now",
    title: "Using Both Sides",
    body:
      "Now I put the two together. Most businesses I meet already do good work. What they're missing is a clear " +
      "message, a website that helps, and numbers they can understand.",
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
    value: "Optical And Retail Management",
    note: "The lab, the sales floor, then running the store.",
  },
  {
    label: "Experience",
    value: "Real Numbers, Real Targets",
    note: "Years of hitting sales goals, not just reporting on them.",
  },
];

export const workingWithMe = {
  eyebrow: "Working With Me",
  title: "What you get",
  points: [
    "Someone who has worked the floor, not just read about it.",
    "Business and marketing advice in the same conversation.",
    "My direct phone number.",
    "An honest answer about whether I can help.",
  ],
} as const;

/**
 * TODO(owner): this is the best section to make your own. Add the
 * neighborhoods you know and the local groups you're part of. Real local
 * detail is what separates this from generic city copy.
 */
export const sanDiegoSection = {
  eyebrow: `Based In ${location.city}`,
  title: `Why ${location.city}`,
  paragraphs: [
    `${location.city} runs on small businesses. Eye doctors competing with the chains, shops working on thin ` +
      "margins, small firms living off referrals. Those are the businesses I know how to help.",
    "Being local means I can come sit down with you and see how things actually work. That matters more than it " +
      "sounds. A lot of bad advice comes from people who never visited the business they were advising.",
    "I keep my list of clients short on purpose. You can't give a business real attention while juggling twenty.",
  ],
} as const;

export const philosophy = {
  eyebrow: "What I Believe",
  title: "You should understand your own business",
  body:
    "You shouldn't need a marketing person to explain your own numbers to you. I go through everything with you " +
    "instead of handing over a report, so when we're done you can keep running it yourself.",
} as const;
