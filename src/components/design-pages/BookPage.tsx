"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { PageBackLink } from "../design/PageBackLink";
import { site } from "@/lib/site";
import { slideUp } from "@/lib/motion";
import { useBookingScheduler } from "@/lib/booking/use-booking-scheduler";
import { BookingSuccessView } from "./book/BookingSuccessView";
import { BookingSchedulerLoading } from "./book/BookingSchedulerLoading";
import {
  PAGE_BOOK_FOOTER,
  PAGE_HERO_INNER,
  PAGE_SHELL_FLUID_RELATIVE_FULL,
} from "@/lib/page-layout";

const BookingSchedulerPanel = dynamic(
  () => import("./book/BookingSchedulerPanel").then((m) => ({ default: m.BookingSchedulerPanel })),
  {
    ssr: false,
    loading: () => <BookingSchedulerLoading />,
  },
);

export const BookPage = () => {
  const scheduler = useBookingScheduler();

  if (scheduler.success) {
    return (
      <BookingSuccessView
        bookedWhenLabel={scheduler.bookedWhenLabel}
        onBookAnother={scheduler.resetBooking}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-28 pb-8 sm:pt-32 sm:pb-9">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className={PAGE_SHELL_FLUID_RELATIVE_FULL}>
          <div className={PAGE_HERO_INNER}>
            <motion.div variants={slideUp} initial="hidden" animate="show">
              <PageBackLink className="mb-6" />
              <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
                Intro Call
              </span>
              <h1
                className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight px-1"
                style={{ color: "var(--brand-deep)" }}
              >
                Book The Call
              </h1>
              <p
                className="font-body text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl xl:max-w-3xl mx-auto px-1"
                style={{ color: "var(--brand-neutral)" }}
              >
                Pick a time that works for you. The call is 30 minutes. We will talk about where things feel unclear, what you have already tried, and whether I am the right fit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingSchedulerPanel scheduler={scheduler} />

      <section className="relative py-12 sm:py-16 bg-muted border-t border-border pb-[max(3rem,env(safe-area-inset-bottom,0px))]">
        <div className={PAGE_BOOK_FOOTER}>
          <Mail className="w-8 h-8 text-(--brand-primary) mx-auto mb-4" aria-hidden />
          <p className="font-body text-(--brand-neutral) leading-relaxed">
            This booking tool runs inside this site. After you book, you will get a confirmation email and a confirmation screen here. Questions?{" "}
            <a href={`mailto:${site.email}`} className="text-(--brand-primary) font-semibold hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};
