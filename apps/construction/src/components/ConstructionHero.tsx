'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HardHat, ArrowRight } from 'lucide-react'

export function ConstructionHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-construction/5 via-transparent to-mula-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-construction/10 via-transparent to-transparent" />

      {/* Decorative steel beam elements */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-construction/20 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-construction/10 to-transparent" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-construction/5 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-construction/5 to-transparent" />

      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-40 h-1 bg-construction/10 rounded-full rotate-12" />
        <div className="absolute top-40 right-[15%] w-60 h-1 bg-construction/8 rounded-full -rotate-6" />
        <div className="absolute bottom-32 left-[20%] w-32 h-1 bg-construction/10 rounded-full rotate-45" />
        <div className="absolute top-60 left-[50%] w-48 h-1 bg-construction/8 rounded-full -rotate-12" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-construction/10 border border-construction/20 mb-8">
              <HardHat className="w-4 h-4 text-construction" />
              <span className="text-sm text-construction font-medium">Mula Construction Group</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-mula-text leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            Konstrukcje i
            <br />
            <span className="text-construction">Hale Stalowe</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-mula-text-muted leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Projektujemy, produkujemy i montujemy nowoczesne konstrukcje stalowe — od hal magazynowych po obiekty sportowe. Kompleksowa realizacja w całej Polsce.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-construction hover:bg-red-500 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Wyceń halę
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-mula-border hover:border-construction/50 text-mula-text hover:text-white font-semibold rounded-full transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Zobacz realizacje
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-mula-border"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            {[
              { value: 'Ponad 10 lat', label: 'doświadczenia' },
              { value: '50+ hal', label: 'zrealizowanych' },
              { value: 'Polska', label: 'produkcja' },
              { value: '5 lat', label: 'gwarancji' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-construction mb-1">{stat.value}</div>
                <div className="text-sm text-mula-text-dim">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
