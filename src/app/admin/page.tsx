import type { Metadata } from "next";
import { AdminDashboardPage } from "@/components/design-pages/admin/AdminDashboardPage";

export const metadata: Metadata = {
  title: "Admin",
  description: "Private admin dashboard for FrameScale.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminDashboardPage />;
}
