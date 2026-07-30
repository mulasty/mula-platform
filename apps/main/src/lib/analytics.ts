'use client'

import { track } from '@vercel/analytics'

type AnalyticsProperties = Record<string, string | number | boolean | null>

type GtagWindow = Window & {
  gtag?: (command: 'event', eventName: string, parameters?: AnalyticsProperties) => void
}

export function trackEvent(name: string, properties: AnalyticsProperties = {}) {
  track(name, properties)

  const gtag = (window as GtagWindow).gtag
  if (typeof gtag === 'function') {
    gtag('event', name, properties)
  }
}
