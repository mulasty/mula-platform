import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mula AI – Sztuczna Inteligencja i Automatyzacja',
  description:
    'Agenci AI, automatyzacja procesów biznesowych, systemy RAG z wiedzą firmową i architektury multi-agent. Projektujemy inteligentne rozwiązania, które realnie przyspieszają Twój biznes.',
  metadataBase: new URL('https://ai.mulagroup.eu'),
  keywords: [
    'AI',
    'agenci AI',
    'automatyzacja',
    'RAG',
    'multi-agent',
    'LLM',
    'chatbot',
    'voicebot',
    'sztuczna inteligencja',
    'Mula Group',
  ],
  authors: [{ name: 'Mula Group' }],
  creator: 'Mula Group',
  publisher: 'Mula Group',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://ai.mulagroup.eu',
    siteName: 'Mula AI',
    title: 'Mula AI – Sztuczna Inteligencja i Automatyzacja',
    description:
      'Agenci AI, automatyzacja, RAG i systemy multi-agent dla biznesu.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula AI – Sztuczna Inteligencja i Automatyzacja',
    description:
      'Agenci AI, automatyzacja, RAG i systemy multi-agent dla biznesu.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mula AI',
  url: 'https://ai.mulagroup.eu',
  description:
    'Technologie AI i automatyzacja biznesu – agenci AI, multi-agent, RAG, chatboty, voiceboty i analiza danych.',
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
