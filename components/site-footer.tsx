import { Instagram, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { restaurant } from "@/data/restaurant";

export function SiteFooter() {
  const t = useTranslations("footer");
  const contact = useTranslations("contact");
  const common = useTranslations("common");
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand"><Link href="/" className="footer-wordmark">maison ember</Link><p>{t("description")}</p></div>
      <div><p className="eyebrow">{t("find")}</p><p>{contact("address")}</p><a className="text-link" href="https://maps.google.com/?q=27+Soi+Sukhumvit+31+Bangkok" target="_blank" rel="noreferrer">{t("directions")} ↗</a></div>
      <div><p className="eyebrow">{t("hours")}</p>{restaurant.hours.map((hour, index) => <p className="footer-hours" key={hour.days}><span>{contact(index === 0 ? "hoursTueThu" : index === 1 ? "hoursFriSun" : "hoursMonday")}</span><span>{index === 2 ? common("closed") : contact(index === 0 ? "hoursTueThuTime" : "hoursFriSunTime")}</span></p>)}</div>
      <div><p className="eyebrow">{t("hello")}</p><p><a href={`tel:${restaurant.phone.replaceAll(" ", "")}`}><Phone size={14} aria-hidden="true" /> {common("phone")}</a></p><p><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={14} aria-hidden="true" /> {t("social")}</a></p></div>
    </div>
    <div className="footer-bottom"><span>{t("copyright")}</span><span>{t("signoff")}</span><Link href="/reservations">{t("reservations")} <span aria-hidden="true">↗</span></Link></div>
  </footer>;
}
