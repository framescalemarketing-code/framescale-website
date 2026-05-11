"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

interface MotionProviderProps {
  children: ReactNode;
}

export const MotionProvider = ({ children }: MotionProviderProps) => {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        type: "tween",
        duration: 1.02,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionConfig>
  );
};
