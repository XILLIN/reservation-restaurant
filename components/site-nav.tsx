"use client";

import { AccountMenu } from "@/components/account/account-menu";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const links = [
  { href: "/", key: "home" },
  { href: "/menu", key: "menu" },
  { href: "/about", key: "story" },
  { href: "/contact", key: "visit" }
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  function changeLanguage(nextLocale: "th" | "en") {
    if (nextLocale === locale) return;
    const query = typeof window === "undefined" ? "" : window.location.search;
    router.replace(`${pathname}${query}`, { locale: nextLocale });
    setOpen(false);
  }
  function renderLanguageSelector() {
    return <div className="language-switcher" role="group" aria-label={t("language")}>
      <button type="button" lang="th" aria-pressed={locale === "th"} onClick={() => changeLanguage("th")}>{t("shortThai")}</button>
      <span aria-hidden="true">/</span>
      <button type="button" lang="en" aria-pressed={locale === "en"} onClick={() => changeLanguage("en")}>{t("shortEnglish")}</button>
    </div>;
  }
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="wordmark" aria-label={t("logoHome")} onClick={() => setOpen(false)}>
          <span className="wordmark-main">maison ember</span>
          <span className="wordmark-sub">{t("wordmarkSub")}</span>
        </Link>
        <nav className="desktop-nav" aria-label={t("mainLabel")}>
          {links.map((link) => <Link key={link.href} href={link.href}>{t(link.key)}</Link>)}
        </nav>
        <div className="desktop-actions">{renderLanguageSelector()}<AccountMenu /><Link className="nav-cta" href="/reservations">{t("reserve")} <span aria-hidden="true">↗</span></Link></div>
        <button className="mobile-menu-button" type="button" aria-label={open ? t("close") : t("open")} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label={t("mobileLabel")}>
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{t(link.key)}</Link>)}
        <AccountMenu onNavigate={() => setOpen(false)} />
        <Link className="mobile-nav-cta" href="/reservations" onClick={() => setOpen(false)}>{t("reserve")} <span aria-hidden="true">↗</span></Link>
        {renderLanguageSelector()}
      </nav>}
    </header>
  );
}
