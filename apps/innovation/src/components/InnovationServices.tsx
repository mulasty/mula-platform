'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Box, RefreshCw, Settings, Wifi, Sprout } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeader } from '@mula/ui'

interface ServiceCard {
  icon: LucideIcon
  title: string
  description: string
}

const services: ServiceCard[] = [
  {
    icon: Lightbulb,
    title: 'Konsulting innowacyjny',
    description:
      'Audyt potencjału innowacyjnego Twojej firmy. Identyfikujemy obszary do transformacji, analizujemy trendy rynkowe i budujemy strategię wdrożenia nowych technologii dopasowaną do Twojego budżetu.',
  },
  {
    icon: Box,
    title: 'Prototypowanie MVP',
    description:
      'W kilka tygodni dostarczamy działający prototyp do walidacji pomysłu. Szybkie iteracje, testy z użytkownikami i gotowy produkt do pierwszej rundy finansowania lub pilotażu rynkowego.',
  },
  {
    icon: RefreshCw,
    title: 'Transformacja cyfrowa',
    description:
      'Przeprowadzamy kompleksową transformację cyfrową organizacji — od mapowania procesów, przez dobór technologii, po wdrożenie i szkolenie zespołów. Technologia jako motor wzrostu.',
  },
  {
    icon: Settings,
    title: 'Automatyzacja procesów',
    description:
      'Eliminujemy ręczne, powtarzalne czynności za pomocą RPA, agentów AI i integracji API. Redukcja kosztów operacyjnych nawet o 60% i eliminacja błędów ludzkich.',
  },
  {
    icon: Wifi,
    title: 'IoT i Industry 4.0',
    description:
      'Projektujemy i wdrażamy rozwiązania Internetu Rzeczy — od czujników i akwizycji danych, przez platformy analityczne, po cyfrowe bliźniaki procesów produkcyjnych.',
  },
  {
    icon: Sprout,
    title: 'Startup incubation',
    description:
      'Inkubujemy wewnętrzne i zewnętrzne startupy technologiczne. Zapewniamy mentoring, wsparcie technologiczne, dostęp do sieci inwestorów i doradztwo w pozyskiwaniu grantów.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function InnovationServices() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Usługi innowacyjne"
          subtitle="Od audytu po inkubację startupów — pełne spektrum usług dla firm gotowych na zmianę"
        />

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
                e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(6,182,212,0.12)'
                e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'
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
