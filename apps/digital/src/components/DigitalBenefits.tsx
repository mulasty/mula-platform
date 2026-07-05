'use client'

import { motion } from 'framer-motion'
import { Clock, Eye, FileCheck } from 'lucide-react'
import { SectionHeader } from '@mula/ui'

const benefits = [
  {
    icon: Clock,
    stat: 'Do 60%',
    label: 'redukcji czasu procesów',
    description: 'Automatyzacja powtarzalnych zadań uwalnia godziny pracy tygodniowo, pozwalając zespołowi skupić się na tym, co naprawdę ważne.',
  },
  {
    icon: Eye,
    stat: 'Pełna',
    label: 'widoczność operacji',
    description: 'Dashboardy i raporty w czasie rzeczywistym dają pełny obraz procesów — wiesz dokładnie, co się dzieje w firmie.',
  },
  {
    icon: FileCheck,
    stat: 'Zero',
    label: 'utraconych dokumentów',
    description: 'Cyfrowa archiwizacja i backup eliminują ryzyko utraty dokumentacji. Każdy plik dostępny z poziomu przeglądarki.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function DigitalBenefits() {
  return (
    <section id="benefits" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Korzyści" subtitle="Co zyskujesz dzięki transformacji cyfrowej" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.label}
              className="relative rounded-2xl bg-mula-surface border border-mula-border p-8 text-center flex flex-col items-center"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(139,92,246,0.1)'
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.borderColor = ''
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-mula-purple/10">
                <benefit.icon className="w-8 h-8 text-mula-purple" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-mula-purple to-violet-400 bg-clip-text text-transparent mb-2">
                {benefit.stat}
              </div>
              <p className="text-lg font-semibold text-mula-text mb-3">{benefit.label}</p>
              <p className="text-sm text-mula-text-muted leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
