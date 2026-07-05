'use client'

import { motion } from 'framer-motion'
import { Cpu, Workflow, Bot } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { MULA_METHOD } from '@/lib/data'
import { SectionHeader } from '@/components/SectionHeader'

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Workflow,
  Bot,
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export function MulaMethod() {
  return (
    <section id="mula-method" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mula-bg via-mula-surface/30 to-mula-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          title="Mula Method — Jak przyspieszamy Twój biznes"
          subtitle="Trzy filary akceleracji biznesowej"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {MULA_METHOD.map((item) => {
            const Icon = iconMap[item.icon] || Cpu
            return (
              <motion.div
                key={item.id}
                className="relative group"
                variants={cardVariant}
              >
                <div
                  className="relative rounded-2xl p-8 h-full transition-all duration-500 group-hover:-translate-y-2"
                  style={{
                    border: '1px solid #1a1a1a',
                    background: 'linear-gradient(145deg, #111111 0%, #0d0d0d 100%)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(600px circle at 50% 0%, ${item.color}10, transparent 60%)`,
                    }}
                  />

                  <div
                    className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-white/5"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>

                  <h3 className="relative z-10 text-2xl font-bold text-mula-text mb-4">
                    {item.title}
                  </h3>

                  <p className="relative z-10 text-mula-text-muted leading-relaxed">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${item.color}40, transparent)` }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
