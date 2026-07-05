import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mula E-commerce – Handel Internetowy',
  description: 'Sklepy internetowe, marketplace, BaseLinker, fulfillment, automatyzacja sprzedaży',
  metadataBase: new URL('https://ecommerce.mulagroup.eu'),
  keywords: ['e-commerce', 'sklep internetowy', 'marketplace', 'BaseLinker', 'fulfillment', 'automatyzacja sprzedaży', 'Mula Group'],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://ecommerce.mulagroup.eu',
    siteName: 'Mula E-commerce',
    title: 'Mula E-commerce – Handel Internetowy',
    description: 'Sklepy internetowe, marketplace, BaseLinker, fulfillment, automatyzacja sprzedaży',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula E-commerce – Handel Internetowy',
    description: 'Sklepy internetowe, marketplace, BaseLinker, fulfillment, automatyzacja sprzedaży',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-mula-bg text-mula-text antialiased">
        {children}
      </body>
    </html>
  )
}
