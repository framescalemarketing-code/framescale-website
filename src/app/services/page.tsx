import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import {
  BarChart3,
  Megaphone,
  Search,
  Users,
  Workflow,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Marketing and growth services for independent optical practices and small optical brands.",
};

const offerings = [
  {
    title: "Local growth system",
    icon: Search,
    bullets: [
      "Google Business Profile optimization",
      "Review and reputation program",
      "Local search pages and offer pages",
      "Call tracking and booking conversion review",
    ],
  },
  {
    title: "Paid media and acquisition",
    icon: Megaphone,
    bullets: [
      "Google Ads and Meta Ads setup",
      "Creative direction and landing page feedback",
      "Weekly optimization and testing plan",
      "Budget pacing and lead quality checks",
    ],
  },
  {
    title: "Retention and lifetime value",
    icon: Users,
    bullets: [
      "Recall and reactivation journeys",
      "Email and SMS nurture for eyewear",
      "Referral program design",
      "Team scripts and follow up workflows",
    ],
  },
  {
    title: "Analytics and reporting",
    icon: BarChart3,
    bullets: [
      "GA4 implementation",
      "Looker Studio dashboards",
      "BigQuery modeling",
      "Tracking plans and KPI review cadence",
    ],
  },
  {
    title: "Workflow and automation",
    icon: Workflow,
    bullets: [
      "ClickUp system design",
      "Zapier automation",
      "Jotform logic flows",
      "Operational handoff documentation",
    ],
  },
  {
    title: "Web and app builds",
    icon: Code2,
    bullets: [
      "Next.js builds",
      "TypeScript architecture",
      "Conversion focused UI structure",
      "Performance and deployment setup",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Structured marketing systems for optical businesses"
        description="Focused engagements that combine strategy, analytics, execution, and technical capability."
        imageSrc="/assets/photos/optimized/diggy_014-hero.webp"
        imageAlt="Marketing planning session"
        imageSide="right"
        tone="aqua"
      />

      <section>
        <Container>
          <div className="grid gap-6 py-14 md:grid-cols-2 md:py-18">
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-brand-teal" />
                    <h2 className="font-display text-2xl tracking-tight text-brand-ink">
                      {o.title}
                    </h2>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-brand-ink/75">
                    {o.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
