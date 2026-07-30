'use client'

import { motion } from 'framer-motion'
import { FileSearch, Truck, Layers, ShieldCheck, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeader } from '@mula/ui'
import type { InnovationProduct } from '@/lib/types'
import { stageLabels, stageColors } from '@/lib/data'

interface ProductCard {
  icon: LucideIcon
  title: string
  description: string
  stage: InnovationProduct['stage']
  features: string[]
}

const products: ProductCard[] = [
  {
    icon: FileSearch,
    title: 'AI Document Analyzer',
    description:
      'Inteligentny system do automatycznej analizy, klasyfikacji i ekstrakcji danych z dokumentów biznesowych — od umów po faktury i raporty.',
    stage: 'beta',
    features: [
      'OCR z ekstrakcją kluczowych danych',
      'Klasyfikacja dokumentów ML',
      'Integracja z systemami DMS/ECM',
      'Automatyczne raportowanie zgodności',
    ],
  },
  {
    icon: Truck,
    title: 'Smart Logistics Tracker',
    description:
      'Platforma do monitorowania łańcucha dostaw w czasie rzeczywistym z predykcją opóźnień i optymalizacją tras opartą na AI.',
    stage: 'mvp',
    features: [
      'Śledzenie przesyłek w czasie rzeczywistym',
      'Predykcja opóźnień z wykorzystaniem AI',
      'Dynamiczna optymalizacja tras',
      'Integracja z czujnikami IoT',
    ],
  },
  {
    icon: Layers,
    title: 'Digital Twin Platform',
    description:
      'Platforma do tworzenia cyfrowych bliźniaków procesów produkcyjnych — symulacje what-if, monitoring KPI i predykcja awarii.',
    stage: 'concept',
    features: [
      'Modelowanie 3D linii produkcyjnych',
      'Symulacje scenariuszy what-if',
      'Monitoring KPI w czasie rzeczywistym',
      'Predykcyjne wykrywanie awarii',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Automated Compliance Engine',
    description:
      'Silnik do automatycznego monitorowania zgodności regulacyjnej — skanowanie zmian prawnych, mapowanie ryzyka i generowanie raportów.',
    stage: 'concept',
    features: [
      'Automatyczne skanowanie regulacji prawnych',
      'Mapowanie ryzyka i luk zgodności',
      'Generowanie raportów compliance',
      'Alerty o zmianach legislacyjnych',
    ],
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function InnovationProducts() {
  return (
    <section id="products" className="py-24 bg-mula-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Produkty w inkubacji"
          subtitle="MVP i prototypy budowane w ramach Mula Startup Studio — od koncepcji po wdrożenie"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              className="relative rounded-2xl bg-mula-surface border border-mula-border p-6 flex flex-col transition-all duration-300 hover:border-mula-accent/40"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(6,182,212,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-mula-accent/10">
                  <product.icon className="w-6 h-6 text-mula-accent" />
                </div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${stageColors[product.stage]}`}
                >
                  {stageLabels[product.stage]}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-mula-text mb-2">{product.title}</h3>
              <p className="text-sm text-mula-text-muted leading-relaxed mb-5">{product.description}</p>

              <div className="mt-auto space-y-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-mula-accent flex-shrink-0" />
                    <span className="text-sm text-mula-text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute top-4 right-4 text-6xl font-bold text-white/[0.03] select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
