"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent, trackPageView } from "@/lib/analytics";

function normalizeText(text: string | null | undefined) {
  return (text ?? "").trim().replace(/\s+/g, " ").toLowerCase();
}

export const GAEventTracker = () => {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string>("");

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

        if (href.includes("/contact") || label.includes("contact") || label.includes("book") || label.includes("get started")) {
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

    const handleSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!form) return;

      trackEvent("generate_lead", {
        form_id: form.id || "unknown_form",
        form_action: form.getAttribute("action") || pathname,
        location: pathname,
      });
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, [pathname]);

  return null;
};
