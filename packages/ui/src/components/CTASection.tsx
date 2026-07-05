'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
}

export function CTASection({ title, subtitle, ctaText, ctaHref }: CTASectionProps) {
  return (
    <section className="py-24 bg-mula-surface/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-mula-text mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-lg text-mula-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          {subtitle}
        </motion.p>

        <motion.a
          href={ctaHref}
          className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-mula-accent hover:bg-mula-accent-light text-white font-semibold text-lg transition-colors duration-200 hover:shadow-lg hover:shadow-blue-500/25"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {ctaText}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  )
}
