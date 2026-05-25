"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";
import {
  defaultAccessibilitySettings,
  getAccessibilitySettingsSnapshot,
  subscribeAccessibilitySettings,
} from "@/lib/accessibility-settings";

interface MotionProviderProps {
  children: ReactNode;
}

export const MotionProvider = ({ children }: MotionProviderProps) => {
  const settings = useSyncExternalStore(
    subscribeAccessibilitySettings,
    getAccessibilitySettingsSnapshot,
    () => defaultAccessibilitySettings,
  );

  return (
    <MotionConfig
      reducedMotion={settings.reduceMotion ? "always" : "user"}
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
