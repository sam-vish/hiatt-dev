import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import PillarStack from '@/components/sections/services/PillarStack'
import ProcessSteps from '@/components/sections/services/ProcessSteps'
import CtaBlock from '@/components/sections/CtaBlock'

export const metadata: Metadata = {
  title: 'Custom Window & Door Installation Services | Hiatt Development Co. — Orlando, FL',
  description:
    'GC-licensed installation of custom windows and doors across Central Florida. Residential, commercial, and specialty projects — six-phase process, full permitting, consistent standards from survey to walkthrough.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        pageNumber="03"
        pageLabel="Services"
        title="Three services."
        italicTitle="One contractor."
        intro="From whole-house glazing on a Winter Park estate to storefront curtain wall in downtown Orlando — every project runs through the same six-phase process and the same GC license. Specialized in the installation of high-end, custom windows and doors across Central Florida."
        meta={['Residential', 'Commercial', 'Installation']}
      />

      <PillarStack />
      <ProcessSteps />

      <CtaBlock
        heading="Tell us about the opening."
        emphasis="We'll spec it."
        ctaLabel="Request a survey"
      />
    </>
  )
}
