'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag, TrendingUp, BarChart3 } from 'lucide-react'

const PARTICLE_COUNT = 16

function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const STATS = [
  { label: 'Średni wzrost konwersji', value: '+35%', icon: TrendingUp },
  { label: 'Zautomatyzowanych zamówień', value: '100%', icon: BarChart3 },
  { label: 'Zintegrowanych kanałów', value: '5+', icon: ShoppingBag },
]

export function EcomHero() {
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
    const handler = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-mula-accent/10 blur-[120px]"
          animate={{ x: mousePos.x * 0.05 - 200, y: mousePos.y * 0.05 - 200 }}
          transition={{ type: 'spring', stiffness: 30, damping: 30 }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-mula-accent-light/8 blur-[120px]"
          animate={{ x: mousePos.x * -0.03 + 100, y: mousePos.y * -0.03 + 100 }}
          transition={{ type: 'spring', stiffness: 20, damping: 30 }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.key}
            className="absolute w-1 h-1 rounded-full bg-mula-accent/30"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 0.7, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div className="max-w-4xl" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mula-surface border border-mula-border mb-8"
            variants={itemVariants}
          >
            <ShoppingBag className="w-4 h-4 text-mula-accent" />
            <span className="text-xs text-mula-text-muted uppercase tracking-wide">Mula E-Commerce</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-mula-accent via-amber-400 to-mula-accent-light bg-clip-text text-transparent">
              E-Commerce i Handel Internetowy
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-mula-text-muted max-w-2xl mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Wielokanałowa architektura sprzedaży — od sklepu internetowego po marketplace, zoptymalizowana pod
            konwersję i zautomatyzowana od pierwszego kliknięcia po dostawę do klienta.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
            variants={itemVariants}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 p-4 rounded-xl bg-mula-surface border border-mula-border"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-mula-accent/10 flex-shrink-0">
                  <stat.icon className="w-5 h-5 text-mula-accent" />
                </div>
                <div>
                  <div className="text-xl font-bold text-mula-accent">{stat.value}</div>
                  <div className="text-xs text-mula-text-dim">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-mula-accent hover:bg-mula-accent-light text-black font-semibold transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Zwiększ sprzedaż
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-mula-surface border border-mula-border hover:border-mula-accent/40 text-mula-text font-semibold transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Bezpłatny audyt
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
