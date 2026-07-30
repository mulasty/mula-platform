import type { Metadata } from 'next'
import { GuardianLandingPage as GuardianLandingContent } from '@/components/GuardianLandingPage'
import { GuardianJsonLdScript, guardianMetadata } from '@/lib/guardianSeo'

export const metadata: Metadata = guardianMetadata

export default function GuardianRoutePage() {
  return (
    <>
      <GuardianJsonLdScript />
      <GuardianLandingContent />
    </>
  )
}
