'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollProgress from '@/components/ScrollProgress'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import PageLoader from '@/components/PageLoader'
import RouteCurtain from '@/components/layout/RouteCurtain'
import AmbientGrain from '@/components/motion/AmbientGrain'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  // Reset scroll + refresh ScrollTrigger on route change
  useEffect(() => {
    window.scrollTo(0, 0)
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [pathname])

  return (
    <>
      <AmbientGrain />
      <ScrollProgress />
      <PageLoader visible={!loaded} />
      <Navigation />
      <RouteCurtain pathname={pathname} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
