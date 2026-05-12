import type { Metadata } from "next";
import Link from "next/link";
import { PageBackLink } from "@/components/design/PageBackLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms that govern services provided by FrameScale.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-10 w-80 h-80 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <PageBackLink className="mb-8 lg:mb-10" />
            <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
              Legal
            </span>
            <h1 className="font-headline text-5xl lg:text-6xl mb-6 leading-tight text-(--brand-deep)">
              Terms of Service
            </h1>
            <p className="font-body text-xl text-(--brand-neutral) leading-relaxed">
              Clear expectations for project scope, delivery, payment, and communication.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 bg-white rounded-2xl border border-border depth-card p-8 lg:p-10">
            <p>
              Services are provided under a written scope of work. Deliverables,
              timelines, and fees are agreed before work begins.
            </p>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">Payments</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                Payment terms are defined in the scope of work. Late payments
                may pause active work.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">Confidentiality</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                Client information is treated as confidential and used only to
                deliver services.
              </p>
            </div>

            <p className="font-body text-(--brand-neutral) leading-relaxed">
              For questions, email{" "}
              <Link className="text-(--brand-primary) hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
