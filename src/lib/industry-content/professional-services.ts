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
    title: "Credibility before the first call.",
    description:
      "Most of the firms I work with are consultants, with some law and accounting alongside. Referrals carry the work today. The website is either missing or doesn't sound like a partner. The aim is a real firm site and a few proper cases.",
    media: {
      label: "Workspace detail or bookshelf",
      description:
        "Open notebook with handwritten notes, a pen, a coffee, daylight. Or a shallow-focus bookshelf with relevant titles. No models, no glass-conference-room stock.",
    },
    heroGradient: "deep",
    heroBlob: "bottom-right-deep",
    iconMarkGradient: "deep-primary",
  },

  highlightIconGradient: "deep-primary",

  highlights: {
    header: {
      badge: "Where We Help",
      title: "Where Trust Is the Product",
      description:
        "By the time someone reaches out, they've already read everything they can find. The site has to hold up to that quiet research.",
    },
    items: [
      {
        icon: Briefcase,
        label: "Consulting & Advisory",
        description: "Strategy, operations, and management consulting.",
      },
      {
        icon: Scale,
        label: "Legal Services",
        description: "Law firms and specialty practices.",
      },
      {
        icon: FileText,
        label: "Accounting & Finance",
        description: "CPA firms and financial advisors.",
      },
    ],
  },

  challenges: {
    header: {
      badge: "Common Challenges",
      title: "Where Selective Firms Lose Pipeline",
      description:
        "Selective firms want better-fit clients, not a louder pipeline. These gaps usually show up well before paid ads make any sense.",
    },
    items: [
      {
        title: "No site, or a placeholder",
        description:
          "Referrals carry you today. The next one looks you up and finds a placeholder, or a years-old page that gets little attention.",
      },
      {
        title: "Your proof lives off the page",
        description:
          "Your stories are still living inside calls and intros. Without a few real cases on the website, new prospects can't picture themselves in the work.",
      },
      {
        title: "Pipeline that wastes partner time",
        description:
          "Your inbound forms send people who aren't really ready to talk. That eats partner hours every week.",
      },
      {
        title: "Referrals only get you so far",
        description:
          "Sometimes a quarter slows down and word of mouth isn't enough. When inbound has to step in, it should still sound like your firm.",
      },
    ],
  },

  solutions: {
    header: {
      badge: "Our Approach",
      title: "Firm Site, Cases, and Fit",
      description:
        "A firm-grade site, structured cases, and inbound that fits long sales cycles.",
    },
    items: [
      {
        icon: Target,
        title: "Your Voice & Cases",
        items: [
          "Who you serve, in plain terms",
          "How buyers actually research you",
          "Cases that hold up to scrutiny",
        ],
      },
      {
        icon: Code,
        title: "Your Firm's Website",
        items: [
          "Modern, accessible website that loads fast",
          "Intake that asks the right questions",
          "Tracking that works for long deals",
        ],
      },
      {
        icon: TrendingUp,
        title: "Inbound That Sounds Like You",
        items: [
          "SEO when buyers are actually searching",
          "Cases and anonymized outcomes",
          "Pages your referrers can comfortably forward",
        ],
      },
    ],
  },

  cta: {
    title: "Ready to put real work on the site?",
    body: "Book a call. We'll talk through who you actually want to serve, which cases belong on the site, and what's worth measuring before any ads run.",
    secondaryButtonLabel: "See our 5-step process",
  },
};
