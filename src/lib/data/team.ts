export type TeamMember = {
  name: string
  role: string
  bio: string
  pull: string
  image: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Jason Hiatt',
    role: 'Founder · President',
    bio: '8th-generation Floridian. Apprenticed under Derrick Koger before founding the firm in 2008. Sets the standard the rest of the team builds against.',
    pull: 'Measure twice. Cut once. Stand behind it.',
    image: '/images/jason-hiatt.webp',
  },
  {
    name: 'Domingo Arellano',
    role: 'Project Manager',
    bio: 'Makes the impossible schedule work. Twenty-plus years of field leadership turned into calm, surgical sequencing on every job.',
    pull: 'Sequencing is everything.',
    image: '/images/domingo.avif',
  },
  {
    name: 'Hudson Powell',
    role: 'Office Manager',
    bio: 'Keeps the paperwork as clean as the install. Specifications, permitting, scheduling, and the thousand small things that make a project finish on time.',
    pull: 'Every detail tracked.',
    image: '/images/hudson.avif',
  },
  {
    // TODO: confirm role, bio, pull quote, and photo with client
    name: 'Steven',
    role: 'Team Member',
    bio: 'Bio coming soon.',
    pull: 'Bio coming soon.',
    image: '/images/team-placeholder.webp',
  },
  {
    // TODO: confirm role, bio, pull quote, and photo with client
    name: 'Camdyn',
    role: 'Team Member',
    bio: 'Bio coming soon.',
    pull: 'Bio coming soon.',
    image: '/images/team-placeholder.webp',
  },
]
