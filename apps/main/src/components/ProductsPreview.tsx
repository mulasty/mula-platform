'use client'

import { motion } from 'framer-motion'
import { Bot, Clock, ShieldCheck, Smartphone } from 'lucide-react'
import type { Product } from '@/lib/types'
import { SectionHeader } from '@/components/SectionHeader'
import { PRODUCTS } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<any>> = {
  Bot,
  Clock,
  ShieldCheck,
  Smartphone,
}

const statusConfig: Record<
  Product['status'],
  { label: string; classes: string }
> = {
  live: {
    label: 'Dostępny',
    classes: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  beta: {
    label: 'Beta',
    classes: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  development: {
    label: 'W rozwoju',
    classes: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
}

export function ProductsPreview() {
  return (
    <section id="products" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Produkty w rozwoju"
          subtitle="Własne rozwiązania Mula Group"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((product, index) => {
            const Icon = iconMap[product.icon] || Bot
            const status = statusConfig[product.status]

            return (
              <motion.div
                key={product.name}
                className="rounded-2xl bg-mula-surface border border-mula-border p-6 flex gap-5 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -3, borderColor: '#3b82f640' }}
              >
                <div className="w-12 h-12 rounded-xl bg-mula-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-mula-accent" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-mula-text truncate">
                      {product.name}
                    </h3>
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${status.classes}`}
                    >
                      {status.label}
                    </span>
                  </div>

                  <p className="text-sm text-mula-text-muted leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
