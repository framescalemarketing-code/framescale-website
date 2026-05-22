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
    title: "Help The Right Clients Trust You Faster",
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
      title: "Built For Trust-Led Firms",
      description:
        "This fits firms where trust, clarity, and good-fit clients matter more than raw lead volume.",
    },
    items: [
      {
        icon: Briefcase,
        label: "Consulting & Advisory",
        description: "Consultants and advisors who do strong work and need the site to make that obvious faster.",
      },
      {
        icon: Scale,
        label: "Legal Services",
        description: "Firms that need people to understand the practice, the proof, and the reason to reach out.",
      },
      {
        icon: FileText,
        label: "Accounting & Finance",
        description: "Practices that want better questions, better-fit inquiries, and less explaining on the first call.",
      },
    ],
  },

  challenges: {
    header: {
      badge: "Common Challenges",
      title: "Why Good Prospects Pause",
      description:
        "These are the gaps that show up after someone hears your name and starts reading.",
    },
    items: [
      {
        title: "The Site Feels Thin",
        description:
          "A serious prospect needs more than a logo, a list of services, and a contact form before they trust the next step.",
      },
      {
        title: "Proof Stays In Your Head",
        description:
          "You know the wins, the hard cases, and the reasons clients stay. The site should bring those details forward.",
      },
      {
        title: "Wrong Inquiries Come In",
        description:
          "The wrong people keep reaching out because the site is not clear enough about who you help and how you work.",
      },
      {
        title: "Referrals Need Backup",
        description:
          "Even a warm referral wants to feel reassured. Your site should make the handoff feel easy and credible.",
      },
    ],
  },

  solutions: {
    header: {
      badge: "What You Get",
      title: "What We Make Clearer",
      description:
        "We sharpen what you say, show the work clearly, and make the website easier for the right client to trust.",
    },
    items: [
      {
        icon: Target,
        title: "Your Message",
        items: [
          "The clients you want more of and what they need to hear first",
          "The proof that makes your firm easier to trust",
          "Case studies that sound specific, useful, and real",
        ],
      },
      {
        icon: Code,
        title: "Your Website",
        items: [
          "Pages that explain the work without sounding stiff",
          "Intake forms that help you spot fit before the first conversation",
          "Tracking that shows which pages and channels bring better inquiries",
        ],
      },
      {
        icon: TrendingUp,
        title: "Better Inbound",
        items: [
          "SEO built around what a serious prospect actually searches",
          "Pages your referrers can send without needing to explain everything",
          "Follow-up that respects how long trust can take to build",
        ],
      },
    ],
  },

  cta: {
    title: "Review The Client Path",
    body: "We can look at what a prospect sees now, where confidence drops, and what proof should be doing more work for you.",
    secondaryButtonLabel: "See Our 5-Step Process",
  },
};
