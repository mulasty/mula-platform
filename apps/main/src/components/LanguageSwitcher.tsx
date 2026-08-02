'use client'

import { useState, useRef, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'
import { routing } from '@/i18n/routing'

const FLAG_LABELS: Record<string, string> = {
  pl: '🇵🇱',
  en: '🇬🇧',
}

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('languageSwitcher')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    router.push(`/${newLocale}${pathWithoutLocale}`)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-blue-700 transition-colors px-2 py-1 rounded-md hover:bg-slate-100"
        aria-label={t('label')}
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{t(locale)}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-50 max-h-72 overflow-y-auto">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-2 ${
                loc === locale ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-700'
              }`}
            >
              <span>{FLAG_LABELS[loc]}</span>
              <span>{t(loc)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
