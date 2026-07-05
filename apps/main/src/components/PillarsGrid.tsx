'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/SectionHeader'
import { PillarCard } from '@/components/PillarCard'
import { PILLARS } from '@/lib/data'

export function PillarsGrid() {
  return (
    <section id="pillars" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Działalność"
          subtitle="7 kompetencji. Jeden ekosystem."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
