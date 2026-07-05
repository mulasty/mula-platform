'use client'

import { Navbar, Footer, HeroSection, PillarCard, CTASection } from '@mula/ui'

const navLinks = [
  { label: 'Usługi', href: '#services' },
  { label: 'Kontakt', href: '#contact' },
]

const services = [
  {
    title: 'Sklepy internetowe',
    subtitle: 'Shopify, Shoper, WooCommerce, dedykowane',
    description: 'Projektujemy i wdrażamy sklepy dopasowane do Twojego modelu biznesowego.',
    icon: 'Store',
    href: '#',
    color: '#f59e0b',
  },
  {
    title: 'Marketplace',
    subtitle: 'Allegro, Amazon, eBay',
    description: 'Sprzedaż wielokanałowa z centralnym zarządzaniem zamówieniami i stanami magazynowymi.',
    icon: 'ShoppingBag',
    href: '#',
    color: '#f59e0b',
  },
  {
    title: 'BaseLinker',
    subtitle: 'Integracja i automatyzacja',
    description: 'Konfigurujemy i optymalizujemy BaseLinker pod kątem Twojego workflow.',
    icon: 'Link2',
    href: '#',
    color: '#f59e0b',
  },
  {
    title: 'Fulfillment',
    subtitle: 'Automatyzacja magazynu',
    description: 'Wdrażamy procesy fulfillment od przyjęcia towaru po wysyłkę do klienta.',
    icon: 'Package',
    href: '#',
    color: '#f59e0b',
  },
  {
    title: 'Integracje',
    subtitle: 'ERP, księgowość, kurierzy',
    description: 'Łączymy systemy sprzedażowe z ERP, fakturowaniem i firmami kurierskimi.',
    icon: 'Workflow',
    href: '#',
    color: '#f59e0b',
  },
  {
    title: 'Marki własne',
    subtitle: 'Private label i strategia entry',
    description: 'Pomagamy zaplanować i wdrożyć strategię marki własnej na marketplace.',
    icon: 'Trophy',
    href: '#',
    color: '#f59e0b',
  },
]

const companyInfo = {
  name: 'Mula Group Sp. z o.o.',
  krs: '0001010842',
  nip: '718-216-41-12',
  regon: '524057460',
  address: 'ul. gen. Władysława Sikorskiego 166/0.03, 18-400 Łomża',
}

export default function EcommercePage() {
  return (
    <>
      <Navbar
        logo="Mula E-commerce"
        logoHref="/"
        links={navLinks}
        ctaText="Bezpłatny audyt"
        ctaHref="#contact"
      />
      <main>
        <HeroSection
          title="E-commerce i Handel Internetowy"
          subtitle="Wielokanałowa architektura sprzedaży — od sklepu po marketplace, zintegrowana w jednym systemie."
          ctaText="Zacznij sprzedawać więcej"
          ctaHref="#contact"
          brandName="Mula E-commerce"
          stats={[
            { label: 'Kanały', value: '5+' },
            { label: 'Wzrost sprzedaży', value: '+35%' },
            { label: 'Automatyzacja', value: '100%' },
          ]}
        />
        <section className="py-20" id="services">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mula-text mb-4">
                Kompleksowa obsługa sprzedaży
              </h2>
              <p className="text-mula-text-muted text-lg">
                Od założenia sklepu po automatyzację marketplace — wszystko w jednym ekosystemie.
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
          title="Sprawdź potencjał swojej sprzedaży"
          subtitle="Przeprowadzimy bezpłatny audyt Twoich kanałów sprzedaży i pokażemy, gdzie tracisz przychód."
          ctaText="Umów audyt"
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
        contactEmail="ecommerce@mulagroup.eu"
      />
    </>
  )
}
