import { setRequestLocale } from "next-intl/server";
import { CustomersManager } from "@/components/admin/customers-manager";

type Locale = "th" | "en";

export const metadata = {
  title: "Customers - Maison Ember",
};

export default async function CustomersPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-stone-900 tracking-tight">Customer Database</h1>
        <p className="mt-2 text-stone-500">View customer profiles, booking history, and visit statistics.</p>
      </div>
      <CustomersManager />
    </div>
  );
}
