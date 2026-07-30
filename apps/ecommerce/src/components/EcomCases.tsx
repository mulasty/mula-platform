'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@mula/ui'
import { ecomCases } from '@/lib/data'

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function EcomCases() {
  return (
    <section id="cases" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Case Studies" subtitle="Realne wdrożenia i mierzalne rezultaty w liczbach" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ecomCases.map((c, i) => (
            <motion.div
              key={c.id}
              className="relative rounded-2xl bg-mula-surface border border-mula-border p-8 flex flex-col"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(245,158,11,0.1)'
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.borderColor = ''
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-mula-accent/10">
                  <TrendingUp className="w-6 h-6 text-mula-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mula-text">{c.title}</h3>
                  <p className="text-sm text-mula-text-dim">{c.client}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-mula-bg/50 mb-6">
                <div className="text-xs uppercase tracking-wider text-mula-text-dim mb-1">Główny rezultat</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-mula-accent to-mula-accent-light bg-clip-text text-transparent">
                  {c.metric}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <ArrowRight className="w-3 h-3 text-mula-accent" />
                  <p className="text-xs text-mula-accent-light">{c.result}</p>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-mula-text-dim mb-2">Opis wdrożenia</p>
                <p className="text-sm text-mula-text-muted leading-relaxed mb-6">{c.description}</p>
              </div>

              <div className="pt-6 border-t border-mula-border">
                <div className="flex flex-wrap gap-2">
                  {c.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-mula-accent/5 border border-mula-accent/10 text-xs text-mula-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
