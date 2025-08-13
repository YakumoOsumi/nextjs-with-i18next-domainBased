// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ja'],
  defaultLocale: 'en',
  domains: [
    {
      domain: 'en.nextjs-with-i18next-domain-based.vercel.app',
      defaultLocale: 'en',
      locales: ['en']
    },
    {
      domain: 'ja.nextjs-with-i18next-domain-based.vercel.app',
      defaultLocale: 'ja',
      locales: ['ja']
    }
  ],
  pathnames: {
    '/': '/',
    '/about': '/about'
  }
});