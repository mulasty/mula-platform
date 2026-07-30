'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeader } from '@mula/ui'
import { threats } from '@/lib/data'

const severityConfig: Record<string, { icon: LucideIcon; color: string; bg: string; label: string }> = {
  critical: { icon: ShieldAlert, color: '#ef4444', bg: 'rgba(239,68,68,0.1)', label: 'Krytyczne' },
  high: { icon: AlertTriangle, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', label: 'Wysokie' },
  medium: { icon: AlertCircle, color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', label: 'Średnie' },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function CyberThreats() {
  return (
    <section id="threats" className="py-24 bg-mula-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Krajobraz Zagrożeń"
          subtitle="Najpoważniejsze zagrożenia cybernetyczne w obecnym krajobrazie bezpieczeństwa"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {threats.map((threat, i) => {
            const config = severityConfig[threat.severity]
            const Icon = config.icon
            return (
              <motion.div
                key={threat.id}
                className="group relative rounded-2xl bg-mula-surface border border-mula-border p-6 flex flex-col transition-all duration-300 hover:border-red-500/20"
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(239,68,68,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = ''
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: config.bg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: config.color }} />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ color: config.color, backgroundColor: config.bg }}
                  >
                    {config.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-mula-text mb-2">{threat.name}</h3>
                <p className="text-sm text-mula-text-muted leading-relaxed flex-1">{threat.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
