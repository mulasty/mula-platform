export interface InnovationService {
  id: string
  title: string
  description: string
  icon: string
}

export interface InnovationProduct {
  id: string
  title: string
  description: string
  stage: 'concept' | 'mvp' | 'beta' | 'live'
  features: string[]
}

export interface InnovationCase {
  id: string
  title: string
  client: string
  technology: string
  result: string
}
