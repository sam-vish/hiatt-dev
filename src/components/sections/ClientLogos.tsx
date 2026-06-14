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
  { name: 'LaCantina', src: '/supplier-logos/lacantina-logo.webp' },
  { name: 'WinDoor', src: '/supplier-logos/WINDOOR-LOGO-1-300x162.webp' },
  { name: 'Palm City Iron Works', src: '/supplier-logos/palm-city-fireworks.png' },
]

export default function ClientLogos({
  eyebrow = 'Suppliers we install',
  heading = 'Every product we install, we stand behind.',
  logos = DEFAULT_LOGOS,
}: Props) {
  // Repeat short lists so one copy of the track is wider than the viewport —
  // otherwise the seamless marquee shows blank gaps as it loops.
  const reps = Math.max(1, Math.ceil(8 / logos.length))
  const display = Array.from({ length: reps }).flatMap(() => logos)

  return (
    <section className="relative bg-travertine py-24 md:py-32 border-y border-florida-oak/10">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-5 mb-14 md:mb-20 px-6 md:px-10">
            <div className="font-mono text-[12px] tracking-[0.32em] uppercase text-florida-oak">
              — {eyebrow}
            </div>
            <h2 className="font-display font-light text-pivot-black text-3xl md:text-4xl lg:text-5xl leading-tight max-w-[28ch] text-balance">
              {heading}
            </h2>
          </div>
        </Reveal>

        <Marquee speed={45}>
          {display.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-32 md:h-40 w-56 md:w-72 items-center justify-center px-6 md:px-10 shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={`${logo.name} windows and doors — installed by Hiatt Development Co., Orlando FL`}
                className="max-h-20 md:max-h-24 w-auto object-contain opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
