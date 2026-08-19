import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
  localeCookie: {
    name: 'NEXT_LOCALE',
    sameSite: 'lax',
    secure: true,
    path: '/',
  },
})
