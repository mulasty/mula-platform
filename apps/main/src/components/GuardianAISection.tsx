'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Activity } from 'lucide-react'
import { GUARDIAN_AI } from '@/lib/data'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

/**
 * SECTION: MULA Guardian AI
 * BUSINESS GOAL: Position the flagship product as the strategic face of Mula Group.
 * USER QUESTION: "Where is this company going and what is its strongest product?"
 * EMOTIONAL TARGET: "This is a focused AI company with a clear product direction."
 */
export function GuardianAISection() {
  return (
    <section id="guardian-ai" className="relative py-24 scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.32] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-4 h-4" />
              {GUARDIAN_AI.eyebrow}
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-950 mb-6">
              <span className="mula-gradient-text">{GUARDIAN_AI.name}</span>
              <br />
              {GUARDIAN_AI.headline}
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {GUARDIAN_AI.description}
            </p>

            <div className="space-y-3 mb-8">
              {GUARDIAN_AI.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/guardian"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-blue-700 text-white font-semibold transition-colors"
              >
                {GUARDIAN_AI.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://app.guardian.mulagroup.eu/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-slate-200 hover:border-blue-300 text-slate-800 font-semibold transition-colors shadow-sm"
              >
                {GUARDIAN_AI.secondaryCta}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-blue-100/70 overflow-hidden">
              <div className="bg-slate-950 text-white p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Guardian Console</p>
                      <p className="text-xs text-slate-400">MULA Guardian AI</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 text-xs text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Beta active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {GUARDIAN_AI.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                      <p className="text-xs text-slate-400 mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 space-y-4">
                {[
                  ['Ryzyko operacyjne', 'Analiza procesów i zależności', '72%'],
                  ['Compliance NIS2/RODO', 'Dokumentacja i rekomendacje', 'Ready'],
                  ['Incydenty bezpieczeństwa', 'Priorytetyzacja reakcji', 'Low'],
                ].map(([title, desc, value]) => (
                  <div key={title} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">{title}</p>
                        <p className="text-xs text-slate-500">{desc}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-blue-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
