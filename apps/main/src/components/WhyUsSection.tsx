'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Grid3X3, Briefcase, GitBranch, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { WHY_US_STATS } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Grid3X3,
  Briefcase,
  GitBranch,
  MapPin,
}

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const start = performance.now()
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = WHY_US_STATS

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Dlaczego Mula Group" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-xl md:text-2xl text-mula-text leading-relaxed">
              Nie jesteśmy agencją, software housem ani doradztwem w izolacji —
              jesteśmy <span className="text-mula-accent font-semibold">ekosystemem biznesowym</span>.
              Łączymy strategię, systemy cyfrowe, commerce, kompetencje techniczne
              i rozwój projektów w jedno spójne środowisko operacyjne.
            </p>
            <p className="mt-6 text-mula-text-muted leading-relaxed">
              Każdy projekt przechodzi przez nasz{' '}
              <span className="text-mula-accent">6-etapowy model ekosystemowy</span>:
              Analiza → Strategia → Projekt → Wdrożenie → Automatyzacja → Rozwój. Od diagnozy po
              długoterminowe partnerstwo — jeden partner, jedna odpowiedzialność.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {stats.map((stat, i) => {
              const Icon = iconMap[stat.icon] || Grid3X3
              return (
              <motion.div
                key={stat.label}
                className="rounded-2xl bg-mula-surface border border-mula-border p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: 0.15 * i, ease: 'easeOut' }}
                whileHover={{ y: -4, borderColor: '#3b82f640' }}
              >
                <div className="w-12 h-12 rounded-xl bg-mula-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-mula-accent" />
                </div>
                <span className="text-3xl font-bold text-mula-text mb-1">
                  {stat.raw ? (
                    'EU'
                  ) : (
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  )}
                </span>
                <span className="text-sm text-mula-text-muted">{stat.label}</span>
              </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
