import type { Metadata } from "next";
import Link from "next/link";
import { PageBackLink } from "@/components/design/PageBackLink";

export const metadata: Metadata = {
  title: "California Privacy Notice",
  description:
    "California Consumer Privacy Act (CCPA/CPRA) notice for FrameScale website visitors.",
};

export default function CaliforniaPrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-10 w-80 h-80 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <PageBackLink className="mb-6" />
            <span className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-sm font-semibold uppercase tracking-wider text-(--brand-primary) mb-6">
              California Privacy
            </span>
            <h1 className="font-headline text-5xl lg:text-6xl mb-6 leading-tight text-(--brand-deep)">
              California Privacy Notice
            </h1>
            <p className="font-body text-xl text-(--brand-neutral) leading-relaxed">
              This notice describes privacy rights available to California residents under the CCPA/CPRA.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 bg-white rounded-2xl border border-border depth-card p-8 lg:p-10">
            <p className="font-body text-(--brand-neutral) leading-relaxed">
              Last updated: May 11, 2026. This page is a pre-Iubenda compliance structure and will be replaced
              or synchronized once your final policy documents are published.
            </p>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">Notice at Collection</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                We collect identifiers and contact information submitted through forms (for example name,
                email, company, and message content), along with limited technical data used for website
                security and performance.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">How Information Is Used</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                Information is used to respond to inquiries, provide requested services, and improve site
                operations and reporting.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">California Privacy Rights</h2>
              <ul className="list-disc pl-5 space-y-2 font-body text-(--brand-neutral)">
                <li>Right to know what personal information is collected, used, and disclosed.</li>
                <li>Right to request deletion of personal information, subject to legal exceptions.</li>
                <li>Right to request correction of inaccurate personal information.</li>
                <li>Right to non-discrimination for exercising your privacy rights.</li>
                <li>Right to opt out of sale or sharing of personal information, where applicable.</li>
              </ul>
            </div>

            <div id="privacy-choices">
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">Your Privacy Choices</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                To submit a California privacy rights request, email
                {" "}
                <Link className="text-(--brand-primary) hover:underline" href="mailto:framescalemarketing@framescalemarketing.com">
                  framescalemarketing@framescalemarketing.com
                </Link>
                {" "}
                with the subject line “California Privacy Request.”
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">Authorized Agent Requests</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                California residents may designate an authorized agent to submit requests on their behalf.
                Verification requirements may apply before processing the request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
