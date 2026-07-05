import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { PillarsGrid } from '@/components/PillarsGrid'
import { ProcessSection } from '@/components/ProcessSection'
import { MulaMethod } from '@/components/MulaMethod'
import { WhyUsSection } from '@/components/WhyUsSection'
import { TechnologyCloud } from '@/components/TechnologyCloud'
import { ProductsPreview } from '@/components/ProductsPreview'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PillarsGrid />
        <ProcessSection />
        <MulaMethod />
        <WhyUsSection />
        <TechnologyCloud />
        <ProductsPreview />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
