import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

type LegalShellProps = {
  title: string;
  lead: string;
  lastUpdated?: string;
  children: ReactNode;
};

/**
 * Shared chrome for the five legal pages. They keep their existing content and
 * simply inherit the editorial shell, so nothing legally meaningful changes.
 * `.legal-prose` supplies the typography the individual pages used to hand-roll.
 */
export function LegalShell({ title, lead, lastUpdated, children }: LegalShellProps) {
  return (
    <>
      <section className="pt-12 pb-12 md:pt-16 md:pb-16">
        <Container width="narrow">
          <Link
            href="/"
            className="link-quiet mb-10 inline-flex items-center gap-2 font-ui text-sm font-semibold text-(--brand-primary)"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back To Home
          </Link>

          <div className="flex flex-col gap-4">
            <h1 className="display-lg text-(--brand-deep)">{title}</h1>
            <p className="lead">{lead}</p>
            {lastUpdated ? (
              <p className="font-ui text-xs tracking-[0.06em] text-(--text-muted) uppercase">
                Last updated {lastUpdated}
              </p>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="rule pt-12 pb-24">
        <Container width="narrow">
          <div className="legal-prose flex flex-col gap-8">{children}</div>
        </Container>
      </section>
    </>
  );
}
