import HeroHome from '@/components/sections/HeroHome'
import PillarTiles from '@/components/sections/PillarTiles'
import StatementBlock from '@/components/sections/StatementBlock'
import ClientLogos from '@/components/sections/ClientLogos'
import BrandRoster from '@/components/sections/BrandRoster'
import PortfolioStrip from '@/components/sections/PortfolioStrip'
import CtaBlock from '@/components/sections/CtaBlock'
import { PILLARS } from '@/lib/data/services'
import { BRANDS } from '@/lib/data/brands'
import { PROJECTS } from '@/lib/data/projects'

export default function HomePage() {
  return (
    <>
      <HeroHome />

      <StatementBlock
        eyebrow="The practice"
        body={
          'The only window and door installer in Central Florida that is also a licensed general contractor. Hiatt Development Company brings full permitting, project oversight, and 15+ years of high-end work on Isleworth, Golden Oak, and Winter Park builds — held to a standard that only a GC-licensed firm can deliver.'
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

      <BrandRoster
        brands={BRANDS}
        eyebrow="Featured partners"
        heading="The four brands we go deepest with."
      />

      <PortfolioStrip projects={PROJECTS} />

      <CtaBlock
        heading="The installer Orlando's"
        emphasis="best builders work with."
      />
    </>
  )
}
