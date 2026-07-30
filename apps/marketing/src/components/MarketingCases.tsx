'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@mula/ui'
import { ShoppingBag, Target, MapPin, LucideIcon } from 'lucide-react'
import { marketingCases } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  Target,
  MapPin,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function MarketingCases() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Case Studies"
          subtitle="Realne historie wzrostu naszych klientow — od strategii do mierzalnych wynikow"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {marketingCases.map((c) => {
            const Icon = iconMap[c.icon]
            return (
              <motion.div
                key={c.id}
                variants={item}
                className="group relative p-6 rounded-2xl border border-mula-border bg-mula-surface/50 backdrop-blur-sm hover:border-mula-accent/40 hover:shadow-lg hover:shadow-mula-accent/5 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mula-purple/20 to-mula-accent/10 flex items-center justify-center group-hover:from-mula-purple/30 group-hover:to-mula-accent/20 transition-colors">
                    {Icon && (
                      <Icon className="w-5 h-5 text-mula-accent-light" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-mula-text text-sm leading-tight group-hover:text-mula-accent-light transition-colors">
                      {c.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-mula-purple/10 text-mula-purple border border-mula-purple/20">
                    {c.client}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-mula-accent/10 text-mula-accent-light border border-mula-accent/20">
                    {c.channel}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-mula-text-dim mb-1">
                      Wyzwanie
                    </h4>
                    <p className="text-sm text-mula-text-muted leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-mula-text-dim mb-1">
                      Rozwiazanie
                    </h4>
                    <p className="text-sm text-mula-text-muted leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-mula-purple/5 to-mula-accent/5 border border-mula-purple/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-mula-accent-light mb-2">
                    Wynik
                  </h4>
                  <p className="text-sm text-mula-text leading-relaxed mb-3">
                    {c.result}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {c.resultMetrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-lg font-bold text-mula-accent">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-mula-text-dim leading-tight mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-mula-bg/80 text-mula-text-dim border border-mula-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
