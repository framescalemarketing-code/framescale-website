import { RetailPage } from "@/components/design-pages/industries/RetailPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Retail Marketing You Can Read";
const description =
  "For stores and product brands that need clearer numbers, a stronger website, and spend that makes sense before the budget grows.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/industries/retail",
  keywords: [
    "retail marketing",
    "e-commerce marketing",
    "Shopify development",
    "DTC growth",
    "performance marketing",
    "website conversion",
    "lifecycle email",
  ],
});

export default function Retail() {
  return <RetailPage />;
}
