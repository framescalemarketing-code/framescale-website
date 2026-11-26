"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode, type Ref } from "react";
import { rise, stagger } from "@/lib/motion";

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
 * Scroll-triggered fade and rise.
 *
 * The server HTML and the first client render are fully visible. Only after
 * hydration, and only for a block that is still below the fold, does it drop to
 * hidden (instantly, see the `hidden` variant) and rise when it scrolls into
 * view. That keeps the page readable with no JavaScript, keeps deep links like
 * /services#strategy landing on a visible card, and keeps a screenshot after a
 * programmatic scroll from coming back blank, which the old render-hidden-first
 * approach did. Honors `prefers-reduced-motion` here and the accessibility
 * widget's reduce-motion toggle by way of MotionProvider.
 */
export function Reveal({ children, className = "", group = false, as = "div", id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: "some" });
  const reduce = useReducedMotion();
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    setArmed(true);
  }, []);

  const hidden = armed && !reduce && !inView;
  const shared = {
    id,
    className,
    variants: group ? stagger : rise,
    initial: false as const,
    animate: hidden ? "hidden" : "show",
  };

  if (as === "li") {
    return (
      <motion.li ref={ref as Ref<HTMLLIElement>} {...shared}>
        {children}
      </motion.li>
    );
  }

  if (as === "section") {
    return (
      <motion.section ref={ref as Ref<HTMLElement>} {...shared}>
        {children}
      </motion.section>
    );
  }

  return (
    <motion.div ref={ref as Ref<HTMLDivElement>} {...shared}>
      {children}
    </motion.div>
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
