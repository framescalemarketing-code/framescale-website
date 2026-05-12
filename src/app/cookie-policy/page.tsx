import type { Metadata } from "next";
import { PageBackLink } from "@/components/design/PageBackLink";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie and tracking technology notice for FrameScale website.",
};

export default function CookiePolicyPage() {
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
              Cookies
            </span>
            <h1 className="font-headline text-5xl lg:text-6xl mb-6 leading-tight text-(--brand-deep)">
              Cookie Policy
            </h1>
            <p className="font-body text-xl text-(--brand-neutral) leading-relaxed">
              This page explains how cookies and similar technologies are used on this website.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 bg-white rounded-2xl border border-border depth-card p-8 lg:p-10">
            <p className="font-body text-(--brand-neutral) leading-relaxed">
              This page opens your full Iubenda cookie policy. If the embed does not initialize, use the direct link.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.iubenda.com/privacy-policy/26891202/cookie-policy"
                className="iubenda-white iubenda-noiframe iubenda-embed inline-flex items-center justify-center rounded-xl px-5 py-3 font-ui text-sm font-semibold text-white bg-(--brand-primary) hover:bg-[#145F71] transition-colors"
                title="Cookie Policy"
              >
                Cookie Policy
              </a>
              <a
                href="https://www.iubenda.com/privacy-policy/26891202"
                className="iubenda-white iubenda-noiframe iubenda-embed inline-flex items-center justify-center rounded-xl px-5 py-3 font-ui text-sm font-semibold text-(--brand-primary) border border-(--brand-primary)/40 hover:bg-(--brand-primary)/8 transition-colors"
                title="Privacy Policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
