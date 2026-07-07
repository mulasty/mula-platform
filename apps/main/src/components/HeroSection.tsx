'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, ChevronDown } from 'lucide-react'
import { COMPANY, HERO_VARIANTS } from '@/lib/data'

const stats = HERO_VARIANTS.enterprise.stats

const PARTICLE_COUNT = 8

function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

function CountUpBadge({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      className="flex flex-col items-center p-3 md:p-4 rounded-xl bg-mula-surface/50 border border-mula-border/50 backdrop-blur-sm"
      variants={itemVariants}
    >
      <span className="text-xl md:text-2xl font-bold text-mula-text">{value}</span>
      <span className="text-xs text-mula-text-dim mt-1">{label}</span>
    </motion.div>
  )
}

/**
 * SECTION: Hero
 * BUSINESS GOAL: User understands Mula Group in 5 seconds.
 * USER QUESTION: "Where am I? Is this for me?"
 * EMOTIONAL TARGET: "This looks professional."
 */
export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        key: i,
        left: seededRandom(i * 3) * 100,
        top: seededRandom(i * 3 + 1) * 100,
        duration: 4 + seededRandom(i * 3 + 2) * 4,
        delay: seededRandom(i * 3 + 3) * 4,
      })),
    []
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden scroll-mt-24"
    >
      {/* Hero background: premium Data 1 grid texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-[0.65]"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-hero-grid.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mula-bg/95 via-mula-bg/65 to-mula-bg/40" />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-mula-accent/10 blur-[120px]"
          animate={{
            x: mousePos.x * 0.05 - 200,
            y: mousePos.y * 0.05 - 200,
          }}
          transition={{ type: 'spring', stiffness: 30, damping: 30 }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-mula-purple/10 blur-[120px]"
          animate={{
            x: mousePos.x * -0.03 + 100,
            y: mousePos.y * -0.03 + 100,
          }}
          transition={{ type: 'spring', stiffness: 20, damping: 30 }}
        />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-mula-accent-light/5 blur-[100px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.key}
            className="absolute w-1 h-1 rounded-full bg-mula-accent/30"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mula-surface border border-mula-border mb-8"
            variants={itemVariants}
          >
            <Building2 className="w-4 h-4 text-mula-accent" />
            <span className="text-xs text-mula-text-muted uppercase tracking-wide">
              {COMPANY.name}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-mula-accent via-mula-accent-light to-mula-purple bg-clip-text text-transparent">
              {COMPANY.heroTitle}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-lg text-mula-text-muted max-w-2xl mb-10 leading-relaxed"
            variants={itemVariants}
          >
            {COMPANY.heroSubtitle}
          </motion.p>

          {/* CTA */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mb-16" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-mula-accent hover:bg-mula-accent-light text-white font-semibold transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {COMPANY.heroCTA}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#needs"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-mula-border hover:border-mula-accent/50 text-mula-text-muted hover:text-mula-text transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {COMPANY.heroSecondaryCTA}
              <ChevronDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl"
            variants={containerVariants}
          >
            {stats.map((stat) => (
              <CountUpBadge key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
