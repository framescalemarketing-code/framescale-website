import type { Metadata } from "next";
import Link from "next/link";
import { PageBackLink } from "@/components/design/PageBackLink";
import { iubenda } from "@/lib/iubenda";
import { buildPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const title = "Privacy Policy";
const description = "How FrameScale collects, uses, and protects information submitted through the website and related services.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-10 w-80 h-80 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <PageBackLink className="mb-8 lg:mb-10" />
            <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
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
            <p className="font-body text-(--brand-neutral) leading-relaxed">
              This page uses your Iubenda-hosted full policy. If the widget does not load, use the direct link below.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={iubenda.privacyPolicyUrl}
                className="iubenda-white iubenda-noiframe iubenda-embed inline-flex items-center justify-center rounded-xl px-5 py-3 font-ui text-sm font-semibold text-white bg-(--brand-primary) hover:bg-(--brand-primary-hover) transition-colors"
                title="Privacy Policy"
              >
                Privacy Policy
              </a>
              <a
                href={iubenda.cookiePolicyUrl}
                className="iubenda-white iubenda-noiframe iubenda-embed inline-flex items-center justify-center rounded-xl px-5 py-3 font-ui text-sm font-semibold text-(--brand-primary) border border-(--brand-primary)/40 hover:bg-(--brand-primary)/8 transition-colors"
                title="Cookie Policy"
              >
                Cookie Policy
              </a>
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
    </div>
  );
}
