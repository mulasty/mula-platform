import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Mula Innovation – Technologie Przyszłości',
    template: '%s | Mula Innovation',
  },
  description:
    'Konsulting innowacyjny, prototypowanie MVP, transformacja cyfrowa, IoT, automatyzacja i venture building. Budujemy produkty future-proof, które realnie zmieniają biznes.',
  metadataBase: new URL('https://innovation.mulagroup.eu'),
  keywords: [
    'innowacje',
    'MVP',
    'prototypowanie',
    'transformacja cyfrowa',
    'IoT',
    'Industry 4.0',
    'automatyzacja',
    'startup studio',
    'venture building',
    'inkubacja startupów',
    'Mula Group',
  ],
  authors: [{ name: 'Mula Group' }],
  creator: 'Mula Group',
  publisher: 'Mula Group',
  alternates: {
    canonical: 'https://innovation.mulagroup.eu',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://innovation.mulagroup.eu',
    siteName: 'Mula Innovation',
    title: 'Mula Innovation – Technologie Przyszłości',
    description:
      'Konsulting innowacyjny, prototypowanie MVP, IoT i venture building. Budujemy produkty future-proof.',
    images: [
      {
        url: '/images/og/home-og.svg',
        width: 1200,
        height: 630,
        alt: 'Mula Innovation – Technologie Przyszłości',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula Innovation – Technologie Przyszłości',
    description:
      'Konsulting innowacyjny, prototypowanie MVP, IoT i venture building. Budujemy produkty future-proof.',
    images: ['/images/og/home-og.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mula Innovation',
  url: 'https://innovation.mulagroup.eu',
  description:
    'Startup studio i innowacje technologiczne – konsulting, MVP, IoT, automatyzacja i venture building.',
  publisher: {
    '@type': 'Organization',
    name: 'Mula Group',
    url: 'https://mulagroup.eu',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-mula-bg text-mula-text antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
