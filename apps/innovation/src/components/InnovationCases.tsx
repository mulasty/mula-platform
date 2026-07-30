'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Wrench } from 'lucide-react'
import { SectionHeader } from '@mula/ui'

const cases = [
  {
    title: 'AI Document Analyzer — wdrożenie w kancelarii',
    client: 'Kancelaria prawna (100+ pracowników)',
    icon: TrendingUp,
    challenge:
      'Ręczna analiza setek dokumentów tygodniowo, wysokie ryzyko błędów przy klasyfikacji klauzul i ekstrakcji danych.',
    solution:
      'System RAG z indeksacją dokumentów, agent AI do klasyfikacji klauzul, ekstrakcja danych z umów z dokładnością 95%.',
    result: 'Redukcja czasu analizy dokumentów o 70%, automatyczna kategoryzacja 500+ umów miesięcznie.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'OCR'],
    stat: { value: '-70%', label: 'krótszy czas analizy' },
  },
  {
    title: 'Smart Logistics Tracker — flota 200 pojazdów',
    client: 'Firma transportowa (flota 200 pojazdów)',
    icon: Users,
    challenge:
      'Brak widoczności floty w czasie rzeczywistym, opóźnienia dostaw, wysokie koszty paliwa i nieefektywne trasy.',
    solution:
      'Czujniki IoT w pojazdach, platforma analityczna w chmurze, modele predykcyjne czasu dostawy, integracja z systemem WMS.',
    result: 'Skrócenie czasu dostaw o 25%, redukcja kosztów paliwa o 15%, 98% dokładność predykcji ETA.',
    technologies: ['IoT', 'AWS', 'TensorFlow', 'WMS API', 'Grafana'],
    stat: { value: '+98%', label: 'dokładność predykcji ETA' },
  },
  {
    title: 'Digital Twin Platform — zakład produkcyjny',
    client: 'Zakład produkcyjny (branża automotive)',
    icon: Wrench,
    challenge:
      'Nieplanowane przestoje linii produkcyjnej, niski wskaźnik OEE, reaktywne utrzymanie ruchu zamiast predykcyjnego.',
    solution:
      'Cyfrowy bliźniak linii montażowej, sensory IoT, platforma symulacji what-if, system predykcyjnego utrzymania ruchu.',
    result: 'Redukcja przestojów o 40%, wzrost OEE o 12 pkt. proc., zwrot z inwestycji w 8 miesięcy.',
    technologies: ['Digital Twin', 'IoT', 'Azure', 'Power BI', 'MQTT'],
    stat: { value: '-40%', label: 'mniej przestojów' },
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function InnovationCases() {
  return (
    <section id="cases" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Case Studies" subtitle="Realne wdrożenia i mierzalne rezultaty naszych innowacji" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              className="relative rounded-2xl bg-mula-surface border border-mula-border p-8 flex flex-col"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(6,182,212,0.1)'
                e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.borderColor = ''
              }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-mula-accent/10">
                  <c.icon className="w-6 h-6 text-mula-accent" />
                </div>
                <div>
                  <p className="text-sm text-mula-text-dim">{c.client}</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-mula-text mb-4">{c.title}</h3>

              <div className="p-4 rounded-xl bg-mula-bg/50 mb-5">
                <div className="text-3xl font-bold bg-gradient-to-r from-mula-accent to-mula-accent-light bg-clip-text text-transparent mb-1">
                  {c.stat.value}
                </div>
                <p className="text-xs text-mula-text-dim">{c.stat.label}</p>
              </div>

              <div className="space-y-3 flex-1">
                <div>
                  <p className="text-xs uppercase tracking-wider text-mula-text-dim mb-1">Rozwiązanie</p>
                  <p className="text-sm text-mula-text-muted leading-relaxed">{c.solution}</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-mula-border">
                <p className="text-sm text-mula-success font-medium mb-3">{c.result}</p>
                <div className="flex flex-wrap gap-2">
                  {c.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-mula-accent/5 border border-mula-accent/10 text-xs text-mula-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
