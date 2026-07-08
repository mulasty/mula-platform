'use client'

import Link from 'next/link'
import { useCookieConsent } from '@/components/CookieConsentProvider'

export function CookieConsentBanner() {
  const { hasDecided, acceptAll, acceptNecessaryOnly } = useCookieConsent()

  if (hasDecided) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Zgoda na pliki cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-mula-surface/95 backdrop-blur-xl border-t border-mula-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="text-sm text-mula-text-muted leading-relaxed max-w-3xl">
            <p>
              Używamy plików cookies, aby zapewnić podstawowe funkcje strony oraz analizować ruch.
              Możesz zaakceptować wszystkie cookies lub ograniczyć się do niezbędnych.
              Szczegóły znajdziesz w{' '}
              <Link
                href="/polityka-prywatnosci"
                className="text-mula-accent hover:text-mula-accent-light underline underline-offset-2"
              >
                polityce prywatności
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              type="button"
              onClick={acceptNecessaryOnly}
              className="px-5 py-2.5 rounded-xl border border-mula-border text-mula-text-muted hover:text-mula-text hover:border-mula-accent/50 text-sm font-medium transition-colors"
            >
              Tylko niezbędne
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="px-5 py-2.5 rounded-xl bg-mula-accent hover:bg-mula-accent-light text-white text-sm font-medium transition-colors"
            >
              Akceptuję wszystkie
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
