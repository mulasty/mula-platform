'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'

const faqs = [
  {
    question: 'Czym zajmuje się Mula Group?',
    answer:
      'Mula Group to ekosystem biznesowy łączący 7 kompetencji w jednym środowisku operacyjnym. Zajmujemy się technologiami AI, transformacją cyfrową, e-commerce, marketingiem, cyberbezpieczeństwem, budownictwem oraz innowacjami. Zamiast szukać wielu dostawców, otrzymujesz jednego partnera z pełnym spektrum usług.',
  },
  {
    question: 'Jak wygląda proces współpracy?',
    answer:
      'Pracujemy w 5-etapowym modelu: Discover (diagnoza), Design (projekt rozwiązania), Integrate (łączenie kompetencji), Execute (wdrożenie) oraz Scale (rozwój i optymalizacja). Każdy projekt zaczynamy od dogłębnego zrozumienia Twojego biznesu, wyzwań i celów — dopiero potem projektujemy rozwiązanie.',
  },
  {
    question: 'Czy pracujecie z małymi firmami?',
    answer:
      'Tak, współpracujemy zarówno z małymi firmami, jak i średnimi przedsiębiorstwami. Nasze rozwiązania skalujemy odpowiednio do wielkości organizacji i budżetu. Wierzymy, że dostęp do nowoczesnych technologii i automatyzacji powinien być możliwy na każdym etapie rozwoju firmy.',
  },
  {
    question: 'Jakie technologie wykorzystujecie?',
    answer:
      'Korzystamy z nowoczesnego stacku technologicznego obejmującego Next.js, TypeScript, React, Python, LangChain, OpenAI API, PostgreSQL, Supabase, Docker i wiele innych. Nie narzucamy jednej technologii — dobieramy narzędzia optymalne do skali i potrzeb Twojego biznesu.',
  },
  {
    question: 'Ile trwa wdrożenie projektu?',
    answer:
      'Czas wdrożenia zależy od skali i złożoności projektu — od kilku tygodni dla prostych wdrożeń, po kilka miesięcy dla rozbudowanych systemów. Na etapie Design przedstawiamy szczegółowy harmonogram z kamieniami milowymi, dzięki czemu zawsze wiesz, na jakim etapie jesteśmy.',
  },
  {
    question: 'Czy oferujecie wsparcie po wdrożeniu?',
    answer:
      'Tak, wsparcie powdrożeniowe to integralna część naszej oferty. Zapewniamy monitoring, utrzymanie i rozwój wdrożonych systemów. Model Scale w naszej metodyce oznacza, że nie zostawiamy Cię po uruchomieniu — budujemy długoterminowe partnerstwo.',
  },
]

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
    <section id="faq" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="Często zadawane pytania"
          subtitle="Znajdź odpowiedzi na najczęściej pojawiające się pytania"
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
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
