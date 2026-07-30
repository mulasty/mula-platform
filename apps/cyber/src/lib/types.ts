export interface CyberService {
  id: string
  title: string
  description: string
  features: string[]
}

export interface CyberCase {
  id: string
  title: string
  client: string
  challenge: string
  solution: string
  result: string
}

export interface CyberThreat {
  id: string
  name: string
  description: string
  severity: 'critical' | 'high' | 'medium'
}
