'use client'

import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

type GuardianTrackedLinkProps = {
  href: string
  eventName: string
  eventProperties?: Record<string, string | number | boolean | null>
  children: ReactNode
  className?: string
  external?: boolean
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick' | 'children'>

export function GuardianTrackedLink({
  href,
  eventName,
  eventProperties = {},
  children,
  className,
  external = false,
  ...props
}: GuardianTrackedLinkProps) {
  const handleClick = () => {
    trackEvent(eventName, {
      product: 'guardian',
      destination: href,
      ...eventProperties,
    })
  }

  if (external) {
    return (
      <a href={href} className={className} onClick={handleClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
