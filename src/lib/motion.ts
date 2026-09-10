import type { Variants } from "motion/react";

/**
 * One variant, used everywhere. The previous design had four directional
 * variants with blur filters; they cost paint time and made long pages feel
 * busy. A single short rise reads as calm and stays out of the way.
 *
 * The `hidden` state carries a zero-length transition on purpose: Reveal
 * moves a block from visible to hidden right after hydration, and that step
 * has to be instant so nothing is seen fading out.
 */
export const rise: Variants = {
  hidden: { opacity: 0, y: 18, transition: { duration: 0 } },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Parent wrapper that walks its children in sequence. */
export const stagger: Variants = {
  hidden: { transition: { duration: 0 } },
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};
