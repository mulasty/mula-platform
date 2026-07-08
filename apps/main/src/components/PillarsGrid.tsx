'use client'

import { SectionHeader, PillarCard } from '@mula/ui'
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
          {PILLARS.map((pillar, index) => (
            <PillarCard
              key={pillar.id}
              title={pillar.title}
              subtitle={pillar.subtitle}
              description={pillar.description}
              icon={pillar.icon}
              href={pillar.href}
              color={pillar.color}
              backgroundImage={`/images/competencies/${pillar.id}-card.webp`}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
