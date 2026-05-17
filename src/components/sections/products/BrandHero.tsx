'use client'

import { useEffect, useRef } from 'react'
import type { Brand } from '@/lib/data/brands'

export default function BrandHero({ brand }: { brand: Brand }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section className="relative bg-travertine pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="relative aspect-video overflow-hidden bg-ink">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={brand.video}
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-ink/25" />
          <div className="absolute inset-0 grain animate-grain-shift opacity-15" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <div className="flex items-end justify-between gap-6">
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/80">
                — In situ · {brand.name}
              </div>
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/80">
                {brand.specs[0]?.value}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
