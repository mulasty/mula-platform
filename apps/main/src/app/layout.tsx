import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'

export const metadata: Metadata = {
  title: 'Mula Group',
  metadataBase: new URL('https://mulagroup.eu'),
  alternates: {
    canonical: 'https://mulagroup.eu/',
    languages: Object.fromEntries(
      routing.locales.map((locale) => [locale, `https://mulagroup.eu/${locale}`])
    ),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="theme-light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-mula-bg text-mula-text antialiased">
        {children}
      </body>
    </html>
  )
}
