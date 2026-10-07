import { redirect } from "next/navigation";
import { requirePageUser } from "@/lib/auth-guards";
import connectToDatabase from "@/lib/mongodb";
import { Reservation } from "@/models/Reservation";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CalendarPlus, Check } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Locale = "th" | "en";
type Booking = { date?: string; time?: string; guests?: string; seating?: string; ref?: string };
const seatingKey: Record<string, string> = { "dining-room": "dining", terrace: "terrace", "chefs-counter": "counter" };
function prettyDate(value: string | undefined, locale: Locale) {
  if (!value) return "";
  const language = locale === "th" ? "th-TH-u-ca-buddhist" : "en-GB";
  return new Intl.DateTimeFormat(language, { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Bangkok" }).format(new Date(`${value}T12:00:00Z`));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  const title = t("confirmationTitle");
  return { title, description: t("confirmationDescription"), alternates: { canonical: `/${locale}/reservations/confirmation`, languages: { th: "/th/reservations/confirmation", en: "/en/reservations/confirmation" } }, robots: { index: false, follow: false } };
}

export default async function ConfirmationPage({ params, searchParams }: { params: Promise<{ locale: Locale }>; searchParams: Promise<Booking> }) {
  const [{ locale }, query] = await Promise.all([params, searchParams]);
  const session = await requirePageUser(locale, "/account/reservations");
  if (typeof query.ref !== "string") redirect(`/${locale}/account/reservations`);
  await connectToDatabase();
  const saved = await Reservation.findOne({ reservationCode: query.ref, userId: session.user.id }).lean();
  if (!saved) redirect(`/${locale}/account/reservations`);
  const booking = { ref: saved.reservationCode, date: saved.date, time: saved.time, guests: String(saved.guests), seating: saved.seatingOption };
  setRequestLocale(locale);
  const t = await getTranslations("confirmation");
  const common = await getTranslations("common");
  const reservation = await getTranslations("reservation");
  const seating = seatingKey[booking.seating || "dining-room"] || "dining";
  const guestCount = Number(booking.guests) || 2;
  return <div className="confirmation-page page-gutter"><div className="confirmation-card"><div className="confirmation-mark"><Check size={25} aria-hidden="true" /></div><p className="eyebrow">{t("eyebrow")}</p><h1>{t("title")}<br /><em>{t("welcome")}</em></h1><p className="confirmation-copy">{t("copy")}</p><div className="confirmation-details"><div><span>{t("number")}</span><strong>{booking.ref || "—"}</strong></div><div><span>{t("date")}</span><strong>{prettyDate(booking.date, locale) || t("defaultDate")}</strong></div><div><span>{t("time")}</span><strong>{booking.time || t("defaultTime")}</strong></div><div><span>{t("guests")}</span><strong>{common("guests", { count: guestCount })}</strong></div><div><span>{t("seating")}</span><strong>{reservation(`seating.${seating}`)}</strong></div></div><div className="confirmation-actions"><Link href="/" className="button button-dark">{t("back")} <ArrowRight size={16} aria-hidden="true" /></Link><a href="mailto:table@maisonember.com?subject=Maison%20Ember%20reservation" className="text-link"><CalendarPlus size={15} aria-hidden="true" /> {t("calendar")}</a></div><p className="confirmation-help">{t("help")} <a href={`tel:${common("phone")}`}>{common("phone")}</a></p></div><div className="confirmation-image"><Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85" alt={reservation("summary.imageAlt")} fill sizes="(max-width: 760px) 100vw, 40vw" /></div></div>;
}
