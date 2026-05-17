'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import SplitHeading from '@/components/motion/SplitHeading'

type Pillar = {
  num: string
  name: string
  blurb: string
  href: string
  video: string
}

export default function PillarTiles({ pillars }: { pillars: Pillar[] }) {
  return (
    <section className="relative bg-travertine py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-concrete mb-6">
            — What we do
          </div>
        </Reveal>
        <SplitHeading
          as="h2"
          className="font-display font-light text-pivot-black text-balance text-[10vw] md:text-[6vw] leading-[0.95] mb-20"
        >
          {`Three rooms of one practice.`}
        </SplitHeading>

        <div className="grid gap-px bg-concrete/30 border-y border-concrete/30 md:grid-cols-3">
          {pillars.map((p) => (
            <Tile key={p.num} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Tile({ pillar }: { pillar: Pillar }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <Link
      href={pillar.href}
      data-cursor-hover
      data-cursor-label="open"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        videoRef.current?.pause()
        if (videoRef.current) videoRef.current.currentTime = 0
      }}
      className="group relative bg-florida-oak overflow-hidden aspect-[3/4] md:aspect-auto md:h-[520px]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={pillar.video}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-florida-oak/55 group-hover:bg-florida-oak/35 transition-colors duration-700" />

      <div className="relative z-10 h-full p-8 flex flex-col justify-between text-travertine">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/80">
            — Pillar {pillar.num}
          </span>
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/70">
            ↗
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-display text-4xl md:text-5xl font-light leading-[1.05]">
            {pillar.name}
          </h3>
          <p className="font-body text-base text-travertine/85 max-w-[36ch]">
            {pillar.blurb}
          </p>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase">
              Explore
            </span>
            <span className="h-px w-10 bg-travertine/70 group-hover:w-16 transition-all duration-500" />
          </div>
        </div>
      </div>

      <span className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-travertine group-hover:scale-x-100 transition-transform duration-700 ease-exhale" />
    </Link>
  )
}
