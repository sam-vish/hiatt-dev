import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaBlock from '@/components/sections/CtaBlock'
import StoryBlock from '@/components/sections/about/StoryBlock'
import HeritageTimeline from '@/components/sections/about/HeritageTimeline'
import TeamPhoto from '@/components/sections/about/TeamPhoto'
import TeamGrid from '@/components/sections/about/TeamGrid'
import PhilosophyGrid from '@/components/sections/about/PhilosophyGrid'

export const metadata: Metadata = {
  title: 'About — Hiatt Development Company',
  description:
    'Eight generations of Florida. The story behind Hiatt Development Co. — Jason, the team, the philosophy, the work.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        pageNumber="02"
        pageLabel="About"
        title="The team"
        italicTitle="behind every install."
        intro="A GC-licensed builder specializing in custom window and door openings. Founded by an 8th-generation Floridian, trusted by Orlando's top custom builders, architects, and high-end dealers — for install quality and the peace of mind that comes with it."
        meta={['Founded 2008', 'Orlando, FL', 'Licensed · Insured · CGC1521543']}
      />

      <StoryBlock />
      <HeritageTimeline />
      <TeamPhoto />
      <TeamGrid />
      <PhilosophyGrid />

      <CtaBlock heading="Work with us." emphasis="Quietly, properly." />
    </>
  )
}
