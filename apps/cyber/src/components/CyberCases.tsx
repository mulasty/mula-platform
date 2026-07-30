'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@mula/ui'
import { cases } from '@/lib/data'

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function CyberCases() {
  return (
    <section id="cases" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Case Studies" subtitle="Realne wdrożenia bezpieczeństwa i mierzalne rezultaty" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              className="relative rounded-2xl bg-mula-surface border border-mula-border p-8 flex flex-col"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(16,185,129,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-mula-accent/10">
                  <ShieldCheck className="w-6 h-6 text-mula-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mula-text leading-tight">{c.title}</h3>
                  <p className="text-xs text-mula-text-dim mt-1">{c.client}</p>
                </div>
              </div>

              <div className="absolute top-4 right-6 text-7xl font-bold text-white/[0.03] select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-xs uppercase tracking-wider text-mula-text-dim mb-1">Wyzwanie</p>
                  <p className="text-sm text-mula-text-muted leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-mula-text-dim mb-1">Rozwiązanie</p>
                  <p className="text-sm text-mula-text-muted leading-relaxed">{c.solution}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-mula-border">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-mula-accent/10">
                    <ArrowRight className="w-4 h-4 text-mula-accent" />
                  </div>
                  <p className="text-sm text-mula-accent font-medium">{c.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
