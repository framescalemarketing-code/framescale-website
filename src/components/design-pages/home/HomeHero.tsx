"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/design/Button";
import { slideUp } from "@/lib/motion";

export const HomeHero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const shapeY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const shapeY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const shapeOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-12 lg:pt-14"
    >
      <motion.div style={{ opacity: shapeOpacity }} className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: shapeY1 }}
          className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: shapeY2 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-linear-to-br from-(--brand-secondary)/10 to-(--brand-primary)/10 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={slideUp} initial="hidden" animate="show" transition={{ delay: 0.15 }} className="mb-6">
            <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary)">
              Guided Growth Marketing
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.24 }}
            className="font-headline text-5xl lg:text-6xl mb-6 leading-tight"
            style={{ color: "var(--brand-deep)" }}
          >
            Marketing that
            <br />
            <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent">
              teaches you to scale
            </span>
          </motion.h1>

          <motion.p
            variants={slideUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.34 }}
            className="font-body text-xl lg:text-2xl mb-10 leading-relaxed text-(--brand-neutral) max-w-3xl mx-auto"
          >
            We build custom websites around how your business actually wins in your market, so you can scale with a plan that fits your industry.
          </motion.p>

          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.44 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Button size="lg" href="#industries">
              Choose Your Industry
            </Button>
            <Button size="lg" variant="ghost" href="/process">
              See Our Process
            </Button>
          </motion.div>

          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.56 }}
            className="flex flex-wrap justify-center gap-8 text-left"
          >
            <div>
              <div className="font-headline text-3xl text-(--brand-primary)">Five Phases</div>
              <div className="font-ui text-sm text-(--brand-neutral)">End-To-End Process</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="font-headline text-3xl text-(--brand-primary)">Research-Based Solutions</div>
              <div className="font-ui text-sm text-(--brand-neutral)">Built Around Your Business</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="font-headline text-3xl text-(--brand-primary)">Custom-Built Systems</div>
              <div className="font-ui text-sm text-(--brand-neutral)">For Efficient Strategy</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
