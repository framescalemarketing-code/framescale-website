"use client";

export type AccessibilitySettings = {
  textScale: 0 | 1 | 2;
  highContrast: boolean;
  reduceMotion: boolean;
  underlineLinks: boolean;
};

export const ACCESSIBILITY_STORAGE_KEY = "framescale-a11y";

export const defaultAccessibilitySettings: AccessibilitySettings = {
  textScale: 0,
  highContrast: false,
  reduceMotion: false,
  underlineLinks: false,
};

const a11yListeners = new Set<() => void>();

let cachedSnapshot: AccessibilitySettings = defaultAccessibilitySettings;

export function applyAccessibilitySettings(settings: AccessibilitySettings) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  root.classList.toggle("a11y-text-lg", settings.textScale === 1);
  root.classList.toggle("a11y-text-xl", settings.textScale === 2);
  root.classList.toggle("a11y-high-contrast", settings.highContrast);
  root.classList.toggle("a11y-reduce-motion", settings.reduceMotion);
  root.classList.toggle("a11y-underline-links", settings.underlineLinks);
}

export function accessibilitySettingsEqual(a: AccessibilitySettings, b: AccessibilitySettings): boolean {
  return (
    a.textScale === b.textScale &&
    a.highContrast === b.highContrast &&
    a.reduceMotion === b.reduceMotion &&
    a.underlineLinks === b.underlineLinks
  );
}

export function loadAccessibilitySettingsFromStorage(): AccessibilitySettings {
  try {
    const raw = window.localStorage.getItem(ACCESSIBILITY_STORAGE_KEY);
    if (!raw) return defaultAccessibilitySettings;

    const parsed = JSON.parse(raw) as Partial<AccessibilitySettings>;
    return {
      textScale: parsed.textScale ?? defaultAccessibilitySettings.textScale,
      highContrast: parsed.highContrast ?? defaultAccessibilitySettings.highContrast,
      reduceMotion: parsed.reduceMotion ?? defaultAccessibilitySettings.reduceMotion,
      underlineLinks: parsed.underlineLinks ?? defaultAccessibilitySettings.underlineLinks,
    };
  } catch {
    return defaultAccessibilitySettings;
  }
}

export function getAccessibilitySettingsSnapshot(): AccessibilitySettings {
  const loaded = loadAccessibilitySettingsFromStorage();

  if (accessibilitySettingsEqual(cachedSnapshot, loaded)) {
    return cachedSnapshot;
  }

  cachedSnapshot = loaded;
  applyAccessibilitySettings(cachedSnapshot);
  return cachedSnapshot;
}

export function subscribeAccessibilitySettings(listener: () => void) {
  a11yListeners.add(listener);

  const onStorage = (event: StorageEvent) => {
    if (event.key === ACCESSIBILITY_STORAGE_KEY) {
      listener();
    }
  };

  window.addEventListener("storage", onStorage);

  return () => {
    a11yListeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function notifyAccessibilitySettings() {
  a11yListeners.forEach((listener) => listener());
}

export function writeAccessibilitySettings(next: AccessibilitySettings) {
  if (accessibilitySettingsEqual(cachedSnapshot, next)) return;

  cachedSnapshot = next;

  try {
    window.localStorage.setItem(ACCESSIBILITY_STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore storage errors.
  }

  applyAccessibilitySettings(cachedSnapshot);
  notifyAccessibilitySettings();
}