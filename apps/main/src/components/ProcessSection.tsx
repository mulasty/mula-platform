'use client'

import { motion } from 'framer-motion'
import { Search, Compass, PenTool, Play, RefreshCw, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PROCESS_STEPS } from '@/lib/data'
import { SectionHeader } from '@/components/SectionHeader'

const iconMap: Record<string, LucideIcon> = {
  Search,
  Compass,
  PenTool,
  Play,
  RefreshCw,
  TrendingUp,
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

/**
 * SECTION: Mula Method
 * BUSINESS GOAL: Demystify the process. Set expectations.
 * USER QUESTION: "How will this work?"
 * EMOTIONAL TARGET: "I know what to expect."
 */
export function ProcessSection() {
  return (
    <section id="process" className="relative py-20 px-6 scroll-mt-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-[0.35]"
        style={{ backgroundImage: 'url(/images/backgrounds/bg-subtle-grid.webp)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mula-bg/70 via-mula-bg/80 to-mula-bg/70" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          title="Jak pracujemy"
          subtitle="Model operacyjny Mula Group"
        />

        {/* Desktop: horizontal steps with connecting line */}
        <motion.div
          className="hidden md:flex items-start gap-0 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {/* Gradient connecting line */}
          <div className="absolute top-10 left-8 right-8 h-0.5 bg-gradient-to-r from-mula-accent via-mula-purple to-mula-accent/20" />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon] || Search
            return (
              <motion.div
                key={step.step}
                className="relative flex-1 p-6 rounded-2xl bg-mula-surface border border-mula-border hover:border-mula-accent/40 transition-all duration-300 group mx-1 first:ml-0 last:mr-0"
                variants={cardVariant}
                whileHover={{ y: -6, boxShadow: '0 0 40px rgba(59,130,246,0.1)' }}
              >
                {/* Step number */}
                <span className="absolute top-4 right-5 text-7xl font-bold text-white/[0.04] select-none pointer-events-none tabular-nums">
                  {String(step.step).padStart(2, '0')}
                </span>

                {/* Icon circle */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-mula-accent/10 flex items-center justify-center mb-5 ring-4 ring-mula-bg">
                  <Icon className="w-6 h-6 text-mula-accent group-hover:text-mula-accent-light transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-mula-text mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-mula-text-muted leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting dot on line */}
                <div className="absolute top-[41px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-mula-accent ring-4 ring-mula-bg z-10" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mobile: vertical stack */}
        <motion.div
          className="md:hidden flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon] || Search
            return (
              <motion.div
                key={step.step}
                className="relative flex items-start gap-4 p-5 rounded-xl bg-mula-surface border border-mula-border"
                variants={cardVariant}
              >
                <span className="absolute top-3 right-4 text-5xl font-bold text-white/[0.05] select-none pointer-events-none tabular-nums">
                  {String(step.step).padStart(2, '0')}
                </span>
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-lg bg-mula-accent/10 flex items-center justify-center mt-0.5">
                  <Icon className="w-5 h-5 text-mula-accent" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-base font-semibold text-mula-text mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-mula-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
