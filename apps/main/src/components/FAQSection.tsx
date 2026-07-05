'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="Często zadawane pytania"
          subtitle="Znajdź odpowiedzi na najczęściej pojawiające się pytania"
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                className="rounded-xl bg-mula-surface border border-mula-border overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-base md:text-lg font-medium text-mula-text pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-mula-accent/10 flex items-center justify-center"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-mula-accent" />
                    ) : (
                      <Plus className="w-4 h-4 text-mula-accent" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-mula-text-muted leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
