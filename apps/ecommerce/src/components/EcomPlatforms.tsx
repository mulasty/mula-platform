'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeader } from '@mula/ui'
import { ecomPlatforms } from '@/lib/data'

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const platformIcons: Record<string, string> = {
  shopify: '🛍️',
  woocommerce: '🔌',
  prestashop: '🏪',
  'nextjs-commerce': '⚡',
}

export function EcomPlatforms() {
  return (
    <section id="platforms" className="py-24 bg-mula-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Platformy E-Commerce"
          subtitle="Dobieramy technologię do Twojego biznesu — od gotowych platform po dedykowane rozwiązania"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ecomPlatforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              className="relative rounded-2xl bg-mula-surface border border-mula-border p-8 flex flex-col transition-all duration-300 hover:border-mula-accent/40"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 32px 4px rgba(245,158,11,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-mula-accent/10 text-2xl">
                  {platformIcons[platform.id] || '🛒'}
                </div>
                <h3 className="text-xl font-semibold text-mula-text">{platform.name}</h3>
              </div>

              <p className="text-sm text-mula-text-muted leading-relaxed mb-6">{platform.description}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-mula-text-muted">
                    <Check className="w-4 h-4 text-mula-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-mula-border">
                <p className="text-xs uppercase tracking-wider text-mula-text-dim mb-1">Najlepsze dla</p>
                <p className="text-sm text-mula-accent-light font-medium">{platform.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
