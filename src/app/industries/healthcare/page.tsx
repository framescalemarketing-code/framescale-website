import type { Metadata } from "next";
import { HealthcarePage } from "@/components/design-pages/industries/HealthcarePage";

const title = "Healthcare Marketing for Optical, Dental, and Medical Practices";
const description =
  "Patient acquisition systems for optical retail, dental clinics, and specialty medical practices. Modern websites, local SEO, paid campaigns, and HIPAA-aware analytics.";

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
