'use client'

import { Navbar, Footer, HeroSection, PillarCard, CTASection } from '@mula/ui'

const navLinks = [
  { label: 'Usługi', href: '#services' },
  { label: 'Kontakt', href: '#contact' },
]

const services = [
  {
    title: 'SEO',
    subtitle: 'Audyty, optymalizacja, content, link building',
    description: 'Zwiększamy widoczność organiczną poprzez audyty techniczne, optymalizację treści i strategię link buildingu.',
    icon: 'Search',
    href: '#',
    color: '#ec4899',
  },
  {
    title: 'Google Ads',
    subtitle: 'Search, Display, Performance Max, Shopping',
    description: 'Projektujemy i optymalizujemy kampanie reklamowe w ekosystemie Google z naciskiem na ROI.',
    icon: 'Target',
    href: '#',
    color: '#ec4899',
  },
  {
    title: 'Social Media',
    subtitle: 'Meta, LinkedIn, TikTok, YouTube',
    description: 'Budujemy zasięg i zaangażowanie na platformach społecznościowych dopasowanych do Twojej grupy docelowej.',
    icon: 'Share2',
    href: '#',
    color: '#ec4899',
  },
  {
    title: 'Content Marketing',
    subtitle: 'Blog, artykuły eksperckie, whitepapers',
    description: 'Tworzymy wartościowe treści, które budują autorytet marki i generują leady w dłuższym horyzoncie.',
    icon: 'FileText',
    href: '#',
    color: '#ec4899',
  },
  {
    title: 'Branding',
    subtitle: 'Identyfikacja wizualna, brand book',
    description: 'Projektujemy spójną identyfikację wizualną — od logo po pełen system komunikacji marki.',
    icon: 'Palette',
    href: '#',
    color: '#ec4899',
  },
  {
    title: 'Kampanie 360°',
    subtitle: 'Zintegrowane kampanie reklamowe',
    description: 'Łączymy wszystkie kanały komunikacji w jedną spójną kampanię z mierzalnymi celami.',
    icon: 'Radio',
    href: '#',
    color: '#ec4899',
  },
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
      <main>
        <HeroSection
          title="Marketing Cyfrowy i Media"
          subtitle="Strategia, kreacja, widoczność — budujemy mierzalne kampanie łączące SEO, reklamy, content i social media w jedną ścieżkę wzrostu."
          ctaText="Zwiększ widoczność"
          ctaHref="#contact"
          brandName="Mula Marketing"
          stats={[
            { label: 'Średni wzrost ruchu', value: '+150%' },
            { label: 'Redukcja kosztu leada', value: '-45%' },
            { label: 'Konwersja', value: '+80%' },
          ]}
        />
        <section className="py-20" id="services">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mula-text mb-4">
                Kompleksowy marketing cyfrowy
              </h2>
              <p className="text-mula-text-muted text-lg">
                Od strategii po kampanie — każdy kanał marketingowy w jednym, mierzalnym ekosystemie.
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
          title="Gotowy na więcej klientów?"
          subtitle="Przeprowadzimy audyt Twoich działań marketingowych i pokażemy, gdzie generujesz niepotrzebne koszty."
          ctaText="Umów audyt marketingowy"
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
        contactEmail="marketing@mulagroup.eu"
      />
    </>
  )
}
