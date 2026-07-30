'use client'

import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { ContactForm } from '@mula/ui'

export function EcomCTA() {
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
            <ShoppingBag className="w-4 h-4 text-mula-accent" />
            <span className="text-sm text-mula-accent-light font-medium">Zwiększ sprzedaż</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-mula-text mb-6">
            Gotowy zwiększyć sprzedaż?
          </h2>
          <p className="text-lg text-mula-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Umów bezpłatny audyt swojego e-commerce. Sprawdzimy, gdzie tracisz przychód, które procesy warto
            zautomatyzować i jak zwiększyć konwersję — bez zwiększania budżetu reklamowego.
          </p>
        </motion.div>

        <ContactForm competency="E-commerce" />
      </div>
    </section>
  )
}
