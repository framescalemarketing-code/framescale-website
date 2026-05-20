import type { Metadata } from "next";
import { RetailPage } from "@/components/design-pages/industries/RetailPage";

const title = "Retail and e-commerce growth when CAC outruns margin";
const description =
  "Hybrid online-first brands: align message, audience, and channel before scaling spend. Collaborative strategy, storefront CRO, and attribution tied to margin.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "retail marketing",
    "e-commerce marketing",
    "Shopify development",
    "DTC growth",
    "performance marketing",
    "CRO",
    "lifecycle email",
  ],
  alternates: { canonical: "/industries/retail" },
  openGraph: {
    title,
    description,
    url: "/industries/retail",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Retail() {
  return <RetailPage />;
}
