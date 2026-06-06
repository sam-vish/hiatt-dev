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
    video: '/videos-compressed/installation_card_updated.mp4',
    href: '/services#installation',
  },
]

export type ProcessStep = { num: string; name: string; description: string }

export const PROCESS: ProcessStep[] = [
  {
    num: '01',
    name: 'Consultation',
    description: 'We start with a conversation — your vision, your project, your timeline.',
  },
  {
    num: '02',
    name: 'Scope & Estimate',
    description: 'We assess the project and define a clear, detailed scope. No guesswork.',
  },
  {
    num: '03',
    name: 'Design & Specification',
    description: 'We engineer every detail to fit — precise, code-compliant, built to last.',
  },
  {
    num: '04',
    name: 'Approval & Coordination',
    description: 'Once approved, we secure your systems and orchestrate the timeline.',
  },
  {
    num: '05',
    name: 'Precision Installation',
    description: 'Our team executes the fit with meticulous craft — on time, to standard.',
  },
  {
    num: '06',
    name: 'The Walkthrough',
    description: 'We finish together, ensuring every detail meets the mark.',
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
