'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Cpu, GitBranch, UserCheck, RefreshCw } from 'lucide-react'
import { SectionHeader } from '@mula/ui'

const architectures = [
  {
    icon: Cpu,
    title: 'Copilot',
    description:
      'Agent asystujący człowiekowi. Podpowiada, analizuje, przygotowuje rekomendacje — decyzję zawsze podejmuje operator.',
  },
  {
    icon: GitBranch,
    title: 'Multi-Agent',
    description:
      'Orkiestrator rozdziela zadania między agentów specjalistycznych. Każdy agent działa autonomicznie w swoim obszarze.',
  },
  {
    icon: UserCheck,
    title: 'Human-in-the-Loop',
    description:
      'Agent wykonuje pracę, ale kluczowe decyzje trafiają do akceptacji człowieka. Pełna kontrola nad procesem.',
  },
  {
    icon: RefreshCw,
    title: 'Looped Agents',
    description:
      'Agenci z pętlą decyzyjną — samodzielnie planują, wykonują, weryfikują i korygują działania w zamkniętym cyklu.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function AIArchitecture() {
  return (
    <section id="architecture" className="py-24 bg-mula-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Architektura Agentów AI" subtitle="Cztery tryby pracy — od asysty po pełną autonomię" />

        <div className="hidden md:block mb-16">
          <div className="flex items-center justify-center gap-2 text-sm text-mula-text-dim">
            <span className="px-4 py-2 rounded-full bg-mula-surface border border-mula-border">Input</span>
            <ArrowRight className="w-4 h-4" />
            <span className="px-4 py-2 rounded-full bg-mula-accent/10 border border-mula-accent/30 text-mula-accent">Agent Router</span>
            <ArrowRight className="w-4 h-4" />
            <span className="px-4 py-2 rounded-full bg-mula-surface border border-mula-border">Specjaliści</span>
            <ArrowRight className="w-4 h-4" />
            <span className="px-4 py-2 rounded-full bg-mula-surface border border-mula-border">Tools / API</span>
            <ArrowRight className="w-4 h-4" />
            <span className="px-4 py-2 rounded-full bg-mula-success/10 border border-mula-success/30 text-mula-success">Response</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectures.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative rounded-2xl bg-mula-surface border border-mula-border p-6 flex flex-col transition-all duration-300 hover:border-mula-accent/40"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(59,130,246,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-mula-accent/10">
                <item.icon className="w-6 h-6 text-mula-accent" />
              </div>
              <h3 className="text-lg font-semibold text-mula-text mb-2">{item.title}</h3>
              <p className="text-sm text-mula-text-muted leading-relaxed">{item.description}</p>
              <div className="absolute top-4 right-4 text-6xl font-bold text-white/[0.03] select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
