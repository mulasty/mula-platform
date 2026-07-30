'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { ContactForm } from '@mula/ui'

export function CyberCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mula-accent/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mula-accent/10 border border-mula-accent/20 mb-8">
            <Shield className="w-4 h-4 text-mula-accent" />
            <span className="text-sm text-mula-accent-light font-medium">Zabezpiecz firmę</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-mula-text mb-6">
            Twoja firma jest celem — nie czekaj na atak
          </h2>
          <p className="text-lg text-mula-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Umów bezpłatny audyt bezpieczeństwa. Przeanalizujemy Twoją infrastrukturę, zidentyfikujemy
            luki w zabezpieczeniach i przedstawimy konkretny plan ochrony dopasowany do Twojej organizacji.
          </p>
        </motion.div>

        <ContactForm competency="Cyberbezpieczeństwo" />
      </div>
    </section>
  )
}
