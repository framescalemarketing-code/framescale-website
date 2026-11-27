import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { caseStudyPath, onSightApproved, proofStrip } from "@/content/onsight";

/**
 * The short proof band on the home page. It renders nothing while the case
 * study is switched off, so the home page never points at a route that 404s.
 */
export function ProofStrip() {
  if (!onSightApproved) return null;

  return (
    <Section tone="muted" size="default">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading title={proofStrip.title} />
        <div className="flex flex-col gap-6">
          <p className="measure text-(--text-muted)">{proofStrip.body}</p>
          <Button href={caseStudyPath} variant="outline" withArrow className="w-fit">
            {proofStrip.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
