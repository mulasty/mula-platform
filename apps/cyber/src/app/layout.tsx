import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mula Cyber – Cyberbezpieczeństwo dla Firm',
  description:
    'Kompleksowa ochrona infrastruktury IT: audyty bezpieczeństwa, monitoring SOC 24/7, zarządzanie incydentami, pentesty, zgodność RODO/GDPR. Chronimy firmy przed realnymi zagrożeniami.',
  metadataBase: new URL('https://cyber.mulagroup.eu'),
  keywords: [
    'cyberbezpieczeństwo',
    'audyt bezpieczeństwa',
    'SOC',
    'SIEM',
    'monitoring bezpieczeństwa',
    'zarządzanie incydentami',
    'pentesty',
    'testy penetracyjne',
    'RODO',
    'GDPR',
    'ochrona DDoS',
    'NIS2',
    'ISO 27001',
    'Mula Group',
  ],
  authors: [{ name: 'Mula Group' }],
  creator: 'Mula Group',
  publisher: 'Mula Group',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://cyber.mulagroup.eu',
    siteName: 'Mula Cyber',
    title: 'Mula Cyber – Cyberbezpieczeństwo dla Firm',
    description:
      'Kompleksowa ochrona infrastruktury IT: audyty, monitoring SOC 24/7, zarządzanie incydentami, pentesty i zgodność RODO/GDPR.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula Cyber – Cyberbezpieczeństwo dla Firm',
    description:
      'Kompleksowa ochrona infrastruktury IT: audyty, monitoring SOC 24/7, zarządzanie incydentami, pentesty i zgodność RODO/GDPR.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mula Cyber',
  url: 'https://cyber.mulagroup.eu',
  description:
    'Cyberbezpieczeństwo dla firm – audyty bezpieczeństwa, monitoring SOC 24/7, zarządzanie incydentami, pentesty, zgodność RODO/GDPR i ochrona przed atakami DDoS.',
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
