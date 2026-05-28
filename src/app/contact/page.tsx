import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import ContactBlock from '@/components/sections/contact/ContactBlock'

export const metadata: Metadata = {
  title: 'Begin a Project | Hiatt Development Co. — Orlando, FL',
  description:
    'Start a project with Hiatt Development Co. — GC-licensed window and door installer in Orlando, FL. Request a survey or consultation.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        pageNumber="07"
        pageLabel="Contact"
        title="Begin a"
        italicTitle="conversation."
        intro="Tell us about the opening, the plans, the timeline, or the idea. We read every form and we pick up the phone."
        meta={['Orlando, FL', 'Mon — Fri · 8a — 4p EST', '407 · 488 · 5620']}
      />
      <ContactBlock />
    </>
  )
}
