import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Clear engagement structures"
        description="Defined scopes with measurable deliverables and structured execution cadence."
        imageSrc="/assets/hero/pricing.jpg"
        imageAlt="Planning documents on desk"
      />

      <section>
        <Container>
          <div className="py-14 md:py-18 text-sm text-brand-ink/75">
            Pricing content will be structured here.
          </div>
        </Container>
      </section>
    </main>
  );
}
