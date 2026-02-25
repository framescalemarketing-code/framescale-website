import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <main>
      <Container>
        <div className="py-14 md:py-18">
          <h1 className="font-display text-4xl tracking-tight text-brand-ink">
            Privacy policy
          </h1>

          <div className="mt-8 max-w-3xl space-y-6 text-sm leading-7 text-brand-ink/75">
            <p>
              FrameScale collects information that you voluntarily provide
              through contact forms or direct communication. This information is
              used to respond to inquiries and deliver requested services.
            </p>

            <div>
              <h2 className="font-semibold text-brand-ink">Information we collect</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Name, business name, and contact details</li>
                <li>Notes you share about goals and constraints</li>
                <li>Basic website analytics when available</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-brand-ink">How information is used</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Respond to inquiries</li>
                <li>Prepare proposals and deliver services</li>
                <li>Improve site content and user experience</li>
              </ul>
            </div>

            <p>
              For privacy questions, email{" "}
              <a className="text-brand-teal hover:underline" href="mailto:hello@framescalemarketing.com">
                hello@framescalemarketing.com
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
