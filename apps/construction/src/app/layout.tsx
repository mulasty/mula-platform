import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ConsentAnalyticsScripts } from '@mula/ui'
import { ConsentAnalyticsScripts } from '@mula/ui'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Mula Construction – Konstrukcje i Hale Stalowe',
    template: '%s | Mula Construction',
  },
  description:
    'Nowoczesne konstrukcje stalowe, hale magazynowe, przemysłowe i rolnicze. Projekt, produkcja i montaż.',
  metadataBase: new URL('https://construction.mulagroup.eu'),
  keywords: [
    'konstrukcje stalowe',
    'hale stalowe',
    'hale magazynowe',
    'hale przemysłowe',
    'hale rolnicze',
    'projektowanie hal',
    'montaż stalowy',
    'Mula Group',
  ],
  authors: [{ name: 'Mula Group' }],
  creator: 'Mula Group',
  publisher: 'Mula Group',
  alternates: {
    canonical: 'https://construction.mulagroup.eu',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://construction.mulagroup.eu',
    siteName: 'Mula Construction',
    title: 'Mula Construction – Konstrukcje i Hale Stalowe',
    description:
      'Nowoczesne konstrukcje stalowe, hale magazynowe, przemysłowe i rolnicze. Projekt, produkcja i montaż.',
    images: [
      {
        url: '/images/og/home-og.webp',
        width: 1200,
        height: 630,
        alt: 'Mula Construction – Konstrukcje i Hale Stalowe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula Construction – Konstrukcje i Hale Stalowe',
    description:
      'Nowoczesne konstrukcje stalowe, hale magazynowe, przemysłowe i rolnicze. Projekt, produkcja i montaż.',
    images: ['/images/og/home-og.webp'],
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
  name: 'Mula Construction',
  url: 'https://construction.mulagroup.eu',
  description:
    'Nowoczesne konstrukcje stalowe, hale magazynowe, przemysłowe i rolnicze. Projekt, produkcja i montaż.',
  publisher: {
    '@type': 'Organization',
    name: 'Mula Group',
    url: 'https://mulagroup.eu',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookiebotCid = process.env.NEXT_PUBLIC_COOKIEBOT_CID ?? ''
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? ''
  const cookiebotCid = process.env.NEXT_PUBLIC_COOKIEBOT_CID ?? ''
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? ''

  return (
    <html lang="pl" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ConsentAnalyticsScripts cookiebotCid={cookiebotCid} ga4Id={ga4Id} />
              <ConsentAnalyticsScripts cookiebotCid={cookiebotCid} ga4Id={ga4Id} />
      </head>
      <body className="min-h-screen bg-mula-bg text-mula-text antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
