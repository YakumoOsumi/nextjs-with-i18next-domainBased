// src/i18n/routing.ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ja"],
  defaultLocale: "en",
  localePrefix: "never",
  domains: [
    {
      domain: "en.localhost:3000",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain: "ja.localhost:3000",
      defaultLocale: "ja",
      locales: ["ja"],
    },
  ],
  pathnames: {
    "/": "/",
    "/about": "/about",
  },
});
