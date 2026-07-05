'use client'

import { motion } from 'framer-motion'
import { Brain, Network, Database, Workflow, MessageCircle, BarChart3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeader } from '@mula/ui'

interface ServiceCard {
  icon: LucideIcon
  title: string
  description: string
}

const services: ServiceCard[] = [
  {
    icon: Brain,
    title: 'Agenci AI',
    description:
      'Inteligentne systemy do obsługi leadów, triage\'u sprzedażowego i automatycznej kwalifikacji zapytań. Agent podejmuje decyzje, integruje się z CRM i przekazuje gotowe rekomendacje.',
  },
  {
    icon: Network,
    title: 'Systemy Multi-Agent',
    description:
      'Architektura orkiestrator + agenty specjalistyczne. Każdy agent odpowiada za swój obszar — od researchu po finalną akceptację — a orkiestrator koordynuje przepływ pracy.',
  },
  {
    icon: Database,
    title: 'RAG – Wiedza Firmowa',
    description:
      'Retrieval-Augmented Generation z dostępem do dokumentacji, regulaminów i bazy wiedzy Twojej firmy. Agent odpowiada precyzyjnie, bazując wyłącznie na zweryfikowanych źródłach.',
  },
  {
    icon: Workflow,
    title: 'Automatyzacja Procesów',
    description:
      'Łączymy AI z webhookami, API i workflow. Automatyzujemy powtarzalne procesy — od fakturowania po raportowanie — redukując czas operacyjny nawet o 80%.',
  },
  {
    icon: MessageCircle,
    title: 'Chatboty i Voiceboty LLM',
    description:
      'Konwersacyjne interfejsy oparte na dużych modelach językowych. Obsługa klienta 24/7, voiceboty telefoniczne i integracja z live chatem w jednym systemie.',
  },
  {
    icon: BarChart3,
    title: 'Analiza Danych AI',
    description:
      'Anomaly detection, predykcja trendów i automatyczne raportowanie. AI analizuje dane operacyjne i finansowe, wykrywając anomalie zanim staną się problemem.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function AIServices() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Usługi AI" subtitle="Od pojedynczego agenta po złożone architektury wieloagentowe" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative rounded-2xl bg-mula-surface border border-mula-border p-6 flex flex-col transition-all duration-300 hover:border-mula-accent/30"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(59,130,246,0.12)'
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.borderColor = ''
              }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-mula-accent/10">
                <service.icon className="w-7 h-7 text-mula-accent" />
              </div>
              <h3 className="text-lg font-semibold text-mula-text mb-3">{service.title}</h3>
              <p className="text-sm text-mula-text-muted leading-relaxed flex-1">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
