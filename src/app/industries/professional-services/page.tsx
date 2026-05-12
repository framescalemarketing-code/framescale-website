import type { Metadata } from "next";
import { ProfessionalServicesPage } from "@/components/design-pages/industries/ProfessionalServicesPage";

const title = "Professional Services Marketing for Law, Accounting, and Consulting Firms";
const description =
  "Pipeline generation for law firms, accounting practices, and consultancies. Authority-led positioning, firm-grade websites, and demand programs that book qualified consultations.";

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
