"use client";

import { FormEvent, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";
import { AccountProfile, authErrorKey } from "@/lib/account-ui";
import { PasswordField } from "@/components/account/password-field";

export function ProfileForms({ user }: { user: AccountProfile }) {
  const t = useTranslations("account");
  const router = useRouter();
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [profileBusy, setProfileBusy] = useState(false);
  const [profileMessage, setProfileMessage] = useState("");
  const [profileError, setProfileError] = useState("");
  const [profileErrors, setProfileErrors] = useState<{ name?: string; phone?: string }>({});
  const [passwords, setPasswords] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [passwordBusy, setPasswordBusy] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordErrors, setPasswordErrors] = useState<Partial<Record<keyof typeof passwords, string>>>({});
  const profileSummary = useRef<HTMLDivElement>(null);
  const passwordSummary = useRef<HTMLDivElement>(null);

  function validateProfile(field: "name" | "phone") {
    if (field === "name" && (name.trim().length < 2 || name.trim().length > 100)) return t("errors.name");
    if (field === "phone" && (phone.trim().length < 7 || phone.trim().length > 25 || !/^\+?[0-9 ()-]+$/.test(phone.trim()))) return t("errors.phone");
    return undefined;
  }
  function validatePassword(field: keyof typeof passwords) {
    if (field === "currentPassword" && !passwords.currentPassword) return t("errors.currentPassword");
    if (field === "newPassword") {
      if (passwords.newPassword.length < 12 || passwords.newPassword.length > 128) return t("errors.password");
      if (passwords.newPassword === passwords.currentPassword) return t("errors.samePassword");
    }
    if (field === "confirmPassword" && passwords.newPassword !== passwords.confirmPassword) return t("errors.confirmPassword");
    return undefined;
  }

  async function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setProfileError(""); setProfileMessage("");
    const validation = { name: validateProfile("name"), phone: validateProfile("phone") };
    setProfileErrors(validation);
    if (Object.values(validation).some(Boolean)) { requestAnimationFrame(() => profileSummary.current?.focus()); return; }
    setProfileBusy(true);
    try {
      const response = await fetch("/api/account", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: name.trim(), phone: phone.trim() }) });
      const result = await response.json();
      if (!response.ok) { setProfileError(t(`errors.${authErrorKey(result.error, response.status)}`)); requestAnimationFrame(() => profileSummary.current?.focus()); return; }
      setProfileMessage(t("saved"));
      await authClient.getSession({ query: { disableCookieCache: true } });
      router.refresh();
    } catch { setProfileError(t("errors.network")); }
    finally { setProfileBusy(false); }
  }

  async function savePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setPasswordError(""); setPasswordMessage("");
    const validation = Object.fromEntries((Object.keys(passwords) as (keyof typeof passwords)[]).map((field) => [field, validatePassword(field)]));
    setPasswordErrors(validation);
    if (Object.values(validation).some(Boolean)) { requestAnimationFrame(() => passwordSummary.current?.focus()); return; }
    setPasswordBusy(true);
    try {
      const response = await fetch("/api/account/password", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(passwords) });
      const result = await response.json();
      if (!response.ok) { setPasswordError(t(`errors.${authErrorKey(result.error?.code ?? result.error ?? result.code, response.status)}`)); requestAnimationFrame(() => passwordSummary.current?.focus()); return; }
      setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setPasswordMessage(t("passwordChanged"));
      await authClient.getSession({ query: { disableCookieCache: true } });
      router.refresh();
    } catch { setPasswordError(t("errors.network")); }
    finally { setPasswordBusy(false); }
  }

  function feedback(message: string, error: string, errors: Record<string, string | undefined>, reference: React.RefObject<HTMLDivElement | null>) {
    return <>
      {(error || Object.values(errors).some(Boolean)) && <div className="form-feedback form-feedback-error" role="alert" tabIndex={-1} ref={reference}>
        {error || <><p>{t("validationTitle")}</p><ul>{Object.entries(errors).filter(([, text]) => text).map(([field, text]) => <li key={field}><a href={`#${field}`}>{text}</a></li>)}</ul></>}
      </div>}
      {message && <p className="form-feedback form-feedback-success" role="status">{message}</p>}
    </>;
  }

  return <div className="account-panels">
    <section className="account-panel"><h2>{t("profileTitle")}</h2><p className="panel-intro">{t("profileIntro")}</p>
      <form className="account-form" onSubmit={saveProfile} noValidate aria-busy={profileBusy}>
        {feedback(profileMessage, profileError, profileErrors, profileSummary)}
        <div className="form-field"><label htmlFor="name">{t("name")}</label><input id="name" name="name" autoComplete="name" value={name} maxLength={100} required onChange={(event) => { setName(event.target.value); setProfileErrors((errors) => ({ ...errors, name: undefined })); setProfileMessage(""); }} onBlur={() => setProfileErrors((errors) => ({ ...errors, name: validateProfile("name") }))} aria-invalid={!!profileErrors.name} aria-describedby={profileErrors.name ? "name-error" : undefined} />{profileErrors.name && <p id="name-error" className="field-error">{profileErrors.name}</p>}</div>
        <div className="form-field"><label htmlFor="email">{t("email")}</label><input id="email" name="email" type="email" value={user.email} readOnly aria-describedby="email-hint" /><p id="email-hint" className="field-hint">{t("emailHint")}</p></div>
        <div className="form-field"><label htmlFor="phone">{t("phone")}</label><input id="phone" name="phone" type="tel" autoComplete="tel" value={phone} maxLength={25} required onChange={(event) => { setPhone(event.target.value); setProfileErrors((errors) => ({ ...errors, phone: undefined })); setProfileMessage(""); }} onBlur={() => setProfileErrors((errors) => ({ ...errors, phone: validateProfile("phone") }))} aria-invalid={!!profileErrors.phone} aria-describedby={profileErrors.phone ? "phone-error" : undefined} />{profileErrors.phone && <p id="phone-error" className="field-error">{profileErrors.phone}</p>}</div>
        <button className="button button-dark" type="submit" disabled={profileBusy}>{t(profileBusy ? "busy" : "save")}</button>
      </form>
    </section>
    <section className="account-panel"><h2>{t("securityTitle")}</h2><p className="panel-intro">{t("securityIntro")}</p>
      <form className="account-form" onSubmit={savePassword} noValidate aria-busy={passwordBusy}>
        {feedback(passwordMessage, passwordError, passwordErrors, passwordSummary)}
        {(Object.keys(passwords) as (keyof typeof passwords)[]).map((field) => <PasswordField key={field} id={field} label={t(field)} value={passwords[field]} onChange={(value) => { setPasswords((previous) => ({ ...previous, [field]: value })); setPasswordErrors((errors) => ({ ...errors, [field]: undefined })); setPasswordMessage(""); }} onBlur={() => setPasswordErrors((errors) => ({ ...errors, [field]: validatePassword(field) }))} error={passwordErrors[field]} autoComplete={field === "currentPassword" ? "current-password" : "new-password"} hint={field === "newPassword" ? t("passwordHint") : undefined} />)}
        <button className="button button-dark" type="submit" disabled={passwordBusy}>{t(passwordBusy ? "busy" : "changePassword")}</button>
      </form>
    </section>
  </div>;
}
