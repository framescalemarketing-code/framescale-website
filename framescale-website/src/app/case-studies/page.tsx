import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Examples of marketing system improvements for optical practices and brands.",
};

const studies = [
  {
    title: "Local visibility reset",
    summary:
      "Improved map pack presence and increased appointment inquiries by aligning the offer, reviews, and location pages.",
    results: ["GBP cleanup and category strategy", "Review request workflow", "New exam landing page"],
  },
  {
    title: "Paid search cleanup",
    summary:
      "Reduced wasted spend by tightening targeting, clarifying conversion actions, and improving landing page relevance.",
    results: ["Conversion tracking audit", "Campaign restructure", "Weekly testing plan"],
  },
  {
    title: "Retention program build",
    summary:
      "Raised repeat purchase behavior by launching recall and eyewear follow up journeys with clear staff ownership.",
    results: ["Recall segmentation", "Email and SMS journeys", "Team scripts and cadence"],
  },
] as const;

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-brand-sand to-white">
        <Container>
          <div className="py-14 md:py-18">
            <h1 className="font-display text-4xl tracking-tight text-brand-ink md:text-5xl">
              Case studies
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-brand-ink/75">
              A few common patterns from recent work. If you share your goals
              and constraints, you will get a recommended approach.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Discuss your scenario</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-14 md:py-18">
            <div className="grid gap-6 md:grid-cols-3">
              {studies.map((s) => (
                <article
                  key={s.title}
                  className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10"
                >
                  <h2 className="font-display text-2xl tracking-tight text-brand-ink">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/75">
                    {s.summary}
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-brand-ink/60">
                    Work delivered
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-brand-ink/75">
                    {s.results.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span aria-hidden="true" className="mt-1 text-brand-teal">
                          ●
                        </span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-brand-sand p-10 ring-1 ring-brand-ink/10">
              <h3 className="font-display text-2xl tracking-tight text-brand-ink">
                Want a results focused plan?
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-ink/75">
                Send your website, your primary goal, and your current marketing
                mix. You will receive a short plan with priorities for the next
                30 days.
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact">Send details</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
