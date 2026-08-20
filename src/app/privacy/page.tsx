import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/layout/LegalShell";
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
    <LegalShell eyebrow="Privacy" title="Privacy Policy" lead="We collect only the information needed to respond to your inquiry and deliver agreed services.">
            <p className="font-body text-(--text-muted) leading-relaxed">
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
              <p className="font-body text-(--text-muted) leading-relaxed">
                For privacy questions, email
                {" "}
                <Link className="text-(--brand-primary) hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </Link>
                .
              </p>
            </div>
    </LegalShell>
  );
}
