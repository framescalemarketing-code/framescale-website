import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "FrameScale is a consulting practice focused on marketing systems for independent optical businesses.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-brand-sand to-white">
        <Container>
          <div className="py-14 md:py-18">
            <h1 className="font-display text-4xl tracking-tight text-brand-ink md:text-5xl">
              About FrameScale
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-ink/75">
              FrameScale supports small optical companies and private practices
              that want steady growth without relying on a large agency. The
              work combines clear strategy with hands on execution support.
            </p>
          </div>
        </Container>
      </section>

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
                FrameScale is built to help you choose the few changes that
                create momentum, then stay consistent long enough to learn what
                works.
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
                  Practices and brands that have been operating for two to three
                  years and want a more structured approach to demand
                  generation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-sand">
        <Container>
          <div className="py-14 md:py-18">
            <h2 className="font-display text-3xl tracking-tight text-brand-ink">
              What an engagement looks like
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Week 1",
                  body: "Align on goals, collect access, and review baseline performance.",
                },
                {
                  title: "Week 2",
                  body: "Define priorities, update tracking, and outline a simple operating cadence.",
                },
                {
                  title: "Weeks 3 to 4",
                  body: "Ship your first campaign and refine the funnel based on results.",
                },
              ].map((i) => (
                <div
                  key={i.title}
                  className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10"
                >
                  <p className="text-sm font-semibold text-brand-teal">
                    {i.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/75">
                    {i.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <ButtonLink href="/contact">Book a consult</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
