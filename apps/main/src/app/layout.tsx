import type { Metadata } from 'next'
import { COMPANY } from '@/lib/data'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `${COMPANY.name} — ${COMPANY.tagline}. Kompleksowy ekosystem biznesowy łączący strategię cyfrową, sztuczną inteligencję, automatyzację procesów, e-commerce, marketing, cyberbezpieczeństwo oraz inżynierię w jeden spójny model operacyjny. Wdrażamy, integrujemy i skalujemy technologie dla firm w Polsce i UE.`,
  metadataBase: new URL('https://mulagroup.eu'),
  keywords: ['Mula Group', 'AI', 'automatyzacja', 'e-commerce', 'marketing', 'cyberbezpieczeństwo', 'transformacja cyfrowa', 'budownictwo', 'startupy', 'Next.js', 'sztuczna inteligencja', 'automatyzacja procesów', 'ekosystem biznesowy'],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  alternates: {
    canonical: 'https://mulagroup.eu',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://mulagroup.eu',
    siteName: COMPANY.name,
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: 'Kompleksowy ekosystem biznesowy: AI, automatyzacja, e-commerce, marketing, cyberbezpieczeństwo i inżynieria. Jeden partner, jedna odpowiedzialność — od diagnozy po skalowanie.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: 'Kompleksowy ekosystem biznesowy: AI, automatyzacja, e-commerce, marketing, cyberbezpieczeństwo i inżynieria. Jeden partner, jedna odpowiedzialność.',
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
