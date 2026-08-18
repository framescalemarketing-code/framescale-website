"use client";

import { motion } from "motion/react";
import { Button } from "@/components/design/Button";
import { site } from "@/lib/site";
import { slideUp } from "@/lib/motion";

export const HomeCtaSection = () => (
  <section className="relative py-20 lg:py-32 bg-linear-to-br from-(--brand-primary) to-(--brand-deep) text-white">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <motion.div variants={slideUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="font-headline text-4xl lg:text-6xl mb-6">Growth You Can See and Understand</h2>
        <p className="font-body text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
          {`If you want a marketing partner who does the research, builds around your business, and keeps you informed at every step, let's find out if we are a good fit.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" href={site.bookingPath}>
            Schedule A Call
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="/process"
            className="text-white bg-white/10 hover:bg-white/20 border-white/20"
          >
            See the SCALE Method
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
