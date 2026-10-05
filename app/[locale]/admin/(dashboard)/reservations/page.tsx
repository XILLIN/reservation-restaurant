import { setRequestLocale } from "next-intl/server";
import { ReservationsManager } from "@/components/admin/reservations-manager";

type Locale = "th" | "en";

export const metadata = {
  title: "Reservations - Maison Ember",
  description: "Manage restaurant reservations",
};

export default async function ReservationsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-stone-900 tracking-tight">Reservations</h1>
        <p className="mt-2 text-stone-500">View and manage all bookings, search by customer, or filter by date.</p>
      </div>
      <ReservationsManager />
    </div>
  );
}
