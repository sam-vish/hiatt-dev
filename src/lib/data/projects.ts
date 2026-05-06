export type Project = {
  slug: string
  title: string
  city: string
  year: number
  type: 'Residential' | 'Commercial'
  cover: string
  ratio: '4/3' | '3/4' | '16/9' | '1/1'
  brief: string
  scope: string[]
  brands: string[]
  gallery: { src: string; ratio: '4/3' | '3/4' | '16/9' | '1/1'; caption?: string }[]
  facts: { label: string; value: string }[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'isleworth-residence',
    title: 'Isleworth Residence',
    city: 'Windermere, FL',
    year: 2024,
    type: 'Residential',
    cover: '/videos/portfolio-1.mp4',
    ratio: '4/3',
    brief:
      'A whole-house glazing replacement on a Mediterranean-revival estate. Forty-two openings, six folding walls, one continuous threshold from kitchen to lanai.',
    scope: [
      'Survey and template every opening',
      'Demolition and removal of legacy aluminum',
      'Custom Andersen E-Series fenestration',
      'Euro-Wall 7700 multi-slide on the great room',
      'Re-stuccoing and trim restoration',
    ],
    brands: ['Andersen', 'Euro-Wall', 'PGT'],
    gallery: [
      { src: '/videos/portfolio-1.mp4', ratio: '16/9', caption: 'Great room — fully retracted' },
      { src: '/videos/portfolio-2.mp4', ratio: '4/3', caption: 'Kitchen casement reset' },
    ],
    facts: [
      { label: 'Openings', value: '42' },
      { label: 'Glass area', value: '1,840 sq ft' },
      { label: 'Duration', value: '14 weeks' },
      { label: 'Wind rating', value: 'Large Missile, Level D' },
    ],
  },
  {
    slug: 'lake-nona-residence',
    title: 'Lake Nona Residence',
    city: 'Lake Nona, FL',
    year: 2024,
    type: 'Residential',
    cover: '/videos/portfolio-2.mp4',
    ratio: '3/4',
    brief:
      'New construction modern. SuperHouse slim-steel walls front and back, with a 12-foot pivot door at the entry that swings on a single floor bearing.',
    scope: [
      'Coordination with architect on glazing schedule',
      'SuperHouse slim-steel multi-slide system',
      '12 ft custom pivot at entry',
      'Concealed motorized shades integration',
    ],
    brands: ['SuperHouse'],
    gallery: [
      { src: '/videos/portfolio-2.mp4', ratio: '16/9', caption: 'Front elevation' },
    ],
    facts: [
      { label: 'Tallest leaf', value: '12 ft' },
      { label: 'Slim-line sightline', value: '1-3/8"' },
      { label: 'Duration', value: '20 weeks' },
    ],
  },
  {
    slug: 'winter-park-bungalow',
    title: 'Winter Park Bungalow',
    city: 'Winter Park, FL',
    year: 2023,
    type: 'Residential',
    cover: '/videos/portfolio-1.mp4',
    ratio: '16/9',
    brief:
      'Historic bungalow restoration. The challenge was hurricane-rating the windows without changing how the house reads from the street.',
    scope: [
      'Andersen A-Series Coastal package',
      'Custom muntin layouts to match originals',
      'Trim and casing restoration in heart pine',
    ],
    brands: ['Andersen'],
    gallery: [{ src: '/videos/portfolio-1.mp4', ratio: '4/3' }],
    facts: [
      { label: 'Era', value: '1924' },
      { label: 'Historic district', value: 'Yes' },
      { label: 'Duration', value: '8 weeks' },
    ],
  },
  {
    slug: 'downtown-tower-lobby',
    title: 'Downtown Tower Lobby',
    city: 'Orlando, FL',
    year: 2023,
    type: 'Commercial',
    cover: '/videos/portfolio-2.mp4',
    ratio: '4/3',
    brief:
      'Storefront and lobby reglazing on an occupied 14-story tower. Night-shift install, zero downtime to the operating floors.',
    scope: [
      'Phased nighttime install across 6 weekends',
      'Storefront aluminum, low-E laminated glass',
      'Vestibule reset and ADA threshold compliance',
    ],
    brands: ['PGT'],
    gallery: [{ src: '/videos/portfolio-2.mp4', ratio: '16/9' }],
    facts: [
      { label: 'Stories occupied during install', value: '14' },
      { label: 'Downtime', value: '0 business hours' },
      { label: 'Duration', value: '6 weeks' },
    ],
  },
  {
    slug: 'baldwin-park-renovation',
    title: 'Baldwin Park Renovation',
    city: 'Baldwin Park, FL',
    year: 2023,
    type: 'Residential',
    cover: '/videos/portfolio-1.mp4',
    ratio: '3/4',
    brief:
      'A whole-back-of-house openness. Two folding walls and a kitchen pass-through replaced what used to be three small windows.',
    scope: ['Euro-Wall 4400 folding system', 'New header structural', 'Bi-parting kitchen pass-through'],
    brands: ['Euro-Wall'],
    gallery: [{ src: '/videos/portfolio-1.mp4', ratio: '4/3' }],
    facts: [
      { label: 'Opening width', value: '24 ft' },
      { label: 'Folded stack', value: '14"' },
      { label: 'Duration', value: '10 weeks' },
    ],
  },
  {
    slug: 'cocoa-beach-coastal',
    title: 'Cocoa Beach Coastal Home',
    city: 'Cocoa Beach, FL',
    year: 2022,
    type: 'Residential',
    cover: '/videos/portfolio-2.mp4',
    ratio: '4/3',
    brief:
      'Direct ocean exposure. Every assembly tested to Large Missile, Level D, with hardware specified for salt-air longevity.',
    scope: ['PGT WinGuard Aluminum throughout', 'Marine-grade hardware', 'Re-stucco and re-finish'],
    brands: ['PGT'],
    gallery: [{ src: '/videos/portfolio-2.mp4', ratio: '4/3' }],
    facts: [
      { label: 'Wind exposure', value: 'Direct ocean' },
      { label: 'Wind rating', value: 'Large Missile, Level D' },
      { label: 'Duration', value: '12 weeks' },
    ],
  },
]

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug)
