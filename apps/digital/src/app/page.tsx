import { Navbar, Footer } from '@mula/ui'
import { DigitalHero } from '@/components/DigitalHero'
import { DigitalServices } from '@/components/DigitalServices'
import { DigitalProcess } from '@/components/DigitalProcess'
import { DigitalBenefits } from '@/components/DigitalBenefits'
import { CTASection } from '@/components/CTASection'

export const revalidate = 3600

export default function DigitalPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
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
