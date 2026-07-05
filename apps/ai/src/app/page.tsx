import { Navbar, Footer } from '@mula/ui'
import { AIHero } from '@/components/AIHero'
import { AIServices } from '@/components/AIServices'
import { AIArchitecture } from '@/components/AIArchitecture'
import { AICases } from '@/components/AICases'
import { CTASection } from '@/components/CTASection'

export default function AIPage() {
  return (
    <>
      <Navbar />
      <main>
        <AIHero />
        <AIServices />
        <AIArchitecture />
        <AICases />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
