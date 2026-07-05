'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { COMPANY } from '@/lib/data'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-mula-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Kontakt"
          subtitle="Porozmawiajmy o Twoim projekcie"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-mula-text mb-6">
              Umów bezpłatną rozmowę
            </h3>

            <p className="text-mula-text-muted leading-relaxed mb-10">
              Pierwsza konsultacja to bezpłatna, 30-minutowa rozmowa, podczas
              której zrozumiemy Twoje wyzwania i zaproponujemy konkretny
              następny krok. Bez zobowiązań — tylko wartość.
            </p>

            <div className="space-y-6">
              <motion.a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                {COMPANY.email}
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <div className="flex items-start gap-3 text-mula-text-muted">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{COMPANY.address}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-mula-surface border border-mula-border p-10 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          >
            <p className="text-lg text-mula-text-muted leading-relaxed mb-8">
              Napisz do nas bezpośrednio. Odpowiadamy zazwyczaj w ciągu kilku
              godzin w dni robocze. Opisz krótko swój projekt, a my odezwiemy
              się z konkretną propozycją.
            </p>

            <motion.a
              href={`mailto:${COMPANY.email}?subject=Nowy%20projekt%20-%20Mula%20Group`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-mula-accent hover:bg-blue-500 text-white font-medium rounded-full transition-all duration-200 text-lg self-start"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              Wyślij wiadomość
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
