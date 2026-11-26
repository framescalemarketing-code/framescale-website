"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { bookingHrefFor, ctaLabels, footerLinks, site } from "@/lib/site";

const SUPPRESSED_PREFIXES = [
  site.contactPath,
  site.bookingPath,
  ...footerLinks.Legal.map((link) => link.href.split("#")[0]),
];

/**
 * Mobile-only bottom bar. It gives both a call and a booking path without
 * covering the page, and appears only after the first screen has been read.
 */
export function MobileCTABar() {
  const pathname = usePathname();
  const bookHref = bookingHrefFor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The bar competes with the forms on the contact and booking pages, and with
  // the long reading on the legal pages, so keep it off those routes.
  const suppressed = SUPPRESSED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (suppressed) return null;

  return (
    <div
      className={`dark-section fixed inset-x-0 bottom-0 z-30 border-t border-white/10 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={`tel:${site.phoneHref}`}
          tabIndex={visible ? 0 : -1}
          className="flex min-h-11 flex-1 items-center justify-center rounded-(--radius) border border-white/40 px-4 text-center font-ui text-sm font-semibold text-white"
        >
          {ctaLabels.call}
        </a>
        <a
          href={bookHref}
          tabIndex={visible ? 0 : -1}
          className="flex min-h-11 flex-[1.4] items-center justify-center rounded-(--radius) bg-(--cta-deep-bg) px-4 text-center font-ui text-sm font-semibold text-(--cta-deep-fg)"
        >
          {ctaLabels.book}
        </a>
      </div>
    </div>
  );
}
