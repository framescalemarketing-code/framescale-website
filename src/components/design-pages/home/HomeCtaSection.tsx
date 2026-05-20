"use client";

import { motion } from "motion/react";
import { Button } from "@/components/design/Button";
import { site } from "@/lib/site";
import { slideUp } from "@/lib/motion";

export const HomeCtaSection = () => (
  <section className="relative py-20 lg:py-32 bg-linear-to-br from-(--brand-primary) to-(--brand-deep) text-white">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <motion.div variants={slideUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="font-headline text-4xl lg:text-6xl mb-6">Growth Without the Black Box</h2>
        <p className="font-body text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
          {`If you want a marketing partner who does the homework first, gives you direct access, and teaches as you go, let's talk about fit.`}
        </p>
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
            Learn About Our Process
          </Button>
        </div>
        <p className="font-body text-sm text-white/60 mt-8">
          Free 30-minute intro call. I listen, ask direct questions, and leave you with an honest next step. If we are not the right fit, I will say so.
        </p>
      </motion.div>
    </div>
  </section>
);
