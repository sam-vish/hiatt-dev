export type TestimonialType = 'builder' | 'architect' | 'dealer' | 'homeowner'

export type Testimonial = {
  quote: string
  author: string
  role: string
  company?: string
  type: TestimonialType
  featured?: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Featured testimonial — TBD. The client will supply the headline quote that anchors this page.',
    author: 'TBD',
    role: 'Custom Builder',
    company: 'TBD',
    type: 'builder',
    featured: true,
  },
  {
    quote: 'Testimonial quote — TBD.',
    author: 'TBD',
    role: 'Architect',
    company: 'TBD',
    type: 'architect',
  },
  {
    quote: 'Testimonial quote — TBD.',
    author: 'TBD',
    role: 'Custom Builder',
    company: 'TBD',
    type: 'builder',
  },
  {
    quote: 'Testimonial quote — TBD.',
    author: 'TBD',
    role: 'High-End Dealer',
    company: 'TBD',
    type: 'dealer',
  },
  {
    quote: 'Testimonial quote — TBD.',
    author: 'TBD',
    role: 'Custom Builder',
    company: 'TBD',
    type: 'builder',
  },
  {
    quote: 'Testimonial quote — TBD.',
    author: 'TBD',
    role: 'Homeowner',
    type: 'homeowner',
  },
]
