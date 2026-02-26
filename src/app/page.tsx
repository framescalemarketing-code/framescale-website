import Image from "next/image";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-brand-sand to-white">
        <Container>
          <div className="grid items-center gap-10 py-16 md:grid-cols-12 md:py-20">
            <div className="md:col-span-7">
              <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-teal ring-1 ring-brand-ink/10">
                Marketing and growth consulting for independent optical
              </p>
              <h1 className="mt-5 font-display text-4xl leading-tight tracking-tight text-brand-ink md:text-6xl">
                Turn marketing into a system that consistently brings in
                appointments and sales.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-ink/75">
                FrameScale helps practices and optical brands build repeatable
                strategies across local visibility, paid media, and retention.
                Clear priorities, measurable goals, and execution support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Book a consult</ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Explore services
                </ButtonLink>
              </div>
              <ul className="mt-8 grid gap-3 text-sm text-brand-ink/75 sm:grid-cols-2">
                <li className="rounded-2xl bg-white p-4 ring-1 ring-brand-ink/10">
                  Strategy that fits your resources
                </li>
                <li className="rounded-2xl bg-white p-4 ring-1 ring-brand-ink/10">
                  Practical tracking and reporting
                </li>
                <li className="rounded-2xl bg-white p-4 ring-1 ring-brand-ink/10">
                  Launch support for campaigns
                </li>
                <li className="rounded-2xl bg-white p-4 ring-1 ring-brand-ink/10">
                  Retention and referral programs
                </li>
              </ul>
            </div>

            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-brand-ink/10">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/photos/Diggy/diggy_001.jpg"
                    alt="Optical practice work environment"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 100vw"
                    priority
                  />
                </div>

                <div className="p-7">
                  <p className="text-sm font-semibold text-brand-ink">
                    What you get in the first 30 days
                  </p>
                  <ol className="mt-4 space-y-3 text-sm text-brand-ink/75">
                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-aqua/30 text-brand-ink">
                        1
                      </span>
                      <span>
                        Baseline audit of your local presence, funnel, and
                        tracking
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-aqua/30 text-brand-ink">
                        2
                      </span>
                      <span>Prioritized plan with clear owners and timelines</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-aqua/30 text-brand-ink">
                        3
                      </span>
                      <span>
                        One campaign shipped, plus reporting you can reuse
                      </span>
                    </li>
                  </ol>
                  <div className="mt-7 rounded-2xl bg-brand-tealDark p-5 text-white">
                    <p className="text-sm font-semibold">Typical outcomes</p>
                    <p className="mt-2 text-sm text-white/85">
                      More qualified inbound leads, improved conversion on booking
                      pages, and better repeat purchase behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-16 md:py-20">
            <h2 className="font-display text-3xl tracking-tight text-brand-ink md:text-4xl">
              Services built for the way optical businesses actually operate
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-brand-ink/75">
              Whether you are focused on exam growth, eyewear sales, or
              strengthening managed care performance, the work stays grounded in
              measurable actions.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Local visibility and demand",
                  body: "Google Business Profile, reviews, local search content, and offer pages that convert.",
                },
                {
                  title: "Paid media and campaign launches",
                  body: "Meta and Google Ads with a clear testing plan, creative direction, and weekly decisioning.",
                },
                {
                  title: "Retention and referrals",
                  body: "Recall programs, email and SMS journeys, and referral systems that your team can maintain.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl bg-white p-7 ring-1 ring-brand-ink/10"
                >
                  <p className="text-sm font-semibold text-brand-teal">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/75">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <ButtonLink href="/services" variant="secondary">
                See all services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-sand">
        <Container>
          <div className="py-16 md:py-20">
            <h2 className="font-display text-3xl tracking-tight text-brand-ink md:text-4xl">
              A simple engagement model
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Diagnose",
                  body: "Audit your marketing, demand channels, and measurement so you know what is driving results.",
                },
                {
                  title: "Prioritize",
                  body: "Choose a focused set of changes that fit your staff time, budget, and patient mix.",
                },
                {
                  title: "Execute",
                  body: "Ship campaigns and operational changes with weekly reviews and clear next actions.",
                },
              ].map((step, idx) => (
                <div
                  key={step.title}
                  className="rounded-3xl bg-white p-7 ring-1 ring-brand-ink/10"
                >
                  <p className="text-xs font-semibold text-brand-ink/60">
                    Step {idx + 1}
                  </p>
                  <p className="mt-2 font-display text-2xl tracking-tight text-brand-ink">
                    {step.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/75">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-16 md:py-20">
            <div className="rounded-3xl bg-brand-tealDark p-10 text-white md:p-14">
              <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                Ready for a plan you can actually execute?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                Share a few details about your practice or brand. You will get a
                recommended starting point and a clear next step.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Start here</ButtonLink>
                <ButtonLink href="/pricing" variant="secondary">
                  View pricing
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
