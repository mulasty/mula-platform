import { Navbar, Footer } from '@mula/ui'
import { InnovationHero } from '@/components/InnovationHero'
import { InnovationServices } from '@/components/InnovationServices'
import { InnovationProducts } from '@/components/InnovationProducts'
import { InnovationCases } from '@/components/InnovationCases'
import { InnovationCTA } from '@/components/InnovationCTA'

export const revalidate = 3600

export default function InnovationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <InnovationHero />
        <InnovationServices />
        <InnovationProducts />
        <InnovationCases />
        <InnovationCTA />
      </main>
      <Footer />
    </>
  )
}
