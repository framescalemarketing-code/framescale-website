import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { iubenda } from "@/lib/iubenda";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Cookie Policy";
const description = "Cookie and tracking technology notice for the FrameScale website, including consent and preferences controls.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalShell title="Cookie Policy" lead="This page explains how cookies and similar technologies are used on this website.">
            <p className="font-body text-(--text-muted) leading-relaxed">
              This page opens your full Iubenda cookie policy. If the embed does not initialize, use the direct link.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={iubenda.cookiePolicyUrl}
                className="iubenda-white iubenda-noiframe iubenda-embed inline-flex items-center justify-center rounded-xl px-5 py-3 font-ui text-sm font-semibold text-white bg-(--brand-primary) hover:bg-(--brand-primary-hover) transition-colors"
                title="Cookie Policy"
              >
                Cookie Policy
              </a>
              <a
                href={iubenda.privacyPolicyUrl}
                className="iubenda-white iubenda-noiframe iubenda-embed inline-flex items-center justify-center rounded-xl px-5 py-3 font-ui text-sm font-semibold text-(--brand-primary) border border-(--brand-primary)/40 hover:bg-(--brand-primary)/8 transition-colors"
                title="Privacy Policy"
              >
                Privacy Policy
              </a>
            </div>
    </LegalShell>
  );
}
