'use client'

import { motion } from 'framer-motion'
import { ArrowRight, HardHat } from 'lucide-react'

interface CTASectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
}

export function CTASection({ title, subtitle, ctaText, ctaHref }: CTASectionProps) {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-mula-surface/30 to-mula-bg" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          className="rounded-3xl bg-mula-surface border border-mula-border p-12 md:p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-construction/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-mula-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              className="w-16 h-16 rounded-2xl bg-construction/10 flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <HardHat className="w-8 h-8 text-construction" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-mula-text mb-4">
              {title}
            </h2>
            <p className="text-lg text-mula-text-muted mb-8 max-w-xl mx-auto">
              {subtitle}
            </p>

            <motion.a
              href={ctaHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-construction hover:bg-red-500 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25 text-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
