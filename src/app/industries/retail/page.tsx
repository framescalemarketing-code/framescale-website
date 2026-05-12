import type { Metadata } from "next";
import { RetailPage } from "@/components/design-pages/industries/RetailPage";

const title = "Retail & E-commerce Growth Marketing";
const description =
  "Customer-acquisition and retention systems for physical retail, e-commerce, and consumer brands. Storefront engineering, paid media, SEO, and lifecycle automation.";

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
