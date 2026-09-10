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
        // The default for anything that does not set its own. It used to be
        // just over a second, which made every hover and panel feel slow.
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionConfig>
  );
};
