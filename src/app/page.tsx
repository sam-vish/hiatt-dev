import HeroHome from '@/components/sections/HeroHome'
import PillarTiles from '@/components/sections/PillarTiles'
import StatementBlock from '@/components/sections/StatementBlock'
import ClientLogos from '@/components/sections/ClientLogos'
import PortfolioStrip from '@/components/sections/PortfolioStrip'
import CtaBlock from '@/components/sections/CtaBlock'
import { PILLARS } from '@/lib/data/services'
import { PROJECTS } from '@/lib/data/projects'

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'Hiatt Development Company',
  alternateName: 'Hiatt Development Co.',
  description:
    'GC-licensed custom window and door installer serving Central Florida since 2008. Specializing in residential and commercial installation for architects, custom builders, and general contractors.',
  url: 'https://hiattdevelopment.com',
  telephone: '+14074885620',
  email: 'sales@hiattdevelopment.com',
  foundingDate: '2008',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1453 W. Landstreet Rd, Ste 302',
    addressLocality: 'Orlando',
    addressRegion: 'FL',
    postalCode: '32824',
    addressCountry: 'US',
  },
  areaServed: [
    'Orlando, FL',
    'Winter Park, FL',
    'Isleworth, FL',
    'Golden Oak, FL',
    'Lake Nona, FL',
    'Windermere, FL',
    'New Smyrna Beach, FL',
    'Cocoa Beach, FL',
    'Central Florida',
  ],
  hasCredential: 'CGC1521543',
  openingHours: 'Mo-Fr 08:00-16:00',
  priceRange: '$$$',
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Residential Window Installation' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Residential Door Installation' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Storefront Installation' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Folding Glass Wall Installation' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hurricane-Rated Glazing Installation' } },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />

      <HeroHome />

      <section className="relative bg-travertine pt-20 md:pt-24 pb-0">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="font-body text-base md:text-lg text-concrete leading-relaxed text-pretty max-w-[68ch]">
            Hiatt Development Company is a GC-licensed custom window and door installer serving Central Florida — including Isleworth, Golden Oak, Winter Park, and Lake Nona — since 2008.
          </p>
        </div>
      </section>

      <StatementBlock
        eyebrow="The practice"
        body={
          "Most window and door installers are specialty subcontractors. Hiatt Development carries a general contractor license — which means full permitting authority, direct coordination with structural engineers, and accountability that doesn't end at the sill. Fifteen years of installs across Isleworth, Golden Oak, Winter Park, and Lake Nona."
        }
        emphasis="GC-licensed. Custom windows and doors, installed."
      />

      <ClientLogos />

      <PillarTiles
        pillars={PILLARS.map((p) => ({
          num: p.num,
          name: p.name,
          blurb: p.blurb,
          href: p.href,
          video: p.video,
        }))}
      />

      <PortfolioStrip projects={PROJECTS} />

      <CtaBlock
        heading="The installer Orlando's"
        emphasis="custom builders, architects, and homeowners call first."
      />
    </>
  )
}
