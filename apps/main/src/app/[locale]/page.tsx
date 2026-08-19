import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { GuardianAISection } from '@/components/GuardianAISection'
import { Footer } from '@/components/Footer'

export const revalidate = 3600

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: 'pl' }, { locale: 'en' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    alternates: {
      canonical: locale === 'pl' ? 'https://mulagroup.eu' : `https://mulagroup.eu/${locale}`,
    },
  }
}

export default async function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <GuardianAISection />
      </main>
      <Footer />
    </>
  )
}