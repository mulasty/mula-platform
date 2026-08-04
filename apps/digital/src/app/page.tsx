import { Navbar, Footer } from '@mula/ui'
import { DigitalHero } from '@/components/DigitalHero'
import { DigitalServices } from '@/components/DigitalServices'
import { DigitalProcess } from '@/components/DigitalProcess'
import { DigitalBenefits } from '@/components/DigitalBenefits'
import { CTASection } from '@/components/CTASection'

export const revalidate = 3600

const navLinks = [
  { label: 'Uslugi', href: '#services' },
  { label: 'Proces', href: '#process' },
  { label: 'Korzysci', href: '#benefits' },
  { label: 'Kontakt', href: '#contact' },
]

const companyInfo = {
  name: 'Mula Group Sp. z o.o.',
  krs: '0001010842', nip: '718-216-41-12', regon: '524057460',
  address: 'ul. gen. Wladyslawa Sikorskiego 166/0.03, 18-400 Lomza',
}

const footerColumns = [
  { title: 'Uslugi', links: [
    { label: 'Audyt Cyfrowy', href: '#services' },
    { label: 'CRM/ERP', href: '#services' },
    { label: 'Automatyzacja', href: '#services' },
    { label: 'Integracje', href: '#services' },
  ]},
  { title: 'Firma', links: [
    { label: 'Mula Group', href: 'https://mulagroup.eu' },
    { label: 'Kontakt', href: '#contact' },
  ]},
]

export default function DigitalPage() {
  return (
    <>
      <Navbar logo="Mula Digital" logoHref="/" links={navLinks}
              ctaText="Bezplatna konsultacja" ctaHref="#contact" />
      <main id="main-content" tabIndex={-1}>
        <DigitalHero />
        <DigitalServices />
        <DigitalProcess />
        <DigitalBenefits />
        <CTASection />
      </main>
      <Footer companyInfo={companyInfo} columns={footerColumns} contactEmail="digital@mulagroup.eu" />
    </>
  )
}
