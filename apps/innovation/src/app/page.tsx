import { Navbar, Footer } from '@mula/ui'
import { InnovationHero } from '@/components/InnovationHero'
import { InnovationServices } from '@/components/InnovationServices'
import { InnovationProducts } from '@/components/InnovationProducts'
import { InnovationCases } from '@/components/InnovationCases'
import { InnovationCTA } from '@/components/InnovationCTA'

export const revalidate = 3600

const navLinks = [
  { label: 'Uslugi', href: '#services' },
  { label: 'Produkty', href: '#products' },
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
    { label: 'Prototypowanie', href: '#services' },
    { label: 'Venture Building', href: '#services' },
    { label: 'R&D', href: '#services' },
    { label: 'Produkty', href: '#products' },
  ]},
  { title: 'Firma', links: [
    { label: 'Mula Group', href: 'https://mulagroup.eu' },
    { label: 'Guardian AI', href: 'https://guardian.mulagroup.eu' },
    { label: 'Kontakt', href: '#contact' },
  ]},
]

export default function InnovationPage() {
  return (
    <>
      <Navbar logo="Mula Innovation" logoHref="/" links={navLinks}
              ctaText="Porozmawiajmy" ctaHref="#contact" />
      <main id="main-content" tabIndex={-1}>
        <InnovationHero />
        <InnovationServices />
        <InnovationProducts />
        <InnovationCases />
        <InnovationCTA />
      </main>
      <Footer companyInfo={companyInfo} columns={footerColumns} contactEmail="innovation@mulagroup.eu" />
    </>
  )
}
