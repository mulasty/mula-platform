import { Navbar, Footer } from '@mula/ui'
import { EcomHero } from '@/components/EcomHero'
import { EcomServices } from '@/components/EcomServices'
import { EcomPlatforms } from '@/components/EcomPlatforms'
import { EcomCases } from '@/components/EcomCases'
import { EcomCTA } from '@/components/EcomCTA'

export const revalidate = 3600

const navLinks = [
  { label: 'Uslugi', href: '#services' },
  { label: 'Platformy', href: '#platforms' },
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
    { label: 'Sklepy internetowe', href: '#services' },
    { label: 'Shopify', href: '#platforms' },
    { label: 'Integracje', href: '#services' },
    { label: 'Marketing', href: '#services' },
  ]},
  { title: 'Firma', links: [
    { label: 'Mula Group', href: 'https://mulagroup.eu' },
    { label: 'Kontakt', href: '#contact' },
  ]},
]

export default function EcommercePage() {
  return (
    <>
      <Navbar logo="Mula E-Commerce" logoHref="/" links={navLinks}
              ctaText="Bezplatna wycena" ctaHref="#contact" />
      <main id="main-content" tabIndex={-1}>
        <EcomHero />
        <EcomServices />
        <EcomPlatforms />
        <EcomCases />
        <EcomCTA />
      </main>
      <Footer companyInfo={companyInfo} columns={footerColumns} contactEmail="ecommerce@mulagroup.eu" />
    </>
  )
}
