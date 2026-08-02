import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { GuardianAISection } from '@/components/GuardianAISection'
import { Footer } from '@/components/Footer'
import { GuardianLandingPage } from '@/components/GuardianLandingPage'
import { GuardianJsonLdScript, guardianMetadata } from '@/lib/guardianSeo'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get('host')?.toLowerCase().split(':')[0]
  if (host === 'guardian.mulagroup.eu') return guardianMetadata
  return {}
}

export default async function HomePage() {
  const host = (await headers()).get('host')?.toLowerCase().split(':')[0]
  if (host === 'guardian.mulagroup.eu') {
    return (<><GuardianJsonLdScript /><GuardianLandingPage /></>)
  }

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <GuardianAISection />
      </main>
      <Footer />
    </>
  )
}
