'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/SectionHeader'

const partnerSlots = Array.from({ length: 6 }, (_, i) => i)

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Zaufali nam"
          subtitle="Firmy, które postawiły na współpracę z Mula Group"
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {partnerSlots.map((index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center rounded-2xl bg-mula-surface border border-mula-border/60 aspect-[3/2] p-6"
              variants={cardVariant}
              whileHover={{ borderColor: '#3b82f640', y: -4 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-mula-text-dim/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-mula-text-dim/30 select-none">
                    P
                  </span>
                </div>
                <span className="text-xs text-mula-text-dim/50 font-medium">
                  Partner {index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-8 text-center text-sm text-mula-text-dim"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Sekcja gotowa na przyszłe logo partnerów
        </motion.p>
      </div>
    </section>
  )
}
