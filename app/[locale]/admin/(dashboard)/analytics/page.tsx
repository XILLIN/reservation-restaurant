import { requirePageAdmin } from "@/lib/auth-guards";
import { setRequestLocale } from "next-intl/server";
import { AnalyticsDashboard } from "@/components/admin/analytics-dashboard";

type Locale = "th" | "en";

export const metadata = {
  title: "Analytics - Maison Ember",
};

export default async function AnalyticsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  await requirePageAdmin(locale);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-stone-900 tracking-tight">Business Analytics</h1>
        <p className="mt-2 text-stone-500">Track restaurant performance, booking trends, and zone utilization.</p>
      </div>
      <AnalyticsDashboard />
    </div>
  );
}
