import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone, CarFront, Shirt } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { restaurant } from "@/data/restaurant";

export async function generateMetadata({ params }: { params: Promise<{ locale: "th" | "en" }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  const title = t("contactTitle");
  return { title, description: t("contactDescription"), alternates: { canonical: `/${locale}/contact`, languages: { th: "/th/contact", en: "/en/contact" } }, openGraph: { title: `Maison Ember | ${title}`, description: t("contactDescription"), locale: locale === "th" ? "th_TH" : "en_TH" } };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: "th" | "en" }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const common = await getTranslations("common");
  return <div className="subpage contact-page">
    <section className="contact-hero page-gutter"><div><p className="eyebrow">{t("eyebrow")}</p><h1>{t.rich("title", { em: (chunks) => <em>{chunks}</em> })}</h1><p>{t("intro")}</p><a href="https://maps.google.com/?q=27+Soi+Sukhumvit+31+Bangkok" target="_blank" rel="noreferrer" className="button button-dark">{common("directions")} <ArrowUpRight size={16} aria-hidden="true" /></a></div><figure><Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85" alt={t("imageAlt")} fill priority sizes="(max-width: 760px) 100vw, 56vw" /></figure></section>
    <section className="contact-details page-gutter"><div className="contact-block"><span className="contact-icon"><MapPin size={19} aria-hidden="true" /></span><p className="eyebrow">{t("addressEyebrow")}</p><h2>{t("addressName")}</h2><p>{t("address")}</p><a className="text-link" href="https://maps.google.com/?q=27+Soi+Sukhumvit+31+Bangkok" target="_blank" rel="noreferrer">{t("openMaps")} <ArrowUpRight size={14} aria-hidden="true" /></a></div><div className="contact-block"><span className="contact-icon"><Phone size={19} aria-hidden="true" /></span><p className="eyebrow">{t("phoneEyebrow")}</p><h2>{t("phoneTitle")}</h2><p><a href={`tel:${restaurant.phone.replaceAll(" ", "")}`}>{common("phone")}</a><br /><a href={`mailto:${common("email")}`}>{common("email")}</a></p><p className="contact-small">{t("largeParty")}</p></div><div className="contact-block hours-block"><span className="contact-icon"><span className="hours-symbol" aria-hidden="true">◷</span></span><p className="eyebrow">{t("hoursEyebrow")}</p>{[[t("hoursTueThu"), t("hoursTueThuTime")], [t("hoursFriSun"), t("hoursFriSunTime")], [t("hoursMonday"), common("closed")]].map(([days, time]) => <p className="hours-row" key={days}><span>{days}</span><strong>{time}</strong></p>)}</div></section>
    <section className="visit-notes page-gutter"><div><CarFront size={19} aria-hidden="true" /><h3>{t("gettingHere")}</h3><p>{t("gettingCopy")}</p></div><div><Shirt size={19} aria-hidden="true" /><h3>{t("dress")}</h3><p>{t("dressCopy")}</p></div><div><span className="policy-star" aria-hidden="true">✳</span><h3>{t("smallNote")}</h3><p>{t("policy")}</p></div></section>
    <section className="contact-reserve page-gutter"><p className="eyebrow">{t("closingEyebrow")}</p><h2>{t.rich("closingTitle", { em: (chunks) => <em>{chunks}</em> })}</h2><Link href="/reservations" className="button button-light">{common("findTable")} <ArrowUpRight size={15} aria-hidden="true" /></Link></section>
  </div>;
}
