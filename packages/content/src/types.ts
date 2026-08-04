export interface SectionHeader {
  eyebrow?: string
  title: string
  subtitle?: string
  alignment?: "left" | "center"
  light?: boolean
}

export interface HeroSection {
  headline: string
  subheadline?: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  stats?: { value: string; label: string }[]
  tagline?: string
}

export interface ServiceCard {
  id: string
  title: string
  description: string
  icon: string
  features?: string[]
  href?: string
}

export interface CaseStudy {
  id: string
  title: string
  description: string
  industry: string
  challenge: string
  solution: string
  result: string
  metrics?: { label: string; value: string }[]
  technologies?: string[]
  image?: string
}

export interface ProcessStep {
  id: string
  number: number
  title: string
  description: string
  duration?: string
}

export interface PillarCard {
  id: string
  title: string
  description: string
  icon: string
  href: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface CompanyInfo {
  name: string
  krs: string
  nip: string
  regon: string
  address: string
  email: string
  phone?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface SubdomainConfig {
  id: string
  name: string
  domain: string
  email: string
  description: string
  hero: HeroSection
  services: ServiceCard[]
  process?: ProcessStep[]
  cases?: CaseStudy[]
  faq?: FAQItem[]
}

export type Locale = "pl" | "en"
