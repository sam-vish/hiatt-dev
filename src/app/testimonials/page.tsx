import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaBlock from '@/components/sections/CtaBlock'
import TestimonialsSection from '@/components/sections/testimonials/TestimonialsSection'
import { TESTIMONIALS } from '@/lib/data/testimonials'

export const metadata: Metadata = {
  title: 'Testimonials — Hiatt Development Company',
  description:
    'What Orlando’s custom builders, architects, and high-end dealers say about working with Hiatt Development Company.',
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        pageNumber="06"
        pageLabel="Testimonials"
        title="What our clients"
        italicTitle="are saying."
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
