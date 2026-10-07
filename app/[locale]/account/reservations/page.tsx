import { getTranslations, setRequestLocale } from "next-intl/server";
import { requirePageUser } from "@/lib/auth-guards";
import connectToDatabase from "@/lib/mongodb";
import { Reservation } from "@/models/Reservation";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CalendarDays } from "lucide-react";

export default async function MyReservationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requirePageUser(locale, "/account/reservations");
  const t = await getTranslations("account");
  const r = await getTranslations("reservation");
  await connectToDatabase();
  const reservations = await Reservation.find({ userId: session.user.id }).sort({ date: -1, time: -1 }).lean();
  const seats = { "dining-room": "dining", terrace: "terrace", "chefs-counter": "counter" };
  const formatter = new Intl.DateTimeFormat(locale === "th" ? "th-TH" : "en-GB", { dateStyle: "long", timeZone: "Asia/Bangkok" });
  return <section className="my-reservations"><div className="reservation-list-heading"><div><h2>{t("reservationsTitle")}</h2><p>{t("reservationsIntro")}</p></div><Link href="/reservations" className="button button-dark">{t("reserve")} <ArrowRight size={16} aria-hidden="true" /></Link></div>
    {reservations.length === 0 ? <div className="account-empty"><CalendarDays size={32} aria-hidden="true" /><h3>{t("emptyTitle")}</h3><p>{t("emptyIntro")}</p><Link href="/reservations" className="text-link">{t("reserve")} <ArrowRight size={16} aria-hidden="true" /></Link></div>
      : <ul className="reservation-list">{reservations.map((booking) => <li key={String(booking._id)} className="reservation-list-item"><div><p className="eyebrow">{t("reference")}: {booking.reservationCode}</p><h3>{formatter.format(new Date(`${booking.date}T12:00:00+07:00`))}</h3><p>{booking.time} · {t("guests", { count: booking.guests })} · {r(`seating.${seats[booking.seatingOption as keyof typeof seats] ?? "dining"}`)}</p></div><span className={`reservation-status status-${booking.status}`}>{t(`statuses.${booking.status}`)}</span></li>)}</ul>}
  </section>;
}
