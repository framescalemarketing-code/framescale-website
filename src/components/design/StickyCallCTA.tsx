"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";
import Link from "next/link";

export const StickyCallCTA = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hideOnRoutes = ["/contact"];
    if (hideOnRoutes.includes(pathname)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- pathname-driven visibility
      setVisible(false);
      return;
    }
    const onScroll = () => {
      // Show after a viewport of scroll (past hero)
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-(--brand-primary) px-5 py-3 text-white shadow-[0_18px_42px_-18px_rgba(23,120,142,0.7)] hover:bg-[#145F71] focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2 transition-all duration-200 font-ui text-sm font-semibold"
            aria-label="Book an Intro Call"
          >
            <Calendar className="w-4 h-4" aria-hidden />
            <span className="hidden sm:inline">Book Intro Call</span>
            <span className="sm:hidden">Book Call</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
