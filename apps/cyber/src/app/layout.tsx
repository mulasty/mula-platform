import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mula Cyber – Cyberbezpieczeństwo',
  description: 'NIS2, ISO 27001, audyty bezpieczeństwa, monitoring, backup, szkolenia',
  metadataBase: new URL('https://cyber.mulagroup.eu'),
  keywords: ['cyberbezpieczeństwo', 'NIS2', 'ISO 27001', 'audyt bezpieczeństwa', 'monitoring', 'backup', 'Mula Group'],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://cyber.mulagroup.eu',
    siteName: 'Mula Cyber',
    title: 'Mula Cyber – Cyberbezpieczeństwo',
    description: 'NIS2, ISO 27001, audyty bezpieczeństwa, monitoring, backup, szkolenia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula Cyber – Cyberbezpieczeństwo',
    description: 'NIS2, ISO 27001, audyty bezpieczeństwa, monitoring, backup, szkolenia',
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
