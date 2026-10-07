import { setRequestLocale } from "next-intl/server";
import { AuthForm } from "@/components/account/auth-form";

export const metadata = { title: "Create account", robots: { index: false, follow: false } };

export default async function RegisterPage({ params, searchParams }: {
  params: Promise<{ locale: string }>; searchParams: Promise<{ next?: string }>;
}) {
  const [{ locale }, { next }] = await Promise.all([params, searchParams]);
  setRequestLocale(locale);
  return <AuthForm mode="register" next={next} />;
}
