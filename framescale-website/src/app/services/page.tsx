import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Marketing and growth services for independent optical practices and small optical brands.",
};

const offerings = [
  {
    title: "Local growth system",
    bullets: [
      "Google Business Profile optimization",
      "Review and reputation program",
      "Local search pages and offer pages",
      "Call tracking and booking conversion review",
    ],
  },
  {
    title: "Paid media and acquisition",
    bullets: [
      "Google Ads and Meta Ads setup",
      "Creative direction and landing page feedback",
      "Weekly optimization and testing plan",
      "Budget pacing and lead quality checks",
    ],
  },
  {
    title: "Retention and lifetime value",
    bullets: [
      "Recall and reactivation journeys",
      "Email and SMS nurture for eyewear",
      "Referral program design",
      "Team scripts and follow up workflows",
    ],
  },
  {
    title: "Brand and positioning",
    bullets: [
      "Messaging and offer clarity",
      "Service line and product emphasis",
      "Website and conversion copy review",
      "Competitive scan for your market",
    ],
  },
  {
    title: "Analytics and reporting",
    bullets: [
      "Tracking plan and dashboards",
      "Channel attribution basics",
      "Monthly KPI review cadence",
      "Experiment backlog and learning log",
    ],
  },
  {
    title: "Launch support",
    bullets: [
      "Seasonal campaigns and promotions",
      "New location or new doctor launch",
      "Frame line and product launch support",
      "Press, partnerships, and local collaborations",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-brand-sand to-white">
        <Container>
          <div className="py-14 md:py-18">
            <h1 className="font-display text-4xl tracking-tight text-brand-ink md:text-5xl">
              Services
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-brand-ink/75">
              Choose a focused engagement that matches your business stage. The
              work stays practical and measurable, with clear deliverables and a
              weekly cadence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/pricing">See packages</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Talk through fit
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-14 md:py-18">
            <div className="grid gap-6 md:grid-cols-2">
              {offerings.map((o) => (
                <div
                  key={o.title}
                  className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10"
                >
                  <h2 className="font-display text-2xl tracking-tight text-brand-ink">
                    {o.title}
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm text-brand-ink/75">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span aria-hidden="true" className="mt-1 text-brand-teal">
                          ●
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-brand-tealDark p-10 text-white">
              <h3 className="font-display text-2xl tracking-tight">
                How engagements work
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-white/85">
                Most clients start with an audit and priorities sprint, then
                move into a monthly execution cadence. You will always know what
                we are doing, why it matters, and what to do next.
              </p>
              <div className="mt-7">
                <ButtonLink href="/contact">Request availability</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
