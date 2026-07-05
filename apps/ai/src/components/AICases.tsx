'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@mula/ui'

const cases = [
  {
    title: 'System Kwalifikacji Leadów',
    client: 'Dystrybutor B2B',
    challenge: '200+ zapytań tygodniowo bez segmentacji i scoringu — obsługa ręczna, długi czas reakcji.',
    solution:
      'Agent AI z routingiem intencji, weryfikacją w KRS/GUS i pętlą akceptacji. Automatyczna klasyfikacja leadów według priorytetu.',
    results: 'Czas pierwszego kontaktu z 48h do 15min. Wykrywalność leadów high-priority +40%.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'CRM API', 'Slack'],
    stat: { before: '48h', after: '15min', improvement: '+40%' },
  },
  {
    title: 'Automatyczna Analiza Dokumentów',
    client: 'Kancelaria Prawna',
    challenge: 'Ręczna analiza setek dokumentów tygodniowo, wysokie ryzyko błędów ludzkich przy klasyfikacji.',
    solution:
      'System RAG z indeksacją dokumentów i agentem analitycznym. Automatyczna ekstrakcja kluczowych klauzul i streszczenia.',
    results: 'Redukcja czasu procesowania dokumentów o 70%. Automatyczna klasyfikacja z dokładnością 95%.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'OCR'],
    stat: { before: '100%', after: '30%', improvement: '-70%' },
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function AICases() {
  return (
    <section id="cases" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Case Studies" subtitle="Realne wdrożenia i mierzalne rezultaty" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              className="relative rounded-2xl bg-mula-surface border border-mula-border p-8 flex flex-col"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-mula-accent/10">
                  <TrendingUp className="w-6 h-6 text-mula-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-mula-text">{c.title}</h3>
                  <p className="text-sm text-mula-text-dim">{c.client}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-mula-bg/50">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-mula-text-dim text-xs mb-1">
                    <Clock className="w-3 h-3" /> Przed
                  </div>
                  <div className="text-lg font-bold text-mula-text-dim">{c.stat.before}</div>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-4 h-4 text-mula-accent mx-auto mb-1" />
                  <div className="text-sm font-medium text-mula-accent">Poprawa</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-mula-success mb-1">Po</div>
                  <div className="text-lg font-bold text-mula-success">{c.stat.after}</div>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-xs uppercase tracking-wider text-mula-text-dim mb-1">Wyzwanie</p>
                  <p className="text-sm text-mula-text-muted leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-mula-text-dim mb-1">Rozwiązanie</p>
                  <p className="text-sm text-mula-text-muted leading-relaxed">{c.solution}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-mula-border">
                <p className="text-sm text-mula-success font-medium mb-3">{c.results}</p>
                <div className="flex flex-wrap gap-2">
                  {c.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-mula-accent/5 border border-mula-accent/10 text-xs text-mula-text-muted">
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
