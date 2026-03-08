import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { BarChart3, Megaphone, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Marketing strategy, analytics, paid acquisition, and systems consulting for small and mid-size businesses ready to grow with structure.",
};

const pillars = [
  {
    title: "Strategy & Market Intelligence",
    icon: BarChart3,
    tagline:
      "Your strongest competitive advantage is a clear picture of where you stand and a focused plan forward. This is where every engagement starts.",
    bullets: [
      "Market research and competitive landscape analysis",
      "Marketing audit — channels, funnel, and tracking gaps",
      "GA4 implementation and event tracking setup",
      "BigQuery data modeling and Looker Studio dashboards",
      "KPI frameworks and reporting cadence setup",
      "Marketing strategy and prioritized roadmap",
      "Presentation development and script writing",
    ],
  },
  {
    title: "Visibility & Paid Acquisition",
    icon: Megaphone,
    tagline:
      "Get found by the right customers and convert them \u2014 through a strong local presence and targeted paid media that is measured and adjusted weekly.",
    bullets: [
      "Google Business Profile optimization and management",
      "Local SEO — search content and offer landing pages",
      "Review and reputation management program",
      "Google Ads — search and display campaigns",
      "LinkedIn Ads for professional and B2B outreach",
      "Amazon Ads for optical product brands",
      "Budget pacing, weekly optimization, and lead quality review",
    ],
  },
  {
    title: "Systems, Retention & Builds",
    icon: Workflow,
    tagline:
      "Build the operational engine that keeps customers returning, referrals flowing, and your team running on clear processes instead of guesswork.",
    bullets: [
      "Email and SMS lifecycle automation and nurture sequences",
      "Referral program design and tracking",
      "CRM platform setup and workflow configuration",
      "ClickUp project and operations system design",
      "Zapier and Jotform automation flows",
      "Website and app builds (Next.js, TypeScript)",
      "Conversion-focused UI and booking flow optimization",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Three pillars. One structured plan."
        description="Strategy-first engagements that combine market intelligence, paid acquisition, and operational systems \u2014 built around what your business actually needs."
        imageSrc="/assets/photos/optimized/diggy_014-hero.webp"
        imageAlt="Marketing planning session"
        imageSide="right"
        tone="aqua"
      />

      <section>
        <Container>
          <div className="space-y-8 py-14 md:py-18">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10 md:p-10"
                >
                  <div className="grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-5">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-brand-teal" />
                        <h2 className="font-display text-2xl tracking-tight text-brand-ink">
                          {pillar.title}
                        </h2>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-brand-ink/75">
                        {pillar.tagline}
                      </p>
                    </div>
                    <div className="md:col-span-7">
                      <ul className="grid gap-2 text-sm text-brand-ink/75 sm:grid-cols-2">
                        {pillar.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 rounded-xl bg-brand-aqua/8 px-4 py-3"
                          >
                            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Honest scope note */}
      <section className="bg-brand-sand">
        <Container>
          <div className="py-14 md:py-18">
            <h2 className="font-display text-2xl tracking-tight text-brand-ink">
              A note on content and social media
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <p className="text-sm leading-6 text-brand-ink/75">
                Social media strategy — what to post, when, and why — is built
                into the overall marketing plan. Content calendars and scheduled
                posting are available as a service. Copywriting for ads, emails,
                landing pages, and websites is handled directly.
              </p>
              <p className="text-sm leading-6 text-brand-ink/75">
                Content production (photography, video, graphic design) is not
                done in-house. When production is needed, FrameScale manages the
                creative brief and coordinates with trusted production partners
                on your behalf — so the strategy is always connected to the
                output.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-14 md:py-18">
            <div className="rounded-3xl bg-brand-tealDark p-10 text-white md:p-14">
              <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                Not sure which pillar fits your situation?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                That is exactly what the initial audit is for. Share what is
                going on in your business and you will get a clear starting
                point.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Book a consult</ButtonLink>
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
