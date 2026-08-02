import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ConsentAnalyticsScripts } from '@mula/ui'
import { Analytics } from '@vercel/analytics/next'
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
    title: {
      default: messages.meta.title,
      template: `%s | ${messages.meta.siteName}`,
    },
    description: messages.meta.description,
    openGraph: {
      type: 'website',
      locale,
      url: `https://mulagroup.eu/${locale}`,
      siteName: messages.meta.siteName,
      title: messages.meta.title,
      description: messages.meta.description,
      images: [
        {
          url: '/images/competencies/home-og.svg',
          width: 1200,
          height: 630,
          alt: messages.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: ['/images/competencies/home-og.svg'],
    },
    alternates: {
      canonical: `https://mulagroup.eu/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `https://mulagroup.eu/${l}`])
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
  const cookiebotCid = process.env.NEXT_PUBLIC_COOKIEBOT_CID ?? ''
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? ''

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://consent.cookiebot.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://consent.cookiebot.com" />
      <ConsentAnalyticsScripts cookiebotCid={cookiebotCid} ga4Id={ga4Id} />
      <a href="#main-content" className="skip-link">
        {messages.skipLink}
      </a>
      {children}
      <SpeedInsights />
      <Analytics />
    </NextIntlClientProvider>
  )
}
