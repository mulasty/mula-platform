'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import * as Icons from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Brain: Icons.Brain,
  Zap: Icons.Zap,
  ShoppingCart: Icons.ShoppingCart,
  Megaphone: Icons.Megaphone,
  Shield: Icons.Shield,
  Building2: Icons.Building2,
  Lightbulb: Icons.Lightbulb,
  Store: Icons.Store,
  ShoppingBag: Icons.ShoppingBag,
  Link2: Icons.Link2,
  Package: Icons.Package,
  Workflow: Icons.Workflow,
  Trophy: Icons.Trophy,
  Search: Icons.Search,
  Target: Icons.Target,
  Share2: Icons.Share2,
  FileText: Icons.FileText,
  Palette: Icons.Palette,
  Radio: Icons.Radio,
  FileCheck: Icons.FileCheck,
  BadgeCheck: Icons.BadgeCheck,
  Eye: Icons.Eye,
  HardDrive: Icons.HardDrive,
  GraduationCap: Icons.GraduationCap,
  Rocket: Icons.Rocket,
  Box: Icons.Box,
  Cloud: Icons.Cloud,
  FlaskConical: Icons.FlaskConical,
  FileSearch: Icons.FileSearch,
  PenTool: Icons.PenTool,
  Play: Icons.Play,
  TrendingUp: Icons.TrendingUp,
  Bot: Icons.Bot,
  Clock: Icons.Clock,
  ShieldCheck: Icons.ShieldCheck,
  Smartphone: Icons.Smartphone,
  Menu: Icons.Menu,
  X: Icons.X,
  ArrowRight: Icons.ArrowRight,
  Mail: Icons.Mail,
  MapPin: Icons.MapPin,
  ChevronRight: Icons.ChevronRight,
  ExternalLink: Icons.ExternalLink,
}

interface PillarCardProps {
  title: string
  subtitle: string
  description: string
  icon: string
  href: string
  color: string
}

export function PillarCard({
  title,
  subtitle,
  description,
  icon,
  href,
  color,
}: PillarCardProps) {
  const Icon = iconMap[icon] || Icons.Box

  return (
    <motion.div
      className="group relative rounded-2xl bg-mula-surface border border-mula-border p-6 flex flex-col transition-all duration-300 hover:border-transparent"
      style={
        {
          '--pillar-color': color,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 24px 4px ${color}20`
        e.currentTarget.style.borderColor = `${color}40`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 0 transparent`
        e.currentTarget.style.borderColor = ''
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: `${color}18` }}
      >
        <Icon className="w-7 h-7" style={{ color }} />
      </div>

      <h3 className="text-lg font-semibold text-mula-text mb-1">{title}</h3>

      <p className="text-sm font-medium mb-3" style={{ color }}>
        {subtitle}
      </p>

      <p className="text-sm text-mula-text-muted leading-relaxed flex-1 mb-5">
        {description}
      </p>

      <a
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
        style={{ color }}
      >
        Dowiedz się więcej
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </motion.div>
  )
}
