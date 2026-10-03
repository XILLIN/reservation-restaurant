import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["th", "en"],
  defaultLocale: "th",
  localePrefix: "always",
  localeDetection: false,
  localeCookie: false
});

export type AppLocale = (typeof routing.locales)[number];
