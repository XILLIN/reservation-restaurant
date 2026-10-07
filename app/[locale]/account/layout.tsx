import { getTranslations, setRequestLocale } from "next-intl/server";
import { requirePageUser } from "@/lib/auth-guards";
import { AccountTabs } from "@/components/account/account-tabs";
import { LogoutButton } from "@/components/account/logout-button";

export const metadata = { title: "My account", robots: { index: false, follow: false } };

export default async function AccountLayout({ params, children }: { params: Promise<{ locale: string }>; children: React.ReactNode }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requirePageUser(locale);
  const t = await getTranslations("account");
  return <div className="account-page page-gutter">
    <header className="account-heading"><div><p className="eyebrow">{t("account")}</p><h1>{session.user.name}</h1><p>{t("accountIntro")}</p></div><LogoutButton /></header>
    <AccountTabs admin={session.user.role === "admin"} />
    {children}
  </div>;
}
