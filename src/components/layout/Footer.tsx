'use client'

import Link from 'next/link'
import Marquee from '@/components/motion/Marquee'

const COLUMNS = [
  {
    label: 'Site',
    items: [
      { href: '/', label: 'Index' },
      { href: '/services', label: 'Services' },
      { href: '/portfolio', label: 'Work' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    label: 'Brands',
    items: [
      { href: '/products/pgt', label: 'PGT' },
      { href: '/products/andersen', label: 'Andersen' },
      { href: '/products/superhouse', label: 'SuperHouse' },
      { href: '/products/euro-wall', label: 'Euro-Wall' },
    ],
  },
  {
    label: 'Legal',
    items: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms & Conditions' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink text-travertine overflow-hidden">
      <div className="absolute inset-0 grain animate-grain-shift opacity-30" />

      <div className="relative border-y border-travertine/15 py-3">
        <Marquee speed={30} className="font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase text-travertine/45 leading-none">
          <span className="px-6">Built in Orlando</span>
          <span className="px-6 text-travertine/25">·</span>
          <span className="px-6">Installed across Central Florida</span>
          <span className="px-6 text-travertine/25">·</span>
          <span className="px-6">EST. 2008</span>
          <span className="px-6 text-travertine/25">·</span>
        </Marquee>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5 flex flex-col gap-8">
          <div className="font-mono text-[12px] tracking-[0.32em] uppercase text-travertine/50">
            — Begin a project
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-balance">
            Bring us a <em className="italic">drawing,</em> a <em className="italic">site,</em> or
            an <em className="italic">idea.</em> We&apos;ll bring the rest.
          </h2>
          <Link
            href="/contact#request"
            className="group inline-flex w-fit items-center gap-3 text-travertine"
            data-cursor-hover
            data-cursor-label="say hi"
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase">Start the conversation</span>
            <span className="relative h-px w-16 bg-travertine/40 overflow-hidden">
              <span className="absolute inset-0 bg-travertine origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-exhale" />
            </span>
            <span className="font-mono text-xs">→</span>
          </Link>
        </div>

        <div className="md:col-span-7 grid gap-10 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.label} className="flex flex-col gap-4">
              <div className="font-mono text-[12px] tracking-[0.32em] uppercase text-travertine/50">
                — {col.label}
              </div>
              <ul className="flex flex-col gap-2">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="font-display text-xl font-light text-travertine/80 hover:text-travertine hover:italic transition-colors"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 pb-10 grid gap-6 md:grid-cols-3 border-t border-travertine/15 pt-8">
        <div className="font-mono text-[12px] tracking-[0.24em] uppercase text-travertine/60">
          © 2025 Hiatt Development Company
        </div>
        <div className="font-mono text-[12px] tracking-[0.24em] uppercase text-travertine/60 md:text-center">
          Licensed &nbsp;·&nbsp; Insured &nbsp;·&nbsp; CGC1521543
        </div>
        <div className="font-mono text-[12px] tracking-[0.24em] uppercase text-travertine/60 md:text-right">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-travertine">Instagram</a>
          <span className="mx-3 text-travertine/30">·</span>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-travertine">Facebook</a>
          <span className="mx-3 text-travertine/30">·</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-travertine">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
