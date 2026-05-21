import {
  Scale,
  TrendingUp,
  Target,
  Code,
  Briefcase,
  FileText,
} from "lucide-react";

import type { IndustryPageContent } from "./types";

export const professionalServicesContent: IndustryPageContent = {
  hero: {
    icon: Scale,
    badge: "Professional Services",
    title: "Earn The Lookup",
    description:
      "Most firms I help already get referrals. Then a prospect looks you up. The website needs to sound credible, show real work, and make the right client comfortable reaching out.",
    media: {
      label: "Workspace detail or bookshelf",
      description:
        "Open notebook with handwritten notes, a pen, a coffee, daylight. Or a shallow-focus bookshelf with relevant titles. No models, no glass-conference-room stock.",
      src: "/photos/professional-services/workspace-hero-v2.jpg",
      alt: "Top-down workspace with a laptop, blank phone, open notebook, and pen on a wooden desk.",
    },
    heroGradient: "deep",
    heroBlob: "bottom-right-deep",
    iconMarkGradient: "deep-primary",
  },

  highlightIconGradient: "deep-primary",

  highlights: {
    header: {
      badge: "Where We Help",
      title: "Who This Helps",
      description:
        "This fits firms where trust, clarity, and good-fit clients matter more than raw lead volume.",
    },
    items: [
      {
        icon: Briefcase,
        label: "Consulting & Advisory",
        description: "Consultants and advisors who need a site that matches the quality of the work.",
      },
      {
        icon: Scale,
        label: "Legal Services",
        description: "Firms that need clearer credibility online.",
      },
      {
        icon: FileText,
        label: "Accounting & Finance",
        description: "Practices that want better-fit inquiries and stronger trust before the first call.",
      },
    ],
  },

  challenges: {
    header: {
      badge: "Common Challenges",
      title: "What Prospects Find",
      description:
        "These are the gaps that show up after someone hears your name and starts reading.",
    },
    items: [
      {
        title: "The site feels thin",
        description:
          "The work may be strong, but the website does not give a serious prospect enough confidence.",
      },
      {
        title: "Proof stays in your head",
        description:
          "You have stories worth telling, but they are not doing their job online.",
      },
      {
        title: "Wrong inquiries come in",
        description:
          "You spend time sorting through people who are not a fit.",
      },
      {
        title: "Referrals need backup",
        description:
          "A referral still looks you up. The site should make that introduction stronger.",
      },
    ],
  },

  solutions: {
    header: {
      badge: "What You Get",
      title: "What We Fix",
      description:
        "We sharpen what you say, show the work clearly, and make the website easier for the right client to trust.",
    },
    items: [
      {
        icon: Target,
        title: "Your Message",
        items: [
          "Who you want more of",
          "What makes your firm easier to trust",
          "Case studies that sound clear and real",
        ],
      },
      {
        icon: Code,
        title: "Your Website",
        items: [
          "Fast, modern pages that feel credible",
          "Intake forms that ask better questions",
          "Tracking that shows what brings the right inquiries",
        ],
      },
      {
        icon: TrendingUp,
        title: "Better Inbound",
        items: [
          "SEO built around what prospects search",
          "Pages your referrers can send with confidence",
          "Follow-up that fits a longer sales cycle",
        ],
      },
    ],
  },

  cta: {
    title: "Talk It Through",
    body: "We can look at what prospects see now, which proof belongs on the site, and whether I am the right person to help.",
    secondaryButtonLabel: "See our 5-step process",
  },
};
