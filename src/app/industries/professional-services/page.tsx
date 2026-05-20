import type { Metadata } from "next";
import { ProfessionalServicesPage } from "@/components/design-pages/industries/ProfessionalServicesPage";

const title = "Firm-grade websites and cases for referral-strong firms";
const description =
  "Consultants and partner-led firms: real sites and structured cases that support referrals without salesy lead-gen noise. Selective growth, credible inbound.";

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
