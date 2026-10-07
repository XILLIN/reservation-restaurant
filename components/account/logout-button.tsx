"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export function LogoutButton() {
  const t = useTranslations("account");
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function logout() {
    setBusy(true); setError("");
    try {
      const result = await authClient.signOut();
      if (result.error) { setError(t("errors.server")); return; }
      router.replace("/login");
      router.refresh();
    } catch { setError(t("errors.network")); }
    finally { setBusy(false); }
  }
  return <div><button type="button" className="account-logout" onClick={logout} disabled={busy}><LogOut size={16} aria-hidden="true" />{t(busy ? "busy" : "logout")}</button>{error && <p role="alert" className="field-error">{error}</p>}</div>;
}
