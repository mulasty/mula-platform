'use client'

import { motion } from 'framer-motion'

interface TechItem {
  name: string
}

interface TechnologyCloudProps {
  items: TechItem[]
}

export function TechnologyCloud({ items }: TechnologyCloudProps) {
  return (
    <section className="py-24 bg-mula-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {items.map((tech) => (
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
