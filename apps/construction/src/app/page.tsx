import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ConstructionHero } from '@/components/ConstructionHero'
import { SteelTypes } from '@/components/SteelTypes'
import { HallTypes } from '@/components/HallTypes'
import { ProcessSection } from '@/components/ProcessSection'
import { PortfolioSection } from '@/components/PortfolioSection'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'

export default function ConstructionPage() {
  return (
    <>
      <Navbar />
      <main>
        <ConstructionHero />
        <SteelTypes />
        <HallTypes />
        <ProcessSection />
        <PortfolioSection />
        <FAQSection />
        <CTASection
          title="Gotowy na swoją halę?"
          subtitle="Skontaktuj się z nami — przygotujemy indywidualną wycenę w 24h."
          ctaText="Wyceń halę"
          ctaHref="mailto:construction@mulagroup.eu"
        />
      </main>
      <Footer />
    </>
  )
}
