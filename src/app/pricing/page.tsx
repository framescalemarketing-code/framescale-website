import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for marketing strategy engagements, monthly retainers, and à la carte services.",
};

const foundationDeliverables = [
  "Full marketing and channel audit",
  "Market research and competitive positioning",
  "GA4 and tracking infrastructure setup",
  "Looker Studio reporting dashboard",
  "Prioritized 90-day marketing roadmap",
  "One fully built and launched campaign",
  "Weekly strategy sessions",
  "Documented SOPs and handoff materials",
];

const retainerTiers = [
  {
    name: "Advisory",
    price: "$3,000",
    per: "/ month",
    description:
      "You run execution. I review the data, guide decisions, and keep the strategy on track.",
    includes: [
      "Bi-weekly strategy and review calls",
      "Analytics and dashboard review",
      "Campaign and content feedback",
      "Ongoing Slack or email access",
      "Monthly reporting summary",
    ],
    cta: "Talk through fit",
    highlight: false,
  },
  {
    name: "Active",
    price: "$5,000",
    per: "/ month",
    description:
      "I stay involved in execution — building, optimizing, and managing alongside your team.",
    includes: [
      "Everything in Advisory",
      "Weekly execution sessions",
      "Paid media management (Google / LinkedIn)",
      "Email campaign builds and sends",
      "CRM workflows and automation updates",
      "Priority turnaround on deliverables",
    ],
    cta: "Talk through fit",
    highlight: true,
  },
];

const alacarte = [
  {
    category: "Strategy & Planning",
    items: [
      { name: "Marketing audit and baseline report", price: "From $1,500" },
      { name: "90-day marketing roadmap (standalone)", price: "From $2,000" },
      { name: "Market and competitive research report", price: "From $1,200" },
    ],
  },
  {
    category: "Analytics & Reporting",
    items: [
      { name: "GA4 setup and event tracking", price: "From $800" },
      { name: "Looker Studio dashboard build", price: "From $1,000" },
      { name: "Analytics audit and cleanup", price: "From $600" },
    ],
  },
  {
    category: "Campaigns & Ads",
    items: [
      { name: "Google Ads campaign build", price: "From $1,200" },
      { name: "LinkedIn Ads campaign build", price: "From $1,200" },
      { name: "Email campaign build (sequence)", price: "From $800" },
    ],
  },
  {
    category: "Systems & Builds",
    items: [
      { name: "Website build (Next.js)", price: "From $3,500" },
      { name: "CRM and automation setup", price: "From $1,500" },
      { name: "ClickUp operations system", price: "From $800" },
    ],
  },
  {
    category: "Templates & Documentation",
    items: [
      { name: "Marketing SOP writing (per process)", price: "From $300" },
      {
        name: "Presentation or pitch deck template",
        price: "From $400",
      },
      {
        name: "Campaign or reporting template pack",
        price: "From $500",
      },
    ],
  },
];

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Structured engagements. Transparent pricing."
        description="Start with a focused foundation, stay on retainer as long as it makes sense, or pick exactly what you need."
        imageSrc="/assets/photos/optimized/diggy_018-hero.webp"
        imageAlt="Planning documents on desk"
        imageSide="left"
        tone="sand"
      />

      {/* Foundation Phase */}
      <section>
        <Container>
          <div className="py-14 md:py-18">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal">
                  Step 1
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-brand-ink md:text-4xl">
                  Foundation Phase
                </h2>
                <p className="mt-2 text-sm text-brand-ink/60">3-month engagement</p>
                <p className="mt-5 text-4xl font-display tracking-tight text-brand-ink">
                  $15,000
                </p>
                <p className="mt-1 text-sm text-brand-ink/60">flat fee · billed in milestones</p>
                <p className="mt-6 text-base leading-7 text-brand-ink/75">
                  The starting point for every new client. Three months of
                  focused work to audit your current marketing, build a concrete
                  strategy, set up the measurement infrastructure, and ship your
                  first campaign. You leave with a plan, a working system, and
                  the knowledge to run it.
                </p>
                <p className="mt-4 text-base leading-7 text-brand-ink/75">
                  This phase is required before any retainer. It ensures the
                  strategy is grounded in your actual data — not assumptions.
                </p>
                <div className="mt-8">
                  <ButtonLink href="/contact">Start the conversation</ButtonLink>
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10">
                  <p className="text-sm font-semibold text-brand-ink">
                    What is delivered
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {foundationDeliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-brand-ink/75"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl bg-brand-aqua/10 p-5">
                    <p className="text-sm font-semibold text-brand-ink">
                      Milestone billing
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-3 text-xs text-brand-ink/75">
                      <div className="rounded-xl bg-white p-3 ring-1 ring-brand-ink/10">
                        <p className="font-semibold text-brand-ink">Month 1</p>
                        <p className="mt-1">$6,000 — Audit &amp; research</p>
                      </div>
                      <div className="rounded-xl bg-white p-3 ring-1 ring-brand-ink/10">
                        <p className="font-semibold text-brand-ink">Month 2</p>
                        <p className="mt-1">$5,000 — Strategy &amp; build</p>
                      </div>
                      <div className="rounded-xl bg-white p-3 ring-1 ring-brand-ink/10">
                        <p className="font-semibold text-brand-ink">Month 3</p>
                        <p className="mt-1">$4,000 — Launch &amp; handoff</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Retainer */}
      <section className="bg-brand-aqua/8">
        <Container>
          <div className="py-14 md:py-18">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal">
              Step 2 — optional
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-brand-ink md:text-4xl">
              Monthly Retainer
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-brand-ink/75">
              After the Foundation Phase, you can stay on retainer at the level
              of involvement that makes sense. Month-to-month after an initial
              3-month commitment. Cancel with 30 days notice.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {retainerTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={[
                    "rounded-3xl p-8",
                    tier.highlight
                      ? "bg-brand-tealDark text-white ring-1 ring-brand-tealDark"
                      : "bg-white text-brand-ink ring-1 ring-brand-ink/10",
                  ].join(" ")}
                >
                  <p
                    className={[
                      "text-xs font-semibold uppercase tracking-widest",
                      tier.highlight ? "text-white/60" : "text-brand-teal",
                    ].join(" ")}
                  >
                    {tier.name}
                  </p>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-display text-4xl tracking-tight">
                      {tier.price}
                    </span>
                    <span
                      className={[
                        "mb-1 text-sm",
                        tier.highlight ? "text-white/60" : "text-brand-ink/60",
                      ].join(" ")}
                    >
                      {tier.per}
                    </span>
                  </div>
                  <p
                    className={[
                      "mt-4 text-sm leading-6",
                      tier.highlight ? "text-white/80" : "text-brand-ink/75",
                    ].join(" ")}
                  >
                    {tier.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className={[
                          "flex items-start gap-2 text-sm",
                          tier.highlight ? "text-white/80" : "text-brand-ink/75",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "mt-1 h-1.5 w-1.5 shrink-0 rounded-full",
                            tier.highlight ? "bg-white/60" : "bg-brand-teal",
                          ].join(" ")}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ButtonLink
                      href="/contact"
                      variant={tier.highlight ? "secondary" : "primary"}
                    >
                      {tier.cta}
                    </ButtonLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* À La Carte */}
      <section>
        <Container>
          <div className="py-14 md:py-18">
            <h2 className="font-display text-3xl tracking-tight text-brand-ink md:text-4xl">
              À la carte services
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-brand-ink/75">
              One-time deliverables for businesses that need a specific output
              without a full engagement. Pricing varies by scope — the figures
              below are starting points.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {alacarte.map((group) => (
                <div
                  key={group.category}
                  className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10"
                >
                  <p className="text-sm font-semibold text-brand-teal">
                    {group.category}
                  </p>
                  <ul className="mt-5 space-y-4">
                    {group.items.map((item) => (
                      <li key={item.name} className="flex flex-col gap-0.5">
                        <span className="text-sm text-brand-ink">
                          {item.name}
                        </span>
                        <span className="text-xs font-semibold text-brand-ink/50">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-brand-ink/50">
              All à la carte work is scoped before any agreement. Final pricing
              is confirmed in writing after an initial call.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ / transparency note */}
      <section className="bg-brand-sand">
        <Container>
          <div className="py-14 md:py-18">
            <h2 className="font-display text-2xl tracking-tight text-brand-ink">
              Common questions
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  q: "Do I have to do the Foundation Phase first?",
                  a: "Yes, for retainer clients. Every strategy recommendation needs to be grounded in your actual data and market position — not assumptions. The Foundation Phase is how we build that baseline together.",
                },
                {
                  q: "Can I hire you for just the strategy, no execution?",
                  a: "Absolutely. The Foundation Phase can end at a strategy-only handoff. You walk away with the full plan, infrastructure, and documentation to run it yourself or hand it to a team.",
                },
                {
                  q: "What if I only need one specific thing?",
                  a: "That is what à la carte is for. If you already have a strategy and just need a dashboard built, a website built, or a campaign set up, we can scope and price that as a standalone project.",
                },
                {
                  q: "How long are retainer contracts?",
                  a: "3-month minimum, then month-to-month. You can cancel with 30 days written notice. No long-term lock-ins beyond the initial commitment window.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10"
                >
                  <p className="text-sm font-semibold text-brand-ink">
                    {faq.q}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/75">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container>
          <div className="py-14 md:py-18">
            <div className="rounded-3xl bg-brand-tealDark p-10 text-white md:p-14">
              <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                Not sure which structure fits?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                Book a short intro call. No pitch, no pressure. You will leave
                with a clear picture of where to start and what it would cost.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="secondary">
                  Book a free intro call
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
