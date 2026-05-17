'use client'

import { createElement } from 'react'

type Props = {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
  stagger?: number
  delay?: number
  trigger?: 'scroll' | 'mount'
}

export default function SplitHeading({
  children,
  className,
  as: Tag = 'h2',
}: Props) {
  return createElement(Tag, { className }, children)
}
