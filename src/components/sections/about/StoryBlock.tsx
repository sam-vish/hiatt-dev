'use client'

import Reveal from '@/components/motion/Reveal'

export default function StoryBlock() {
  return (
    <section id="story" className="relative bg-travertine py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-32 self-start">
          <div className="font-mono text-[12px] tracking-[0.32em] uppercase text-golden-amber mb-6">
            — Founder
          </div>
          <Reveal>
            <h2 className="font-display font-light text-pivot-black text-balance text-[12vw] md:text-[5vw] leading-[0.95]">
              Jason <em className="italic">Hiatt.</em>
            </h2>
          </Reveal>
          <div className="mt-12 relative">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src="/images/jason-hiatt.webp"
                alt="Jason Hiatt, Founder · President — Hiatt Development Company"
                className="absolute inset-0 h-full w-full object-cover grayscale animate-kenburns"
              />
              <div className="absolute inset-0 bg-florida-oak/15 mix-blend-multiply" />
              <div className="absolute inset-0 grain animate-grain-shift opacity-25" />
            </div>
            <div className="mt-3 font-mono text-[12px] tracking-[0.24em] uppercase text-concrete">
              Jason Hiatt · Founder
            </div>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col gap-10 md:pt-20">
          <Reveal>
            <p className="font-display italic font-light text-concrete text-3xl md:text-4xl leading-[1.2] text-balance">
              Founder bio — TBD.
            </p>
          </Reveal>

          <div className="flex flex-col gap-6 max-w-[60ch] font-body text-base md:text-lg text-concrete leading-relaxed text-pretty">
            <Reveal delay={0.05}>
              <p>
                A revised bio for Jason is in progress and will be published
                here shortly.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-6 grid grid-cols-3 gap-6 border-y border-concrete/30 py-8">
              <Stat value="8th" label="Generation Floridian" />
              <Stat value="2008" label="Founded in Orlando" />
              <Stat value="GC" label="Licensed · CGC1521543" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-display font-light text-4xl md:text-5xl text-pivot-black tabular-nums">
        {value}
      </div>
      <div className="font-mono text-[12px] tracking-[0.24em] uppercase text-concrete">
        — {label}
      </div>
    </div>
  )
}
