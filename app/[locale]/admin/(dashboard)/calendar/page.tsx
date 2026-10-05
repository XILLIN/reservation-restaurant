import { setRequestLocale } from "next-intl/server";
import { CalendarManager } from "@/components/admin/calendar-manager";

type Locale = "th" | "en";

export const metadata = {
  title: "Calendar - Maison Ember",
};

export default async function CalendarPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-stone-900 tracking-tight">Calendar</h1>
        <p className="mt-2 text-stone-500">View your reservations in a monthly or daily calendar format.</p>
      </div>
      <CalendarManager />
    </div>
  );
}
