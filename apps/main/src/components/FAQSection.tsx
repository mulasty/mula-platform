'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { FAQ_ITEMS } from '@/lib/data'

/**
 * SECTION: FAQ
 * BUSINESS GOAL: Remove objections before contact. Reduce friction.
 * USER QUESTION: "Will this work for me? What about X?"
 * EMOTIONAL TARGET: "My concerns are addressed."
 */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-16 px-6 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-[0.45]"
        style={{ backgroundImage: 'url(/images/backgrounds/bg-dark-surface.webp)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mula-bg/60 via-mula-bg/80 to-mula-bg/60" />

      <div className="relative max-w-3xl mx-auto">
        <SectionHeader
          title="Często zadawane pytania"
          subtitle="Znajdź odpowiedzi na najczęściej pojawiające się pytania"
        />

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="rounded-xl bg-mula-surface border border-mula-border overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-base md:text-lg font-medium text-mula-text pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-mula-accent/10 flex items-center justify-center transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-mula-accent" />
                    ) : (
                      <Plus className="w-4 h-4 text-mula-accent" />
                    )}
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5 text-mula-text-muted leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
