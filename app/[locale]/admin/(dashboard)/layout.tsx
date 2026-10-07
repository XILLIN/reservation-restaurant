import { setRequestLocale } from "next-intl/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/sidebar";

type Locale = "th" | "en";

export default async function AdminDashboardLayout({ 
  children, 
  params 
}: { 
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.has("admin_token");

  if (!isAuthenticated) {
    redirect(`/${locale}/admin/login`);
  }

  return (
    <div className="min-h-screen bg-[#F7F7F5] flex flex-col md:flex-row">
      <AdminSidebar />
      <main className="flex-1 md:ml-64 pt-16 md:pt-0 min-h-screen overflow-x-hidden p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
