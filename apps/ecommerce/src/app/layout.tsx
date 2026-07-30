import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Mula E-Commerce – Handel Internetowy i Marketplace',
    template: '%s | Mula E-Commerce',
  },
  description:
    'Sklepy internetowe, integracje marketplace (Allegro, Amazon, Shopify), optymalizacja konwersji, automatyzacja logistyki i analityka sprzedaży. Zwiększamy przychody e-commerce.',
  metadataBase: new URL('https://ecommerce.mulagroup.eu'),
  keywords: [
    'e-commerce', 'sklep internetowy', 'marketplace', 'Allegro', 'Amazon',
    'Shopify', 'WooCommerce', 'optymalizacja konwersji', 'automatyzacja logistyki',
    'analityka sprzedaży', 'mobile commerce', 'Mula Group',
  ],
  authors: [{ name: 'Mula Group' }],
  creator: 'Mula Group',
  publisher: 'Mula Group',
  alternates: {
    canonical: 'https://ecommerce.mulagroup.eu',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://ecommerce.mulagroup.eu',
    siteName: 'Mula E-Commerce',
    title: 'Mula E-Commerce – Handel Internetowy i Marketplace',
    description:
      'Sklepy internetowe, integracje marketplace, optymalizacja konwersji i automatyzacja logistyki dla e-commerce.',
    images: [
      {
        url: '/images/og/home-og.svg',
        width: 1200,
        height: 630,
        alt: 'Mula E-Commerce – Handel Internetowy i Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula E-Commerce – Handel Internetowy i Marketplace',
    description:
      'Sklepy internetowe, integracje marketplace, optymalizacja konwersji i automatyzacja logistyki dla e-commerce.',
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
  name: 'Mula E-Commerce',
  url: 'https://ecommerce.mulagroup.eu',
  description:
    'Kompleksowa obsługa e-commerce — sklepy internetowe, marketplace, optymalizacja konwersji, automatyzacja logistyki i analityka sprzedaży.',
  publisher: { '@type': 'Organization', name: 'Mula Group', url: 'https://mulagroup.eu' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen bg-mula-bg text-mula-text antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
