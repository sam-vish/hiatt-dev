import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaBlock from '@/components/sections/CtaBlock'
import StoryBlock from '@/components/sections/about/StoryBlock'
import HeritageTimeline from '@/components/sections/about/HeritageTimeline'
import TeamPhoto from '@/components/sections/about/TeamPhoto'
import TeamGrid from '@/components/sections/about/TeamGrid'
import PhilosophyGrid from '@/components/sections/about/PhilosophyGrid'

export const metadata: Metadata = {
  title: 'Our Story | Hiatt Development Co. — GC-Licensed, Orlando FL',
  description:
    "Founded by an 8th-generation Floridian in 2008. GC-licensed window and door installer trusted by Central Florida's top architects, custom builders, and general contractors.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        pageNumber="02"
        pageLabel="About"
        title="Fifteen years."
        italicTitle="One standard."
        intro="GC-licensed and founded in Orlando in 2008. Hiatt Development Company installs high-end, custom windows and doors for architects, custom builders, and general contractors across Isleworth, Golden Oak, Winter Park, Lake Nona, and the broader Central Florida region. The same standard. Every project."
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
