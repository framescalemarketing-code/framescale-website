import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How FrameScale collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-10 w-80 h-80 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-sm font-semibold uppercase tracking-wider text-(--brand-primary) mb-6">
              Privacy
            </span>
            <h1 className="font-headline text-5xl lg:text-6xl mb-6 leading-tight text-(--brand-deep)">
              Privacy Policy
            </h1>
            <p className="font-body text-xl text-(--brand-neutral) leading-relaxed">
              We collect only the information needed to respond to your inquiry and deliver agreed services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 bg-white rounded-2xl border border-border depth-card p-8 lg:p-10">
            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">What We Collect</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                Contact details and message contents submitted through our site, along with basic analytics data used to improve usability and site performance.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">How We Use It</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                We use your information to respond to inquiries, deliver services, and maintain communication related to active projects.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">Data Protection</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                We use secure platforms and reasonable safeguards to protect information from unauthorized access or misuse.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">Questions</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                For privacy questions, email
                {" "}
                <Link className="text-(--brand-primary) hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
