import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { GuardianAISection } from '@/components/GuardianAISection'
import { GuardianLandingPage } from '@/components/GuardianLandingPage'
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
import { GuardianJsonLdScript, guardianMetadata } from '@/lib/guardianSeo'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get('host')?.toLowerCase().split(':')[0]

  if (host === 'guardian.mulagroup.eu') {
    return guardianMetadata
  }

  return {}
}

export default async function HomePage() {
  const host = (await headers()).get('host')?.toLowerCase().split(':')[0]

  if (host === 'guardian.mulagroup.eu') {
    return (
      <>
        <GuardianJsonLdScript />
        <GuardianLandingPage />
      </>
    )
  }

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
          title="Gotowy, żeby przyspieszyć swój biznes?"
          subtitle="Porozmawiajmy o tym, jak Mula Group może wspierać Twój rozwój."
          ctaText="Umów bezpłatną rozmowę"
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
