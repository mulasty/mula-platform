'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import * as Icons from 'lucide-react'

interface ProcessStep {
  title: string
  description: string
  icon: string
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Search: Icons.Search,
  PenTool: Icons.PenTool,
  Link2: Icons.Link2,
  Play: Icons.Play,
  TrendingUp: Icons.TrendingUp,
  Brain: Icons.Brain,
  Zap: Icons.Zap,
  Shield: Icons.Shield,
  Lightbulb: Icons.Lightbulb,
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="hidden md:flex items-start gap-0 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <div className="absolute top-10 left-8 right-8 h-0.5 bg-gradient-to-r from-mula-accent via-mula-purple to-mula-accent/20" />

          {steps.map((step, i) => {
            const Icon = iconMap[step.icon] || Search
            return (
              <motion.div
                key={step.title}
                className="relative flex-1 p-6 rounded-2xl bg-mula-surface border border-mula-border hover:border-mula-accent/40 transition-all duration-300 group mx-1 first:ml-0 last:mr-0"
                variants={cardVariant}
                whileHover={{
                  y: -6,
                  boxShadow: '0 0 40px rgba(59,130,246,0.1)',
                }}
              >
                <span className="absolute top-4 right-5 text-7xl font-bold text-white/[0.04] select-none pointer-events-none tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10 w-12 h-12 rounded-xl bg-mula-accent/10 flex items-center justify-center mb-5 ring-4 ring-mula-bg">
                  <Icon className="w-6 h-6 text-mula-accent group-hover:text-mula-accent-light transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-mula-text mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-mula-text-muted leading-relaxed">
                  {step.description}
                </p>

                <div className="absolute top-[41px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-mula-accent ring-4 ring-mula-bg z-10" />
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="md:hidden flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon] || Search
            return (
              <motion.div
                key={step.title}
                className="relative flex items-start gap-4 p-5 rounded-xl bg-mula-surface border border-mula-border"
                variants={cardVariant}
              >
                <span className="absolute top-3 right-4 text-5xl font-bold text-white/[0.05] select-none pointer-events-none tabular-nums">
                  {String(i + 1).padStart(2, '0')}
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
