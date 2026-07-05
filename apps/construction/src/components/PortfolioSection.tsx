'use client'

import { motion } from 'framer-motion'
import { Building2, MapPin, Calendar } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { PORTFOLIO } from '@/lib/data'

const categoryColors: Record<string, string> = {
  magazynowa: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  przemysłowa: 'bg-construction/20 text-construction border-construction/30',
  usługowa: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  sportowa: 'bg-green-500/20 text-green-400 border-green-500/30',
}

const categoryLabels: Record<string, string> = {
  magazynowa: 'Magazynowa',
  przemysłowa: 'Przemysłowa',
  usługowa: 'Usługowa',
  sportowa: 'Sportowa',
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 px-6 bg-mula-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Wybrane realizacje"
          subtitle="Zrealizowane projekty hal stalowych dla klientów w całej Polsce"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl bg-mula-surface border border-mula-border overflow-hidden hover:border-construction/40 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-mula-border flex items-center justify-center">
                <Building2 className="w-16 h-16 text-mula-text-dim/30 group-hover:text-construction/30 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-mula-surface via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[project.category] || 'bg-mula-text-dim/20 text-mula-text-dim border-mula-text-dim/30'}`}>
                    {categoryLabels[project.category] || project.category}
                  </span>
                  <span className="text-xs text-mula-text-dim">{project.year}</span>
                </div>

                <h3 className="text-lg font-semibold text-mula-text mb-2">
                  {project.title}
                </h3>

                <div className="flex flex-col gap-1.5 text-sm text-mula-text-muted">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-construction" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-construction" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-construction" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
