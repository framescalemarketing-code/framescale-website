import {
  Heart,
  TrendingUp,
  Target,
  Code,
  Stethoscope,
  Eye,
  Smile,
} from "lucide-react";

import type { IndustryPageContent } from "./types";

export const healthcareContent: IndustryPageContent = {
  hero: {
    icon: Heart,
    badge: "Optical-Led Healthcare",
    title: "Your practice is stronger than your website.",
    description:
      "Most independent optical practices already get steady patients from word of mouth. The website should match: clean, easy to book on a phone, honest about who you are. I worked the retail floor and the lab for six years, so we can talk shop.",
    media: {
      label: "Inside an independent optical practice",
      description:
        "Frames on display in soft daylight, a piece of the exam room visible. No staged people, no stock smiles.",
    },
    heroGradient: "secondary",
    heroBlob: "top-right-primary",
    iconMarkGradient: "primary-secondary",
  },

  highlightIconGradient: "primary-secondary",

  highlights: {
    header: {
      badge: "Healthcare Specialties",
      title: "Optical first. Other care welcome.",
      description:
        "Optical is where I have hands-on experience. Dental and other practices come in for the same fundamentals: trust, easy booking, and being found locally.",
    },
    items: [
      {
        icon: Eye,
        label: "Optical & Optometry",
        description: "Independent optical practices that fit and sell their own frames.",
      },
      {
        icon: Smile,
        label: "Dental Practices",
        description: "General dentistry and specialty clinics.",
      },
      {
        icon: Stethoscope,
        label: "Medical Offices",
        description: "Specialty practices and small multi-provider groups.",
      },
    ],
  },

  challenges: {
    header: {
      badge: "Common Challenges",
      title: "Where Practice Websites Fall Short",
      description:
        "Your patient flow probably feels steady. These are the gaps that usually show up after someone Googles you.",
    },
    items: [
      {
        title: "The website feels stuck",
        description:
          "Old design, slow on phones, or a tone that just doesn't sound like you. When someone Googles you after a visit, the site should not be a surprise.",
      },
      {
        title: "Marketing stuck on trends",
        description:
          "Whoever runs your social leans on memes and trends. Reviews, scheduling, and showing up on Google get ignored.",
      },
      {
        title: "Burned by the last agency",
        description:
          "The previous shop never really got to know your patients. AI tools can spit out copy. Neither of them will sit with you and explain what's actually working.",
      },
      {
        title: "The referral lookup falls flat",
        description:
          "Someone hears your name, Googles you on their phone, and the site doesn't answer what they want to know: are you in-network, can I book, is this place for me?",
      },
    ],
  },

  solutions: {
    header: {
      badge: "Our Approach",
      title: "Research, Trust, and Booking on One Thread",
      description:
        "You work with me directly. We get the message clear before any ads run. We measure by booked appointments.",
    },
    items: [
      {
        icon: Target,
        title: "Your Story & Patients",
        items: [
          "Who your patients are and how they find you",
          "What makes the practice yours, in your words",
          "Your local market and the practices nearby",
        ],
      },
      {
        icon: Code,
        title: "A Website Patients Trust",
        items: [
          "Modern design that works on a phone",
          "Online booking your front desk will use",
          "Pages that answer what new patients ask",
        ],
      },
      {
        icon: TrendingUp,
        title: "Steady Patient Growth",
        items: [
          "Showing up on Google when patients search",
          "Reviews and replies that sound like you",
          "Ads only when the numbers make sense",
        ],
      },
    ],
  },

  cta: {
    title: "Want a site that matches your practice?",
    body: "Easiest first step is a short call. We can talk through what your patients are seeing, where the site falls short, and whether I'm the right person to help.",
    secondaryButtonLabel: "See our 5-step process",
  },
};
