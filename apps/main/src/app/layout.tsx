import type { Metadata } from 'next'
import Script from 'next/script'
import { COMPANY } from '@/lib/data'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `${COMPANY.name} — ${COMPANY.tagline}. Ekosystem biznesowy łączący strategię cyfrową, sztuczną inteligencję, automatyzację procesów, e-commerce, marketing, cyberbezpieczeństwo oraz inżynierię w jeden spójny model operacyjny. Projektujemy, wdrażamy i skalujemy technologie dla firm w Polsce i UE.`,
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
    description: 'Ekosystem biznesowy: AI, automatyzacja, e-commerce, marketing, cyberbezpieczeństwo i inżynieria. Jeden partner, jedna odpowiedzialność — od diagnozy po skalowanie.',
    images: [
      {
        url: '/images/competencies/home-og.webp',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} — ${COMPANY.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: 'Ekosystem biznesowy: AI, automatyzacja, e-commerce, marketing, cyberbezpieczeństwo i inżynieria. Jeden partner, jedna odpowiedzialność.',
    images: ['/images/competencies/home-og.webp'],
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
  const cookiebotCid = process.env.NEXT_PUBLIC_COOKIEBOT_CID ?? '00fbcf56-8c0a-49cd-8ba3-f3f46426a347'
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? 'G-6JQ5E47WYP'

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
        {cookiebotCid ? (
          <Script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            strategy="beforeInteractive"
            data-cbid={cookiebotCid}
            data-blockingmode="auto"
          />
        ) : null}
        {ga4Id && ga4Id !== 'G-XXXXXXXXXX' ? (
          <>
            <Script
              id="ga4-script"
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
              type="text/plain"
              data-cookieconsent="statistics"
            />
            <Script
              id="ga4-config"
              strategy="afterInteractive"
              type="text/plain"
              data-cookieconsent="statistics"
            >
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="min-h-screen bg-mula-bg text-mula-text antialiased">
        <a href="#main-content" className="skip-link">
          Przejdź do treści
        </a>
        {children}
      </body>
    </html>
  )
}
