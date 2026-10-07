"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  id: string; label: string; autoComplete: "current-password" | "new-password";
  value: string; onChange: (value: string) => void; onBlur?: () => void;
  error?: string; hint?: string;
};

export function PasswordField({ id, label, value, onChange, onBlur, error, hint, autoComplete }: Props) {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("account");
  const description = [error && `${id}-error`, hint && `${id}-hint`].filter(Boolean).join(" ");
  return <div className="form-field">
    <label htmlFor={id}>{label}</label>
    <div className="password-control">
      <input id={id} name={id} type={visible ? "text" : "password"} autoComplete={autoComplete}
        value={value} onChange={(event) => onChange(event.target.value)} onBlur={onBlur}
        maxLength={128} required aria-invalid={!!error} aria-describedby={description || undefined} />
      <button type="button" onClick={() => setVisible(!visible)} aria-label={visible ? t("hidePassword") : t("showPassword")} aria-pressed={visible}>
        {visible ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
      </button>
    </div>
    {hint && <p className="field-hint" id={`${id}-hint`}>{hint}</p>}
    {error && <p className="field-error" id={`${id}-error`}>{error}</p>}
  </div>;
}
