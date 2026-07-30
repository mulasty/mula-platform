import { Navbar, Footer } from '@mula/ui'
import { CyberHero } from '@/components/CyberHero'
import { CyberServices } from '@/components/CyberServices'
import { CyberThreats } from '@/components/CyberThreats'
import { CyberCases } from '@/components/CyberCases'
import { CyberCTA } from '@/components/CyberCTA'

export const revalidate = 3600

const navLinks = [
  { label: 'Usługi', href: '#services' },
  { label: 'Zagrożenia', href: '#threats' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Kontakt', href: '#contact' },
]

const companyInfo = {
  name: 'Mula Group Sp. z o.o.',
  krs: '0001010842',
  nip: '718-216-41-12',
  regon: '524057460',
  address: 'ul. gen. Władysława Sikorskiego 166/0.03, 18-400 Łomża',
}

export default function CyberPage() {
  return (
    <>
      <Navbar
        logo="Mula Cyber"
        logoHref="/"
        links={navLinks}
        ctaText="Bezpłatny audyt"
        ctaHref="#contact"
      />
      <main id="main-content" tabIndex={-1}>
        <CyberHero />
        <CyberServices />
        <CyberThreats />
        <CyberCases />
        <CyberCTA />
      </main>
      <Footer
        companyInfo={companyInfo}
        columns={[
          {
            title: 'Usługi',
            links: [
              { label: 'Audyt bezpieczeństwa', href: '#services' },
              { label: 'Monitoring SOC', href: '#services' },
              { label: 'Zarządzanie incydentami', href: '#services' },
              { label: 'Pentesty', href: '#services' },
            ],
          },
          {
            title: 'Wiedza',
            links: [
              { label: 'Krajobraz zagrożeń', href: '#threats' },
              { label: 'Case Studies', href: '#cases' },
            ],
          },
        ]}
        contactEmail="cyber@mulagroup.eu"
      />
    </>
  )
}
