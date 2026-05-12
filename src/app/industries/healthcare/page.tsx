import type { Metadata } from "next";
import { HealthcarePage } from "@/components/design-pages/industries/HealthcarePage";

const title = "Healthcare growth for optical-led practices and care teams";
const description =
  "Booking-first growth for independent optical, dental, and specialty practices. Local research, fast sites, HIPAA-aware measurement, and channels tuned to fill the schedule.";

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
