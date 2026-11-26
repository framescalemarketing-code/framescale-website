"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

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
  /** Called once if the Cloudflare script never arrives or the widget errors. */
  onFailed?: () => void;
  /** Shown in place of the widget after a failure: a way to reach Jonathan without it. */
  fallback?: ReactNode;
  resetSignal?: number;
  label?: string;
  descriptionId?: string;
};

const POLL_MS = 150;
/** About nine seconds. Ad blockers and strict corporate networks never deliver the script at all. */
const MAX_POLLS = 60;

export function TurnstileWidget({
  siteKey,
  onTokenChange,
  onFailed,
  fallback,
  resetSignal = 0,
  label = "Security verification",
  descriptionId,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onFailedRef = useRef(onFailed);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    onFailedRef.current = onFailed;
  }, [onFailed]);

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    let cancelled = false;
    let retryTimer: number | null = null;
    let polls = 0;

    const fail = () => {
      if (cancelled) return;
      setFailed(true);
      onTokenChange("");
      onFailedRef.current?.();
    };

    const renderWidget = () => {
      if (cancelled || widgetIdRef.current || !containerRef.current) return;

      if (!window.turnstile) {
        polls += 1;
        if (polls >= MAX_POLLS) {
          fail();
          return;
        }
        retryTimer = window.setTimeout(renderWidget, POLL_MS);
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
          fail();
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

  if (failed) {
    return fallback ? <div role="status">{fallback}</div> : null;
  }

  return (
    <div className="turnstile-fit" role="group" aria-label={label} aria-describedby={descriptionId}>
      <div ref={containerRef} />
    </div>
  );
}
