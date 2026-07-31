import { Navbar, Footer } from '@mula/ui'
import MarketingHero from '@/components/MarketingHero'
import MarketingServices from '@/components/MarketingServices'
import MarketingChannels from '@/components/MarketingChannels'
import MarketingCases from '@/components/MarketingCases'
import MarketingCTA from '@/components/MarketingCTA'

export const revalidate = 3600

const navLinks = [
  { label: 'Usługi', href: '#services' },
  { label: 'Kanały', href: '#channels' },
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

export default function MarketingPage() {
  return (
    <>
      <Navbar
        logo="Mula Marketing"
        logoHref="/"
        links={navLinks}
        ctaText="Bezpłatna konsultacja"
        ctaHref="#contact"
      />
      <main id="main-content" tabIndex={-1}>
        <MarketingHero />
        <MarketingServices />
        <MarketingChannels />
        <MarketingCases />
        <MarketingCTA />
      </main>
      <Footer
        companyInfo={companyInfo}
        columns={[
          {
            title: 'Usługi',
            links: [
              { label: 'SEO / SEM', href: '#services' },
              { label: 'Social Media', href: '#services' },
              { label: 'Content Marketing', href: '#services' },
              { label: 'Performance Marketing', href: '#services' },
            ],
          },
          {
            title: 'Kanały',
            links: [
              { label: 'Google Ads', href: '#channels' },
              { label: 'Social Media Ads', href: '#channels' },
              { label: 'Email Marketing', href: '#channels' },
              { label: 'SEO & Content', href: '#channels' },
            ],
          },
        ]}
        contactEmail="marketing@mulagroup.eu"
      />
    </>
  )
}
