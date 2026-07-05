'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Warehouse, Factory, Tractor, Trophy } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { HALL_TYPES } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<any>> = {
  Warehouse,
  Factory,
  Tractor,
  Trophy,
}

export function HallTypes() {
  return (
    <section id="hale" className="relative py-24 px-6 bg-mula-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Hale stalowe na zamówienie"
          subtitle="Projektujemy i budujemy hale dopasowane do Twoich indywidualnych potrzeb — od koncepcji po montaż pod klucz"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HALL_TYPES.map((hall, index) => {
            const Icon = iconMap[hall.icon] || Warehouse
            return (
              <motion.div
                key={hall.id}
                className="group relative rounded-2xl bg-mula-surface border border-mula-border p-6 hover:border-construction/40 transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                style={
                  {
                    '--hall-color': '#ef4444',
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px 4px rgba(239,68,68,0.15)'
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 0 transparent'
                  e.currentTarget.style.borderColor = ''
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-construction/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-construction" />
                </div>

                <h3 className="text-lg font-semibold text-mula-text mb-2">
                  {hall.title}
                </h3>

                <p className="text-sm text-mula-text-muted leading-relaxed flex-1 mb-4">
                  {hall.description}
                </p>

                <div className="pt-4 border-t border-mula-border">
                  <p className="text-xs text-mula-text-dim mb-1">Przykładowe wymiary</p>
                  <p className="text-sm font-semibold text-construction">{hall.exampleDimensions}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
