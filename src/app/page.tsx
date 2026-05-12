import type { Metadata } from "next";
import { HomePage } from "@/components/design-pages/HomePage";

const title = "Growth marketing that teaches you to scale";
const description =
  "Research-led strategy, custom sites, and channels that earn their keep for healthcare, retail, and professional services owners who want direct access to the principal.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Home() {
  return <HomePage />;
}
