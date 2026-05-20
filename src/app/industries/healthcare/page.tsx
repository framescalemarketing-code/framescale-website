import type { Metadata } from "next";
import { HealthcarePage } from "@/components/design-pages/industries/HealthcarePage";

const title = "Optical practice marketing when your site lags behind";
const description =
  "Independent optical and eye care: trust-forward sites and easier booking for referral lookups. Six years of optical retail and lab. California and beyond.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "healthcare marketing",
    "medical practice marketing",
    "dental marketing",
    "optical practice marketing",
    "patient acquisition",
    "healthcare SEO",
    "HIPAA marketing",
  ],
  alternates: { canonical: "/industries/healthcare" },
  openGraph: {
    title,
    description,
    url: "/industries/healthcare",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Healthcare() {
  return <HealthcarePage />;
}
