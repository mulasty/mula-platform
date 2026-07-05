import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mula Construction – Konstrukcje i Hale Stalowe',
  description: 'Nowoczesne konstrukcje stalowe, hale magazynowe, przemysłowe i rolnicze. Projekt, produkcja i montaż.',
  metadataBase: new URL('https://construction.mulagroup.eu'),
  openGraph: {
    title: 'Mula Construction – Konstrukcje i Hale Stalowe',
    description: 'Nowoczesne konstrukcje stalowe, hale magazynowe, przemysłowe i rolnicze. Projekt, produkcja i montaż.',
    url: 'https://construction.mulagroup.eu',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="dark">
      <body className="min-h-screen bg-mula-bg text-mula-text antialiased">{children}</body>
    </html>
  )
}
