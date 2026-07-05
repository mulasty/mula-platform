'use client'

import { Navbar, Footer, HeroSection, PillarCard, CTASection } from '@mula/ui'

const navLinks = [
  { label: 'Usługi', href: '#services' },
  { label: 'Produkty', href: '#products' },
  { label: 'Kontakt', href: '#contact' },
]

const services = [
  {
    title: 'Startup Studio',
    subtitle: 'Budujemy i rozwijamy własne produkty',
    description: 'Identyfikujemy rynkowe potrzeby i tworzymy produkty technologiczne od koncepcji po komercjalizację.',
    icon: 'Rocket',
    href: '#',
    color: '#06b6d4',
  },
  {
    title: 'MVP',
    subtitle: 'Szybkie prototypowanie i walidacja',
    description: 'W kilka tygodni dostarczamy działający prototyp do walidacji pomysłu z realnymi użytkownikami.',
    icon: 'Box',
    href: '#',
    color: '#06b6d4',
  },
  {
    title: 'Produkty SaaS',
    subtitle: 'Od pomysłu do płacących klientów',
    description: 'Projektujemy, budujemy i rozwijamy produkty w modelu SaaS z iteracyjnym podejściem do produktu.',
    icon: 'Cloud',
    href: '#',
    color: '#06b6d4',
  },
  {
    title: 'R&D',
    subtitle: 'Badania i rozwój technologii',
    description: 'Prowadzimy badania nad nowymi technologiami w obszarze AI, automatyzacji i systemów rozproszonych.',
    icon: 'FlaskConical',
    href: '#',
    color: '#06b6d4',
  },
  {
    title: 'Dotacje',
    subtitle: 'Pozyskiwanie finansowania innowacji',
    description: 'Pomagamy w pozyskiwaniu grantów i dotacji na rozwój innowacyjnych produktów i technologii.',
    icon: 'FileSearch',
    href: '#',
    color: '#06b6d4',
  },
  {
    title: 'Venture Building',
    subtitle: 'Budowa spółek technologicznych',
    description: 'Tworzymy i rozwijamy spółki technologiczne, łącząc kapitał, technologię i kompetencje operacyjne.',
    icon: 'Building2',
    href: '#',
    color: '#06b6d4',
  },
]

const products = [
  {
    title: 'Automation Audit Robot',
    subtitle: 'Autonomiczny audyt procesów',
    description: 'System AI do automatycznego audytu procesów biznesowych z rekomendacjami optymalizacyjnymi.',
    icon: 'Bot',
    href: '#',
    color: '#06b6d4',
  },
  {
    title: 'Presence System',
    subtitle: 'Rejestracja czasu pracy z AI',
    description: 'Inteligentny system rejestracji czasu pracy z analizą produktywności opartą na sztucznej inteligencji.',
    icon: 'Clock',
    href: '#',
    color: '#06b6d4',
  },
  {
    title: 'Cyber Guardian NIS2',
    subtitle: 'Platforma zgodności NIS2',
    description: 'Platforma do zarządzania zgodnością z NIS2 dla MŚP z automatycznym monitoringiem i raportowaniem.',
    icon: 'ShieldCheck',
    href: '#',
    color: '#06b6d4',
  },
  {
    title: 'Mobile AI Commander',
    subtitle: 'Mobilny asystent AI',
    description: 'Aplikacja mobilna AI do zarządzania projektami, zadaniami i komunikacją w zespole.',
    icon: 'Smartphone',
    href: '#',
    color: '#06b6d4',
  },
]

const companyInfo = {
  name: 'Mula Group Sp. z o.o.',
  krs: '0001010842',
  nip: '718-216-41-12',
  regon: '524057460',
  address: 'ul. gen. Władysława Sikorskiego 166/0.03, 18-400 Łomża',
}

export default function InnovationPage() {
  return (
    <>
      <Navbar
        logo="Mula Innovation"
        logoHref="/"
        links={navLinks}
        ctaText="Porozmawiajmy"
        ctaHref="#contact"
      />
      <main>
        <HeroSection
          title="Startup Studio i Innowacje"
          subtitle="Od pomysłu do produktu — budujemy technologie przyszłości i pomagamy startupom przejść drogę od koncepcji do rynku."
          ctaText="Zbuduj z nami produkt"
          ctaHref="#contact"
          brandName="Mula Innovation"
          stats={[
            { label: 'Produkty w rozwoju', value: '4' },
            { label: 'W fazie beta', value: '2' },
            { label: 'Prototypów', value: '10+' },
          ]}
        />
        <section className="py-20" id="services">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mula-text mb-4">
                Od pomysłu do rynku
              </h2>
              <p className="text-mula-text-muted text-lg">
                Pełne spektrum usług dla startupów i innowacyjnych projektów — od MVP po venture building.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <PillarCard key={i} {...s} />
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-mula-surface/30" id="products">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mula-text mb-4">
                Nasze produkty
              </h2>
              <p className="text-mula-text-muted text-lg">
                Produkty tworzone w ramach Mula Startup Studio — od automatyzacji procesów po mobilne AI.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p, i) => (
                <PillarCard key={i} {...p} />
              ))}
            </div>
          </div>
        </section>
        <CTASection
          title="Masz pomysł na produkt technologiczny?"
          subtitle="Porozmawiajmy o Twoim pomyśle. Pomożemy Ci przejść od koncepcji do działającego MVP w kilka tygodni."
          ctaText="Opowiedz o swoim pomyśle"
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
          {
            title: 'Produkty',
            links: products.map((p) => ({ label: p.title, href: '#' })),
          },
        ]}
        contactEmail="innovation@mulagroup.eu"
      />
    </>
  )
}
