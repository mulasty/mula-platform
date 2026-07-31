import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ConsentAnalyticsScripts } from '@mula/ui'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Mula Digital – Transformacja Cyfrowa',
    template: '%s | Mula Digital',
  },
  description:
    'CRM, ERP, workflow, automatyzacja dokumentów i cyfryzacja firm. Projektujemy i wdrażamy rozwiązania, które realnie usprawniają operacje biznesowe.',
  metadataBase: new URL('https://digital.mulagroup.eu'),
  keywords: [
    'transformacja cyfrowa',
    'CRM',
    'ERP',
    'workflow',
    'automatyzacja',
    'cyfryzacja',
    'digitalizacja',
    'OCR',
    'Mula Group',
  ],
  authors: [{ name: 'Mula Group' }],
  creator: 'Mula Group',
  publisher: 'Mula Group',
  alternates: {
    canonical: 'https://digital.mulagroup.eu/',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://digital.mulagroup.eu',
    siteName: 'Mula Digital',
    title: 'Mula Digital – Transformacja Cyfrowa',
    description:
      'CRM, ERP, workflow, automatyzacja dokumentów i cyfryzacja firm.',
    images: [
      {
        url: '/images/og/home-og.svg',
        width: 1200,
        height: 630,
        alt: 'Mula Digital – Transformacja Cyfrowa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula Digital – Transformacja Cyfrowa',
    description:
      'CRM, ERP, workflow, automatyzacja dokumentów i cyfryzacja firm.',
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
  name: 'Mula Digital',
  url: 'https://digital.mulagroup.eu',
  description:
    'Transformacja cyfrowa – audyty, CRM/ERP, workflow, digitalizacja dokumentów, integracje i szkolenia.',
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
      </head>
      <body className="min-h-screen bg-mula-bg text-mula-text antialiased">
        <a href="#main-content" className="skip-link">Przejd� do tre�ci</a>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
