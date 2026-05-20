import type { LucideIcon } from "lucide-react";

export type IndustryHeroGradient = "secondary" | "deep";
export type IndustryHeroBlob = "top-right-primary" | "top-left-secondary" | "bottom-right-deep";
export type IndustryIconGradient = "primary-secondary" | "secondary-primary" | "deep-primary";

export type IndustrySectionHeader = {
  badge: string;
  title: string;
  description: string;
};

export type IndustryChallenge = {
  title: string;
  description: string;
};

export type IndustrySolution = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export type IndustryHighlight = {
  icon: LucideIcon;
  label: string;
  description: string;
};

/**
 * Optional photo slot in the industry hero. When present, the hero renders a
 * two-column layout on `lg` with the text on the left and a visual on the right.
 *
 * - If `src` is set, that image is rendered with `next/image`.
 * - If `src` is not set, a designed placeholder card is rendered using `label`
 *   and `description` as art direction for whoever supplies the photo later.
 */
export type IndustryHeroMedia = {
  /** Short label rendered on the placeholder, e.g. "Frame board, top-down". */
  label: string;
  /** Longer art-direction note for the photographer or for the alt text later. */
  description: string;
  /** Public path to the real photo (e.g. `/photos/healthcare/mg-2639.jpg`). */
  src?: string;
  /** Alt text used when `src` is supplied. Falls back to `label` when omitted. */
  alt?: string;
};

export type IndustryHeroContent = {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  media?: IndustryHeroMedia;
  heroGradient: IndustryHeroGradient;
  heroBlob: IndustryHeroBlob;
  iconMarkGradient: IndustryIconGradient;
};

export type IndustryCtaContent = {
  title: string;
  body: string;
  secondaryButtonLabel: string;
};

export type IndustryPageContent = {
  hero: IndustryHeroContent;
  highlightIconGradient: IndustryIconGradient;
  highlights: {
    header: IndustrySectionHeader;
    items: IndustryHighlight[];
  };
  challenges: {
    header: IndustrySectionHeader;
    items: IndustryChallenge[];
  };
  solutions: {
    header: IndustrySectionHeader;
    items: IndustrySolution[];
  };
  cta: IndustryCtaContent;
};
