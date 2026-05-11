import type { Metadata } from "next";
import { ProcessPage } from "@/components/design-pages/ProcessPage";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Explore FrameScale's four-phase process for strategy, execution, and continuous optimization.",
};

export default function Process() {
  return <ProcessPage />;
}
