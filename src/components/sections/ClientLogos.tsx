'use client'

import Reveal from '@/components/motion/Reveal'
import Marquee from '@/components/motion/Marquee'

type Logo = {
  name: string
  src: string
}

type Props = {
  eyebrow?: string
  heading?: string
  logos?: Logo[]
}

const DEFAULT_LOGOS: Logo[] = [
  { name: 'PGT', src: '/client-logos/pgt-logo.webp' },
  { name: 'Marvin', src: '/client-logos/marvin.webp' },
  { name: 'Loewen', src: '/client-logos/loewen.webp' },
  { name: 'Sierra Pacific', src: '/client-logos/sierra-pacific.webp' },
  { name: 'Weather Shield', src: '/client-logos/weather-shield.webp' },
  { name: 'Euro-Wall', src: '/client-logos/euro-wall.webp' },
  { name: 'ES Windows', src: '/client-logos/es-windows.webp' },
  { name: 'French Steel', src: '/client-logos/french-steel.avif' },
  { name: 'Unilux', src: '/client-logos/unilux.avif' },
  { name: 'Titoni', src: '/client-logos/titoni.webp' },
  { name: 'Velocity Impact', src: '/client-logos/velocity-impact.webp' },
]

export default function ClientLogos({
  eyebrow = 'Companies we serve',
  heading = 'Trusted across Central Florida.',
  logos = DEFAULT_LOGOS,
}: Props) {
  return (
    <section className="relative bg-travertine py-24 md:py-32 border-y border-florida-oak/10">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-5 mb-14 md:mb-20 px-6 md:px-10">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-florida-oak">
              — {eyebrow}
            </div>
            <h2 className="font-display font-light text-pivot-black text-3xl md:text-4xl lg:text-5xl leading-tight max-w-[28ch] text-balance">
              {heading}
            </h2>
          </div>
        </Reveal>

        <Marquee speed={45}>
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-24 md:h-28 w-44 md:w-56 items-center justify-center px-6 md:px-10 shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-12 md:max-h-14 w-auto object-contain opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
