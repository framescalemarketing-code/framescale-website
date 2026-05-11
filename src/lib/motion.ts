import type { Variants } from "motion/react";

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 44, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -72, filter: "blur(12px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.76, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 72, filter: "blur(12px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.76, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideByIndex = (index: number): Variants =>
  index % 2 === 0 ? slideInFromLeft : slideInFromRight;
