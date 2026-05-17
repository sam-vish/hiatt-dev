'use client'

import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import type { Brand } from '@/lib/data/brands'

export default function BrandRoster({ brands, eyebrow = 'Trusted partners', heading }: { brands: Brand[]; eyebrow?: string; heading: string }) {
  return (
    <section className="relative bg-ink text-travertine py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber">
            — {eyebrow}
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mt-4 font-display font-light text-balance text-[8vw] md:text-[3.5vw] leading-[1] max-w-[24ch]">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-travertine/15 border-y border-travertine/15">
          {brands.map((b, i) => (
            <Link
              key={b.slug}
              href={`/products/${b.slug}`}
              data-cursor-hover
              data-cursor-label="open"
              className="group relative grid grid-cols-12 items-center gap-6 py-5 md:py-6 px-2 transition-colors duration-500 hover:bg-travertine hover:text-ink"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-[10px] tracking-[0.3em] tabular-nums text-travertine/50 group-hover:text-ink/50">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="col-span-8 md:col-span-9 font-display text-2xl md:text-3xl font-light leading-none">
                {b.name}
              </div>
              <div className="col-span-2 flex justify-end items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase">
                <span className="h-px w-6 md:w-10 bg-travertine/40 group-hover:bg-golden-amber transition-colors" />
                <span>↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
