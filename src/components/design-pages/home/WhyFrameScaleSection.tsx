"use client";

import { motion } from "motion/react";
import { Target, Code, BarChart3, Users, type LucideIcon } from "lucide-react";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const WhyFrameScaleSection = () => (
  <section className="relative py-20 lg:py-32 bg-muted">
    <div className={PAGE_SHELL_INDUSTRY}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={slideInFromLeft} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-headline text-4xl lg:text-5xl mb-6" style={{ color: "var(--brand-deep)" }}>
            Less Noise. More Clarity.
          </h2>
          <p
            className="font-body text-lg leading-relaxed mb-6"
            style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
          >
            Most owners have seen smart strategy that never ships, or busy tactics that never tie back to how the business actually makes money. That pattern burns budget and trust.
          </p>
          <p
            className="font-body text-lg leading-relaxed"
            style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
          >
            FrameScale stays intentionally small. Strategy, custom web, and campaigns stay on one thread with one lead, so growth is something you can see, question, and carry forward.
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-linear-to-br from-(--brand-primary) to-(--brand-deep) rounded-3xl p-10 text-white"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline text-2xl mb-3">What Makes This Different</h3>
              <p className="font-body text-white/90 leading-relaxed" style={{ maxWidth: "none" }}>
                {`You work with someone who holds a bachelor's and a master's in business, keeps concurrent clients low so you get depth, and will not ship campaigns until the homework says they are worth doing. Sites are built for you, not dragged out of a template library.`}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <ValuePoint text="Direct access to the principal, not a rotating account bench" icon={Users} />
            <ValuePoint text="Research before spend. No guessing inside the ad platform" icon={Target} />
            <ValuePoint text="Custom marketing sites instead of WordPress or Wix shortcuts" icon={Code} />
            <ValuePoint text="SEO, Google Business Profile, analytics, and paid media with partner-level care" icon={BarChart3} />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ValuePoint = ({ text, icon: Icon }: { text: string; icon: LucideIcon }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-(--brand-secondary)" />
    <span className="font-body text-white/90">{text}</span>
  </div>
);
