"use client";

import { FormEvent, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { Link, useRouter } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";
import { authErrorKey, safeReturnTo } from "@/lib/account-ui";
import { PasswordField } from "@/components/account/password-field";

type Field = "name" | "email" | "phone" | "password" | "confirmPassword";

export function AuthForm({ mode, next }: { mode: "login" | "register" | "admin"; next?: string }) {
  const t = useTranslations("account");
  const router = useRouter();
  const registering = mode === "register";
  const [values, setValues] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const summary = useRef<HTMLDivElement>(null);
  const returnTo = safeReturnTo(next);
  const query = returnTo ? `?next=${encodeURIComponent(returnTo)}` : "";

  function fieldError(field: Field) {
    const value = values[field].trim();
    if (field === "name" && (value.length < 2 || value.length > 100)) return t("errors.name");
    if (field === "phone" && (value.length < 7 || value.length > 25 || !/^\+?[0-9 ()-]+$/.test(value))) return t("errors.phone");
    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return t("errors.email");
    if (field === "password" && (registering ? values.password.length < 12 || values.password.length > 128 : !values.password)) return t("errors.password");
    if (field === "confirmPassword" && values.password !== values.confirmPassword) return t("errors.confirmPassword");
    return undefined;
  }
  function update(field: Field, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    setError("");
  }
  function blur(field: Field) { setErrors((previous) => ({ ...previous, [field]: fieldError(field) })); }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields: Field[] = registering ? ["name", "email", "phone", "password", "confirmPassword"] : ["email", "password"];
    const validation = Object.fromEntries(fields.map((field) => [field, fieldError(field)]));
    setErrors(validation);
    if (Object.values(validation).some(Boolean)) {
      requestAnimationFrame(() => summary.current?.focus());
      return;
    }
    setBusy(true); setError("");
    try {
      const result = registering
        ? await authClient.signUp.email({ name: values.name.trim(), email: values.email.trim().toLowerCase(), phone: values.phone.trim(), password: values.password })
        : await authClient.signIn.email({ email: values.email.trim().toLowerCase(), password: values.password });
      if (result.error) {
        setError(t(`errors.${authErrorKey(result.error.code, result.error.status)}`));
        requestAnimationFrame(() => summary.current?.focus());
        return;
      }
      if (mode === "admin" && result.data?.user.role !== "admin") {
        await authClient.signOut();
        setError(t("errors.forbidden"));
        requestAnimationFrame(() => summary.current?.focus());
        return;
      }
      router.replace(mode === "admin" ? "/admin" : returnTo ?? (result.data?.user.role === "admin" ? "/admin" : "/account"));
      router.refresh();
    } catch { setError(t("errors.network")); requestAnimationFrame(() => summary.current?.focus()); }
    finally { setBusy(false); }
  }

  return <section className="auth-page page-gutter">
    <div className="auth-story"><p className="eyebrow">{t("eyebrow")}</p><h1>{t(mode === "admin" ? "adminTitle" : registering ? "registerTitle" : "loginTitle")}</h1><p>{t(mode === "admin" ? "adminIntro" : registering ? "registerIntro" : "loginIntro")}</p><Link href="/" className="text-link">{t("backHome")} <ArrowRight size={16} aria-hidden="true" /></Link></div>
    <div className="account-panel auth-panel">
      <LockKeyhole size={26} className="account-symbol" aria-hidden="true" />
      <form onSubmit={submit} noValidate aria-busy={busy} className="account-form">
        {(error || Object.values(errors).some(Boolean)) && <div ref={summary} tabIndex={-1} className="form-feedback form-feedback-error" role="alert">
          {error || <><p>{t("validationTitle")}</p><ul>{Object.entries(errors).filter(([, message]) => message).map(([field, message]) => <li key={field}><a href={`#${field}`}>{message}</a></li>)}</ul></>}
        </div>}
        {registering && <div className="form-field"><label htmlFor="name">{t("name")}</label><input id="name" name="name" autoComplete="name" value={values.name} onChange={(event) => update("name", event.target.value)} onBlur={() => blur("name")} required maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <p id="name-error" className="field-error">{errors.name}</p>}</div>}
        <div className="form-field"><label htmlFor="email">{t("email")}</label><input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => update("email", event.target.value)} onBlur={() => blur("email")} required maxLength={254} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <p id="email-error" className="field-error">{errors.email}</p>}</div>
        {registering && <div className="form-field"><label htmlFor="phone">{t("phone")}</label><input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} onBlur={() => blur("phone")} required maxLength={25} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />{errors.phone && <p id="phone-error" className="field-error">{errors.phone}</p>}</div>}
        <PasswordField id="password" label={t("password")} value={values.password} onChange={(value) => update("password", value)} onBlur={() => blur("password")} error={errors.password} autoComplete={registering ? "new-password" : "current-password"} hint={registering ? t("passwordHint") : undefined} />
        {registering && <PasswordField id="confirmPassword" label={t("confirmPassword")} value={values.confirmPassword} onChange={(value) => update("confirmPassword", value)} onBlur={() => blur("confirmPassword")} error={errors.confirmPassword} autoComplete="new-password" />}
        <button className="button button-dark" type="submit" disabled={busy}>{busy ? t("busy") : t(registering ? "register" : "login")} <ArrowRight size={16} aria-hidden="true" /></button>
      </form>
      {mode !== "admin" && <p className="auth-switch">{t(registering ? "hasAccount" : "noAccount")} <Link className="text-link" href={`${registering ? "/login" : "/register"}${query}`}>{t(registering ? "login" : "register")}</Link></p>}
    </div>
  </section>;
}
