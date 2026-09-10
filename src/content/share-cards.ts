import { location, principal } from "@/lib/site";

/**
 * The link-preview card for each route. Rendered by `src/lib/og/share-card.tsx`
 * from the `opengraph-image.tsx` file in each route segment.
 *
 * `line` is the one sentence a stranger reads in a text thread before deciding
 * whether to tap, so it is written for them, in Jonathan's voice, and not for
 * a search engine. The alt text is what screen readers and some clients show
 * instead of the image.
 */
export type ShareCard = {
  /** Small uppercase line above the title. */
  eyebrow: string;
  /** The large line. Usually the name. */
  title: string;
  /** One sentence under the title. */
  line: string;
  alt: string;
};

const nameAlt = `${principal.displayName}, ${principal.jobTitle} in ${location.city}`;

export const shareCards = {
  home: {
    eyebrow: `${principal.jobTitle} · ${location.city}`,
    title: principal.displayName,
    line: "I find out what's holding your business back, then I fix it with you.",
    alt: nameAlt,
  },
  services: {
    eyebrow: `What I Fix · ${location.city}`,
    title: principal.displayName,
    line: "The numbers, the plan, the website, and Google. Four things, no packages.",
    alt: `What ${principal.displayName} fixes for small businesses in ${location.city}`,
  },
  optical: {
    eyebrow: "Marketing For Optical Practices",
    title: principal.displayName,
    line: "From someone who worked the lab, sold on the floor, and ran the store.",
    alt: `${principal.displayName}, marketing help for optical practices`,
  },
  about: {
    eyebrow: `About · ${location.city}`,
    title: principal.displayName,
    line: "I made glasses, ran the store, then went back to school. The whole story.",
    alt: `About ${nameAlt}`,
  },
  book: {
    eyebrow: principal.displayName,
    title: "Book a free call",
    line: "Half an hour, free, at a time you pick.",
    alt: `Book a free call with ${principal.displayName}`,
  },
} satisfies Record<string, ShareCard>;
