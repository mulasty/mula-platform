import { Navbar, Footer } from '@mula/ui'
import { DigitalHero } from '@/components/DigitalHero'
import { DigitalServices } from '@/components/DigitalServices'
import { DigitalProcess } from '@/components/DigitalProcess'
import { DigitalBenefits } from '@/components/DigitalBenefits'
import { CTASection } from '@/components/CTASection'

export default function DigitalPage() {
  return (
    <>
      <Navbar />
      <main>
        <DigitalHero />
        <DigitalServices />
        <DigitalProcess />
        <DigitalBenefits />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
