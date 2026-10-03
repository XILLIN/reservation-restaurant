import Image from "next/image";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowRight, ArrowUpRight, Flame, Leaf, MoveUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { QuickReservation } from "@/components/quick-reservation";
import { menuSections } from "@/data/restaurant";
import { routing } from "@/i18n/routing";

const photo = (id: string, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const price = (amount: number, locale: "th" | "en") => new Intl.NumberFormat(locale, { style: "currency", currency: "THB", maximumFractionDigits: 0, currencyDisplay: locale === "th" ? "narrowSymbol" : "code" }).format(amount);

export default async function HomePage({ params }: { params: Promise<{ locale: "th" | "en" }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const menu = await getTranslations("menu");
  const common = await getTranslations("common");
  const starters = menuSections[0].items;
  const mains = menuSections[1].items;
  return <>
    <section className="hero">
      <Image className="hero-image" src={photo("photo-1517248135467-4c7edcad34c4", 2200)} alt={t("heroImageAlt")} fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-content page-gutter">
        <p className="hero-kicker"><span /> {t("heroEyebrow")}</p>
        <h1>{t.rich("heroTitle", { em: (chunks) => <em>{chunks}</em> })}</h1>
        <p className="hero-copy">{t("heroDescription")}</p>
        <div className="hero-actions"><Link className="button button-light" href="/reservations">{common("findTable")} <ArrowRight size={16} aria-hidden="true" /></Link><Link className="hero-text-link" href="/menu">{common("exploreMenu")} <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
      </div>
      <div className="hero-caption"><span>{t("heroHours")}</span><span>{t("heroUntil")}</span></div>
      <a className="hero-scroll" href="#table"><span>{t("scroll")}</span><ArrowDown size={15} aria-hidden="true" /></a>
    </section>

    <section className="booking-section page-gutter" id="table">
      <div className="section-heading booking-heading"><p className="eyebrow">{t("bookingEyebrow")}</p><h2>{t("bookingTitle")}</h2></div>
      <div className="booking-content"><p className="booking-intro">{t("bookingIntro")} {t("largePartyLead")} <Link href="/contact">{t("contactTeam")}</Link>.</p><QuickReservation /></div>
    </section>

    <section className="menu-feature page-gutter">
      <div className="menu-intro"><p className="eyebrow">{t("menuEyebrow")}</p><h2>{t.rich("menuTitle", { em: (chunks) => <em>{chunks}</em> })}</h2><p>{t("menuCopy")}</p><Link href="/menu" className="text-link">{t("seeMenu")} <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
      <div className="menu-photo"><Image src={photo("photo-1544025162-d76694265947", 1200)} alt={t("menuPhotoAlt")} fill sizes="(max-width: 760px) 100vw, 48vw" /><span className="image-note">{t("photoNote")}</span></div>
      <div className="dish-list"><div className="dish-list-head"><span>{t("dishList")}</span><span>{t("aLaCarte", { price: price(starters[1].price, locale) })}</span></div>{mains.slice(0, 2).map((dish, index) => <article className="dish-row" key={dish.id}><span className="dish-index">0{index + 1}</span><div><h3>{menu(`items.${dish.id}.name`)}</h3><p>{menu(`items.${dish.id}.description`)}</p></div><span className="dish-price">{price(dish.price, locale)}</span></article>)}<Link className="dish-more" href="/menu">{t("dishMore")} <ArrowRight size={16} aria-hidden="true" /></Link></div>
    </section>

    <section className="story-section">
      <div className="story-image"><Image src={photo("photo-1556911220-bff31c812dba", 1300)} alt={t("storyAlt")} fill sizes="(max-width: 760px) 100vw, 52vw" /></div>
      <div className="story-copy"><p className="eyebrow">{t("storyEyebrow")}</p><h2>{t.rich("storyTitle", { em: (chunks) => <em>{chunks}</em> })}</h2><p>{t("storyOne")}</p><p>{t("storyTwo")}</p><Link href="/about" className="text-link">{t("storyLink")} <ArrowUpRight size={15} aria-hidden="true" /></Link><span className="story-mark"><Flame size={20} aria-hidden="true" /> {t("storyFootnote")}</span></div>
    </section>

    <section className="gallery-section page-gutter">
      <div className="gallery-heading"><div><p className="eyebrow">{t("galleryEyebrow")}</p><h2>{t.rich("galleryTitle", { em: (chunks) => <em>{chunks}</em> })}</h2></div><Link className="text-link" href="/about">{t("galleryLink")} <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
      <div className="gallery-grid">
        <figure className="gallery-large"><Image src={photo("photo-1414235077428-338989a2e8c0", 1400)} alt={t("galleryMainAlt")} fill sizes="(max-width: 760px) 100vw, 62vw" /><figcaption>{t("galleryMainCaption")}</figcaption></figure>
        <figure className="gallery-small"><Image src={photo("photo-1510812431401-41d2bd2722f3", 900)} alt={t("galleryWineAlt")} fill sizes="(max-width: 760px) 44vw, 26vw" /><figcaption>{t("galleryWineCaption")}</figcaption></figure>
        <div className="gallery-note"><Leaf size={18} aria-hidden="true" /><p>{t("galleryNote")}</p><Link href="/contact">{t("findBangkok")} <MoveUpRight size={15} aria-hidden="true" /></Link></div>
      </div>
    </section>

    <section className="quote-section"><span className="quote-mark" aria-hidden="true">“</span><blockquote>{t("philosophy")}</blockquote><p>— {t("philosophyAttribution")}</p><div className="quote-rule" /></section>

    <section className="closing-cta page-gutter"><div><p className="eyebrow">{t("closingEyebrow")}</p><h2>{t.rich("closingTitle", { em: (chunks) => <em>{chunks}</em> })}</h2></div><Link className="button button-dark" href="/reservations">{common("findTable")} <ArrowRight size={17} aria-hidden="true" /></Link><p>{t("location")}<br />{t("closingHours")}</p></section>
  </>;
}
