export type Pillar = {
  id: string
  num: string
  name: string
  blurb: string
  details: string[]
  video: string
  href: string
}

export const PILLARS: Pillar[] = [
  {
    id: 'residential',
    num: '01',
    name: 'Custom Residential',
    blurb: 'Whole-house glazing, renovations, and new construction — managed by a licensed general contractor from permit to walkthrough.',
    details: [
      'Whole-house glazing',
      'Renovation and additions',
      'Historic-district sensitive installs',
      'New construction package management',
    ],
    video: '/videos-compressed/lakenona-residence.mp4',
    href: '/services#residential',
  },
  {
    id: 'commercial',
    num: '02',
    name: 'Commercial',
    blurb: 'Storefront, curtain wall, and tenant build-out — installed on schedule, with full permitting and code compliance handled in-house.',
    details: [
      'Storefront and curtain wall',
      'Tenant build-out coordination',
      'Phased and night-shift installs',
      'Code compliance and permitting',
    ],
    video: '/videos-compressed/commercial-card.mp4',
    href: '/services#commercial',
  },
  {
    id: 'installation',
    num: '03',
    name: 'Installation',
    blurb: 'Custom windows and doors — specified to the opening, ordered direct, installed by the crew that pulled the permit, and covered under warranty.',
    details: [
      'Field templating and shop drawings',
      'Impact-rated glazing for hurricane zones',
      'Multi-track sliding and folding wall systems',
      'Pivot doors and custom millwork integration',
    ],
    video: '/videos-compressed/installation-card.mp4',
    href: '/services#installation',
  },
]

export type ProcessStep = { num: string; name: string; description: string }

export const PROCESS: ProcessStep[] = [
  {
    num: '01',
    name: 'Discovery',
    description:
      'Every project begins with a conversation — with the architect, the custom builder, or the GC of record. We ask the questions that shape the specification: how the structure is framed, how the space is intended to function, where the prevailing weather comes from. The answers determine everything that follows.',
  },
  {
    num: '02',
    name: 'Survey',
    description:
      'On-site templating before anything is specified or ordered. Every opening measured at three points minimum. We identify out-of-square framing, deflected headers, and stucco irregularities at the survey stage — before they become change orders.',
  },
  {
    num: '03',
    name: 'Specification',
    description:
      'Brand, series, glass package, hardware, finish, screen, and threshold — drawn into a schedule. The spec is signed before anything ships.',
  },
  {
    num: '04',
    name: 'Order & Stage',
    description:
      'Lead times tracked, deliveries staged off-site, units inspected on receipt. Damage finds in the warehouse, never on the wall.',
  },
  {
    num: '05',
    name: 'Install',
    description:
      'Crew leadership on site every day. Pull-tested fasteners. Flashing detail per manufacturer spec. Sealant beads continuous and visible. Photo-documented from rough-opening to finish.',
  },
  {
    num: '06',
    name: 'Walkthrough',
    description:
      'Every operable unit demonstrated with the client or their representative present. Warranty documentation, maintenance schedules, and manufacturer paperwork transferred in full. We remain reachable — and we answer — for the life of the install.',
  },
]

export type Value = { num: string; name: string; description: string }

export const VALUES: Value[] = [
  {
    num: '01',
    name: 'Integrity',
    description:
      "The job is done when it passes our inspection — not when it passes the client's. That standard has not changed in seventeen years.",
  },
  {
    num: '02',
    name: 'Collaboration',
    description:
      'Architects, builders, and general contractors are partners on every project — not parties receiving a delivery. We are in the room from specification to walkthrough.',
  },
  {
    num: '03',
    name: 'Stewardship',
    description:
      'Florida homes are built against hurricanes, salt air, and decades of heat. Every install accounts for that future — and we remain reachable for the life of the work.',
  },
]

export type Era = { year: string; name: string; description: string }

export const HERITAGE: Era[] = [
  {
    year: '1900s',
    name: 'Eight Generations on the Same Coast',
    description:
      'The Hiatts have been Floridians since the orange-grove era. Construction was learned on the job — and passed down without ceremony.',
  },
  {
    year: '2003',
    name: 'Apprenticeship',
    description:
      'Jason came up under Derrick Koger, learning rough-framing, finish carpentry, and how to manage a crew that respects the work.',
  },
  {
    year: '2008',
    name: 'Hiatt Development Co.',
    description:
      'Founded in the middle of a recession. Built on referrals from architects, GCs, and homeowners who liked the way the trim was set.',
  },
  {
    year: 'Today',
    name: 'A Standard, Not a Roster',
    description:
      'Project managers, an operations lead, an office manager — held to the same standard on every job. Built on relationships, not transactions.',
  },
]
