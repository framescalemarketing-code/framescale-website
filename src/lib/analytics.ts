const rawMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const GA_MEASUREMENT_ID = rawMeasurementId?.trim() || undefined;

/** DOM event the iubenda callbacks dispatch with `{ analytics: boolean }`. */
export const CONSENT_EVENT = "framescale:consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    _iub?: {
      cs?: {
        api?: {
          isConsentGiven?: () => boolean;
        };
      };
    };
  }
}

type GAEventParams = Record<string, string | number | boolean | null | undefined>;

/**
 * Nothing is sent to GA until iubenda reports that the visitor accepted.
 * Consent Mode already keeps the tag itself from storing anything, but the
 * site's own `page_view` and click events would still leave the browser as
 * cookieless pings, and a "Reject all" button has to mean what it says. Events
 * queue until the answer arrives, capped so a long browse before a decision
 * does not pile up.
 */
let consentGranted = false;
const pending: Array<() => void> = [];
const PENDING_CAP = 25;

export function setAnalyticsConsent(granted: boolean) {
  consentGranted = granted;
  if (!granted) {
    pending.length = 0;
    return;
  }
  const queued = pending.splice(0, pending.length);
  for (const send of queued) send();
}

function dispatch(send: () => void) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  if (!consentGranted) {
    if (pending.length < PENDING_CAP) pending.push(send);
    return;
  }
  send();
}

export function trackEvent(eventName: string, params?: GAEventParams) {
  dispatch(() => {
    window.gtag?.("event", eventName, params ?? {});
  });
}

export function trackPageView(path: string) {
  dispatch(() => {
    window.gtag?.("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  });
}
