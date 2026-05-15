'use client'

import Reveal from '@/components/motion/Reveal'

type Logo = {
  name: string
  src?: string
}

type Props = {
  eyebrow?: string
  heading?: string
  logos?: Logo[]
}

const PLACEHOLDERS: Logo[] = [
  { name: 'Client 01' },
  { name: 'Client 02' },
  { name: 'Client 03' },
  { name: 'Client 04' },
  { name: 'Client 05' },
  { name: 'Client 06' },
]

export default function ClientLogos({
  eyebrow = 'Companies we serve',
  heading = 'Trusted across Central Florida.',
  logos = PLACEHOLDERS,
}: Props) {
  return (
    <section className="relative bg-travertine py-24 md:py-32 border-y border-florida-oak/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-5 mb-14 md:mb-20">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-florida-oak">
              — {eyebrow}
            </div>
            <h2 className="font-display font-light text-pivot-black text-3xl md:text-4xl lg:text-5xl leading-tight max-w-[28ch] text-balance">
              {heading}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-florida-oak/10">
            {logos.map((logo) => (
              <li
                key={logo.name}
                className="bg-travertine aspect-[3/2] flex items-center justify-center p-6 transition-all duration-500 hover:bg-florida-oak/[0.02] group"
              >
                {logo.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-12 w-auto object-contain opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-concrete/60 transition-colors duration-500 group-hover:text-florida-oak">
                    <div className="font-display font-light text-2xl md:text-3xl tracking-tight">
                      {logo.name.split(' ')[0]}
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.3em] uppercase">
                      {logo.name.split(' ')[1] ?? ''}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
            — Logos pending. Drop in client SVGs to replace placeholders.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
