import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Mula Marketing – Marketing Cyfrowy i Wzrost',
    template: '%s | Mula Marketing',
  },
  description:
    'SEO, Google Ads, Social Media, content marketing, email marketing i marketing automation. Strategie marketingowe oparte na danych, które zwiększają zasięg i generują leady.',
  metadataBase: new URL('https://marketing.mulagroup.eu'),
  keywords: [
    'marketing',
    'SEO',
    'SEM',
    'Google Ads',
    'Facebook Ads',
    'social media',
    'content marketing',
    'email marketing',
    'marketing automation',
    'performance marketing',
    'lead generation',
    'kampanie reklamowe',
    'Mula Group',
  ],
  authors: [{ name: 'Mula Group' }],
  creator: 'Mula Group',
  publisher: 'Mula Group',
  alternates: {
    canonical: 'https://marketing.mulagroup.eu',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://marketing.mulagroup.eu',
    siteName: 'Mula Marketing',
    title: 'Mula Marketing – Marketing Cyfrowy i Wzrost',
    description:
      'SEO, Google Ads, Social Media, content marketing i marketing automation. Strategie oparte na danych, które zwiększają zasięg i generują leady.',
    images: [
      {
        url: '/images/og/home-og.webp',
        width: 1200,
        height: 630,
        alt: 'Mula Marketing – Marketing Cyfrowy i Wzrost',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula Marketing – Marketing Cyfrowy i Wzrost',
    description:
      'SEO, Google Ads, Social Media, content marketing i marketing automation. Strategie oparte na danych.',
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
  name: 'Mula Marketing',
  url: 'https://marketing.mulagroup.eu',
  description:
    'Marketing cyfrowy i wzrost – SEO, Google Ads, Social Media, content marketing, email marketing i marketing automation.',
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
        <a href="#main-content" className="skip-link">Przejd� do tre�ci</a>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
