import { Navbar, Footer } from '@mula/ui'
import { AIHero } from '@/components/AIHero'
import { AIServices } from '@/components/AIServices'
import { AIArchitecture } from '@/components/AIArchitecture'
import { AICases } from '@/components/AICases'
import { CTASection } from '@/components/CTASection'

export const revalidate = 3600

const navLinks = [
  { label: 'Uslugi', href: '#services' },
  { label: 'Architektura', href: '#architecture' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Kontakt', href: '#contact' },
]

const companyInfo = {
  name: 'Mula Group Sp. z o.o.',
  krs: '0001010842', nip: '718-216-41-12', regon: '524057460',
  address: 'ul. gen. Wladyslawa Sikorskiego 166/0.03, 18-400 Lomza',
}

const footerColumns = [
  { title: 'Uslugi', links: [
    { label: 'Agenci AI', href: '#services' },
    { label: 'Automatyzacja', href: '#services' },
    { label: 'Chatboty LLM', href: '#services' },
    { label: 'Analityka AI', href: '#services' },
  ]},
  { title: 'Firma', links: [
    { label: 'Mula Group', href: 'https://mulagroup.eu' },
    { label: 'Guardian AI', href: 'https://guardian.mulagroup.eu' },
    { label: 'Kontakt', href: '#contact' },
  ]},
]

export default function AIPage() {
  return (
    <>
      <Navbar logo="Mula AI" logoHref="/" links={navLinks}
              ctaText="Bezplatna konsultacja" ctaHref="#contact" />
      <main id="main-content" tabIndex={-1}>
        <AIHero />
        <AIServices />
        <AIArchitecture />
        <AICases />
        <CTASection />
      </main>
      <Footer companyInfo={companyInfo} columns={footerColumns} contactEmail="ai@mulagroup.eu" />
    </>
  )
}
