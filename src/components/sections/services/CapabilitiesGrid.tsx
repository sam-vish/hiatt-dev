'use client'

import Reveal from '@/components/motion/Reveal'

const CAPS = [
  { num: '01', label: 'Hurricane-rated glazing' },
  { num: '02', label: 'Multi-track sliding walls' },
  { num: '03', label: 'Folding glass walls' },
  { num: '04', label: 'Pivot doors, custom hardware' },
  { num: '05', label: 'Storefront & curtain wall' },
  { num: '06', label: 'Historic-district installs' },
  { num: '07', label: 'Field templating' },
  { num: '08', label: 'Permitting & inspection' },
  { num: '09', label: 'Stucco / trim restoration' },
  { num: '10', label: 'Phased night-shift install' },
  { num: '11', label: 'Manufacturer coordination' },
  { num: '12', label: '20-year service relationships' },
]

export default function CapabilitiesGrid() {
  return (
    <section className="relative bg-travertine py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-8">
            — Capabilities
          </div>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-light text-pivot-black text-balance text-[10vw] md:text-[5.5vw] leading-[0.95] mb-20">
            What we&apos;re known for.
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-concrete/30 border-y border-concrete/30">
          {CAPS.map((c) => (
            <div key={c.num} className="bg-travertine p-6 md:p-8 flex flex-col gap-3 group hover:bg-travertine-deep transition-colors duration-500">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete tabular-nums">
                / {c.num}
              </span>
              <span className="font-display font-light text-xl md:text-2xl text-pivot-black leading-snug group-hover:italic transition-all">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
