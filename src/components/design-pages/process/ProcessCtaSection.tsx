"use client";

import { motion } from "motion/react";
import { Button } from "@/components/design/Button";
import { site } from "@/lib/site";
import { slideUp } from "@/lib/motion";

export const ProcessCtaSection = () => (
  <section className="relative py-20 lg:py-32 bg-linear-to-br from-(--brand-primary) to-(--brand-deep) text-white">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <motion.div variants={slideUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="font-headline text-4xl lg:text-5xl mb-6">Curious How This Maps to You?</h2>
        <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
          Share your industry, goals, and where growth feels stuck. I will walk you through how the five phases would look on your timeline.
        </p>
        <Button variant="secondary" size="lg" href={site.bookingPath}>
          Schedule intro call
        </Button>
      </motion.div>
    </div>
  </section>
);
