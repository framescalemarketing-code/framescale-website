"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          theme?: "auto" | "light" | "dark";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  siteKey: string;
  onTokenChange: (token: string) => void;
  resetSignal?: number;
  label?: string;
  descriptionId?: string;
};

export function TurnstileWidget({
  siteKey,
  onTokenChange,
  resetSignal = 0,
  label = "Security verification",
  descriptionId,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    let cancelled = false;
    let retryTimer: number | null = null;

    const renderWidget = () => {
      if (cancelled || widgetIdRef.current || !containerRef.current) return;

      if (!window.turnstile) {
        retryTimer = window.setTimeout(renderWidget, 150);
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: "light",
        callback(token) {
          onTokenChange(token);
        },
        "expired-callback"() {
          onTokenChange("");
        },
        "error-callback"() {
          onTokenChange("");
        },
      });
    };

    renderWidget();

    return () => {
      cancelled = true;
      if (retryTimer !== null) {
        window.clearTimeout(retryTimer);
      }
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [onTokenChange, siteKey]);

  useEffect(() => {
    if (!widgetIdRef.current || !window.turnstile) return;
    window.turnstile.reset(widgetIdRef.current);
    onTokenChange("");
  }, [onTokenChange, resetSignal]);

  if (!siteKey) return null;

  return (
    <div role="group" aria-label={label} aria-describedby={descriptionId}>
      <div ref={containerRef} />
    </div>
  );
}
