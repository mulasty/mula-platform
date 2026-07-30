import type { Metadata } from 'next'
import { GuardianLandingPage as GuardianLandingContent } from '@/components/GuardianLandingPage'

export const metadata: Metadata = {
  title: 'MULA Guardian AI — vCISO as a Service dla MŚP',
  description:
    'MULA Guardian AI to platforma vCISO as a Service: audyty NIS2, compliance, analiza ryzyka, dokumentacja bezpieczeństwa i AI wspierające zarząd.',
  alternates: {
    canonical: 'https://guardian.mulagroup.eu',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://guardian.mulagroup.eu',
    title: 'MULA Guardian AI — vCISO as a Service',
    description:
      'Cyberbezpieczeństwo, NIS2 i compliance w jednym produkcie SaaS dla firm, które nie chcą zatrudniać pełnego działu security.',
    siteName: 'Mula Group',
  },
}

export default function GuardianRoutePage() {
  return <GuardianLandingContent />
}
