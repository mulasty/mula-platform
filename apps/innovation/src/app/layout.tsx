import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mula Innovation – Startup Studio',
  description: 'MVP, produkty SaaS, badania i rozwój, dotacje, startupy, nowe modele biznesowe',
  metadataBase: new URL('https://innovation.mulagroup.eu'),
  keywords: ['startup studio', 'MVP', 'SaaS', 'R&D', 'dotacje', 'startupy', 'venture building', 'Mula Group'],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://innovation.mulagroup.eu',
    siteName: 'Mula Innovation',
    title: 'Mula Innovation – Startup Studio',
    description: 'MVP, produkty SaaS, badania i rozwój, dotacje, startupy, nowe modele biznesowe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula Innovation – Startup Studio',
    description: 'MVP, produkty SaaS, badania i rozwój, dotacje, startupy, nowe modele biznesowe',
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
