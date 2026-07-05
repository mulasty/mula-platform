'use client'

import { Navbar, Footer, HeroSection, PillarCard, CTASection } from '@mula/ui'

const navLinks = [
  { label: 'Usługi', href: '#services' },
  { label: 'Kontakt', href: '#contact' },
]

const services = [
  {
    title: 'Audyty bezpieczeństwa',
    subtitle: 'Kompleksowe audyty infrastruktury',
    description: 'Identyfikujemy luki w zabezpieczeniach i dostarczamy raport z konkretnymi rekomendacjami naprawczymi.',
    icon: 'Shield',
    href: '#',
    color: '#10b981',
  },
  {
    title: 'NIS2',
    subtitle: 'Przygotowanie do zgodności z dyrektywą',
    description: 'Wdrażamy procesy i dokumentację wymaganą przez dyrektywę NIS2 dla podmiotów kluczowych i ważnych.',
    icon: 'FileCheck',
    href: '#',
    color: '#10b981',
  },
  {
    title: 'ISO 27001',
    subtitle: 'System zarządzania bezpieczeństwem',
    description: 'Przeprowadzamy przez proces wdrożenia i certyfikacji ISO 27001 — od polityk po audyt wewnętrzny.',
    icon: 'BadgeCheck',
    href: '#',
    color: '#10b981',
  },
  {
    title: 'Monitoring',
    subtitle: 'Ciągły monitoring i alerting',
    description: 'Wdrażamy systemy monitorowania infrastruktury z proaktywnym alertingiem i reagowaniem na incydenty.',
    icon: 'Eye',
    href: '#',
    color: '#10b981',
  },
  {
    title: 'Backup',
    subtitle: 'Strategie backupu i disaster recovery',
    description: 'Projektujemy i wdrażamy polityki backupu oraz plany odtwarzania po awarii dla krytycznych systemów.',
    icon: 'HardDrive',
    href: '#',
    color: '#10b981',
  },
  {
    title: 'Szkolenia',
    subtitle: 'Podnoszenie świadomości bezpieczeństwa',
    description: 'Szkolimy zespoły z zakresu cyberhigieny, phishingu i procedur bezpieczeństwa informacji.',
    icon: 'GraduationCap',
    href: '#',
    color: '#10b981',
  },
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
        ctaText="Bezpłatna konsultacja"
        ctaHref="#contact"
      />
      <main>
        <HeroSection
          title="Cyberbezpieczeństwo"
          subtitle="Kompleksowa ochrona infrastruktury IT — od audytów bezpieczeństwa po zgodność z NIS2 i ISO 27001."
          ctaText="Zabezpiecz firmę"
          ctaHref="#contact"
          brandName="Mula Cyber"
          stats={[
            { label: 'Zgodność z NIS2', value: '100%' },
            { label: 'Monitoring', value: '24/7' },
            { label: 'Zero-day response', value: '<2h' },
          ]}
        />
        <section className="py-20" id="services">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mula-text mb-4">
                Kompleksowe bezpieczeństwo IT
              </h2>
              <p className="text-mula-text-muted text-lg">
                Od audytu przez wdrożenie po ciągły monitoring — pełne spektrum usług cyberbezpieczeństwa.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <PillarCard key={i} {...s} />
              ))}
            </div>
          </div>
        </section>
        <CTASection
          title="Chroń swoją firmę już dziś"
          subtitle="Przeprowadzimy wstępny audyt bezpieczeństwa Twojej infrastruktury i pokażemy, gdzie są największe ryzyka."
          ctaText="Umów audyt bezpieczeństwa"
          ctaHref="#contact"
        />
      </main>
      <Footer
        companyInfo={companyInfo}
        columns={[
          {
            title: 'Usługi',
            links: services.slice(0, 4).map((s) => ({ label: s.title, href: '#' })),
          },
        ]}
        contactEmail="cyber@mulagroup.eu"
      />
    </>
  )
}
