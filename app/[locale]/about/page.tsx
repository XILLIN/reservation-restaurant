import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: "th" | "en" }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  const title = t("aboutTitle");
  return { title, description: t("aboutDescription"), alternates: { canonical: `/${locale}/about`, languages: { th: "/th/about", en: "/en/about" } }, openGraph: { title: `Maison Ember | ${title}`, description: t("aboutDescription"), locale: locale === "th" ? "th_TH" : "en_TH" } };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: "th" | "en" }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const common = await getTranslations("common");
  return <div className="subpage story-page">
    <section className="story-page-intro page-gutter"><p className="eyebrow">{t("eyebrow")}</p><h1>{t.rich("title", { em: (chunks) => <em>{chunks}</em> })}</h1><p>{t("intro")}</p></section>
    <div className="about-image"><Image src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=2000&q=85" alt={t("imageAlt")} fill priority sizes="100vw" /></div>
    <section className="about-copy page-gutter"><div className="about-aside"><span className="eyebrow">{t("way")}</span><span className="about-year">{t("established")}</span></div><div><h2>{t.rich("heading", { em: (chunks) => <em>{chunks}</em> })}</h2><p>{t("paragraph1")}</p><p>{t("paragraph2")}</p><p>{t("paragraph3")}</p><Link href="/reservations" className="text-link">{t("comeSit")} <ArrowRight size={15} aria-hidden="true" /></Link></div></section>
    <section className="values-band"><div><Leaf size={19} aria-hidden="true" /><h3>{t("value1Title")}</h3><p>{t("value1Copy")}</p></div><div><span className="values-symbol" aria-hidden="true">∿</span><h3>{t("value2Title")}</h3><p>{t("value2Copy")}</p></div><div><span className="values-symbol" aria-hidden="true">⌂</span><h3>{t("value3Title")}</h3><p>{t("value3Copy")}</p></div></section>
    <span className="sr-only">{common("restaurantName")}</span>
  </div>;
}
