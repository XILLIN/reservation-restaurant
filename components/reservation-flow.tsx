"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ChevronRight, Clock3, UsersRound } from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import { seatingOptions, timeSlots } from "@/data/restaurant";

type Reservation = { date: string; time: string; guests: string; seating: string; firstName: string; lastName: string; email: string; phone: string; occasion: string; requests: string };
const empty: Reservation = { date: "", time: "", guests: "2", seating: "dining-room", firstName: "", lastName: "", email: "", phone: "", occasion: "", requests: "" };
const slotState: Record<string, "available" | "limited" | "unavailable"> = { "17:30": "available", "18:00": "unavailable", "18:30": "available", "19:00": "available", "19:30": "limited", "20:00": "available", "20:30": "limited", "21:00": "available" };
const todayInBangkok = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
function prettyDate(value: string, locale: string) {
  if (!value) return "";
  const tag = locale === "th" ? "th-TH-u-ca-buddhist" : "en-GB";
  return new Intl.DateTimeFormat(tag, { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Bangkok" }).format(new Date(`${value}T12:00:00Z`));
}

export function ReservationFlow({ initialSelection }: { initialSelection: Partial<Pick<Reservation, "date" | "time" | "guests">> }) {
  const [reservation, setReservation] = useState<Reservation>({ ...empty, ...initialSelection });
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("reservation");
  const common = useTranslations("common");

  function update<K extends keyof Reservation>(key: K, value: Reservation[K]) {
    setReservation((current) => ({ ...current, [key]: value }));
    setError("");
  }
  function next() {
    if (step === 1 && !reservation.date) { setError(t("errors.date")); return; }
    if (step === 1 && reservation.date < todayInBangkok()) { setError(t("errors.past")); return; }
    if (step === 1 && new Date(`${reservation.date}T12:00:00Z`).getUTCDay() === 1) { setError(t("errors.closed")); return; }
    if (step === 2 && !reservation.time) { setError(t("errors.time")); return; }
    if (step === 2 && !reservation.seating) { setError(t("errors.seating")); return; }
    if (step === 3) {
      const required = [reservation.firstName, reservation.lastName, reservation.email, reservation.phone];
      if (required.some((value) => !value.trim())) { setError(t("errors.details")); return; }
      if (!/^\S+@\S+\.\S+$/.test(reservation.email)) { setError(t("errors.email")); return; }
    }
    setError(""); setStep((value) => Math.min(4, value + 1));
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 4) { next(); return; }
    const reference = `ME-${reservation.date.replaceAll("-", "")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    const query = new URLSearchParams({ date: reservation.date, time: reservation.time, guests: reservation.guests, seating: reservation.seating, ref: reference });
    router.push(`/reservations/confirmation?${query.toString()}`);
  }
  const selectedSeat = seatingOptions.find((seat) => seat.id === reservation.seating);
  const seatingName = selectedSeat ? t(`seating.${selectedSeat.nameKey}`) : t("seating.notSelected");
  const selectedDate = prettyDate(reservation.date, locale);

  return <div className="reservation-layout">
    <div className="reservation-main">
      <div className="reservation-progress" aria-label={`${t("steps.group")}: ${step} / 4`}><div className="progress-label"><span>{t("steps.group")}</span><span>0{step} <span className="progress-divider">/</span> 04</span></div><div className="progress-track"><span style={{ width: `${step * 25}%` }} /></div><div className="progress-steps">{[t("steps.date"), t("steps.time"), t("steps.details"), t("steps.review")].map((label, index) => <span key={label} className={index + 1 <= step ? "is-current" : ""}>{label}</span>)}</div></div>

      <form onSubmit={submit} noValidate>
        {step === 1 && <section className="flow-step"><p className="eyebrow">{t("date.eyebrow")}</p><h2>{t.rich("date.title", { em: (chunks) => <em>{chunks}</em> })}</h2><p className="step-intro">{t("date.intro")}</p>
          <div className="field-grid"><div className="form-field"><label htmlFor="booking-date">{t("date.label")} <span aria-label={t("date.required")}>*</span></label><input id="booking-date" type="date" min={todayInBangkok()} value={reservation.date} onChange={(e) => update("date", e.target.value)} required /><small>{t("date.hours")}</small></div>
            <div className="form-field"><label htmlFor="party-size">{t("date.partyLabel")} <span aria-label={t("date.required")}>*</span></label><select id="party-size" value={reservation.guests} onChange={(e) => update("guests", e.target.value)}>{Array.from({ length: 12 }, (_, index) => <option key={index + 1} value={index + 1}>{common("guests", { count: index + 1 })}</option>)}</select></div>
          </div>
          {Number(reservation.guests) >= 9 && <div className="inline-notice" role="status">{t("errors.largeParty")} <a href={`tel:${common("phone")}`}>{t("largePartyLink")}</a></div>}
          <div className="availability-note"><span className="status-dot" /> {t("date.sameDay")}</div>
        </section>}

        {step === 2 && <section className="flow-step"><p className="eyebrow">{t("time.eyebrow")}</p><h2>{t.rich("time.title", { em: (chunks) => <em>{chunks}</em> })}</h2><p className="step-intro">{selectedDate} · {common("guests", { count: Number(reservation.guests) })}</p>
          <fieldset className="slot-fieldset"><legend>{t("time.times")} <span className="fieldset-note">{t("time.timezone")}</span></legend><div className="time-slots">{timeSlots.map((slot) => { const status = slotState[slot]; return <button key={slot} type="button" disabled={status === "unavailable"} aria-pressed={reservation.time === slot} className={`time-slot ${reservation.time === slot ? "selected" : ""} ${status}`} onClick={() => update("time", slot)}><span>{slot}</span>{status === "limited" && <small>{t("time.limited")}</small>}{status === "unavailable" && <small>{t("time.full")}</small>}{status === "available" && <small>{t("time.available")}</small>}{reservation.time === slot && <Check size={14} aria-label={t("time.selected")} />}</button>; })}</div><p className="availability-legend"><span><i className="legend-open" /> {t("time.legendAvailable")}</span><span><i className="legend-limited" /> {t("time.legendLimited")}</span><span><i className="legend-full" /> {t("time.legendFull")}</span></p></fieldset>
          <fieldset className="seating-fieldset"><legend>{t("time.seating")}</legend><div className="seating-options">{seatingOptions.map((seat) => <button key={seat.id} type="button" disabled={!seat.available} aria-pressed={reservation.seating === seat.id} className={`seating-option ${reservation.seating === seat.id ? "selected" : ""} ${!seat.available ? "unavailable" : ""}`} onClick={() => update("seating", seat.id)}><span className="seat-check">{reservation.seating === seat.id && <Check size={14} aria-hidden="true" />}</span><span><strong>{t(`seating.${seat.nameKey}`)}</strong><small>{seat.available ? t(`seating.${seat.detailKey}`) : t("seating.counterDetail")}</small></span>{!seat.available && <small className="seat-unavailable">{t("seating.byRequest")}</small>}</button>)}</div></fieldset>
        </section>}

        {step === 3 && <section className="flow-step"><p className="eyebrow">{t("details.eyebrow")}</p><h2>{t.rich("details.title", { em: (chunks) => <em>{chunks}</em> })}</h2><p className="step-intro">{t("details.intro")}</p>
          <div className="field-grid"><div className="form-field"><label htmlFor="first-name">{t("details.first")} <span aria-label={t("date.required")}>*</span></label><input id="first-name" autoComplete="given-name" value={reservation.firstName} onChange={(e) => update("firstName", e.target.value)} required /></div><div className="form-field"><label htmlFor="last-name">{t("details.last")} <span aria-label={t("date.required")}>*</span></label><input id="last-name" autoComplete="family-name" value={reservation.lastName} onChange={(e) => update("lastName", e.target.value)} required /></div>
            <div className="form-field"><label htmlFor="email">{t("details.email")} <span aria-label={t("date.required")}>*</span></label><input id="email" type="email" autoComplete="email" value={reservation.email} onChange={(e) => update("email", e.target.value)} required /></div><div className="form-field"><label htmlFor="phone">{t("details.phone")} <span aria-label={t("date.required")}>*</span></label><input id="phone" type="tel" autoComplete="tel" value={reservation.phone} onChange={(e) => update("phone", e.target.value)} required /></div>
            <div className="form-field field-full"><label htmlFor="occasion">{t("details.occasion")}</label><select id="occasion" value={reservation.occasion} onChange={(e) => update("occasion", e.target.value)}><option value="">{t("details.none")}</option>{[["Birthday", "birthday"], ["Anniversary", "anniversary"], ["Business dinner", "business"], ["Date night", "dateNight"], ["Other", "other"]].map(([value, key]) => <option key={key} value={value}>{t(`details.${key}`)}</option>)}</select><small>{t("details.occasionHint")}</small></div>
            <div className="form-field field-full"><label htmlFor="requests">{t("details.requests")}</label><textarea id="requests" rows={3} placeholder={t("details.requestsPlaceholder")} value={reservation.requests} onChange={(e) => update("requests", e.target.value)} /><small>{t("details.requestsHint")}</small></div>
          </div>
        </section>}

        {step === 4 && <section className="flow-step"><p className="eyebrow">{t("review.eyebrow")}</p><h2>{t.rich("review.title", { em: (chunks) => <em>{chunks}</em> })}</h2><p className="step-intro">{t("review.intro")}</p><div className="review-card"><div className="review-photo"><Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85" alt={t("summary.imageAlt")} fill sizes="(max-width: 760px) 100vw, 600px" /></div><div className="review-details"><div><span className="review-label">{t("review.dateTime")}</span><strong>{selectedDate}</strong><span>{reservation.time}</span><button type="button" onClick={() => setStep(1)}>{t("review.editDate")} <ChevronRight size={14} aria-hidden="true" /></button></div><div><span className="review-label">{t("review.table")}</span><strong>{common("guests", { count: Number(reservation.guests) })}</strong><span>{seatingName}</span><button type="button" onClick={() => setStep(2)}>{t("review.editTable")} <ChevronRight size={14} aria-hidden="true" /></button></div><div><span className="review-label">{t("review.for")}</span><strong>{reservation.firstName} {reservation.lastName}</strong><span>{reservation.email}</span><span>{reservation.phone}</span></div>{reservation.occasion && <div><span className="review-label">{t("details.occasion")}</span><strong>{t(`details.${{ Birthday: "birthday", Anniversary: "anniversary", "Business dinner": "business", "Date night": "dateNight", Other: "other" }[reservation.occasion] || "other"}`)}</strong></div>}{reservation.requests && <div><span className="review-label">{t("review.note")}</span><p>{reservation.requests}</p></div>}</div></div><p className="policy-note">{t("review.policy", { phone: common("phone") })}</p></section>}

        {error && <p className="form-error" role="alert">{error}</p>}
        <div className="flow-controls">{step > 1 ? <button className="back-button" type="button" onClick={() => { setError(""); setStep((value) => value - 1); }}><ArrowLeft size={16} aria-hidden="true" /> {common("back")}</button> : <span />}{step < 4 ? <button className="button button-dark" type="button" onClick={next} disabled={step === 1 && Number(reservation.guests) >= 9}>{common("continue")} <ArrowRight size={16} aria-hidden="true" /></button> : <button className="button button-dark" type="submit">{t("review.confirm")} <CheckCircle2 size={17} aria-hidden="true" /></button>}</div>
      </form>
      <p className="secure-note">{t("secure")}</p>
    </div>

    <aside className="reservation-summary" aria-label={t("summary.eyebrow")}><div className="summary-heading"><p className="eyebrow">{t("summary.eyebrow")}</p><h2>{t.rich("summary.title", { em: (chunks) => <em>{chunks}</em> })}</h2></div><div className="summary-image"><Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85" alt={t("summary.imageAlt")} fill sizes="(max-width: 900px) 0px, 360px" /></div><dl className="summary-list"><div><dt><span>{t("summary.when")}</span><button type="button" onClick={() => setStep(1)}>{common("edit")}</button></dt><dd>{selectedDate || t("summary.chooseDate")}{reservation.time && <span> · {reservation.time}</span>}</dd></div><div><dt><span><UsersRound size={14} aria-hidden="true" /> {t("summary.guests")}</span>{step > 1 && <button type="button" onClick={() => setStep(1)}>{common("edit")}</button>}</dt><dd>{common("guests", { count: Number(reservation.guests) })}</dd></div><div><dt><span><Clock3 size={14} aria-hidden="true" /> {t("summary.seating")}</span>{step > 2 && <button type="button" onClick={() => setStep(2)}>{common("edit")}</button>}</dt><dd>{step > 1 ? seatingName : t("seating.notSelected")}</dd></div></dl><div className="summary-bottom"><span>{t("summary.help")}</span><a href={`tel:${common("phone")}`}>{common("phone")} <ArrowRight size={14} aria-hidden="true" /></a></div></aside>
  </div>;
}
