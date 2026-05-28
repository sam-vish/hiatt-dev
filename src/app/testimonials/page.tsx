import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaBlock from '@/components/sections/CtaBlock'
import TestimonialsSection from '@/components/sections/testimonials/TestimonialsSection'
import { TESTIMONIALS } from '@/lib/data/testimonials'

export const metadata: Metadata = {
  title: 'Client Testimonials | Hiatt Development Co. — Orlando, FL',
  description:
    "What Central Florida's architects and custom builders say about working with Hiatt Development Co. — GC-licensed window and door installer, Orlando FL.",
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        pageNumber="06"
        pageLabel="Testimonials"
        title="What architects and builders say"
        italicTitle="about working with us."
        intro="Builders, architects, and dealers we work with — in their own words. Content to be supplied by the client."
        meta={['Custom builders', 'Architects', 'High-end dealers']}
      />

      <TestimonialsSection testimonials={TESTIMONIALS} />

      <CtaBlock
        heading="The installer Orlando's"
        emphasis="best builders work with."
      />
    </>
  )
}
