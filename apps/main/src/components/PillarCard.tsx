'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Pillar } from '@/lib/types'
import * as Icons from 'lucide-react'

const iconMap: Record<string, React.ComponentType<any>> = {
  Brain: Icons.Brain,
  Zap: Icons.Zap,
  ShoppingCart: Icons.ShoppingCart,
  Megaphone: Icons.Megaphone,
  Shield: Icons.Shield,
  Building2: Icons.Building2,
  Lightbulb: Icons.Lightbulb,
}

interface PillarCardProps {
  pillar: Pillar
  index: number
}

export function PillarCard({ pillar, index }: PillarCardProps) {
  const Icon = iconMap[pillar.icon] || Icons.Box

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-mula-surface border border-mula-border p-6 flex flex-col transition-all duration-300 hover:border-transparent"
      style={
        {
          '--pillar-color': pillar.color,
          boxShadow: `0 0 0 0 transparent`,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 24px 4px ${pillar.color}20`
        e.currentTarget.style.borderColor = `${pillar.color}40`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 0 transparent`
        e.currentTarget.style.borderColor = ''
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-40"
        style={{
          backgroundImage: `url(/images/competencies/${pillar.id}-card.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-mula-surface/82 backdrop-blur-[1px]" />

      <div
        className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: `${pillar.color}18` }}
      >
        <Icon className="w-7 h-7" style={{ color: pillar.color }} />
      </div>

      <h3 className="relative z-10 text-lg font-semibold text-mula-text mb-1">
        {pillar.title}
      </h3>

      <p className="relative z-10 text-sm text-mula-accent font-medium mb-3">
        {pillar.subtitle}
      </p>

      <p className="relative z-10 text-sm text-mula-text-muted leading-relaxed flex-1 mb-5">
        {pillar.description}
      </p>

      <a
        href={pillar.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
        style={{ color: pillar.color }}
      >
        Dowiedz się więcej
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </motion.div>
  )
}
