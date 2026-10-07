import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { requirePageUser } from "@/lib/auth-guards";
import { ReservationFlow } from "@/components/reservation-flow";

type Locale = "th" | "en";
type SearchSelection = { date?: string; time?: string; guests?: string };

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  const title = t("reservationTitle");
  return { title, description: t("reservationDescription"), alternates: { canonical: `/${locale}/reservations`, languages: { th: "/th/reservations", en: "/en/reservations" } }, openGraph: { title: `Maison Ember | ${title}`, description: t("reservationDescription"), locale: locale === "th" ? "th_TH" : "en_TH" } };
}

export default async function ReservationsPage({ params, searchParams }: { params: Promise<{ locale: Locale }>; searchParams: Promise<SearchSelection> }) {
  const [{ locale }, selection] = await Promise.all([params, searchParams]);
  setRequestLocale(locale);
  const query = new URLSearchParams();
  for (const key of ["date", "time", "guests"] as const) {
    if (typeof selection[key] === "string") query.set(key, selection[key]);
  }
  const { user } = await requirePageUser(locale, `/reservations${query.size ? `?${query}` : ""}`);
  const t = await getTranslations("reservation");
  return <div className="subpage reservations-page"><div className="reservation-title page-gutter"><p className="eyebrow">{t("eyebrow")}</p><h1>{t.rich("title", { em: (chunks) => <em>{chunks}</em> })}</h1><p>{t("intro")}</p></div><ReservationFlow initialSelection={selection} user={{ name: user.name, email: user.email, phone: user.phone }} /></div>;
}
