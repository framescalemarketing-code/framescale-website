"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./Button";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-20">
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-linear-to-br from-(--brand-secondary)/10 to-(--brand-primary)/10 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-sm font-semibold uppercase tracking-wider text-(--brand-primary)">
                Strategy + Execution
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-headline text-5xl lg:text-7xl mb-6 leading-tight"
              style={{ color: "var(--brand-deep)" }}
            >
              Optical marketing
              <br />
              that
              <br />
              <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent">
                fills your chair
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-body text-xl lg:text-2xl mb-10 leading-relaxed"
              style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
            >
              Full-stack marketing strategy and execution for small to mid-size optical practices that need more patients, not more noise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg">Start a Project</Button>
              <Button size="lg" variant="ghost">
                See Our Process
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex items-center gap-8"
            >
              <div>
                <div className="font-headline text-3xl text-(--brand-primary)">
                  4-Step
                </div>
                <div className="font-ui text-sm text-(--brand-neutral)">
                  Clear Framework
                </div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="font-headline text-3xl text-(--brand-primary)">
                  Optical
                </div>
                <div className="font-ui text-sm text-(--brand-neutral)">
                  Industry Focus
                </div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="font-headline text-3xl text-(--brand-primary)">
                  Full-Stack
                </div>
                <div className="font-ui text-sm text-(--brand-neutral)">
                  Execution
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-linear-to-br from-(--brand-primary) to-(--brand-deep) p-1">
                <div className="w-full h-full rounded-3xl bg-white p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h3 className="font-headline text-2xl text-(--brand-deep) mb-4">
                        What We Build
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <CapabilityPoint label="Patient Acquisition Strategy" />
                      <CapabilityPoint label="Modern Booking Systems" />
                      <CapabilityPoint label="Local SEO & GMB" />
                      <CapabilityPoint label="Analytics Dashboards" />
                      <CapabilityPoint label="Marketing Automation" />
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <div className="font-ui text-xs uppercase tracking-wider text-(--brand-neutral) mb-2">
                      Our Focus
                    </div>
                    <div className="font-headline text-xl text-(--brand-deep)">
                      Optical Practices
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface CapabilityPointProps {
  label: string;
}

const CapabilityPoint = ({ label }: CapabilityPointProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-(--brand-primary)"></div>
      <span className="font-ui text-sm text-(--brand-deep)">{label}</span>
    </div>
  );
};
