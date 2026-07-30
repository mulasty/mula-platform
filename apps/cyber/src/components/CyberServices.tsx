'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Activity, Siren, FileCheck, Terminal } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeader } from '@mula/ui'
import { services } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Zap,
  Activity,
  Siren,
  FileCheck,
  Terminal,
}

const icons = [Shield, Zap, Activity, Siren, FileCheck, Terminal]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function CyberServices() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Usługi Cyberbezpieczeństwa"
          subtitle="Od audytu po całodobowy monitoring — pełne spektrum ochrony IT"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[i] || Shield
            return (
              <motion.div
                key={service.id}
                className="group relative rounded-2xl bg-mula-surface border border-mula-border p-6 flex flex-col transition-all duration-300 hover:border-mula-accent/30"
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(16,185,129,0.12)'
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = ''
                }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-mula-accent/10">
                  <Icon className="w-7 h-7 text-mula-accent" />
                </div>
                <h3 className="text-lg font-semibold text-mula-text mb-3">{service.title}</h3>
                <p className="text-sm text-mula-text-muted leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-xs text-mula-text-dim">
                      <span className="w-1 h-1 rounded-full bg-mula-accent mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
