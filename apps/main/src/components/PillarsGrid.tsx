'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader, PillarCard } from '@mula/ui'
import { PILLARS } from '@/lib/data'

export function PillarsGrid() {
  const tp = useTranslations('pillars')
  return (
    <section id="pillars" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={tp('0.title').split(' ')[tp.raw.length > 0 ? 0 : 0] + ' & więcej'}
          subtitle="7 kompetencji. Jeden ekosystem."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, index) => {
            return (
            <PillarCard
              key={pillar.id}
              title={tp(`${index}.title`)}
              subtitle={tp(`${index}.subtitle`)}
              description={tp(`${index}.description`)}
              icon={pillar.icon}
              href={pillar.href}
              color={pillar.color}
              backgroundImage={`/images/competencies/${pillar.id}-card.webp`}
              index={index}
            />
            )
          })}
        </div>
      </div>
    </section>
  )
}
