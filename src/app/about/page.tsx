import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "FrameScale is a marketing strategy consulting practice that helps small and mid-size businesses scale through structured frameworks, education, and hands-on execution.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Why FrameScale exists"
        description="Small and mid-size businesses deserve the same structured marketing systems that large companies have — without paying for a full agency team to run them."
        imageSrc="/assets/photos/optimized/diggy_012-hero.webp"
        imageAlt="Marketing strategy discussion at an independent optical practice"
        imageSide="left"
        tone="sand"
      />

      {/* Mission block */}
      <section className="bg-brand-tealDark">
        <Container>
          <div className="py-14 md:py-18">
            <p className="max-w-4xl font-display text-2xl leading-snug tracking-tight text-white md:text-3xl">
              FrameScale exists to give small and mid-size businesses the
              structured marketing framework they need to scale \u2014 through
              education, the right tools, and real execution support. Growth
              stops being a guessing game when you have a concrete plan and
              someone to help you run it.
            </p>
          </div>
        </Container>
      </section>

      {/* Approach + Values */}
      <section>
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-12 md:py-18">
            <div className="md:col-span-7">
              <h2 className="font-display text-3xl tracking-tight text-brand-ink">
                Strategy first. Then execution.
              </h2>
              <p className="mt-4 text-base leading-7 text-brand-ink/75">
                Most practices cycle through tactics — a website refresh, a
                Google Ads run, a new seasonal promotion — without a strategy
                tying them together. The result is wasted budget and no clear
                picture of what is actually working.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-ink/75">
                FrameScale starts with research and data. That means
                understanding your market position, your current demand
                channels, and what your numbers are actually telling you —
                before making any recommendations. The plan that comes out of
                that process is specific, prioritized, and built around your
                team capacity and budget.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-ink/75">
                From there, execution is available — campaign launches, website
                builds, automation setup, analytics infrastructure. The goal is
                always to build systems you own and can operate long after the
                engagement ends.
              </p>
            </div>

            <div className="space-y-6 md:col-span-5">
              <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10">
                <p className="text-sm font-semibold text-brand-ink">
                  Core values
                </p>
                <ul className="mt-4 space-y-3 text-sm text-brand-ink/75">
                  <li>Clarity before tactics — strategy drives everything</li>
                  <li>Your data, interpreted honestly</li>
                  <li>Systems you own when the engagement ends</li>
                  <li>Execution that fits your team and budget</li>
                  <li>No upselling work that isn&apos;t justified by results</li>
                </ul>
              </div>

              <div className="rounded-3xl bg-brand-aqua/10 p-8 ring-1 ring-brand-ink/10">
                <p className="text-sm font-semibold text-brand-ink">
                  Who this is for
                </p>
                <ul className="mt-4 space-y-3 text-sm text-brand-ink/75">
                  <li>
                    Independent practices and specialty retailers with one to
                    four locations
                  </li>
                  <li>
                    Service businesses growing local demand and referrals
                  </li>
                  <li>DTC and product brands building direct channels</li>
                  <li>
                    Businesses that have tried marketing before but couldn&apos;t
                    measure what worked
                  </li>
                  <li>
                    Owners who want to understand their marketing, not just
                    outsource it
                  </li>
                </ul>
                <p className="mt-4 text-xs text-brand-ink/50">
                  Currently serving: optical and vision care practices
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Honest scope */}
      <section className="bg-brand-sand">
        <Container>
          <div className="py-14 md:py-18">
            <h2 className="font-display text-3xl tracking-tight text-brand-ink">
              What you can expect from the work
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-brand-ink/75">
              Honest scope matters. Here is where FrameScale operates and where
              you should expect to supplement with other resources.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10">
                <p className="text-sm font-semibold text-brand-teal">
                  Strong focus areas
                </p>
                <ul className="mt-4 space-y-3 text-sm text-brand-ink/75">
                  <li>Marketing strategy and market research</li>
                  <li>Data analytics — GA4, BigQuery, Looker Studio</li>
                  <li>Google Ads, LinkedIn Ads, Amazon Ads</li>
                  <li>Google Business Profile and local SEO</li>
                  <li>Email marketing and retention programs</li>
                  <li>Website and app builds (Next.js)</li>
                  <li>CRM, ClickUp, Zapier, and Jotform systems</li>
                  <li>Copywriting and presentation development</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10">
                <p className="text-sm font-semibold text-brand-ink">
                  What to know about content and social
                </p>
                <p className="mt-4 text-sm leading-6 text-brand-ink/75">
                  Social media strategy — what to post, when, and why — is part
                  of the overall marketing plan. Content calendars and scheduled
                  posting are available as a service.
                </p>
                <p className="mt-3 text-sm leading-6 text-brand-ink/75">
                  Content production — photography, video, graphic design — is
                  not done in-house. When needed, FrameScale manages the
                  creative brief and coordinates with trusted production
                  partners on your behalf.
                </p>
                <p className="mt-3 text-sm leading-6 text-brand-ink/75">
                  Copywriting for ads, emails, landing pages, and websites is
                  handled directly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why one consultant */}
      <section>
        <Container>
          <div className="py-14 md:py-18">
            <h2 className="font-display text-3xl tracking-tight text-brand-ink">
              Why one expert instead of a full agency
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-brand-ink/75">
              Full-service agencies are built for accounts that can sustain
              large retainers. Most small and mid-size businesses can&apos;t —
              and shouldn&apos;t have to. Here is what changes when you work
              directly with one strategist.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  label: "No account managers in the way",
                  body: "You speak directly to the person who built your strategy and knows your numbers. Nothing gets lost in translation.",
                },
                {
                  label: "Decisions from your data",
                  body: "Recommendations are built from your analytics, your market, and your specific constraints — not a generic industry playbook.",
                },
                {
                  label: "You own every system",
                  body: "Dashboards, automations, and campaign structures are built in your accounts. When the engagement ends, you keep everything.",
                },
                {
                  label: "Realistic budget allocation",
                  body: "Strategy is developed around what independents can actually invest — with a focus on the highest-leverage moves first.",
                },
              ].map((point) => (
                <div
                  key={point.label}
                  className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10"
                >
                  <p className="text-sm font-semibold text-brand-ink">
                    {point.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/75">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
