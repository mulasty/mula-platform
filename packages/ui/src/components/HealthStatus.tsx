'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, ChevronDown, ChevronUp, CheckCircle, XCircle, Clock } from 'lucide-react'

interface HealthData {
  status: string
  service: string
  timestamp: string
  runtime?: string
}

interface HealthStatusProps {
  endpoint?: string
}

function formatTime(iso: string): string {
  try {
    return new Date(iso).toLocaleString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  } catch {
    return iso
  }
}

function getUptimeLabel(timestamp: string): string {
  try {
    const now = Date.now()
    const then = new Date(timestamp).getTime()
    const diff = now - then
    if (diff < 60_000) return 'przed chwilą'
    if (diff < 3600_000) return `${Math.floor(diff / 60_000)} min temu`
    if (diff < 86400_000) return `${Math.floor(diff / 3600_000)} godz. temu`
    return `${Math.floor(diff / 86400_000)} dni temu`
  } catch {
    return 'nieznany'
  }
}

export function HealthStatus({
  endpoint = '/api/cron/health',
}: HealthStatusProps) {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState<HealthData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchHealthRef = useRef<() => Promise<void>>(async () => {})

  useEffect(() => {
    const abortController = new AbortController()

    const doFetch = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(endpoint, { cache: 'no-store', signal: abortController.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json: HealthData = await res.json()
        setData(json)
      } catch (e) {
        if (abortController.signal.aborted) return
        setError(e instanceof Error ? e.message : 'Nieznany błąd')
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchHealthRef.current = doFetch
    doFetch()

    const interval = setInterval(() => {
      fetchHealthRef.current()
    }, 300_000)

    return () => {
      abortController.abort()
      clearInterval(interval)
    }
  }, [endpoint])

  const isHealthy = data?.status === 'ok'

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mb-3 w-72 rounded-xl border border-white/10 bg-mula-bg-tertiary/95 backdrop-blur-xl p-4 shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-mula-accent" />
              <span className="text-sm font-semibold text-mula-text-primary">
                Status systemu
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-mula-text-dim">Deploy:</span>
                <span className="flex items-center gap-1.5">
                  {loading ? (
                    <Clock className="w-3 h-3 text-mula-warning animate-pulse" />
                  ) : isHealthy ? (
                    <CheckCircle className="w-3 h-3 text-mula-success" />
                  ) : (
                    <XCircle className="w-3 h-3 text-red-500" />
                  )}
                  <span
                    className={
                      isHealthy ? 'text-mula-success' : 'text-red-500'
                    }
                  >
                    {loading ? 'sprawdzanie...' : isHealthy ? 'aktywny' : 'błąd'}
                  </span>
                </span>
              </div>

              {data && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-mula-text-dim">Ostatni deploy:</span>
                    <span className="text-mula-text-secondary">
                      {formatTime(data.timestamp)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-mula-text-dim">Uptime:</span>
                    <span className="text-mula-text-secondary">
                      {getUptimeLabel(data.timestamp)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-mula-text-dim">Runtime:</span>
                    <span className="text-mula-text-secondary font-mono">
                      {data.runtime ?? '—'}
                    </span>
                  </div>
                </>
              )}

              {error && (
                <div className="flex items-center justify-between">
                  <span className="text-mula-text-dim">Błąd:</span>
                  <span className="text-red-400 truncate max-w-[160px]">
                    {error}
                  </span>
                </div>
              )}

              <button
                onClick={() => fetchHealthRef.current()}
                className="mt-2 w-full rounded-lg bg-white/5 hover:bg-white/10 text-mula-text-dim hover:text-mula-text-secondary text-xs py-1.5 transition-colors"
              >
                Odśwież
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Zwiń status systemu' : 'Rozwiń status systemu'}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-mula-bg-tertiary/90 backdrop-blur-xl px-4 py-2 text-xs text-mula-text-dim hover:text-mula-text-secondary shadow-lg shadow-black/20 transition-colors"
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isHealthy
              ? 'bg-mula-success shadow-[0_0_6px_rgba(16,185,129,0.5)]'
              : error
                ? 'bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.5)]'
                : 'bg-mula-warning animate-pulse'
          }`}
        />
        <span>Status</span>
        {open ? (
          <ChevronDown className="w-3 h-3" />
        ) : (
          <ChevronUp className="w-3 h-3" />
        )}
      </button>
    </div>
  )
}
