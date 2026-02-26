import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        description="How information is handled and protected."
        imageSrc="/assets/hero/privacy.jpg"
        imageAlt="Confidential documents"
      />

      <section>
        <Container>
          <div className="py-14 md:py-18 text-sm text-brand-ink/75">
            Existing privacy policy content remains below.
          </div>
        </Container>
      </section>
    </main>
  );
}
