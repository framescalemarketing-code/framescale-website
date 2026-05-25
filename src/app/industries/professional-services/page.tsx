import { ProfessionalServicesPage } from "@/components/design-pages/industries/ProfessionalServicesPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Websites That Back Referrals";
const description =
  "For consultants and firms that need a credible website, stronger proof, and better-fit inquiries after prospects look them up.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/industries/professional-services",
  keywords: [
    "law firm marketing",
    "accounting marketing",
    "consulting marketing",
    "B2B lead generation",
    "professional services SEO",
    "thought leadership",
  ],
});

export default function ProfessionalServices() {
  return <ProfessionalServicesPage />;
}
