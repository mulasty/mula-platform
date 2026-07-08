import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
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
