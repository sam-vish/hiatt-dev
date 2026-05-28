import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import BrandGallery from '@/components/sections/products/BrandGallery'
import CtaBlock from '@/components/sections/CtaBlock'
import { BRANDS } from '@/lib/data/brands'

export const metadata: Metadata = {
  title: 'Window & Door Manufacturers We Install | Hiatt Development Co. — Orlando, FL',
  description:
    "PGT, Andersen, SuperHouse, and Euro-Wall — four manufacturer lines selected for performance in Florida's climate and architecture. Installed by Hiatt Development Co., Orlando.",
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        pageNumber="04"
        pageLabel="Products"
        title="The catalog,"
        italicTitle="quietly curated."
        intro="We do not carry every line. We carry the four that perform in Florida — for hurricane zones, architectural openings, and the projects that fall between categories. Each one selected, not inherited."
        meta={['PGT', 'Andersen', 'SuperHouse', 'Euro-Wall']}
      />

      <BrandGallery brands={BRANDS} />

      <CtaBlock
        heading="Unsure which line fits the project?"
        emphasis="We'll spec it with you."
        ctaLabel="Request a consult"
      />
    </>
  )
}
