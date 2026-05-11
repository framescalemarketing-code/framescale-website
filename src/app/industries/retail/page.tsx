import type { Metadata } from "next";
import { RetailPage } from "@/components/design-pages/industries/RetailPage";

export const metadata: Metadata = {
  title: "Retail & E-commerce Marketing",
  description:
    "Performance marketing and conversion-focused systems for retail and e-commerce businesses.",
};

export default function Retail() {
  return <RetailPage />;
}
