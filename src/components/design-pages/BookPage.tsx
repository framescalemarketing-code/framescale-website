"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { CalendarClock, Mail, ShieldCheck, TimerReset } from "lucide-react";
import { PageBackLink } from "../design/PageBackLink";
import { Button } from "../design/Button";
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

type BookPageProps = {
  turnstileSiteKey: string;
};

export const BookPage = ({ turnstileSiteKey }: BookPageProps) => {
  const scheduler = useBookingScheduler({
    requireTurnstile: Boolean(turnstileSiteKey),
  });

  const bookingHighlights = [
    {
      icon: CalendarClock,
      title: "30 Minute Intro Call",
      body: "Enough time to understand the business, the pressure points, and the next decision.",
    },
    {
      icon: TimerReset,
      title: "Simple Scheduling",
      body: "Pick a live slot, confirm your details, and get a clear confirmation without extra steps.",
    },
    {
      icon: ShieldCheck,
      title: "No Sales Team Detour",
      body: "You talk directly with the person doing the strategy and the work.",
    },
  ];

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
                Call
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
                Choose a time that works for you. In 30 minutes, we can talk through what feels unclear, what you have already tried, and whether I am the right fit to help.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-5xl mx-auto text-left">
                {bookingHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-(--brand-primary)/15 bg-white/80 p-4 shadow-[0_18px_40px_-28px_rgba(23,120,142,0.35)] backdrop-blur-sm"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h2 className="mb-2 font-headline text-lg" style={{ color: "var(--brand-deep)" }}>
                      {item.title}
                    </h2>
                    <p className="font-body text-sm leading-relaxed text-(--brand-neutral)">{item.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingSchedulerPanel scheduler={scheduler} turnstileSiteKey={turnstileSiteKey} />

      <section className="relative py-12 sm:py-16 bg-muted border-t border-border pb-[max(3rem,env(safe-area-inset-bottom,0px))]">
        <div className={PAGE_BOOK_FOOTER}>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_20px_50px_-34px_rgba(38,70,83,0.25)] sm:p-8">
            <Mail className="mx-auto mb-4 h-8 w-8 text-(--brand-primary)" aria-hidden />
            <h2 className="mb-3 font-headline text-3xl" style={{ color: "var(--brand-deep)" }}>
              Prefer To Start In Writing?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl font-body leading-relaxed text-(--brand-neutral)">
              Use the contact form if you want to send context, links, or questions first. You can always book the call after the direction feels clearer.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact" size="lg" icon="arrow">
                Contact FrameScale
              </Button>
              <p className="font-body text-sm text-(--brand-neutral)">A clear written start is often the fastest way to get unstuck.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
