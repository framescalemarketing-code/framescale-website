"use client";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Start with clarity"
        description="Share your goals and constraints. You will receive a structured starting point."
        imageSrc="/assets/hero/contact.jpg"
        imageAlt="Consultation discussion"
      />

      <section>
        <Container>
          <div className="py-14 md:py-18 text-sm text-brand-ink/75">
            Existing contact form remains below.
          </div>
        </Container>
      </section>
    </main>
  );
}
