import { Navbar, Footer } from '@mula/ui'
import { EcomHero } from '@/components/EcomHero'
import { EcomServices } from '@/components/EcomServices'
import { EcomPlatforms } from '@/components/EcomPlatforms'
import { EcomCases } from '@/components/EcomCases'
import { EcomCTA } from '@/components/EcomCTA'

export const revalidate = 3600

export default function EcommercePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <EcomHero />
        <EcomServices />
        <EcomPlatforms />
        <EcomCases />
        <EcomCTA />
      </main>
      <Footer />
    </>
  )
}
