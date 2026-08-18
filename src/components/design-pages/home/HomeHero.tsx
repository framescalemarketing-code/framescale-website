"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/design/Button";
import { site } from "@/lib/site";
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
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.div variants={slideUp} initial="hidden" animate="show" transition={{ delay: 0.15 }} className="mb-6">
              <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary)">
                Principal-Led Growth Marketing
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
              I am Jonathan. I build
              <br />
              <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent">
                marketing that teaches you to scale
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.34 }}
              className="font-body text-xl lg:text-2xl mb-10 leading-relaxed text-(--brand-neutral) lg:max-w-xl mx-auto lg:mx-0"
            >
              I research your market before you spend a dollar, build systems around how your business actually runs, and explain every decision in plain language. I keep a short roster so your project gets real depth.
            </motion.p>

            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.44 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" href={site.bookingPath}>
                Schedule A Call
              </Button>
              <Button size="lg" variant="ghost" href="/about">
                Read My Story
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="lg:pl-4"
          >
            <div
              className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image
                src="/photos/founder/jonathan-about.jpg"
                alt="Jonathan, founder of FrameScale"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 80vw"
                className="object-cover object-[center_15%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-5 pt-12 text-left">
                <p className="font-headline text-xl text-white">Jonathan</p>
                <p className="font-ui text-xs uppercase tracking-wide text-white/80">
                  Founder, FrameScale Inc
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.56 }}
          className="mx-auto mt-12 grid max-w-5xl items-stretch gap-4 text-left sm:grid-cols-3"
        >
          <div className="flex h-full min-h-40 flex-col justify-center rounded-2xl border border-(--brand-primary)/15 bg-white/80 p-5 shadow-[0_18px_40px_-30px_rgba(23,120,142,0.3)] backdrop-blur-sm sm:p-6">
            <div className="font-headline text-3xl leading-tight text-(--brand-primary)">SCALE Method</div>
            <div className="mt-2 font-ui text-sm text-(--brand-neutral)">Five Phase Process</div>
          </div>
          <div className="flex h-full min-h-40 flex-col justify-center rounded-2xl border border-(--brand-primary)/15 bg-white/80 p-5 shadow-[0_18px_40px_-30px_rgba(23,120,142,0.3)] backdrop-blur-sm sm:p-6">
            <div className="font-headline text-3xl leading-tight text-(--brand-primary)">Research-Based Solutions</div>
            <div className="mt-2 font-ui text-sm text-(--brand-neutral)">Built Around Your Business</div>
          </div>
          <div className="flex h-full min-h-40 flex-col justify-center rounded-2xl border border-(--brand-primary)/15 bg-white/80 p-5 shadow-[0_18px_40px_-30px_rgba(23,120,142,0.3)] backdrop-blur-sm sm:p-6">
            <div className="font-headline text-3xl leading-tight text-(--brand-primary)">Short Client Roster</div>
            <div className="mt-2 font-ui text-sm text-(--brand-neutral)">Depth Over Volume</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
