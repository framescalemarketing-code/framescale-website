import {
  ShoppingBag,
  TrendingUp,
  Target,
  Code,
  Store,
  ShoppingCart,
  Package,
} from "lucide-react";

import type { IndustryPageContent } from "./types";

export const retailContent: IndustryPageContent = {
  hero: {
    icon: ShoppingBag,
    badge: "Retail & E-commerce",
    title: "When cost per customer climbs, the product is rarely the real problem.",
    description:
      "For online stores with a small team, maybe with a store attached. By the time you call me in, you don't need a hype account. You need someone to figure out if the leak is in the story, the customer, or where you're putting ads.",
    media: {
      label: "Real packing station or storefront",
      description:
        "Brown paper, tape, partial box at a workbench, or a warm storefront window at dusk. No models, no shopping-bag-with-tablet clichés.",
    },
    heroGradient: "secondary",
    heroBlob: "top-left-secondary",
    iconMarkGradient: "secondary-primary",
  },

  highlightIconGradient: "secondary-primary",

  highlights: {
    header: {
      badge: "Retail Verticals",
      title: "Different setups, different leaks",
      description:
        "A store with a website, an online brand with a showroom, or marketplaces. Each one leaks margin in a different place.",
    },
    items: [
      {
        icon: Store,
        label: "Physical Retail",
        description: "Showrooms and stores that are growing online.",
      },
      {
        icon: ShoppingCart,
        label: "E-commerce Brands",
        description: "Mostly online, sometimes with retail.",
      },
      {
        icon: Package,
        label: "Product Brands",
        description: "Specialty products sold across several places.",
      },
    ],
  },

  challenges: {
    header: {
      badge: "Common Challenges",
      title: "Retail Growth Problems We Untangle",
      description:
        "Strong sales teams hide a lot. These patterns tend to surface once ad spend climbs and profit doesn't follow.",
    },
    items: [
      {
        title: "Wrong message, buyer, or place",
        description:
          "You might be aiming at the wrong buyer. Or you're showing it on the wrong channel for that buyer. Ad spend climbs and revenue doesn't follow.",
      },
      {
        title: "Customer cost eats margin",
        description:
          "Between ads, SEO, and marketplace fees, you can't quite see how each order's margin lines up with what you spent to get it.",
      },
      {
        title: "The site lags your floor",
        description:
          "Your team sells in person. The website doesn't keep up: mobile checkout is slow, the product story is thin, and the numbers don't match what your register shows.",
      },
      {
        title: "Numbers live in scattered tabs",
        description:
          "Store sales, web analytics, and marketplace reports all live in different dashboards. Three people on your team will give you three different answers about what's working.",
      },
    ],
  },

  solutions: {
    header: {
      badge: "Our Approach",
      title: "Clarity First, Then Scale",
      description:
        "You'll see why we change the message, the channel, or the numbers before any budget jumps.",
    },
    items: [
      {
        icon: Target,
        title: "Your Brand & Buyer",
        items: [
          "Category and competitor research",
          "Where your customers actually buy",
          "Picking channels that fit your buyer",
        ],
      },
      {
        icon: Code,
        title: "Storefront & Checkout",
        items: [
          "Shopify or fully custom storefronts",
          "Checkout, payments, and subscriptions",
          "Faster pages and a higher buy rate",
        ],
      },
      {
        icon: TrendingUp,
        title: "Ads & Follow-Up",
        items: [
          "Ads that stay inside your margin",
          "SEO aligned to how people actually search",
          "Follow-up email and SMS for repeat buyers",
        ],
      },
    ],
  },

  cta: {
    title: "Fix the leak before you spend more?",
    body: "Book a call. I'll look at where the money's going, ask a lot of questions about how you sell, and tell you honestly if I'm the right person to help.",
    secondaryButtonLabel: "See our 5-step process",
  },
};
