'use client'

import { motion } from 'framer-motion'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline'
}

export function CTAButton({ href, children, variant = 'primary' }: CTAButtonProps) {
  const isAnchor = href.startsWith('#')

  const baseClasses =
    'inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-200'

  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25'
      : 'border border-blue-500/30 hover:border-blue-500 text-blue-400'

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: `${baseClasses} ${variantClasses}`,
  }

  if (isAnchor) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" {...motionProps}>
      {children}
    </motion.a>
  )
}
