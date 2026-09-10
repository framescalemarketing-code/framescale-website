"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { bookingHrefFor, ctaLabels, footerLinks, site } from "@/lib/site";

/** The legal pages have no form to point at, so the bar stays off all of them. */
const SUPPRESSED_PREFIXES = footerLinks.Legal.map((link) => link.href.split("#")[0]);

/**
 * Mobile-only bottom bar. Replaces the old floating circular button, which
 * covered content and offered a single action. This gives both a call and a
 * booking path without obscuring the page.
 */
export function MobileCTABar() {
  const pathname = usePathname();
  const bookHref = bookingHrefFor(pathname);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const suppressed = SUPPRESSED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (suppressed) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-(--border) bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={`tel:${site.phoneHref}`}
          tabIndex={visible ? 0 : -1}
          className="flex-1 rounded-full border border-(--brand-primary) px-4 py-3 text-center font-ui text-sm font-semibold text-(--brand-primary)"
        >
          {ctaLabels.call}
        </a>
        <a
          href={bookHref}
          tabIndex={visible ? 0 : -1}
          className="flex-[1.4] rounded-full bg-(--brand-primary) px-4 py-3 text-center font-ui text-sm font-semibold text-white"
        >
          {ctaLabels.book}
        </a>
      </div>
    </div>
  );
}
