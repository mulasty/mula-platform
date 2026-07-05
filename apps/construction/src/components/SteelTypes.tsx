'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Triangle } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { STEEL_TYPES } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<any>> = {
  TrendingUp,
  Triangle,
}

export function SteelTypes() {
  return (
    <section id="konstrukcje" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Konstrukcje stalowe dostępne od ręki"
          subtitle="Standardowe konstrukcje w atrakcyjnych cenach — dostępne w krótkim terminie realizacji"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STEEL_TYPES.map((type, index) => {
            const Icon = iconMap[type.icon] || TrendingUp
            return (
              <motion.div
                key={type.id}
                className="group relative rounded-2xl bg-mula-surface border border-mula-border p-8 hover:border-construction/40 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4, boxShadow: '0 0 40px rgba(239,68,68,0.1)' }}
              >
                <div className="w-14 h-14 rounded-xl bg-construction/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-construction" />
                </div>

                <h3 className="text-xl font-semibold text-mula-text mb-3">
                  {type.title}
                </h3>
                <p className="text-sm text-mula-text-muted leading-relaxed mb-6">
                  {type.description}
                </p>

                <div className="bg-mula-bg rounded-xl p-5 mb-6">
                  <h4 className="text-xs font-semibold text-mula-text-dim uppercase tracking-wider mb-4">
                    Dostępne wymiary
                  </h4>
                  <div className="space-y-3">
                    {type.dimensions.map((dim) => (
                      <div key={dim.label} className="flex justify-between items-center text-sm">
                        <span className="text-mula-text-muted">{dim.label}</span>
                        <span className="text-mula-text font-medium">{dim.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-construction hover:text-red-400 transition-colors group/link"
                >
                  Zapytaj o dostępność
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
