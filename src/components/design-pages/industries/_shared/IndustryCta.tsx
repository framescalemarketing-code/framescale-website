"use client";

import { motion } from "motion/react";
import { Button } from "@/components/design/Button";
import type { IndustryCtaContent } from "@/lib/industry-content/types";
import { slideUp } from "@/lib/motion";
import { site } from "@/lib/site";

type IndustryCtaProps = IndustryCtaContent;

export const IndustryCta = ({ title, body, secondaryButtonLabel }: IndustryCtaProps) => (
  <section className="relative py-20 lg:py-32 bg-linear-to-br from-[#2E8A8C] via-(--brand-primary) to-(--brand-deep) text-white overflow-hidden">
    <div className="grain-overlay" aria-hidden />
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
      <motion.div variants={slideUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="font-headline text-4xl lg:text-5xl mb-6">{title}</h2>
        <p className="font-body text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-xl mx-auto">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" href={site.bookingPath}>
            Schedule intro call
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="/process"
            className="text-white bg-white/10 hover:bg-white/20 border-white/20"
          >
            {secondaryButtonLabel}
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
