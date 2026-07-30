'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function MarketingCTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mula-purple/5 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mula-accent/30 bg-mula-accent/5 text-mula-accent-light text-sm mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Gotowy na wzrost?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-mula-text mb-6"
        >
          Zwieksz{' '}
          <span className="bg-gradient-to-r from-mula-purple to-mula-accent bg-clip-text text-transparent">
            zasieg
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
          Umow bezplatna konsultacje i dowiedz sie, jak mozemy pomoc Ci
          zwiekszyc zasieg, generowac wiecej leadow i skalowac sprzedaz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="mailto:marketing@mulagroup.eu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-mula-purple to-mula-accent text-white font-semibold text-lg shadow-lg shadow-mula-purple/25 hover:shadow-xl hover:shadow-mula-purple/30 transition-shadow"
          >
            Zwieksz zasieg
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
