// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ja'],
  defaultLocale: 'en',
  localePrefix:'never',
  domains: [
    {
      domain: 'en.example.com',
      defaultLocale: 'en',
      locales: ['en']
    },
    {
      domain: 'ja.example.com',
      defaultLocale: 'ja',
      locales: ['ja']
    }
  ],
  pathnames: {
    '/': '/',
    '/about': '/about'
  }
});