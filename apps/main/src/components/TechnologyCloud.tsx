'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/SectionHeader'
import { TECH_STACK } from '@/lib/data'

export function TechnologyCloud() {
  return (
    <section id="tech" className="py-20 bg-mula-surface/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Technologie"
          subtitle="Narzędzia z którymi pracujemy"
        />

        <motion.div
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {TECH_STACK.map((tech) => (
            <motion.span
              key={tech.name}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-mula-surface border border-mula-border text-mula-text-muted cursor-default transition-all duration-200 hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                borderColor: '#3b82f640',
                boxShadow: '0 0 16px 3px #3b82f618',
                color: '#93c5fd',
              }}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
