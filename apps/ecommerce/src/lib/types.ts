export interface EcomService {
  id: string
  title: string
  description: string
  icon: string
}

export interface EcomPlatform {
  id: string
  name: string
  description: string
  features: string[]
  bestFor: string
}

export interface EcomCase {
  id: string
  title: string
  client: string
  metric: string
  result: string
  description: string
  technologies: string[]
}
