"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Accessibility,
  X,
  Type,
  Contrast,
  Eye,
  Link2,
  RotateCcw,
} from "lucide-react";
import {
  defaultAccessibilitySettings,
  getAccessibilitySettingsSnapshot,
  subscribeAccessibilitySettings,
  type AccessibilitySettings,
  writeAccessibilitySettings,
} from "@/lib/accessibility-settings";

export const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const settings = useSyncExternalStore(
    subscribeAccessibilitySettings,
    getAccessibilitySettingsSnapshot,
    () => defaultAccessibilitySettings,
  );
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close on Escape / outside click
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const update = <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
    writeAccessibilitySettings({ ...settings, [key]: value });
  };

  const reset = () => writeAccessibilitySettings(defaultAccessibilitySettings);

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Accessibility options"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-(--brand-primary) text-white shadow-[0_18px_42px_-18px_rgba(23,120,142,0.7)] hover:bg-(--brand-primary-hover) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2 transition-colors"
      >
        <Accessibility className="h-5 w-5" aria-hidden />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="a11y-panel"
            ref={panelRef}
            role="dialog"
            aria-label="Accessibility options"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-14 left-0 w-76 rounded-2xl border border-border bg-white p-5 shadow-[0_24px_56px_-24px_rgba(38,70,83,0.4)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-headline text-lg text-(--brand-deep)">
                Accessibility
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close accessibility panel"
                className="rounded-md p-1 text-(--brand-neutral) hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary)"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            {/* Text size */}
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-2 font-ui text-xs font-semibold uppercase tracking-wider text-(--brand-neutral)">
                <Type className="h-3.5 w-3.5" aria-hidden />
                Text size
              </div>
              <div
                role="radiogroup"
                aria-label="Text size"
                className="grid grid-cols-3 gap-2"
              >
                {(
                  [
                    { v: 0 as const, label: "A", title: "Default" },
                    { v: 1 as const, label: "A+", title: "Larger" },
                    { v: 2 as const, label: "A++", title: "Largest" },
                  ]
                ).map((opt) => (
                  <button
                    key={opt.v}
                    role="radio"
                    aria-checked={settings.textScale === opt.v}
                    title={opt.title}
                    onClick={() => update("textScale", opt.v)}
                    className={`rounded-lg border px-2 py-2 font-ui text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) ${
                      settings.textScale === opt.v
                        ? "border-(--brand-primary) bg-(--brand-primary) text-white"
                        : "border-border bg-white text-(--brand-deep) hover:border-(--brand-primary)"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <ul className="space-y-2">
              <ToggleRow
                icon={<Contrast className="h-4 w-4" aria-hidden />}
                label="High contrast"
                checked={settings.highContrast}
                onChange={(v) => update("highContrast", v)}
              />
              <ToggleRow
                icon={<Eye className="h-4 w-4" aria-hidden />}
                label="Reduce motion"
                checked={settings.reduceMotion}
                onChange={(v) => update("reduceMotion", v)}
              />
              <ToggleRow
                icon={<Link2 className="h-4 w-4" aria-hidden />}
                label="Underline links"
                checked={settings.underlineLinks}
                onChange={(v) => update("underlineLinks", v)}
              />
            </ul>

            <button
              type="button"
              onClick={reset}
              className="mt-4 inline-flex items-center gap-2 rounded-md px-2 py-1 font-ui text-xs text-(--brand-primary) hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary)"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden />
              Reset to defaults
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type ToggleRowProps = {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
};

const ToggleRow = ({ icon, label, checked, onChange }: ToggleRowProps) => (
  <li>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between rounded-lg border border-border px-3 py-2 text-left hover:border-(--brand-primary) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) transition-colors"
    >
      <span className="flex items-center gap-2 font-body text-sm text-(--brand-deep)">
        <span className="text-(--brand-primary)">{icon}</span>
        {label}
      </span>
      <span
        aria-hidden
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
          checked ? "bg-(--brand-primary)" : "bg-muted"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  </li>
);
