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
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  // Pages with a dark video hero need light nav text until the user scrolls
  // past the hero. Right now that's just home and individual project pages.
  const darkHero =
    !scrolled &&
    !open &&
    (pathname === '/' || pathname.startsWith('/portfolio/'))

  const text = darkHero ? 'text-travertine' : 'text-pivot-black'
  const subtle = darkHero ? 'text-travertine/60' : 'text-concrete'
  const accentLine = darkHero ? 'bg-travertine/40' : 'bg-concrete/40'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ease-exhale ${
          scrolled || open
            ? 'backdrop-blur-md bg-travertine/85 border-b border-concrete/15'
            : darkHero
              ? 'bg-gradient-to-b from-ink/50 to-transparent'
              : 'bg-transparent'
        }`}
      >
        <div className={`mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 h-[72px] ${text}`}>
          <Link href="/" className="group flex items-center gap-3">
            <span className="font-display italic text-[20px] tracking-tight">
              Hiatt
            </span>
            <span className={`hidden md:block h-px w-8 ${accentLine} group-hover:bg-golden-amber transition-colors`} />
            <span className={`hidden md:block font-mono text-[10px] tracking-[0.3em] uppercase ${subtle}`}>
              Development&nbsp;Co.
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative font-mono text-[11px] tracking-[0.3em] uppercase"
              >
                <span className={`mr-2 ${subtle} tabular-nums`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 right-0 h-px origin-left transition-transform duration-500 ease-exhale ${
                    isActive(item.href)
                      ? 'bg-golden-amber scale-x-100'
                      : `${darkHero ? 'bg-travertine' : 'bg-pivot-black'} scale-x-0 group-hover:scale-x-100`
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:407-488-5620"
              className="font-mono text-[10px] tracking-[0.3em] uppercase hover:text-golden-amber transition-colors"
            >
              407 · 488 · 5620
            </a>
            <Link
              href="/contact"
              className={`group relative inline-flex items-center gap-2 px-5 py-2.5 border font-mono text-[10px] tracking-[0.3em] uppercase overflow-hidden ${
                darkHero ? 'border-travertine' : 'border-pivot-black'
              }`}
              data-cursor-hover
            >
              <span className={`relative z-10 transition-colors duration-300 ${
                darkHero ? 'group-hover:text-ink' : 'group-hover:text-travertine'
              }`}>
                Begin a Project
              </span>
              <span className={`absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-500 ease-exhale group-hover:scale-x-100 ${
                darkHero ? 'bg-travertine' : 'bg-pivot-black'
              }`} />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                darkHero && !open ? 'bg-travertine' : 'bg-pivot-black'
              } ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                darkHero && !open ? 'bg-travertine' : 'bg-pivot-black'
              } ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
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
        <div className="absolute inset-0 bg-travertine" />
        <div className="absolute inset-0 grain animate-grain-shift opacity-50" />
        <div className="relative h-full flex flex-col justify-between px-8 pt-28 pb-10">
          <nav className="flex flex-col gap-6">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-4 border-b border-concrete/20 pb-6"
              >
                <span className="font-mono text-[10px] text-concrete tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`font-display text-4xl font-light ${
                    isActive(item.href) ? 'italic text-golden-amber' : 'text-pivot-black'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
            <a href="tel:407-488-5620" className="text-pivot-black">407 · 488 · 5620</a>
            <a href="mailto:admin@hiattdevelopment.com" className="text-pivot-black">
              admin@hiattdevelopment.com
            </a>
            <span>1453 W. Landstreet Rd, Ste 302 — Orlando FL</span>
          </div>
        </div>
      </div>
    </>
  )
}
