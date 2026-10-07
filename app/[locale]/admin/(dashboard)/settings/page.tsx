import { requirePageAdmin } from "@/lib/auth-guards";
import { setRequestLocale } from "next-intl/server";
import { SettingsManager } from "@/components/admin/settings-manager";

type Locale = "th" | "en";

export const metadata = {
  title: "Settings - Maison Ember",
};

export default async function SettingsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  await requirePageAdmin(locale);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-stone-900 tracking-tight">System Settings</h1>
        <p className="mt-2 text-stone-500">Manage your restaurant profile, booking rules, and security.</p>
      </div>
      <SettingsManager />
    </div>
  );
}
