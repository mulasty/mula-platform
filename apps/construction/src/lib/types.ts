export interface NavItem {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

export interface CompanyInfo {
  name: string
  krs: string
  nip: string
  regon: string
  address: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface PortfolioProject {
  id: string
  title: string
  area: string
  location: string
  year: number
  category: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface SteelType {
  id: string
  title: string
  description: string
  icon: string
  dimensions: { label: string; value: string }[]
}

export interface HallType {
  id: string
  title: string
  description: string
  icon: string
  exampleDimensions: string
}
