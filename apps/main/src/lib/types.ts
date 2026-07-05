export interface Pillar {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  href: string
  color: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface TechItem {
  name: string
  category: string
}

export interface Product {
  name: string
  description: string
  status: 'live' | 'beta' | 'development'
  icon: string
}

export interface CaseStudy {
  client: string
  industry: string
  challenge: string
  solution: string
  results: string
  technologies: string[]
  year: number
}

export interface NavItem {
  label: string
  href: string
}
