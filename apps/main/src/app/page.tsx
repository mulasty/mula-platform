import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ClientNeedsSection } from '@/components/ClientNeedsSection'
import { AboutSection } from '@/components/AboutSection'
import { PillarsGrid } from '@/components/PillarsGrid'
import { ProcessSection } from '@/components/ProcessSection'
import { MulaMethod } from '@/components/MulaMethod'
import { TechnologyCloud } from '@/components/TechnologyCloud'
import { ProductsPreview } from '@/components/ProductsPreview'
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
        <ProcessSection />
        <MulaMethod />
        <TechnologyCloud />
        <ProductsPreview />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
