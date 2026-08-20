import type { Variants } from "motion/react";

/**
 * One variant, used everywhere. The previous design had four directional
 * variants with blur filters; they cost paint time and made long pages feel
 * busy. A single short rise reads as calm and stays out of the way.
 */
export const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Parent wrapper that walks its children in sequence. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

/**
 * Shared viewport config. `amount: "some"` matters: these wrappers can be taller
 * than the viewport, and a percentage threshold on a tall container means
 * content sitting in plain sight stays at opacity 0 until the user scrolls far
 * past it. "some" fires as soon as any part enters view.
 */
export const viewportOnce = { once: true, amount: "some" } as const;
