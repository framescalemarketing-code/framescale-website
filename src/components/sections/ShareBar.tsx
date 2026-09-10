"use client";

import { useEffect, useState } from "react";
import { Check, Link2, Share2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { shareBar } from "@/content/home";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/lib/site";

/**
 * A single line for the person who was sent the link and knows someone else
 * who needs it. On a phone the button opens the native share sheet with a
 * pre-written sentence; everywhere else it copies the address.
 *
 * `canShare` is resolved after mount rather than during render, so the server
 * HTML and the first client paint agree.
 */
export function ShareBar() {
  const [canShare, setCanShare] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const share = async () => {
    const url = site.url;

    if (canShare) {
      try {
        await navigator.share({ title: shareBar.shareTitle, text: shareBar.shareText, url });
        trackEvent("share", { method: "native", content_type: "page", item_id: url });
        return;
      } catch (err) {
        // Cancelling the sheet rejects with AbortError. Anything else falls
        // through to the clipboard.
        if (err instanceof DOMException && err.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareBar.shareText} ${url}`);
      setCopied(true);
      trackEvent("share", { method: "copy", content_type: "page", item_id: url });
    } catch {
      window.prompt(shareBar.copyButton, url);
    }
  };

  const Icon = copied ? Check : canShare ? Share2 : Link2;
  const label = copied ? shareBar.copied : canShare ? shareBar.button : shareBar.copyButton;

  return (
    <Section size="compact" ruled>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="measure text-(--text-muted)">{shareBar.text}</p>
        <button
          type="button"
          onClick={share}
          aria-live="polite"
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-(--brand-primary) px-5 py-2.5 font-ui text-sm font-semibold text-(--brand-primary) transition-colors hover:bg-(--brand-primary) hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--brand-primary)"
        >
          <Icon className="size-4 shrink-0" aria-hidden="true" />
          {label}
        </button>
      </div>
    </Section>
  );
}
