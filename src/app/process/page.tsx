import type { Metadata } from "next";
import { ProcessPage } from "@/components/design-pages/ProcessPage";

const title = "Our Four-Phase Growth Process";
const description =
  "Discover, Strategize, Execute, Optimize. A clear four-phase framework that takes you from research to shipped systems and measurable growth.";

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
