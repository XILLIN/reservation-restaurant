"use client";

import { useTranslations } from "next-intl";

export default function AccountError({ reset }: { reset: () => void }) {
  const t = useTranslations("account");
  return <div className="account-empty"><p role="alert">{t("errors.server")}</p><button type="button" className="button button-dark" onClick={reset}>{t("retry")}</button></div>;
}
