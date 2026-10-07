import { requirePageAdmin } from "@/lib/auth-guards";
import { setRequestLocale } from "next-intl/server";
import { TablesManager } from "@/components/admin/tables-manager";

type Locale = "th" | "en";

export const metadata = {
  title: "Table Management - Maison Ember",
};

export default async function TablesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  await requirePageAdmin(locale);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-stone-900 tracking-tight">Table Management</h1>
        <p className="mt-2 text-stone-500">Add, edit, and manage restaurant tables and their current status.</p>
      </div>
      <TablesManager />
    </div>
  );
}
