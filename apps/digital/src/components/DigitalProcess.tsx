'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Wrench, Repeat } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeader } from '@mula/ui'

interface ProcessStep {
  step: number
  icon: LucideIcon
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    step: 1,
    icon: Search,
    title: 'Audyt',
    description: 'Analizujemy obecne procesy, systemy i przepływ informacji. Identyfikujemy wąskie gardła i potencjał automatyzacji.',
  },
  {
    step: 2,
    icon: Lightbulb,
    title: 'Strategia',
    description: 'Opracowujemy plan transformacji cyfrowej — od priorytetyzacji działań po harmonogram wdrożeń i dobór narzędzi.',
  },
  {
    step: 3,
    icon: Wrench,
    title: 'Wdrożenie',
    description: 'Realizujemy zmiany krok po kroku — integrujemy systemy, automatyzujemy procesy i szkolimy zespół.',
  },
  {
    step: 4,
    icon: Repeat,
    title: 'Optymalizacja',
    description: 'Monitorujemy rezultaty, zbieramy feedback i nieustannie usprawniamy. Transformacja to proces ciągły.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const purple = '#8b5cf6'

export function DigitalProcess() {
  return (
    <section id="process" className="py-24 bg-mula-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Proces Transformacji" subtitle="Sprawdzona metodyka — od diagnozy po ciągłe doskonalenie" />

        <div className="hidden md:flex items-start gap-0 relative">
          <div className="absolute top-10 left-8 right-8 h-0.5 bg-gradient-to-r from-mula-purple via-violet-400 to-mula-purple/20" />

          {steps.map((step) => (
            <motion.div
              key={step.step}
              className="relative flex-1 p-6 rounded-2xl bg-mula-surface border border-mula-border hover:border-mula-purple/40 transition-all duration-300 group mx-1 first:ml-0 last:mr-0"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -6, boxShadow: '0 0 40px rgba(139,92,246,0.1)' }}
            >
              <span className="absolute top-4 right-5 text-7xl font-bold text-white/[0.04] select-none pointer-events-none">
                {String(step.step).padStart(2, '0')}
              </span>

              <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 ring-4 ring-mula-bg" style={{ backgroundColor: `${purple}15` }}>
                <step.icon className="w-6 h-6" style={{ color: purple }} />
              </div>

              <h3 className="text-lg font-semibold text-mula-text mb-2">{step.title}</h3>
              <p className="text-sm text-mula-text-muted leading-relaxed">{step.description}</p>

              <div className="absolute top-[41px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ring-4 ring-mula-bg z-10" style={{ backgroundColor: purple }} />
            </motion.div>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-4">
          {steps.map((step) => (
            <motion.div
              key={step.step}
              className="relative flex items-start gap-4 p-5 rounded-xl bg-mula-surface border border-mula-border"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <span className="absolute top-3 right-4 text-5xl font-bold text-white/[0.05] select-none pointer-events-none">
                {String(step.step).padStart(2, '0')}
              </span>
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5" style={{ backgroundColor: `${purple}15` }}>
                <step.icon className="w-5 h-5" style={{ color: purple }} />
              </div>
              <div className="relative z-10">
                <h3 className="text-base font-semibold text-mula-text mb-1">{step.title}</h3>
                <p className="text-xs text-mula-text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
