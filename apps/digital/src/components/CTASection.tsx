'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mula-purple/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mula-purple/10 border border-mula-purple/20 mb-8">
            <Zap className="w-4 h-4 text-mula-purple" />
            <span className="text-sm text-violet-400 font-medium">Zacznij działać</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-mula-text mb-6">
            Rozpocznij transformację
          </h2>
          <p className="text-lg text-mula-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Umów bezpłatny audyt cyfrowy. Sprawdzimy, które procesy w Twojej firmie można zoptymalizować
            i przedstawimy konkretny plan działania z harmonogramem wdrożenia.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.a
            href="mailto:info@mulagroup.eu"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-mula-purple hover:bg-violet-500 text-white font-semibold transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Umów audyt cyfrowy
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
