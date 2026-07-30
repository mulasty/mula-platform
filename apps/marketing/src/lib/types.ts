export interface MarketingService {
  id: string
  title: string
  description: string
  icon: string
}

export interface MarketingChannel {
  id: string
  name: string
  description: string
  metrics: MarketingMetric[]
  icon: string
}

export interface MarketingMetric {
  label: string
  value: string
}

export interface MarketingCase {
  id: string
  title: string
  client: string
  channel: string
  challenge: string
  solution: string
  result: string
  resultMetrics: MarketingMetric[]
  tech: string[]
  icon: string
}
