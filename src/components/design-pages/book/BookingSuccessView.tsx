"use client";

import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/design/Button";
import { site } from "@/lib/site";
import { slideUp } from "@/lib/motion";
import { PAGE_SUCCESS_INNER } from "@/lib/page-layout";

type BookingSuccessViewProps = {
  bookedWhenLabel: string | null;
  onBookAnother: () => void;
};

export const BookingSuccessView = ({ bookedWhenLabel, onBookAnother }: BookingSuccessViewProps) => (
  <div className="min-h-screen">
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
      </div>
      <div className={PAGE_SUCCESS_INNER}>
        <motion.div variants={slideUp} initial="hidden" animate="show" aria-live="polite">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary)">
            <Calendar className="h-8 w-8 text-white" aria-hidden />
          </div>
          <h1
            className="font-headline text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-4"
            style={{ color: "var(--brand-deep)" }}
          >
            You are on the calendar
          </h1>
          {bookedWhenLabel && (
            <p className="font-headline text-lg sm:text-xl md:text-2xl text-(--brand-primary) mb-6 leading-snug px-1">
              {bookedWhenLabel}
            </p>
          )}
          <p className="font-body text-lg text-(--brand-neutral) leading-relaxed mb-4">
            Your time is saved on our site. You should receive a confirmation email at the address you entered.
            We also notify our team so everyone has the same details.
          </p>
          <p className="font-body text-sm text-(--brand-neutral) leading-relaxed mb-10">
            Need to change it? Email{" "}
            <a href={`mailto:${site.email}`} className="text-(--brand-primary) font-semibold hover:underline">
              {site.email}
            </a>{" "}
            and reference the time you chose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" icon="arrow" onClick={onBookAnother}>
              Book another time
            </Button>
            <Button variant="ghost" size="lg" href="/" icon="arrow">
              Back to home
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);
