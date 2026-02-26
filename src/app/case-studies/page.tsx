import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Case studies",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Applied marketing systems in practice"
        description="Examples of structured improvements across local growth, paid media, and retention."
        imageSrc="/assets/photos/optimized/diggy_015-hero.webp"
        imageAlt="Analytics dashboard review"
        imageSide="left"
        tone="slate"
      />

      <section>
        <Container>
          <div className="py-14 md:py-18 text-sm text-brand-ink/75">
            Case studies content remains unchanged below this hero.
          </div>
        </Container>
      </section>
    </main>
  );
}
