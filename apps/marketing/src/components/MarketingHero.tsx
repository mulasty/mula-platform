'use client'

import { useMemo, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, ArrowRight } from 'lucide-react'

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

function generateParticles(count: number, seed: number): Particle[] {
  const rng = seededRandom(seed)
  return Array.from({ length: count }, () => ({
    x: rng() * 100,
    y: rng() * 100,
    size: rng() * 4 + 1,
    speedX: (rng() - 0.5) * 0.3,
    speedY: (rng() - 0.5) * 0.3,
    opacity: rng() * 0.3 + 0.1,
  }))
}

const stats = [
  { value: '+320%', label: 'Wzrost przychodow' },
  { value: '-42%', label: 'Nizszy CPA' },
  { value: '850+', label: 'Leadów B2B' },
  { value: '+210%', label: 'Ruch organiczny' },
]

export default function MarketingHero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const particles = useMemo(() => generateParticles(20, 42), [])
  const sectionRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.06) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          left: `${mousePos.x - 15}%`,
          top: `${mousePos.y - 15}%`,
        }}
        animate={{ x: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(236, 72, 153, 0.10) 0%, transparent 70%)',
          left: `${100 - mousePos.x - 10}%`,
          top: `${100 - mousePos.y - 10}%`,
        }}
        animate={{ x: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 40, damping: 25 }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-mula-accent"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            x: [0, p.speedX * 200, 0, p.speedX * -200, 0],
            y: [0, p.speedY * -150, p.speedY * 100, 0, 0],
          }}
          transition={{
            duration: 12 + (p.x % 8),
            repeat: Infinity,
            ease: 'linear',
            delay: p.x * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mula-accent/30 bg-mula-accent/5 text-mula-accent-light text-sm mb-8"
        >
          <TrendingUp className="w-4 h-4" />
          <span>Mula Marketing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-mula-purple via-mula-accent to-mula-accent-light bg-clip-text text-transparent">
            Marketing Cyfrowy
          </span>
          <br />
          <span>ktory naprawde dziala</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-mula-text-muted max-w-2xl mx-auto mb-10"
        >
          Zwiekszamy zasieg, generujemy leady i optymalizujemy konwersje. Od SEO po
          kampanie performance — strategie marketingowe oparte na danych, ktore
          przynosza mierzalne wyniki.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="mailto:marketing@mulagroup.eu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-mula-purple to-mula-accent text-white font-semibold text-lg shadow-lg shadow-mula-purple/25 hover:shadow-xl hover:shadow-mula-purple/30 transition-shadow"
          >
            Zwieksz zasieg
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-mula-border bg-mula-surface/50 text-mula-text font-semibold text-lg hover:border-mula-accent/50 transition-colors"
          >
            Nasze uslugi
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-4 rounded-xl border border-mula-border bg-mula-surface/50 backdrop-blur-sm"
            >
              <div className="text-2xl md:text-3xl font-bold text-mula-accent-light mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-mula-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-mula-bg to-transparent pointer-events-none" />
    </section>
  )
}
