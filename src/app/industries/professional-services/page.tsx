import type { Metadata } from "next";
import { ProfessionalServicesPage } from "@/components/design-pages/industries/ProfessionalServicesPage";

const title = "Websites That Back Referrals";
const description =
  "For consultants and firms that need a credible website, stronger proof, and better-fit inquiries after prospects look them up.";

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
