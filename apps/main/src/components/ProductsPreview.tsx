'use client'

import { motion } from 'framer-motion'
import { Bot, Clock, ShieldCheck, Smartphone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@mula/ui'

type IconComponent = React.ComponentType<{ className?: string; style?: React.CSSProperties }>

const iconMap: Record<string, IconComponent> = {
  Bot,
  Clock,
  ShieldCheck,
  Smartphone,
}

/**
 * SECTION: Produkty
 * BUSINESS GOAL: Show long-term vision and innovation capability.
 * USER QUESTION: "Are they just a service company?"
 * EMOTIONAL TARGET: "They build their own products too — impressive."
 */
export function ProductsPreview() {
  const tp = useTranslations('products')
  const products = tp.raw as unknown as { name: string; description: string; status: string }[] || []
  const statusConfig: Record<
    string,
    { label: string; classes: string }
  > = {
    live: {
      label: tp.raw.length > 0 ? 'Live' : 'Dostępny',
      classes: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    beta: {
      label: 'Beta',
      classes: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    development: {
      label: tp.raw.length > 0 ? 'In Development' : 'W rozwoju',
      classes: 'bg-purple-50 text-purple-700 border-purple-200',
    },
  }
  return (
    <section id="products" className="py-20 scroll-mt-24 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={products.length > 0 ? products[0].name.split(':')[0] || 'Products' : 'Produkty Mula Group'}
          subtitle={products.length > 0 ? `From ${products[0].name} to automation systems` : 'Od MULA Guardian AI po kolejne systemy automatyzacji'}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => {
            const Icon = iconMap[{
              'MULA Guardian AI': 'ShieldCheck',
              'Automation Audit Robot': 'Bot',
              'Presence System': 'Clock',
              'Mula Mobile AI Commander': 'Smartphone',
            }[product.name] || 'Bot'] || Bot
            const status = statusConfig[product.status] || statusConfig.development

            return (
              <motion.div
                key={product.name}
                className={`rounded-2xl bg-white border border-slate-200 p-6 flex gap-5 items-start shadow-sm ${index === 0 ? 'md:col-span-2 ring-1 ring-blue-200 shadow-xl shadow-blue-100/60' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -3, borderColor: '#93c5fd' }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-mula-accent" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-950">
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
