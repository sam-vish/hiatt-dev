'use client'

import Reveal from '@/components/motion/Reveal'
import type { Testimonial } from '@/lib/data/testimonials'

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const featured = testimonials.find((t) => t.featured)
  const rest = testimonials.filter((t) => !t.featured)

  return (
    <section className="relative bg-travertine py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {featured && (
          <Reveal>
            <figure className="border-y border-concrete/30 py-16 md:py-24 mb-20 md:mb-28">
              <div className="font-mono text-[12px] tracking-[0.32em] uppercase text-golden-amber mb-8">
                — Featured
              </div>
              <blockquote className="font-display italic font-light text-balance text-pivot-black text-[7vw] md:text-[3.4vw] leading-[1.1] max-w-[28ch]">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="font-display text-2xl md:text-3xl font-light text-pivot-black">
                  {featured.author}
                </span>
                <span className="font-mono text-[12px] tracking-[0.24em] uppercase text-concrete">
                  {featured.role}
                  {featured.company ? ` · ${featured.company}` : ''}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        )}

        <div className="grid gap-px bg-concrete/30 border-y border-concrete/30 md:grid-cols-2">
          {rest.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <Reveal
      delay={index * 0.06}
      className="relative bg-travertine p-8 md:p-12 flex flex-col gap-8"
    >
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[12px] tracking-[0.32em] uppercase text-golden-amber">
          — {testimonial.role}
        </span>
        <span className="font-mono text-[12px] tracking-[0.24em] uppercase text-concrete tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <blockquote className="font-display italic font-light text-pivot-black text-2xl md:text-3xl leading-[1.25] text-balance max-w-[34ch]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-auto pt-8 border-t border-concrete/30 flex flex-col gap-1">
        <span className="font-display text-xl font-light text-pivot-black">
          {testimonial.author}
        </span>
        {testimonial.company && (
          <span className="font-mono text-[12px] tracking-[0.24em] uppercase text-concrete">
            {testimonial.company}
          </span>
        )}
      </div>
    </Reveal>
  )
}
