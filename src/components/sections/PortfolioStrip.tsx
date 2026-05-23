'use client'

import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import type { Project } from '@/lib/data/projects'

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src)

export default function PortfolioStrip({ projects }: { projects: Project[] }) {
  return (
    <section className="relative bg-travertine py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-end justify-between mb-12 md:mb-20 gap-6">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="font-mono text-[12px] tracking-[0.32em] uppercase text-concrete">
                — Selected work
              </div>
              <h2 className="font-display font-light text-balance text-[10vw] md:text-[5.5vw] leading-[0.95]">
                A glimpse of <em className="italic text-golden-amber">what we&apos;ve built.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/portfolio"
              className="hidden md:inline-flex items-center gap-3 font-mono text-[13px] tracking-[0.24em] uppercase text-pivot-black hover:text-golden-amber transition-colors"
              data-cursor-hover
            >
              <span className="h-px w-12 bg-florida-oak" />
              View all work
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/30">
          {projects.slice(0, 6).map((p) => (
            <PortfolioCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 font-mono text-[13px] tracking-[0.24em] uppercase text-pivot-black"
          >
            <span className="h-px w-12 bg-florida-oak" />
            View all work
          </Link>
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ project }: { project: Project }) {
  const showVideo = isVideo(project.cover)
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      data-cursor-hover
      data-cursor-label="open"
      className="group relative bg-ink aspect-video overflow-hidden"
    >
      {showVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={project.cover}
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-ink/15 group-hover:bg-ink/35 transition-colors duration-500" />
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8 text-travertine">
        <div className="flex items-center justify-between font-mono text-[12px] tracking-[0.24em] uppercase">
          <span>— {project.type}</span>
          <span>{project.year}</span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-light leading-tight">
              {project.title}
            </h3>
            <div className="mt-2 font-mono text-[12px] tracking-[0.24em] uppercase text-travertine/70">
              {project.city}
            </div>
          </div>
          <span className="font-mono text-[12px] tracking-[0.24em] uppercase translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-exhale">
            Read →
          </span>
        </div>
      </div>
    </Link>
  )
}
