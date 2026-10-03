import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Karla, Noto_Sans_Thai, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { routing } from "@/i18n/routing";
import "../globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display", display: "swap" });
const karla = Karla({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });
const notoThai = Noto_Sans_Thai({ subsets: ["latin", "thai"], weight: ["400", "500", "600", "700"], variable: "--font-thai", display: "swap" });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  const home = await getTranslations({ locale, namespace: "home" });
  const title = `Maison Ember | ${t("homeTitle")}`;
  const description = t("homeDescription");
  const alternates = { canonical: `/${locale}`, languages: { th: "/th", en: "/en" } };
  return {
    metadataBase: new URL("https://maisonember.com"),
    title: { default: title, template: `%s — Maison Ember` },
    description,
    alternates,
    openGraph: { title: home("metaOgTitle"), description: home("metaOgDescription"), type: "website", locale: locale === "th" ? "th_TH" : "en_TH", url: `/${locale}` },
  };
}

export const viewport: Viewport = { themeColor: "#f5f1e9", width: "device-width", initialScale: 1 };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "metadata" });
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Maison Ember",
    description: t("homeDescription"),
    servesCuisine: [messages.common.cuisine, messages.common.cooking],
    priceRange: "฿฿฿",
    telephone: "+66 2 258 4418",
    address: { "@type": "PostalAddress", streetAddress: messages.contact.address, addressLocality: "Watthana", addressRegion: "Bangkok", postalCode: "10110", addressCountry: "TH" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "17:30", closes: "23:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday", "Sunday"], opens: "17:30", closes: "00:00" },
    ],
  };
  return <html lang={locale} className={locale === "th" ? "locale-th" : "locale-en"}><body className={`${playfair.variable} ${karla.variable} ${notoThai.variable}`}><NextIntlClientProvider messages={messages}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><a className="skip-link" href="#main-content">{messages.common.skipToContent}</a><SiteNav /><main id="main-content">{children}</main><SiteFooter /></NextIntlClientProvider></body></html>;
}
