"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { CONSENT_EVENT, setAnalyticsConsent, trackEvent, trackPageView } from "@/lib/analytics";

function normalizeText(text: string | null | undefined) {
  return (text ?? "").trim().replace(/\s+/g, " ").toLowerCase();
}

export const GAEventTracker = () => {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string>("");

  // Consent. iubenda dispatches the event on every decision and again on load
  // for a returning visitor with a stored choice. The mount-time check covers
  // the case where the widget finished before React did.
  useEffect(() => {
    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<{ analytics?: boolean }>).detail;
      setAnalyticsConsent(Boolean(detail?.analytics));
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    if (window._iub?.cs?.api?.isConsentGiven?.()) {
      setAnalyticsConsent(true);
    }
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  useEffect(() => {
    const path = pathname;

    if (lastTrackedPath.current === path) return;
    lastTrackedPath.current = path;
    trackPageView(path);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) return;

      const clickable = target.closest("a, button") as HTMLAnchorElement | HTMLButtonElement | null;
      if (!clickable) return;

      const label = normalizeText(clickable.textContent);

      if (clickable instanceof HTMLAnchorElement) {
        const href = clickable.getAttribute("href") ?? "";

        if (href.startsWith("mailto:")) {
          trackEvent("contact_click", { method: "email", label: href.replace("mailto:", "") });
          return;
        }

        if (href.startsWith("tel:")) {
          trackEvent("contact_click", { method: "phone", label: href.replace("tel:", "") });
          return;
        }

        // Links that leave the site: the work sample, LinkedIn. Named
        // `outbound_click` so it cannot collide with the `click` event GA4's
        // enhanced measurement sends when that is switched on.
        let url: URL | null = null;
        try {
          url = new URL(href, window.location.href);
        } catch {
          url = null;
        }
        if (url && url.protocol.startsWith("http") && url.hostname !== window.location.hostname) {
          trackEvent("outbound_click", {
            link_url: url.href,
            link_domain: url.hostname,
            label: label || url.hostname,
            location: pathname,
          });
          return;
        }

        if (
          href.includes("#contact") ||
          href.startsWith("/book") ||
          label.includes("contact") ||
          label.includes("book") ||
          label.includes("get started")
        ) {
          trackEvent("cta_click", {
            label: label || href,
            destination: href,
            location: pathname,
          });
        }
        return;
      }

      if (label.includes("submit") || label.includes("send") || label.includes("book") || label.includes("get started")) {
        trackEvent("cta_click", {
          label,
          location: pathname,
        });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [pathname]);

  return null;
};
