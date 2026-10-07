import { setRequestLocale } from "next-intl/server";
import { requirePageUser } from "@/lib/auth-guards";
import { ProfileForms } from "@/components/account/profile-forms";

export default async function AccountPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { user } = await requirePageUser(locale);
  return <ProfileForms user={{ id: user.id, name: user.name, email: user.email, phone: user.phone, role: user.role }} />;
}
