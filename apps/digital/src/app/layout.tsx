import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mula Digital – Transformacja Cyfrowa',
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
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://digital.mulagroup.eu',
    siteName: 'Mula Digital',
    title: 'Mula Digital – Transformacja Cyfrowa',
    description:
      'CRM, ERP, workflow, automatyzacja dokumentów i cyfryzacja firm.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula Digital – Transformacja Cyfrowa',
    description:
      'CRM, ERP, workflow, automatyzacja dokumentów i cyfryzacja firm.',
  },
  robots: {
    index: true,
    follow: true,
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
