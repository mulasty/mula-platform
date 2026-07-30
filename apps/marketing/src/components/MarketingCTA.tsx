'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { ContactForm } from '@mula/ui'

export default function MarketingCTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mula-purple/5 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mula-accent/30 bg-mula-accent/5 text-mula-accent-light text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Gotowy na wzrost?</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-mula-text mb-6"
          >
            Zwiększ{' '}
            <span className="bg-gradient-to-r from-mula-purple to-mula-accent bg-clip-text text-transparent">
              zasięg
            </span>{' '}
            swojej marki
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-mula-text-muted max-w-xl mx-auto mb-10"
          >
            Umów bezpłatną konsultację i dowiedz się, jak możemy pomóc Ci
            zwiększyć zasięg, generować więcej leadów i skalować sprzedaż.
          </motion.p>
        </motion.div>

        <ContactForm competency="Marketing" />
      </div>
    </section>
  )
}
