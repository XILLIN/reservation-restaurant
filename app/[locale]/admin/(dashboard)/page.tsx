import { requirePageAdmin } from "@/lib/auth-guards";
import { setRequestLocale } from "next-intl/server";
import { DashboardOverview } from "@/components/admin/dashboard-overview";

type Locale = "th" | "en";

export const metadata = {
  title: "Dashboard - Maison Ember",
  description: "Restaurant Management Dashboard",
};

export default async function DashboardPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  await requirePageAdmin(locale);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-stone-900 tracking-tight">Today&apos;s Overview</h1>
        <p className="mt-2 text-stone-500">At a glance view of Maison Ember&apos;s reservations and metrics.</p>
      </div>
      <DashboardOverview />
    </div>
  );
}
