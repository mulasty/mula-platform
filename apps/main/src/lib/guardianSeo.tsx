import type { Metadata } from 'next'

export const guardianUrl = 'https://guardian.mulagroup.eu'
export const guardianAppUrl = 'https://app.guardian.mulagroup.eu/login'
export const guardianTitle = 'MULA Guardian AI — vCISO as a Service dla MŚP'
export const guardianDescription =
  'Platforma vCISO as a Service dla MŚP: audyty NIS2, compliance, analiza ryzyka, dokumentacja bezpieczeństwa i AI wspierające zarząd.'
export const guardianOgImage = 'https://mulagroup.eu/images/competencies/cyber-og.webp'

export const guardianMetadata: Metadata = {
  title: guardianTitle,
  description: guardianDescription,
  keywords: [
    'MULA Guardian AI',
    'vCISO as a Service',
    'NIS2',
    'compliance',
    'cyberbezpieczeństwo dla MŚP',
    'audyt cyberbezpieczeństwa',
    'analiza ryzyka',
    'AI cyber officer',
  ],
  alternates: {
    canonical: guardianUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: guardianUrl,
    title: guardianTitle,
    description: guardianDescription,
    siteName: 'Mula Group',
    images: [
      {
        url: guardianOgImage,
        width: 1200,
        height: 630,
        alt: 'MULA Guardian AI — vCISO as a Service dla MŚP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: guardianTitle,
    description: guardianDescription,
    images: [guardianOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const guardianJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': `${guardianUrl}#software`,
      name: 'MULA Guardian AI',
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Web',
      url: guardianUrl,
      image: guardianOgImage,
      description: guardianDescription,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'PLN',
        availability: 'https://schema.org/LimitedAvailability',
        url: guardianAppUrl,
      },
      provider: {
        '@id': 'https://mulagroup.eu#organization',
      },
      featureList: [
        'vCISO as a Service',
        'Audyt NIS2 i compliance',
        'Analiza ryzyka cyberbezpieczeństwa',
        'Generowanie dokumentacji bezpieczeństwa',
        'AI Cyber Officer',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://mulagroup.eu#organization',
      name: 'Mula Group',
      url: 'https://mulagroup.eu',
      sameAs: [guardianUrl],
    },
    {
      '@type': 'WebPage',
      '@id': `${guardianUrl}#webpage`,
      url: guardianUrl,
      name: guardianTitle,
      description: guardianDescription,
      inLanguage: 'pl-PL',
      isPartOf: {
        '@id': 'https://mulagroup.eu#website',
      },
      about: {
        '@id': `${guardianUrl}#software`,
      },
    },
  ],
}

export function GuardianJsonLdScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(guardianJsonLd).replace(/</g, '\\u003c') }}
    />
  )
}
