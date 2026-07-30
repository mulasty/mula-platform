'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { SectionHeader, ContactForm } from '@mula/ui'
import { COMPANY } from '@/lib/data'

/**
 * SECTION: Kontakt
 * BUSINESS GOAL: Convert interest into contact.
 * USER QUESTION: "What's the next step?"
 * EMOTIONAL TARGET: "I want to talk to them."
 */
export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-mula-surface/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={COMPANY.contactTitle}
          subtitle={COMPANY.contactSubtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-mula-text mb-6">
              {COMPANY.contactHeading}
            </h3>

            <p className="text-mula-text-muted leading-relaxed mb-10">
              {COMPANY.contactText}
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

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
