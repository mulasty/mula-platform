export type {
  SectionHeader, HeroSection, ServiceCard, CaseStudy,
  ProcessStep, PillarCard, FAQItem, CompanyInfo,
  NavLink, FooterColumn, FooterLink, SubdomainConfig, Locale
} from "./types"

import type { CompanyInfo, NavLink, FooterColumn } from "./types"

export const COMPANY_INFO: CompanyInfo = {
  name: "Mula Group Sp. z o.o.",
  krs: "0001010842",
  nip: "718-216-41-12",
  regon: "524057460",
  address: "ul. gen. Wladyslawa Sikorskiego 166/0.03, 18-400 Lomza",
  email: "info@mulagroup.eu",
  phone: "+48 123 456 789",
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Guardian AI", href: "/guardian" },
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Contact", href: "/contact" },
]

export const MAIN_FOOTER: { columns: FooterColumn[]; contactEmail: string } = {
  columns: [
    { title: "Services", links: [
      { label: "Technologie AI", href: "https://ai.mulagroup.eu" },
      { label: "Transformacja Cyfrowa", href: "https://digital.mulagroup.eu" },
      { label: "E-commerce", href: "https://ecommerce.mulagroup.eu" },
      { label: "Marketing i Media", href: "https://marketing.mulagroup.eu" },
      { label: "Cyberbezpieczenstwo", href: "https://cyber.mulagroup.eu" },
      { label: "Budownictwo i Inzynieria", href: "https://construction.mulagroup.eu" },
      { label: "Innowacje i Startup Studio", href: "https://innovation.mulagroup.eu" },
    ]},
  ],
  contactEmail: "info@mulagroup.eu",
}

export function subdomainConfig(id: string): { logo: string; email: string; ctaText: string; domain: string } {
  const configs: Record<string, { logo: string; email: string; ctaText: string; domain: string }> = {
    ai:        { logo: "Mula AI",       email: "ai@mulagroup.eu",       ctaText: "Bezplatna konsultacja", domain: "ai.mulagroup.eu" },
    digital:   { logo: "Mula Digital",  email: "digital@mulagroup.eu",  ctaText: "Bezplatna konsultacja", domain: "digital.mulagroup.eu" },
    ecommerce: { logo: "Mula E-Commerce", email: "ecommerce@mulagroup.eu", ctaText: "Bezplatna wycena", domain: "ecommerce.mulagroup.eu" },
    marketing: { logo: "Mula Marketing", email: "marketing@mulagroup.eu", ctaText: "Bezplatna konsultacja", domain: "marketing.mulagroup.eu" },
    cyber:     { logo: "Mula Cyber",    email: "cyber@mulagroup.eu",    ctaText: "Bezplatny audyt",     domain: "cyber.mulagroup.eu" },
    construction: { logo: "Mula Construction", email: "construction@mulagroup.eu", ctaText: "Wycen hale", domain: "construction.mulagroup.eu" },
    innovation: { logo: "Mula Innovation", email: "innovation@mulagroup.eu", ctaText: "Porozmawiajmy", domain: "innovation.mulagroup.eu" },
  }
  return configs[id] ?? { logo: "Mula Group", email: "info@mulagroup.eu", ctaText: "Skontaktuj sie", domain: "mulagroup.eu" }
}
