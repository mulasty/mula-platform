'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '@mula/ui'

interface CTASectionProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  variant?: 'primary' | 'process'
}

export function CTASection({
  title,
  subtitle,
  ctaText = 'Skontaktuj się z nami',
  ctaHref = '#contact',
  variant = 'primary',
}: CTASectionProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className={`rounded-3xl p-10 md:p-14 text-center border ${
            variant === 'process'
              ? 'bg-gradient-to-br from-mula-purple/10 to-mula-accent/5 border-mula-border'
              : 'bg-gradient-to-br from-mula-accent/10 to-mula-purple/5 border-mula-border'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader title={title} subtitle={subtitle} />

          <motion.a
            href={ctaHref}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
