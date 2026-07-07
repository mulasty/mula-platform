'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <motion.div
      className="relative rounded-2xl bg-mula-surface border border-mula-border p-8 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4, borderColor: '#3b82f640' }}
    >
      <Quote className="w-8 h-8 text-mula-accent/30 mb-4" />
      <p className="text-mula-text-muted leading-relaxed text-sm flex-1 mb-6">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-mula-text font-semibold text-sm">{author}</p>
        <p className="text-mula-text-dim text-xs mt-0.5">{role}</p>
      </div>
    </motion.div>
  )
}
