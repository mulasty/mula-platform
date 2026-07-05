'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30">
            <div className="flex items-center justify-center gap-3 px-6 py-4">
              <MessageCircle className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">
                Porozmawiajmy o projekcie
              </span>
            </div>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
