'use client'

import Reveal from '@/components/motion/Reveal'

export default function TeamPhoto() {
  return (
    <section className="relative bg-travertine py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 items-end gap-10 mb-12 md:mb-16">
          <Reveal className="md:col-span-7">
            <div className="font-mono text-[12px] tracking-[0.32em] uppercase text-golden-amber mb-6">
              — The crew, together
            </div>
            <h2 className="font-display font-light text-balance text-[10vw] md:text-[5vw] leading-[0.95]">
              One job site. <em className="italic text-golden-amber">One standard.</em>
            </h2>
          </Reveal>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden border border-dashed border-concrete/40 bg-concrete/10">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
            <div className="font-mono text-[11px] tracking-[0.32em] uppercase text-concrete">
              — Placeholder
            </div>
            <div className="font-display italic font-light text-2xl md:text-3xl text-concrete">
              Team photo — TBD.
            </div>
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-concrete/70 max-w-[36ch]">
              Group photo of the current Hiatt Development crew to be added.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
