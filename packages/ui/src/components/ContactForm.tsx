'use client'

import { useState, useRef, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const COMPETENCY_OPTIONS = [
  'AI i Automatyzacja',
  'Cyberbezpieczeństwo',
  'E-commerce',
  'Marketing',
  'Innowacje i Startupy',
  'Budownictwo',
  'Transformacja cyfrowa',
  'Inne',
] as const

type Competency = (typeof COMPETENCY_OPTIONS)[number]

interface FormData {
  name: string
  email: string
  company: string
  competency: Competency
  message: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  competency?: string
  message?: string
  consent?: string
}

interface ContactFormProps {
  competency?: Competency
  className?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ContactForm({ competency: preselected, className }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    competency: preselected || 'Inne',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')
  const honeypotRef = useRef<HTMLInputElement>(null)

  const validate = (): boolean => {
    const next: FormErrors = {}

    if (!formData.name.trim()) {
      next.name = 'Imię i nazwisko jest wymagane'
    }

    if (!formData.email.trim()) {
      next.email = 'Adres email jest wymagany'
    } else if (!validateEmail(formData.email.trim())) {
      next.email = 'Podaj prawidłowy adres email'
    }

    if (!formData.competency) {
      next.competency = 'Wybierz obszar'
    }

    if (!formData.message.trim()) {
      next.message = 'Wiadomość jest wymagana'
    } else if (formData.message.trim().length < 10) {
      next.message = 'Wiadomość musi mieć co najmniej 10 znaków'
    }

    if (!formData.consent) {
      next.consent = 'Zgoda na przetwarzanie danych jest wymagana'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    const honeypot = honeypotRef.current?.value || ''
    if (honeypot) return

    setStatus('submitting')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          competency: formData.competency,
          message: formData.message.trim(),
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          competency: preselected || 'Inne',
          message: '',
          consent: false,
        })
      } else {
        setStatus('error')
        setServerError('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.')
      }
    } catch {
      setStatus('error')
      setServerError('Nie udało się połączyć z serwerem. Sprawdź połączenie i spróbuj ponownie.')
    }
  }

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field as keyof FormErrors]
        return next
      })
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-mula-surface border border-mula-border text-mula-text placeholder:text-mula-text-dim/60 text-sm transition-colors duration-200 focus:outline-none focus:border-mula-accent/60 focus:ring-1 focus:ring-mula-accent/30'
  const errorClass = 'border-mula-error focus:border-mula-error focus:ring-mula-error/30'
  const labelClass = 'block text-sm font-medium text-mula-text mb-1.5'

  return (
    <section className={className}>
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="rounded-2xl bg-mula-surface border border-mula-success/30 p-10 text-center"
            >
              <CheckCircle className="w-12 h-12 text-mula-success mx-auto mb-4" />
              <h3 className="text-xl font-bold text-mula-text mb-2">
                Dziękujemy za wiadomość!
              </h3>
              <p className="text-mula-text-muted mb-6">
                Odezwiemy się w ciągu 24 godzin w dni robocze.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2.5 rounded-xl bg-mula-accent hover:bg-mula-accent-light text-white text-sm font-medium transition-colors duration-200"
              >
                Wyślij kolejną wiadomość
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onSubmit={handleSubmit}
              className="rounded-2xl bg-mula-surface border border-mula-border p-8 md:p-10"
              noValidate
            >
              <h3 className="text-xl font-bold text-mula-text mb-6">
                Wyślij wiadomość
              </h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Imię i nazwisko <span className="text-mula-error">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Jan Kowalski"
                    className={`${inputClass} ${errors.name ? errorClass : ''}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-mula-error">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email <span className="text-mula-error">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="jan@firma.pl"
                    className={`${inputClass} ${errors.email ? errorClass : ''}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-mula-error">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-company" className={labelClass}>
                    Firma
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateField('company', e.target.value)}
                    placeholder="Nazwa firmy (opcjonalnie)"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-competency" className={labelClass}>
                    Wybierz obszar <span className="text-mula-error">*</span>
                  </label>
                  <select
                    id="contact-competency"
                    value={formData.competency}
                    onChange={(e) => updateField('competency', e.target.value as Competency)}
                    className={`${inputClass} ${errors.competency ? errorClass : ''} appearance-none bg-no-repeat`}
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%2394a3b8\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E")',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '20px',
                    }}
                  >
                    {COMPETENCY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.competency && (
                    <p className="mt-1 text-xs text-mula-error">{errors.competency}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Wiadomość <span className="text-mula-error">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Opisz swój projekt lub zapytanie..."
                    className={`${inputClass} resize-y min-h-[120px] ${errors.message ? errorClass : ''}`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-mula-error">{errors.message}</p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="contact-consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => updateField('consent', e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-mula-border bg-mula-surface text-mula-accent focus:ring-mula-accent/30"
                  />
                  <label htmlFor="contact-consent" className="text-xs text-mula-text-muted leading-relaxed cursor-pointer">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z Polityką Prywatności{' '}
                    <span className="text-mula-error">*</span>
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-xs text-mula-error -mt-3 pl-7">{errors.consent}</p>
                )}

                <div className="hidden" aria-hidden="true">
                  <input
                    ref={honeypotRef}
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-mula-accent hover:bg-mula-accent-light text-white font-semibold text-sm transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Wyślij wiadomość
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status === 'error' && serverError && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-start gap-2 p-3 rounded-xl bg-mula-error/10 border border-mula-error/20"
                    >
                      <AlertCircle className="w-4 h-4 text-mula-error mt-0.5 shrink-0" />
                      <p className="text-sm text-mula-error">{serverError}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
