import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { menuSections } from "@/data/restaurant";

const categoryKeys = ["category1", "category2", "category3"] as const;
const hintKeys = ["categoryHint1", "categoryHint2", "categoryHint3"] as const;
const photo = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1500&q=85";
function formatPrice(value: number, locale: "th" | "en") { return new Intl.NumberFormat(locale, { style: "currency", currency: "THB", maximumFractionDigits: 0, currencyDisplay: locale === "th" ? "narrowSymbol" : "code" }).format(value); }

export async function generateMetadata({ params }: { params: Promise<{ locale: "th" | "en" }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  const title = t("menuTitle");
  return { title, description: t("menuDescription"), alternates: { canonical: `/${locale}/menu`, languages: { th: "/th/menu", en: "/en/menu" } }, openGraph: { title: `Maison Ember | ${title}`, description: t("menuDescription"), locale: locale === "th" ? "th_TH" : "en_TH" } };
}

export default async function MenuPage({ params }: { params: Promise<{ locale: "th" | "en" }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("menu");
  const common = await getTranslations("common");
  return <div className="subpage menu-page">
    <section className="menu-page-hero page-gutter"><div><p className="eyebrow">{t("eyebrow")}</p><h1>{t.rich("title", { em: (chunks) => <em>{chunks}</em> })}</h1><p>{t("intro")}</p><a href="mailto:table@maisonember.com" className="text-link">{t("dietary")} <ArrowUpRight size={15} aria-hidden="true" /></a></div><figure><Image src={photo} alt={t("photoAlt")} fill priority sizes="(max-width: 760px) 100vw, 54vw" /><figcaption>{t("photoCaption")}</figcaption></figure></section>
    <nav className="menu-jump page-gutter" aria-label={t("categoriesLabel")}>{menuSections.map((section, index) => <a key={section.id} href={`#menu-${section.id}`}>{t(categoryKeys[index])}<span>0{index + 1}</span></a>)}</nav>
    <div className="menu-sections page-gutter">{menuSections.map((section, index) => <section id={`menu-${section.id}`} className="menu-section" key={section.id}><div className="menu-section-heading"><span className="menu-number">0{index + 1}</span><h2>{t(categoryKeys[index])}</h2><p>{t(hintKeys[index])}</p></div><div className="menu-items">{section.items.map((item) => <article className="menu-item" key={item.id}><div className="menu-item-top"><h3>{t(`items.${item.id}.name`)}</h3><span className="menu-dots" aria-hidden="true" /><strong>{formatPrice(item.price, locale)}</strong></div><div className="menu-item-bottom"><p>{t(`items.${item.id}.description`)}</p>{item.tag && <span>{t(`tag${item.tag[0].toUpperCase()}${item.tag.slice(1)}`)}</span>}</div></article>)}</div></section>)}</div>
    <p className="menu-disclaimer page-gutter">{t("disclaimer")}</p>
    <span className="sr-only">{common("restaurantName")}</span>
  </div>;
}
