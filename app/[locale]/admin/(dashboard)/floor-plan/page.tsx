import { setRequestLocale } from "next-intl/server";
import { FloorPlan } from "@/components/admin/floor-plan";

type Locale = "th" | "en";

export const metadata = {
  title: "Floor Plan - Maison Ember",
};

export default async function FloorPlanPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-stone-900 tracking-tight">Floor Plan</h1>
        <p className="mt-2 text-stone-500">Visual mapping of restaurant zones and real-time table status.</p>
      </div>
      <FloorPlan />
    </div>
  );
}
