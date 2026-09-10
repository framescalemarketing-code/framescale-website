import { principal } from "@/lib/site";

/**
 * Proof. One real site, live, that a visitor can click through. Every claim
 * here is something the site itself shows; nothing about the client's results
 * is asserted because none has been shared for publication.
 */

export type WorkPoint = {
  title: string;
  body: string;
};

export type WorkItem = {
  id: string;
  name: string;
  url: string;
  /** Short label shown as the eyebrow, e.g. "Website · Optical". */
  kind: string;
  industry: string;
  summary: string;
  points: WorkPoint[];
  image: { src: string; alt: string; width: number; height: number };
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

export const workSection = {
  title: "Something I built",
  lead: "One that's live, so you can go and click around it.",
  cta: "See The Site",
} as const;

export const workItems: WorkItem[] = [
  {
    id: "onsight-optics",
    name: "On-Sight Optics",
    url: "https://www.onsightoptics.com",
    kind: "Website",
    industry: "Optical",
    summary:
      "On-Sight Optics runs prescription safety eyewear programs for employers, with a showroom in Miramar. They " +
      "needed one website that could do three jobs at once, and I built the whole thing.",
    points: [
      {
        title: "Three Front Doors",
        body:
          "A new visitor, a program manager, and an employee each arrive needing something different. The site " +
          "asks which one you are and takes you straight there.",
      },
      {
        title: "Booking, Catalog, Showroom",
        body:
          "Fittings get booked online, the frame catalog lives on the site, and the showroom has its own page " +
          "with hours and directions.",
      },
      {
        title: "Handed Over, Not Rented",
        body: "It runs in their own accounts on their own domain, which is how I hand over every site I build.",
      },
    ],
    image: {
      src: "/photos/work/onsight-home.webp",
      alt: `The On-Sight Optics home page, built by ${principal.fullName}`,
      width: 1600,
      height: 1000,
    },
  },
];

/** Empty until a client gives one. The section renders nothing for it while empty. */
export const testimonials: Testimonial[] = [];
