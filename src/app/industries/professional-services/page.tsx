import type { Metadata } from "next";
import { ProfessionalServicesPage } from "@/components/design-pages/industries/ProfessionalServicesPage";

export const metadata: Metadata = {
  title: "Professional Services Marketing",
  description:
    "Strategic growth systems for law firms, consultancies, accounting practices, and service businesses.",
};

export default function ProfessionalServices() {
  return <ProfessionalServicesPage />;
}
