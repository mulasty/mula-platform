'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@mula/ui'
import { Globe, MessageCircle, AtSign, TrendingUp, LucideIcon } from 'lucide-react'
import type { MarketingChannel } from '@/lib/types'
import { marketingChannels } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  MessageCircle,
  AtSign,
  TrendingUp,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function MarketingChannels() {
  return (
    <section className="relative py-24 px-6 bg-mula-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Kanaly marketingowe"
          subtitle="Docieramy do klientow przez najskuteczniejsze kanaly — kazdy z mierzalnymi wynikami"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {marketingChannels.map((channel) => {
            const Icon = iconMap[channel.icon]
            return (
              <motion.div
                key={channel.id}
                variants={item}
                className="group relative p-6 rounded-2xl border border-mula-border bg-mula-surface/80 backdrop-blur-sm hover:border-mula-purple/40 hover:shadow-lg hover:shadow-mula-purple/5 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mula-purple/20 to-mula-accent/10 flex items-center justify-center group-hover:from-mula-purple/30 group-hover:to-mula-accent/20 transition-colors">
                    {Icon && (
                      <Icon className="w-5 h-5 text-mula-accent-light" />
                    )}
                  </div>
                  <h3 className="font-semibold text-mula-text group-hover:text-mula-accent-light transition-colors">
                    {channel.name}
                  </h3>
                </div>

                <p className="text-sm text-mula-text-muted mb-6 leading-relaxed flex-1">
                  {channel.description}
                </p>

                <div className="space-y-2">
                  {channel.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-mula-bg/50 border border-mula-border/50"
                    >
                      <span className="text-xs text-mula-text-dim">
                        {metric.label}
                      </span>
                      <span className="text-sm font-semibold text-mula-purple">
                        {metric.value}
                      </span>
                    </div>
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
