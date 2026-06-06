export type Project = {
  slug: string
  title: string
  city: string
  year: number
  type: 'Residential' | 'Commercial'
  cover: string
  coverAlt: string
  ratio: '4/3' | '3/4' | '16/9' | '1/1'
  brief: string
  scope: string[]
  brands: string[]
  gallery: { src: string; ratio: '4/3' | '3/4' | '16/9' | '1/1'; caption?: string }[]
  facts: { label: string; value: string }[]
  metaTitle?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'isleworth-residence',
    title: 'Isleworth Residence',
    city: 'Windermere, FL',
    year: 2024,
    type: 'Residential',
    cover: '/videos-compressed/isleworth-gardens.mp4',
    coverAlt: 'Whole-house glazing replacement, Isleworth estate, Windermere FL — Andersen, Euro-Wall, PGT installation',
    metaTitle: 'Isleworth Residence — Whole-House Glazing | Hiatt Development Co., Windermere FL',
    ratio: '16/9',
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
      { src: '/videos-compressed/isleworth-gardens.mp4', ratio: '16/9', caption: 'Great room — fully retracted' },
      { src: '/images/isleworth-gardens.webp', ratio: '16/9', caption: 'Front elevation' },
      { src: '/images/kitchen-casement.webp', ratio: '4/3', caption: 'Kitchen casement reset' },
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
    cover: '/videos-compressed/lake-nona.mp4',
    coverAlt: 'Custom window and door installation, Lake Nona FL — Hiatt Development Co.',
    ratio: '16/9',
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
      { src: '/videos-compressed/lake-nona.mp4', ratio: '16/9', caption: 'Walk-through' },
      { src: '/images/lake-nona.webp', ratio: '16/9', caption: 'Front elevation' },
      { src: '/images/front-elevation-of-lake-nona.webp', ratio: '16/9', caption: 'Street view' },
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
    cover: '/videos-compressed/winter-park-bungalow.mp4',
    coverAlt: 'Historic district window installation, Winter Park FL — Hiatt Development Co.',
    ratio: '16/9',
    brief:
      'Historic bungalow restoration. The challenge was hurricane-rating the windows without changing how the house reads from the street.',
    scope: [
      'Andersen A-Series Coastal package',
      'Custom muntin layouts to match originals',
      'Trim and casing restoration in heart pine',
    ],
    brands: ['Andersen'],
    gallery: [{ src: '/videos-compressed/winter-park-bungalow.mp4', ratio: '4/3' }],
    facts: [
      { label: 'Era', value: '1924' },
      { label: 'Historic district', value: 'Yes' },
      { label: 'Duration', value: '8 weeks' },
    ],
  },
  {
    slug: 'oceanfront-euro-wall-installation',
    title: 'Oceanfront Euro-Wall Installation',
    city: 'New Smyrna Beach, FL',
    year: 2023,
    type: 'Residential',
    cover: '/videos-compressed/oceanfront-euro-wall.mp4',
    coverAlt: 'Euro-Wall folding glass wall installation, New Smyrna Beach FL — Hiatt Development Co.',
    ratio: '4/3',
    brief:
      'A direct-oceanfront Euro-Wall install staged from the beach side. Crane-lifted the great-room panels over the dune line and set them on a single continuous threshold.',
    scope: [
      'Crane-staged delivery over the dune',
      'Euro-Wall 7700 multi-slide on the great room',
      'Continuous floor track set flush to the deck',
      'Marine-grade hardware specified for salt exposure',
    ],
    brands: ['Euro-Wall'],
    gallery: [{ src: '/videos-compressed/oceanfront-euro-wall.mp4', ratio: '16/9' }],
    facts: [
      { label: 'Heaviest panel', value: '780 lb' },
      { label: 'Lift method', value: 'Crane over dune' },
      { label: 'Duration', value: '9 weeks' },
    ],
  },
  {
    slug: 'carmel-residence',
    title: 'Carmel Residence',
    city: 'Dr. Phillips, FL',
    // TODO: confirm year with Jason
    year: 2024,
    type: 'Residential',
    cover: '/videos-compressed/carmel.mp4',
    coverAlt: 'High-end window and door installation, Carmel estate, Dr. Phillips Orlando FL — Hiatt Development Co.',
    metaTitle: 'Carmel Residence — Custom Window & Door Installation | Hiatt Development Co., Dr. Phillips FL',
    ratio: '16/9',
    brief:
      'A lakefront estate in Carmel — the gated enclave of one-acre properties off Bay Hill in Dr. Phillips. High-end window and door systems specified to frame uninterrupted sunset views across the water.',
    // TODO: confirm exact scope, brands, and facts with Jason — placeholders below
    scope: [
      'Survey and template every opening',
      'Custom window and door package',
      'Trim and finish to match the architecture',
    ],
    brands: [],
    gallery: [
      { src: '/videos-compressed/carmel.mp4', ratio: '16/9', caption: 'Walk-through' },
      { src: '/images/carmel.webp', ratio: '16/9', caption: 'Elevation' },
    ],
    facts: [
      { label: 'Community', value: 'Carmel · Dr. Phillips' },
      { label: 'Setting', value: 'Lakefront estate' },
    ],
  },
  {
    slug: 'windermere-residence',
    title: 'Windermere Residence',
    city: 'Windermere, FL',
    // TODO: confirm year with Jason
    year: 2024,
    type: 'Residential',
    cover: '/videos-compressed/windermere.mp4',
    coverAlt: 'High-end window and door installation, Windermere FL — Hiatt Development Co.',
    metaTitle: 'Windermere Residence — Custom Window & Door Installation | Hiatt Development Co., Windermere FL',
    ratio: '16/9',
    brief:
      'A custom residence in Windermere, the lakefront town on the Butler Chain just west of Orlando. High-end window and door systems specified to open the house to the water and the Florida light.',
    // TODO: confirm exact scope, brands, and facts with Jason — placeholders below
    scope: [
      'Survey and template every opening',
      'Custom window and door package',
      'Trim and finish to match the architecture',
    ],
    brands: [],
    gallery: [
      { src: '/images/windermere-1.webp', ratio: '16/9', caption: 'Elevation' },
      { src: '/images/windermere-2.webp', ratio: '16/9', caption: 'Interior' },
      { src: '/images/windermere-3.webp', ratio: '16/9', caption: 'Approach' },
      { src: '/images/windermere-4.webp', ratio: '16/9', caption: 'Facade' },
    ],
    facts: [
      { label: 'Community', value: 'Windermere' },
      { label: 'Scope', value: 'Custom residential' },
    ],
  },
]

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug)
