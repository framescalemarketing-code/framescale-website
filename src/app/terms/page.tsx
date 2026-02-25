import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <main>
      <Container>
        <div className="py-14 md:py-18">
          <h1 className="font-display text-4xl tracking-tight text-brand-ink">
            Terms of service
          </h1>

          <div className="mt-8 max-w-3xl space-y-6 text-sm leading-7 text-brand-ink/75">
            <p>
              Services are provided under a written scope of work. Deliverables,
              timelines, and fees are agreed before work begins.
            </p>

            <div>
              <h2 className="font-semibold text-brand-ink">Payments</h2>
              <p className="mt-2">
                Payment terms are defined in the scope of work. Late payments
                may pause active work.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-brand-ink">Confidentiality</h2>
              <p className="mt-2">
                Client information is treated as confidential and used only to
                deliver services.
              </p>
            </div>

            <p>
              For questions, email{" "}
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
