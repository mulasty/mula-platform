'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@mula/ui'
import {
  Search,
  Share2,
  FileText,
  Mail,
  Workflow,
  BarChart3,
  LucideIcon,
} from 'lucide-react'
import type { MarketingService } from '@/lib/types'
import { marketingServices } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Search,
  Share2,
  FileText,
  Mail,
  Workflow,
  BarChart3,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function MarketingServices() {
  return (
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Co robimy"
          subtitle="Kompleksowe uslugi marketingowe oparte na danych i najlepszych praktykach"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {marketingServices.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={item}
                className="group relative p-6 rounded-2xl border border-mula-border bg-mula-surface/50 backdrop-blur-sm hover:border-mula-accent/40 hover:shadow-lg hover:shadow-mula-accent/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-mula-purple/20 to-mula-accent/10 flex items-center justify-center group-hover:from-mula-purple/30 group-hover:to-mula-accent/20 transition-colors">
                    {Icon && (
                      <Icon className="w-6 h-6 text-mula-accent-light" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mula-text mb-2 group-hover:text-mula-accent-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-mula-text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
