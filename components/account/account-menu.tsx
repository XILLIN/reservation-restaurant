"use client";

import { useTranslations } from "next-intl";
import { UserRound } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";

export function AccountMenu({ onNavigate }: { onNavigate?: () => void }) {
  const t = useTranslations("account");
  const { data: session, isPending } = authClient.useSession();
  return <Link href={session || isPending ? "/account" : "/login"} className="nav-account" onClick={onNavigate}>
    <UserRound size={17} aria-hidden="true" /><span>{t(session || isPending ? "account" : "login")}</span>
  </Link>;
}
