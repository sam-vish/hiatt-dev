import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import PortfolioShowcase from '@/components/sections/portfolio/PortfolioShowcase'
import CtaBlock from '@/components/sections/CtaBlock'
import { PROJECTS } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Project Portfolio | Hiatt Development Co. — Custom Window & Door Installation, Orlando FL',
  description:
    'Custom window and door installation projects across Central Florida. Residential and commercial work by Hiatt Development Co. — GC-licensed, Orlando FL.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        pageNumber="05"
        pageLabel="Work"
        title="A glimpse of"
        italicTitle="what we've built."
        intro="A selection of recent projects across residential and commercial. Each ran through the same six-phase process. Each client still has our number."
        meta={[`${PROJECTS.length} projects`, 'Central Florida', '2008 — present']}
      />

      <PortfolioShowcase projects={PROJECTS} />

      <CtaBlock
        heading="Got an opening in mind?"
        emphasis="Let's draw the schedule."
        ctaLabel="Begin a project"
      />
    </>
  )
}
