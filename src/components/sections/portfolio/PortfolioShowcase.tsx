'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import type { Project } from '@/lib/data/projects'

const FILTERS = ['All', 'Residential', 'Commercial'] as const
type Filter = (typeof FILTERS)[number]

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src)

export default function PortfolioShowcase({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.type === filter)),
    [filter, projects]
  )

  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug)
  const active = visible.find((p) => p.slug === activeSlug) ?? visible[0]

  const stripRef = useRef<HTMLDivElement>(null)
  const scrollStrip = (dir: 'left' | 'right') => {
    if (!stripRef.current) return
    const amount = stripRef.current.clientWidth * 0.7
    stripRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  if (!active) {
    return (
      <section className="relative bg-travertine py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 text-center font-mono text-[12px] tracking-[0.32em] uppercase text-concrete">
          — No projects match this filter
        </div>
      </section>
    )
  }

  return (
    <section className="relative bg-travertine py-12 md:py-16">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-10">
          <span className="font-mono text-[12px] tracking-[0.24em] uppercase text-concrete">
            — Filter
          </span>
          {FILTERS.map((f) => {
            const isActive = f === filter
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                data-cursor-hover
                className={`font-mono text-[13px] tracking-[0.24em] uppercase px-4 py-2 border transition-colors duration-300 ${
                  isActive
                    ? 'border-florida-oak bg-florida-oak text-travertine'
                    : 'border-concrete/40 text-pivot-black hover:border-florida-oak'
                }`}
              >
                {f}
              </button>
            )
          })}
          <span className="ml-auto font-mono text-[12px] tracking-[0.24em] uppercase text-concrete tabular-nums">
            {visible.length.toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Feature */}
        <Link
          key={active.slug}
          href={`/portfolio/${active.slug}`}
          data-cursor-hover
          data-cursor-label="open"
          className="group relative block aspect-[16/9] overflow-hidden bg-ink animate-fade-up"
        >
          {isVideo(active.cover) ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={active.cover}
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={active.cover}
              alt={active.coverAlt}
            />
          )}
          <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/35 transition-colors duration-500" />
          <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10 text-travertine">
            <div className="flex items-center justify-between font-mono text-[12px] tracking-[0.24em] uppercase">
              <span>— {active.type}</span>
              <span className="tabular-nums">{active.year}</span>
            </div>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h3 className="font-display font-light text-3xl md:text-5xl lg:text-6xl leading-[1] tracking-tight">
                  {active.title}
                </h3>
                <div className="mt-3 font-mono text-[12px] tracking-[0.24em] uppercase text-travertine/75">
                  {active.city}
                </div>
              </div>
              <span className="hidden md:inline-flex items-center gap-3 font-mono text-[12px] tracking-[0.24em] uppercase translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-exhale">
                <span className="h-px w-10 bg-travertine" />
                Open project →
              </span>
            </div>
          </div>
        </Link>

        {/* Thumbnail strip */}
        <div className="relative mt-6 md:mt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[12px] tracking-[0.24em] uppercase text-concrete">
              — Browse ({visible.length})
            </span>
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollStrip('left')}
                aria-label="Scroll thumbnails left"
                data-cursor-hover
                className="w-10 h-10 border border-concrete/40 flex items-center justify-center font-mono text-pivot-black hover:border-florida-oak hover:bg-florida-oak hover:text-travertine transition-colors duration-300"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollStrip('right')}
                aria-label="Scroll thumbnails right"
                data-cursor-hover
                className="w-10 h-10 border border-concrete/40 flex items-center justify-center font-mono text-pivot-black hover:border-florida-oak hover:bg-florida-oak hover:text-travertine transition-colors duration-300"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={stripRef}
            className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth pb-2 -mx-6 px-6 md:-mx-10 md:px-10 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {visible.map((p) => {
              const isActive = p.slug === active.slug
              return (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setActiveSlug(p.slug)}
                  data-cursor-hover
                  className={`group relative shrink-0 w-[64vw] sm:w-[40vw] md:w-[22vw] lg:w-[18vw] aspect-[4/3] overflow-hidden bg-ink snap-start text-left transition-all duration-500 ${
                    isActive ? 'ring-2 ring-florida-oak' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  {isVideo(p.cover) ? (
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      src={p.cover}
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={p.cover}
                      alt={p.coverAlt}
                    />
                  )}
                  <div
                    className={`absolute inset-0 transition-colors duration-500 ${
                      isActive ? 'bg-ink/10' : 'bg-ink/35 group-hover:bg-ink/15'
                    }`}
                  />
                  <div className="relative z-10 h-full p-4 flex flex-col justify-between text-travertine">
                    <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.24em] uppercase text-travertine/80">
                      <span>— {p.type}</span>
                      <span className="tabular-nums">{p.year}</span>
                    </div>
                    <div>
                      <div className="font-display font-light text-lg md:text-xl leading-tight">
                        {p.title}
                      </div>
                      <div className="mt-1 font-mono text-[10px] tracking-[0.24em] uppercase text-travertine/70">
                        {p.city}
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
