import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple packages for marketing strategy and execution support.",
};

const tiers = [
  {
    name: "Sprint",
    price: "From $750",
    subtitle: "Audit and priority plan",
    bullets: [
      "Discovery call and goal alignment",
      "Channel and funnel audit",
      "Priority plan for 30 days",
      "Tracking recommendations",
    ],
    cta: "Start with a sprint",
  },
  {
    name: "Build",
    price: "From $1,500/mo",
    subtitle: "Execution and weekly cadence",
    bullets: [
      "Weekly working session",
      "One active campaign at a time",
      "Reporting and decision log",
      "Landing page and offer iteration",
    ],
    cta: "Request availability",
    featured: true,
  },
  {
    name: "Partner",
    price: "From $3,000/mo",
    subtitle: "Multi channel growth",
    bullets: [
      "Acquisition plus retention program",
      "Creative direction support",
      "Team enablement and SOPs",
      "Monthly leadership review",
    ],
    cta: "Talk through fit",
  },
] as const;

export default function PricingPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-brand-sand to-white">
        <Container>
          <div className="py-14 md:py-18">
            <h1 className="font-display text-4xl tracking-tight text-brand-ink md:text-5xl">
              Pricing
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-brand-ink/75">
              Packages are structured to match your stage. Exact scope depends
              on goals, market, and team capacity.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-14 md:py-18">
            <div className="grid gap-6 md:grid-cols-3">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={[
                    "rounded-3xl p-8 ring-1",
                    t.featured
                      ? "bg-brand-tealDark text-white ring-brand-tealDark"
                      : "bg-white text-brand-ink ring-brand-ink/10",
                  ].join(" ")}
                >
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="mt-3 font-display text-3xl tracking-tight">
                    {t.price}
                  </p>
                  <p
                    className={[
                      "mt-2 text-sm",
                      t.featured ? "text-white/85" : "text-brand-ink/70",
                    ].join(" ")}
                  >
                    {t.subtitle}
                  </p>
                  <ul
                    className={[
                      "mt-6 space-y-2 text-sm",
                      t.featured ? "text-white/85" : "text-brand-ink/75",
                    ].join(" ")}
                  >
                    {t.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span aria-hidden="true" className="mt-1">
                          ●
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ButtonLink
                      href="/contact"
                      variant={t.featured ? "secondary" : "primary"}
                      className="w-full"
                    >
                      {t.cta}
                    </ButtonLink>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  q: "Do you manage ads directly?",
                  a: "Yes. Engagements can include campaign setup, creative direction, weekly optimizations, and reporting. Ad spend is paid directly by the client.",
                },
                {
                  q: "Do you build websites?",
                  a: "FrameScale can improve messaging, structure, and conversion performance. Full builds are available when the project is scoped for a clear outcome.",
                },
                {
                  q: "How long should we commit?",
                  a: "Most clients see meaningful signal in 60 to 90 days. The goal is to build a system your team can run with confidence.",
                },
                {
                  q: "What if we need something custom?",
                  a: "Custom scopes are common. Use the contact page to share goals and constraints, and you will receive a proposed plan.",
                },
              ].map((f) => (
                <div
                  key={f.q}
                  className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10"
                >
                  <p className="text-sm font-semibold text-brand-ink">{f.q}</p>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/75">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
