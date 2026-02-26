import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "FrameScale is a consulting practice focused on marketing systems for independent optical businesses.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="About FrameScale"
        description="FrameScale supports small optical companies and private practices that want steady growth through structured marketing systems and practical execution."
        imageSrc="/assets/photos/optimized/diggy_012-hero.webp"
        imageAlt="Optical strategy discussion"
        imageSide="left"
        tone="sand"
      />

      <section>
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-12 md:py-18">
            <div className="md:col-span-7">
              <h2 className="font-display text-3xl tracking-tight text-brand-ink">
                What we focus on
              </h2>
              <p className="mt-4 text-base leading-7 text-brand-ink/75">
                Optical marketing works best when it is connected to daily
                operations. That means the offer, the booking process, the
                patient experience, and the post visit follow up all reinforce
                each other.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-ink/75">
                FrameScale helps you choose the few changes that create
                momentum, then stay consistent long enough to learn what works.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10">
                <p className="text-sm font-semibold text-brand-ink">Values</p>
                <ul className="mt-4 space-y-3 text-sm text-brand-ink/75">
                  <li>Clarity over complexity</li>
                  <li>Measurement that drives decisions</li>
                  <li>Execution that fits your team</li>
                  <li>Respect for patient experience</li>
                </ul>
              </div>

              <div className="mt-6 rounded-3xl bg-brand-tealDark p-8 text-white">
                <p className="text-sm font-semibold">Typical client stage</p>
                <p className="mt-3 text-sm leading-6 text-white/85">
                  Practices and brands that want a more structured approach to
                  demand generation and measurable growth.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
