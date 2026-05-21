import type { Metadata } from "next";
import { HealthcarePage } from "@/components/design-pages/industries/HealthcarePage";

const title = "Healthcare Websites That Build Trust";
const description =
  "For practices that rely on referrals and need the website to make booking easier, build trust faster, and show up clearly in local search.";

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
