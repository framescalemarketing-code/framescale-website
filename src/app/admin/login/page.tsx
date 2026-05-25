import type { Metadata } from "next";
import { AdminLoginPage } from "@/components/design-pages/admin/AdminLoginPage";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Private admin login for FrameScale.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLogin() {
  return <AdminLoginPage />;
}
