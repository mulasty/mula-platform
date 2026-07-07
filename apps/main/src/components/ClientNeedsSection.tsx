'use client'
import { motion } from 'framer-motion'
import { Brain, TrendingUp, ShoppingCart, RefreshCw, Shield, Building2, Lightbulb, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { CLIENT_NEEDS } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Brain,
  TrendingUp,
  ShoppingCart,
  RefreshCw,
  Shield,
  Building2,
  Lightbulb,
}

/**
 * SECTION: W czym możemy pomóc?
 * BUSINESS GOAL: Connect user's problem with Mula Group's solution.
 * USER QUESTION: "Can they help with MY problem?"
 * EMOTIONAL TARGET: "They understand my needs."
 */
export function ClientNeedsSection() {
  return (
    <section id="needs" className="relative py-24 scroll-mt-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-[0.50]"
        style={{ backgroundImage: 'url(/images/backgrounds/bg-gradient-mesh.webp)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mula-bg/65 via-mula-bg/80 to-mula-bg/65" />

      <div className="relative max-w-7xl mx-auto px-4">
        <SectionHeader title="W czym możemy pomóc?" subtitle="Wybierz obszar, w którym potrzebujesz wsparcia — wskażemy Ci drogę." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {CLIENT_NEEDS.map((need, i) => {
            const Icon = iconMap[need.icon] || Brain
            return (
              <motion.a
                key={need.title}
                href={need.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-start gap-4 p-5 rounded-xl bg-mula-surface border border-mula-border hover:border-white/10 transition-all duration-300"
                style={{ ['--hover-color' as string]: need.color }}
              >
                <Icon className="w-5 h-5 mt-0.5 shrink-0 text-mula-text-dim group-hover:text-white transition-colors" style={{ color: need.color }} />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-mula-text group-hover:text-white transition-colors">{need.title}</h3>
                <p className="text-xs text-mula-text-dim mt-1">{need.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-mula-text-dim opacity-0 group-hover:opacity-100 transition-all shrink-0" />
              </motion.a>
              )
            })}
        </div>
      </div>
    </section>
  )
}
