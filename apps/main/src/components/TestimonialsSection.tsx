'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'

const testimonialSlots = [
  {
    id: 1,
    label: 'Gotowe na pierwszą opinię',
  },
  {
    id: 2,
    label: 'Gotowe na pierwszą opinię',
  },
  {
    id: 3,
    label: 'Gotowe na pierwszą opinię',
  },
]

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Opinie klientów"
          subtitle="Co mówią o nas firmy, z którymi pracujemy"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {testimonialSlots.map((slot) => (
            <motion.div
              key={slot.id}
              className="rounded-2xl bg-mula-surface border border-mula-border/60 p-8 flex flex-col"
              variants={cardVariant}
              whileHover={{ y: -6, borderColor: '#3b82f640' }}
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full bg-mula-text-dim/15"
                  />
                ))}
              </div>

              <div className="flex-1 rounded-xl bg-mula-text-dim/5 border border-mula-border/40 p-5 mb-6 flex items-center justify-center min-h-[120px]">
                <div className="flex flex-col items-center gap-2">
                  <Quote className="w-6 h-6 text-mula-text-dim/25" />
                  <p className="text-sm text-mula-text-dim/50 text-center italic">
                    &bdquo;{slot.label}&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-mula-border/40">
                <div className="w-10 h-10 rounded-full bg-mula-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-mula-accent/40">
                    ?
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-mula-text-dim/60">
                    Imię Nazwisko
                  </p>
                  <p className="text-xs text-mula-text-dim/40">
                    Stanowisko, Firma
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
