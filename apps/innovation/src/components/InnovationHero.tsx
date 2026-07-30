'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb } from 'lucide-react'

const TECH_TERMS = ['AI', 'IoT', 'MVP', 'R&D', 'ML', 'API']

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

export function InnovationHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: seededRandom(i * 7) * 100,
        y: seededRandom(i * 7 + 1) * 100,
        size: seededRandom(i * 7 + 2) * 2 + 1,
        speed: 3 + seededRandom(i * 7 + 3) * 5,
        delay: seededRandom(i * 7 + 4) * 3,
      })),
    []
  )

  const techParticles = useMemo(
    () =>
      Array.from({ length: TECH_TERMS.length }, (_, i) => ({
        id: i,
        left: 10 + seededRandom(i * 5) * 80,
        top: 10 + seededRandom(i * 5 + 1) * 80,
        duration: 4 + seededRandom(i * 5 + 2) * 3,
        delay: seededRandom(i * 5 + 3) * 2,
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
            key={p.id}
            className="absolute rounded-full bg-mula-accent/40"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -40, 0], opacity: [0, 0.9, 0] }}
            transition={{ duration: p.speed, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
        {techParticles.map((p) => (
          <motion.div
            key={`tech-${p.id}`}
            className="absolute text-[10px] font-mono text-mula-accent/15 select-none"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          >
            {TECH_TERMS[p.id]}
          </motion.div>
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
            <Lightbulb className="w-4 h-4 text-mula-accent" />
            <span className="text-xs text-mula-text-muted uppercase tracking-wide">Mula Innovation</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-mula-accent via-mula-accent-light to-teal-300 bg-clip-text text-transparent">
              Tworzymy technologie jutra — dziś
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-mula-text-muted max-w-2xl mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Od koncepcji po komercjalizację — budujemy produkty future-proof, które realnie zmieniają biznes.
            AI, IoT, automatyzacja i venture building w jednym miejscu.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-mula-accent hover:bg-mula-accent-light text-white font-semibold transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Zbuduj z nami produkt
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
