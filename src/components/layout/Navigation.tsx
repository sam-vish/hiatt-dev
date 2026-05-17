'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/', label: 'Index' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/portfolio', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setOpen(false), [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[70] bg-florida-oak text-travertine">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 h-[88px]">
          <Link href="/" aria-label="Hiatt Development Co. — Home" className="group flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/hdc-logo-white.svg"
              alt="Hiatt Development Co."
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative font-mono text-[11px] tracking-[0.3em] uppercase"
              >
                <span className="mr-2 text-travertine/60 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 right-0 h-px origin-left bg-travertine transition-transform duration-500 ease-exhale ${
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:407-488-5620"
              className="font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/80 hover:text-travertine transition-colors"
            >
              407 · 488 · 5620
            </a>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 border border-travertine font-mono text-[10px] tracking-[0.3em] uppercase overflow-hidden"
              data-cursor-hover
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-florida-oak">
                Begin a Project
              </span>
              <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-travertine transition-transform duration-500 ease-exhale group-hover:scale-x-100" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-travertine transition-transform duration-300 ${
                open ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-travertine transition-transform duration-300 ${
                open ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-florida-oak" />
        <div className="relative h-full flex flex-col justify-between px-8 pt-28 pb-10 text-travertine">
          <nav className="flex flex-col gap-6">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-4 border-b border-travertine/20 pb-6"
              >
                <span className="font-mono text-[10px] text-travertine/60 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`font-display text-4xl font-light ${
                    isActive(item.href) ? 'italic' : ''
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/70">
            <a href="tel:407-488-5620" className="text-travertine">407 · 488 · 5620</a>
            <a href="mailto:admin@hiattdevelopment.com" className="text-travertine">
              admin@hiattdevelopment.com
            </a>
            <span>1453 W. Landstreet Rd, Ste 302 — Orlando FL</span>
          </div>
        </div>
      </div>
    </>
  )
}
