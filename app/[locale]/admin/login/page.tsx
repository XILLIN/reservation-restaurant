import { setRequestLocale } from "next-intl/server";
import { AdminLogin } from "@/components/admin-login";

export const metadata = { title: "Staff sign in", robots: { index: false, follow: false } };

export default async function AdminLoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AdminLogin />;
}
