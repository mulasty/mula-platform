'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, ShieldCheck, Eye, Lock } from 'lucide-react'

const SECURITY_TAGS = ['SOC', 'SIEM', 'EDR', 'WAF', 'IR', 'MFA']

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

const trustIndicators = [
  { icon: ShieldCheck, label: 'CERTYFIKOWANI EKSPERCI', value: 'CISSP, CEH, OSCP' },
  { icon: Eye, label: 'MONITORING', value: '24/7/365' },
  { icon: Lock, label: 'SZYBKIE REAGOWANIE', value: '< 15 min SLA' },
]

export function CyberHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: seededRandom(i * 5) * 100,
        y: seededRandom(i * 5 + 1) * 100,
        size: seededRandom(i * 5 + 2) * 2 + 1,
        speed: 3 + seededRandom(i * 5 + 3) * 5,
        delay: seededRandom(i * 5 + 4) * 3,
      })),
    []
  )

  const codeParticles = useMemo(
    () =>
      Array.from({ length: SECURITY_TAGS.length }, (_, i) => ({
        id: i,
        left: 10 + seededRandom(i * 4) * 80,
        top: 10 + seededRandom(i * 4 + 1) * 80,
        duration: 4 + seededRandom(i * 4 + 2) * 3,
        delay: seededRandom(i * 4 + 3) * 2,
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
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]"
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
        {codeParticles.map((p) => (
          <motion.div
            key={`code-${p.id}`}
            className="absolute text-[10px] font-mono text-mula-accent/15 select-none"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          >
            {SECURITY_TAGS[p.id]}
          </motion.div>
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div className="max-w-4xl" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mula-surface border border-mula-border mb-8"
            variants={itemVariants}
          >
            <Shield className="w-4 h-4 text-mula-accent" />
            <span className="text-xs text-mula-text-muted uppercase tracking-wide">Mula Cyber</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-mula-accent to-teal-400 bg-clip-text text-transparent">
              Bezpieczeństwo to Fundament Twojego Biznesu
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-mula-text-muted max-w-2xl mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Kompleksowa ochrona infrastruktury IT — od audytów bezpieczeństwa przez monitoring SOC 24/7 po
            zgodność z RODO i NIS2. Chronimy firmy przed realnymi zagrożeniami cybernetycznymi.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 mb-16" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-mula-accent hover:bg-mula-accent-light text-white font-semibold transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Umów audyt bezpieczeństwa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={itemVariants}
          >
            {trustIndicators.map((indicator) => (
              <div
                key={indicator.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-mula-surface/50 border border-mula-border"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-mula-accent/10 flex-shrink-0">
                  <indicator.icon className="w-5 h-5 text-mula-accent" />
                </div>
                <div>
                  <p className="text-xs text-mula-text-dim uppercase tracking-wider">{indicator.label}</p>
                  <p className="text-sm font-semibold text-mula-text">{indicator.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
