import type { Metadata } from "next";
import { HealthcarePage } from "@/components/design-pages/industries/HealthcarePage";

export const metadata: Metadata = {
  title: "Healthcare Marketing",
  description:
    "Growth strategy and execution for healthcare providers, clinics, and optical practices.",
};

export default function Healthcare() {
  return <HealthcarePage />;
}
