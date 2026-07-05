import type { Metadata } from 'next'
import { COMPANY } from '@/lib/data'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `${COMPANY.name} — ${COMPANY.tagline}. Łączymy strategię, AI, commerce, marketing, cyberbezpieczeństwo i inżynierię w jeden spójny ekosystem biznesowy.`,
  metadataBase: new URL('https://mulagroup.eu'),
  keywords: ['Mula Group', 'AI', 'automatyzacja', 'e-commerce', 'marketing', 'cyberbezpieczeństwo', 'transformacja cyfrowa', 'budownictwo', 'startupy', 'Next.js'],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://mulagroup.eu',
    siteName: COMPANY.name,
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: 'Łączymy strategię, AI, commerce, marketing, cyberbezpieczeństwo i inżynierię w jeden spójny ekosystem biznesowy.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: 'Łączymy strategię, AI, commerce, marketing, cyberbezpieczeństwo i inżynierię w jeden spójny ekosystem biznesowy.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.fullName,
  alternateName: COMPANY.name,
  url: 'https://mulagroup.eu',
  email: COMPANY.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. gen. Władysława Sikorskiego 166/0.03',
    addressLocality: 'Łomża',
    postalCode: '18-400',
    addressCountry: 'PL',
  },
  foundingDate: '2023-01-02',
  founder: { '@type': 'Person', name: COMPANY.founderName },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
      </body>
    </html>
  )
}
