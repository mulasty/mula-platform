import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { GuardianAISection } from '@/components/GuardianAISection'
import { ClientNeedsSection } from '@/components/ClientNeedsSection'
import { AboutSection } from '@/components/AboutSection'
import { WhyUsSection } from '@/components/WhyUsSection'
import { PillarsGrid } from '@/components/PillarsGrid'
import { ProcessSection } from '@/components/ProcessSection'
import { MulaMethod } from '@/components/MulaMethod'
import { TechnologyCloud } from '@/components/TechnologyCloud'
import { ProductsPreview } from '@/components/ProductsPreview'
import { CTASection } from '@/components/CTASection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { PartnersSection } from '@/components/PartnersSection'
import { FAQSection } from '@/components/FAQSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { StickyCTA } from '@/components/StickyCTA'

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

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <GuardianAISection />
        <ClientNeedsSection />
        <AboutSection />
        <WhyUsSection />
        <PillarsGrid />
        <ProcessSection />
        <MulaMethod />
        <TechnologyCloud />
        <ProductsPreview />
        <CTASection
          title={t('cta.title')}
          subtitle={t('cta.subtitle')}
          ctaText={t('cta.button')}
          ctaHref="#contact"
        />
        <TestimonialsSection />
        <PartnersSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}