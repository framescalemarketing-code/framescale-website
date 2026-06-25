import type { Metadata } from "next";
import { PaymentPage } from "@/components/design-pages/PaymentPage";

const title = "Make a Payment";
const description = "Pay securely with Stripe. Choose a package and complete your payment on a secure checkout page.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/payment" },
  // Payment pages should not be indexed.
  robots: { index: false, follow: false },
};

export default function Payment() {
  return <PaymentPage />;
}
