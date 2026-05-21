import type { Metadata } from "next";
import { RetailPage } from "@/components/design-pages/industries/RetailPage";

const title = "Retail Marketing You Can Read";
const description =
  "For stores and product brands that need clearer numbers, a stronger website, and spend that makes sense before the budget grows.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "retail marketing",
    "e-commerce marketing",
    "Shopify development",
    "DTC growth",
    "performance marketing",
    "website conversion",
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
