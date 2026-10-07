import { getTranslations } from "next-intl/server";

export default async function Loading() {
  const t = await getTranslations("account");
  return <p className="account-empty" role="status">{t("loading")}</p>;
}
