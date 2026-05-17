'use client'

import type { HTMLMotionProps } from 'framer-motion'
import { createElement, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'figure' | 'header' | 'p' | 'span'
} & Omit<HTMLMotionProps<'div'>, 'children'>

export default function Reveal({
  children,
  className,
  as = 'div',
  // accepted for API compat; intentionally ignored
  delay: _delay,
  y: _y,
  initial: _initial,
  whileInView: _whileInView,
  transition: _transition,
  viewport: _viewport,
  ...rest
}: RevealProps) {
  return createElement(as, { className, ...(rest as Record<string, unknown>) }, children)
}
