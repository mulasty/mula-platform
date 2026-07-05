'use client'

import { motion } from 'framer-motion'
import { Search, Monitor, GitBranch, FileText, PlugZap, GraduationCap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeader } from '@mula/ui'

interface DigitalService {
  icon: LucideIcon
  title: string
  description: string
}

const services: DigitalService[] = [
  {
    icon: Search,
    title: 'Audyt Cyfrowy',
    description:
      'Kompleksowa diagnoza procesów, systemów i kompetencji cyfrowych w Twojej firmie. Identyfikujemy wąskie gardła i obszary do optymalizacji.',
  },
  {
    icon: Monitor,
    title: 'CRM / ERP',
    description:
      'Wdrożenia i integracje systemów CRM i ERP dopasowanych do specyfiki Twojego biznesu. Łączymy działy sprzedaży, magazynu i obsługi klienta.',
  },
  {
    icon: GitBranch,
    title: 'Workflow i Automatyzacja',
    description:
      'Projektujemy i wdrażamy przepływy pracy eliminujące ręczne czynności. Automatyzujemy obieg dokumentów, akceptacje i powiadomienia.',
  },
  {
    icon: FileText,
    title: 'Digitalizacja Dokumentów',
    description:
      'OCR, elektroniczny obieg dokumentów i archiwizacja cyfrowa. Koniec z papierowymi teczkami — wszystkie dokumenty dostępne w chmurze.',
  },
  {
    icon: PlugZap,
    title: 'Integracje Systemów',
    description:
      'Łączymy rozproszone systemy w jeden spójny ekosystem. API, webhooki i middleware — dane przepływają automatycznie między platformami.',
  },
  {
    icon: GraduationCap,
    title: 'Szkolenia Cyfrowe',
    description:
      'Podnosimy kompetencje cyfrowe zespołów. Szkolenia z obsługi narzędzi, bezpieczeństwa danych i najlepszych praktyk pracy zdalnej.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const purple = '#8b5cf6'

export function DigitalServices() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Usługi Cyfrowe" subtitle="Od audytu po pełne wdrożenie i szkolenie zespołu" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative rounded-2xl bg-mula-surface border border-mula-border p-6 flex flex-col transition-all duration-300 hover:border-mula-purple/30"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(139,92,246,0.12)'
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.borderColor = ''
              }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${purple}18` }}>
                <service.icon className="w-7 h-7" style={{ color: purple }} />
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
