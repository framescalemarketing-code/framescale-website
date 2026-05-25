"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const HIDE_STICKY_CTA_ON: string[] = ["/contact", site.bookingPath];

export const StickyCallCTA = () => {
  const pathname = usePathname();
  const hiddenOnRoute = HIDE_STICKY_CTA_ON.includes(pathname);
  const [scrollPastHero, setScrollPastHero] = useState(false);

  useEffect(() => {
    if (hiddenOnRoute) return;
    const onScroll = () => {
      setScrollPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hiddenOnRoute]);

  const visible = !hiddenOnRoute && scrollPastHero;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-19 z-40 max-[420px]:right-18"
        >
          <Link
            href={site.bookingPath}
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-(--brand-primary) px-4 py-3 text-white shadow-[0_18px_42px_-18px_rgba(23,120,142,0.7)] hover:bg-(--brand-primary-hover) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2 transition-all duration-200 font-ui text-sm font-semibold sm:px-5"
            aria-label="Schedule A Call"
          >
            <Calendar className="w-4 h-4" aria-hidden />
            <span>Schedule A Call</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
