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
    title: {
      default: messages.meta.title,
      template: `%s | ${messages.meta.siteName}`,
    },
    description: messages.meta.description,
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

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  )
}
