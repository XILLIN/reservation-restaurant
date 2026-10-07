"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function AccountTabs({ admin }: { admin: boolean }) {
  const t = useTranslations("account");
  const pathname = usePathname();
  const links = [{ href: "/account", label: "profileTab" }, { href: "/account/reservations", label: "reservationsTab" }, ...(admin ? [{ href: "/admin", label: "dashboard" }] : [])];
  return <nav className="account-tabs" aria-label={t("account")}>{links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{t(label)}</Link>)}</nav>;
}
