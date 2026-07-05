import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ClientNeedsSection } from '@/components/ClientNeedsSection'
import { AboutSection } from '@/components/AboutSection'
import { PillarsGrid } from '@/components/PillarsGrid'
import { CTASection } from '@/components/CTASection'
import { ProcessSection } from '@/components/ProcessSection'
import { MulaMethod } from '@/components/MulaMethod'
import { WhyUsSection } from '@/components/WhyUsSection'
import { TechnologyCloud } from '@/components/TechnologyCloud'
import { ProductsPreview } from '@/components/ProductsPreview'
import { PartnersSection } from '@/components/PartnersSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { FAQSection } from '@/components/FAQSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { StickyCTA } from '@/components/StickyCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ClientNeedsSection />
        <AboutSection />
        <PillarsGrid />
        <CTASection
          title="Chcesz dowiedzieć się więcej?"
          subtitle="Każdy z 7 filarów to osobny zespół specjalistów. Wybierz obszar i porozmawiajmy."
          ctaText="Porozmawiajmy o filarach"
          variant="primary"
        />
        <ProcessSection />
        <CTASection
          title="Zobacz jak pracujemy"
          subtitle="Model Discover → Design → Integrate → Execute → Scale to gwarancja przewidywalności i efektów. Umów się na bezpłatną konsultację."
          ctaText="Zamów konsultację"
          variant="process"
        />
        <MulaMethod />
        <WhyUsSection />
        <TechnologyCloud />
        <ProductsPreview />
        <PartnersSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
