import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/design/Button";
import { PAGE_SUCCESS_INNER } from "@/lib/page-layout";

const title = "Payment Received";
const description = "Thank you — your payment was received.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
};

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 blur-3xl" />
        </div>

        <div className={PAGE_SUCCESS_INNER}>
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-(--brand-primary) to-(--brand-secondary)">
            <CheckCircle2 className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl mb-4" style={{ color: "var(--brand-deep)" }}>
            Payment received
          </h1>
          <p
            className="mx-auto mb-8 max-w-xl font-body text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--brand-neutral)" }}
          >
            Thank you. Your payment was processed successfully and a receipt is on its way to your email. I will be in
            touch shortly with next steps.
          </p>
          <Button href="/" size="lg" icon="arrow">
            Back to Home
          </Button>
        </div>
      </section>
    </div>
  );
}
