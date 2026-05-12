import type { Metadata } from "next";
import { ProfessionalServicesPage } from "@/components/design-pages/industries/ProfessionalServicesPage";

const title = "Professional services growth for consultants and partner-led firms";
const description =
  "Consultants and advisory firms lead the work, with law and accounting alongside. Authority-led positioning, firm-grade web, and pipeline attribution that respects long sales cycles.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "law firm marketing",
    "accounting marketing",
    "consulting marketing",
    "B2B lead generation",
    "professional services SEO",
    "thought leadership",
  ],
  alternates: { canonical: "/industries/professional-services" },
  openGraph: {
    title,
    description,
    url: "/industries/professional-services",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function ProfessionalServices() {
  return <ProfessionalServicesPage />;
}
