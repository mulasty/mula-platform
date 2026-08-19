import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { loadMessages } from '@/i18n/messages'
import './globals.css'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const messages = (await loadMessages(locale)) as unknown as { meta: { title: string; description: string; siteName: string } }

  return {
    metadataBase: new URL('https://mulagroup.eu'),
    title: {
      default: messages.meta.title,
      template: `%s | ${messages.meta.siteName}`,
    },
    description: messages.meta.description,
    openGraph: {
      type: 'website',
      locale,
      url: locale === routing.defaultLocale ? 'https://mulagroup.eu' : `https://mulagroup.eu/${locale}`,
      siteName: messages.meta.siteName,
      title: messages.meta.title,
      description: messages.meta.description,
      images: [{ url: '/images/competencies/home-og.svg', width: 1200, height: 630, alt: messages.meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: ['/images/competencies/home-og.svg'],
    },
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((loc) => [loc, `https://mulagroup.eu/${loc === routing.defaultLocale ? '' : loc}`])
      ),
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  const messages = await getMessages()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Mula Group',
        url: 'https://mulagroup.eu',
        logo: 'https://mulagroup.eu/favicon.ico',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'info@mulagroup.eu',
          contactType: 'customer service',
          availableLanguage: ['pl', 'en'],
        },
      },
      {
        '@type': 'WebSite',
        name: messages.meta.siteName,
        url: 'https://mulagroup.eu',
        inLanguage: locale,
        description: messages.meta.description,
      },
    ],
  }

  return (
    <html lang={locale} className="theme-light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-mula-bg text-mula-text antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://consent.cookiebot.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://consent.cookiebot.com" />
          <a href="#main-content" className="skip-link">
            {String(messages.skipLink ?? 'Skip to content')}
          </a>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
