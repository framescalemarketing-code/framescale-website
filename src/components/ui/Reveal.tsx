"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { rise, stagger, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger children instead of moving as one block. */
  group?: boolean;
  as?: "div" | "li" | "section";
  /** Anchor target, for revealed blocks that are also link destinations. */
  id?: string;
};

/**
 * Scroll-triggered fade and rise. Honors both `prefers-reduced-motion` and the
 * accessibility widget's reduce-motion toggle by way of MotionProvider.
 */
export function Reveal({ children, className = "", group = false, as = "div", id }: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      id={id}
      className={className}
      variants={group ? stagger : rise}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </Component>
  );
}

/** Child of a `<Reveal group>`; rises on its own beat. */
export function RevealItem({ children, className = "", as = "div", id }: Omit<RevealProps, "group">) {
  const Component = motion[as];
  return (
    <Component id={id} className={className} variants={rise}>
      {children}
    </Component>
  );
}
