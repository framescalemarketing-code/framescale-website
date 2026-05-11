import type { Metadata } from "next";
import { HomePage } from "@/components/design-pages/HomePage";

export const metadata: Metadata = {
  title: "Full-Stack Growth Marketing",
  description:
    "Strategy and execution for small to mid-size businesses across healthcare, retail, and professional services.",
};

export default function Home() {
  return <HomePage />;
}
