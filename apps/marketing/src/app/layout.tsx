import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mula Marketing – Marketing Cyfrowy i Media',
  description: 'SEO, Google Ads, Social Media, branding, content marketing, kampanie reklamowe',
  metadataBase: new URL('https://marketing.mulagroup.eu'),
  keywords: ['marketing', 'SEO', 'Google Ads', 'social media', 'branding', 'content marketing', 'Mula Group'],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://marketing.mulagroup.eu',
    siteName: 'Mula Marketing',
    title: 'Mula Marketing – Marketing Cyfrowy i Media',
    description: 'SEO, Google Ads, Social Media, branding, content marketing, kampanie reklamowe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mula Marketing – Marketing Cyfrowy i Media',
    description: 'SEO, Google Ads, Social Media, branding, content marketing, kampanie reklamowe',
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
