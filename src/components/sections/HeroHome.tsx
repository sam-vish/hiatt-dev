'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import MagneticLink from '@/components/motion/MagneticLink'

const KEYWORDS = ['Integrity', 'Collaboration', 'Stewardship']

export default function HeroHome() {
  const wordsRef = useRef<(HTMLDivElement | null)[]>([])
  const taglineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      const h = d.getHours().toString().padStart(2, '0')
      const m = d.getMinutes().toString().padStart(2, '0')
      const s = d.getSeconds().toString().padStart(2, '0')
      setTime(`${h}:${m}:${s} EST`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.7 })
    if (titleRef.current) {
      const lines = titleRef.current.querySelectorAll('.h-line')
      tl.fromTo(
        lines,
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, stagger: 0.12, ease: 'expo.out' },
        0
      )
    }
    if (taglineRef.current) {
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
    }
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.5'
      )
    }
    wordsRef.current.forEach((w, i) => {
      if (!w) return
      tl.fromTo(
        w,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' },
        `-=${0.4 - i * 0.08}`
      )
    })
    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos-compressed/winter-park-bungalow.mp4"
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-ink/35 pointer-events-none" />

      {/* Top eyebrow row */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 items-start px-6 md:px-10 pt-28 md:pt-32">
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/70">
          <div>— Hiatt Development Co.</div>
          <div className="text-travertine/40 mt-1">28.5° N, 81.4° W</div>
        </div>
        <div className="hidden md:flex justify-center font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/70">
          <div>Index — 01 / 06</div>
        </div>
        <div className="text-right font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/70 tabular-nums">
          {time}
        </div>
      </div>

      {/* Center stack */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center">
        <div className="overflow-hidden mb-6">
          <div ref={taglineRef} className="font-mono text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-travertine/80" style={{ opacity: 0 }}>
            — Custom windows &amp; doors · Orlando, FL
          </div>
        </div>

        <h1
          ref={titleRef}
          className="text-center font-display font-light text-travertine leading-[0.95] tracking-tight"
        >
          <span className="block overflow-hidden">
            <span className="h-line block whitespace-nowrap text-[10vw] md:text-[6.5vw]">
              Built with <em className="italic text-golden-amber">conviction.</em>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="h-line block whitespace-nowrap text-[10vw] md:text-[6.5vw]">Installed for life.</span>
          </span>
        </h1>

        <div ref={ctaRef} className="mt-12 flex items-center gap-6" style={{ opacity: 0 }}>
          <MagneticLink>
            <Link
              href="/contact"
              data-cursor-hover
              data-cursor-label="say hi"
              className="group relative inline-flex items-center gap-3 px-8 py-4 border border-travertine/80 font-mono text-[11px] tracking-[0.3em] uppercase text-travertine overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-ink">Begin a Project</span>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-ink">→</span>
              <span className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-travertine transition-transform duration-700 ease-exhale group-hover:scale-y-100" />
            </Link>
          </MagneticLink>
          <Link
            href="/portfolio"
            className="hidden md:inline-flex font-mono text-[11px] tracking-[0.3em] uppercase text-travertine/70 hover:text-golden-amber transition-colors"
          >
            See the work
          </Link>
        </div>
        </div>
      </div>

      {/* Bottom-left stacked values */}
      <div className="absolute bottom-24 left-6 md:left-10 z-10 flex flex-col gap-3 max-w-[40ch]">
        {KEYWORDS.map((word, i) => (
          <div
            key={word}
            ref={(el) => {
              wordsRef.current[i] = el
            }}
            className="flex items-center gap-4"
            style={{ opacity: 0 }}
          >
            <span className="font-mono text-[10px] tracking-[0.4em] text-travertine/50 tabular-nums w-6">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-display italic text-2xl md:text-3xl text-travertine">
              {word}
            </span>
            <span className="hidden md:block h-px flex-1 bg-travertine/20" />
          </div>
        ))}
      </div>

      {/* Bottom-right scroll cue */}
      <div className="absolute bottom-24 right-6 md:right-10 z-10 hidden md:flex flex-col items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/60">scroll</span>
        <span className="block h-12 w-px bg-travertine/30 origin-top animate-scroll-hint" />
      </div>

    </section>
  )
}
