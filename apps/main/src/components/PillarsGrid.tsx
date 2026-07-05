'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/SectionHeader'
import { PillarCard } from '@/components/PillarCard'
import { PILLARS } from '@/lib/data'

/**
 * SECTION: Filary Mula Group
 * BUSINESS GOAL: Show competence breadth. Drive to subdomains.
 * USER QUESTION: "What exactly do they do?"
 * EMOTIONAL TARGET: "They can help in my area."
 */
export function PillarsGrid() {
  return (
    <section id="pillars" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Działalność"
          subtitle="7 kompetencji. Jeden ekosystem."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              backgroundImage: 'url(/images/competencies/ai-style-prototype.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="bg-mula-surface/90 backdrop-blur-sm rounded-2xl">
              <PillarCard pillar={PILLARS[0]} index={0} />
            </div>
          </div>
          {PILLARS.slice(1).map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
