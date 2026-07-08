'use client'

import { createContext, useContext, useCallback, useSyncExternalStore } from 'react'

export interface CookieConsent {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieConsentState {
  consent: CookieConsent
  hasDecided: boolean
}

interface CookieConsentContextValue extends CookieConsentState {
  acceptAll: () => void
  acceptNecessaryOnly: () => void
}

const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
}

const defaultState: CookieConsentState = {
  consent: defaultConsent,
  hasDecided: false,
}

const storageKey = 'mula-cookie-consent'

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null)

function parseStoredConsent(raw: string | null): CookieConsent | null {
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as CookieConsent
    if (typeof parsed.necessary === 'boolean') {
      return { ...defaultConsent, ...parsed }
    }
  } catch {
    // ignore corrupt storage
  }
  return null
}

function getStateFromStorage(): CookieConsentState {
  const stored = parseStoredConsent(localStorage.getItem(storageKey))
  return stored ? { consent: stored, hasDecided: true } : defaultState
}

function subscribe(callback: () => void) {
  const handler = (e: StorageEvent) => {
    if (e.key === storageKey) callback()
  }
  window.addEventListener('storage', handler)
  return () => window.removeEventListener('storage', handler)
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const { consent, hasDecided } = useSyncExternalStore(
    subscribe,
    getStateFromStorage,
    () => defaultState
  )

  const persist = useCallback((next: CookieConsent) => {
    localStorage.setItem(storageKey, JSON.stringify(next))
    // Dispatch a fake storage event so other tabs and the same window update.
    window.dispatchEvent(new StorageEvent('storage', { key: storageKey }))
  }, [])

  const acceptAll = useCallback(() => {
    persist({ necessary: true, analytics: true, marketing: true })
  }, [persist])

  const acceptNecessaryOnly = useCallback(() => {
    persist({ necessary: true, analytics: false, marketing: false })
  }, [persist])

  return (
    <CookieConsentContext.Provider value={{ consent, hasDecided, acceptAll, acceptNecessaryOnly }}>
      {children}
      <CookieConsentScript consent={consent} />
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) {
    throw new Error('useCookieConsent must be used inside CookieConsentProvider')
  }
  return ctx
}

/**
 * Inject analytics scripts only after explicit consent.
 * Replace NEXT_PUBLIC_GA4_MEASUREMENT_ID with the real ID when available.
 */
function CookieConsentScript({ consent }: { consent: CookieConsent }) {
  const loadAnalytics = useCallback(() => {
    if (!consent.analytics) return

    const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') return

    const existing = document.getElementById('ga4-script')
    if (existing) return

    const script = document.createElement('script')
    script.id = 'ga4-script'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    const inline = document.createElement('script')
    inline.id = 'ga4-config'
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', { anonymize_ip: true });
    `
    document.head.appendChild(inline)
  }, [consent.analytics])

  // Use requestAnimationFrame to avoid setState-in-render issues during hydration.
  if (typeof window !== 'undefined') {
    window.requestAnimationFrame(loadAnalytics)
  }

  return null
}
