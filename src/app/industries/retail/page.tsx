import type { Metadata } from "next";
import { RetailPage } from "@/components/design-pages/industries/RetailPage";

const title = "Retail and e-commerce growth tied to margin";
const description =
  "Research-led acquisition for stores, DTC brands, and hybrids under margin pressure. Storefront, paid, SEO, and lifecycle work measured back to revenue you can verify.";

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
