import Image from "next/image";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export default function HomePage() {
  return (
    <main>
      <section className="bg-linear-to-b from-brand-sand to-white">
        <Container>
          <div className="grid items-center gap-10 py-16 md:grid-cols-12 md:py-20">
            <div className="md:col-span-7">
              <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-teal ring-1 ring-brand-ink/10">
                Marketing strategy consulting for small and mid-size businesses
              </p>
              <h1 className="mt-5 font-display text-4xl leading-tight tracking-tight text-brand-ink md:text-6xl">
                Turn marketing into a system that consistently drives qualified
                leads and sales.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-ink/75">
                FrameScale gives small and mid-size businesses the structured
                framework they need to grow \u2014 through market research, focused
                strategy, and hands-on execution. One expert. Clear priorities.
                Systems you own.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Book a consult</ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Explore services
                </ButtonLink>
              </div>
              <ul className="mt-8 grid gap-3 text-sm text-brand-ink/75 sm:grid-cols-2">
                <li className="rounded-2xl bg-white p-4 ring-1 ring-brand-ink/10">
                  Strategy grounded in your actual numbers
                </li>
                <li className="rounded-2xl bg-white p-4 ring-1 ring-brand-ink/10">
                  Dashboards and reporting you own
                </li>
                <li className="rounded-2xl bg-white p-4 ring-1 ring-brand-ink/10">
                  Campaign planning and launch support
                </li>
                <li className="rounded-2xl bg-white p-4 ring-1 ring-brand-ink/10">
                  Retention and lifecycle programs
                </li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="mb-6 overflow-hidden rounded-3xl bg-white ring-1 ring-brand-ink/10">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="/assets/photos/optimized/diggy_008-hero.webp"
                    alt="Gold rimless frame in a bright editorial setup"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 42vw, 100vw"
                    priority
                  />
                </div>
              </div>
              <div className="rounded-3xl bg-white p-7 ring-1 ring-brand-ink/10">
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
        </Container>
      </section>

      <section className="bg-brand-aqua/8">
        <Container>
          <div className="py-16 md:py-20">
            <h2 className="font-display text-3xl tracking-tight text-brand-ink md:text-4xl">
              Three service pillars. One focused plan.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-brand-ink/75">
              Every engagement draws from the pillars you need — built around
              your data, your market position, and what your team can
              realistically sustain.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Strategy \u0026 Market Intelligence",
                  body: "Market research, data analytics, and a concrete plan. Know where you stand, what to prioritize, and how to track every move.",
                },
                {
                  title: "Visibility \u0026 Paid Acquisition",
                  body: "Google Business Profile, local SEO, Google Ads, and LinkedIn Ads. Get found by the right customers and convert them.",
                },
                {
                  title: "Systems, Retention \u0026 Builds",
                  body: "Email automation, CRM workflows, lifecycle programs, and website builds. The engine that keeps customers coming back.",
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

      <section className="bg-white">
        <Container>
          <div className="py-16 md:py-20">
            <h2 className="font-display text-3xl tracking-tight text-brand-ink md:text-4xl">
              One expert. No bloat. Full ownership.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-brand-ink/75">
              Growing businesses don\u2019t need a ten-person agency. They need
              one person who reads the data, builds the plan, and helps execute
              it \u2014 without the overhead or the hand-offs.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  label: "You talk directly to the strategist",
                  body: "No account managers in between. The person who built your plan is on every call and knows your numbers.",
                },
                {
                  label: "Strategy built from your data",
                  body: "No generic playbooks. Every recommendation starts with your analytics, your market, and your real constraints.",
                },
                {
                  label: "You own everything we build",
                  body: "Dashboards, automations, and campaign structures live in your accounts — not ours. You keep all of it.",
                },
                {
                  label: "Built for independent budgets",
                  body: "Structured for practices that can’t spend like a chain, with focus on the highest-leverage moves first.",
                },
              ].map((point) => (
                <div
                  key={point.label}
                  className="rounded-3xl bg-brand-aqua/8 p-7 ring-1 ring-brand-ink/10"
                >
                  <p className="text-sm font-semibold text-brand-ink">
                    {point.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-linear-to-b from-brand-sand to-brand-aqua/8">
        <Container>
          <div className="py-16 md:py-20">
            <h2 className="font-display text-3xl tracking-tight text-brand-ink md:text-4xl">
              A simple engagement model
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Diagnose",
                  body: "Audit your channels, analytics, and demand data to build a real baseline — not assumptions.",
                },
                {
                  title: "Prioritize",
                  body: "Select the focused moves that match your timeline, budget, and team capacity. Skip the rest.",
                },
                {
                  title: "Execute",
                  body: "Build and launch campaigns and systems with weekly checkpoints and clear decisions at every step.",
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
                Tell me about your practice. You will get a clear picture of
                where to start, what to prioritize first, and what to skip.
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
