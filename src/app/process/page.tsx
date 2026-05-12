import type { Metadata } from "next";
import { ProcessPage } from "@/components/design-pages/ProcessPage";

const title = "Our Five-Phase Growth Process";
const description =
  "Five phases from industry and market research through strategy, launch, and optimization. Homework before spend, one thread from first call to live campaigns.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/process" },
  openGraph: { title, description, url: "/process", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Process() {
  return <ProcessPage />;
}
