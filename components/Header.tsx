'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ROLES } from './meetingRolesData'

type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Meeting Roles',
    href: '/meeting-roles',
    children: ROLES.map((r) => ({
      label: r.title,
      href: `/meeting-roles#${r.key}`,
    })),
  },
  {
    label: 'For Members',
    href: '/for-members',
    children: [
      { label: 'New Member Area', href: '/new-member' },
      { label: 'Icebreaker Guide', href: '/icebreaker' },
      { label: 'Evaluations', href: '/evaluations' },
      { label: 'Leadership Team', href: '/leadership' },
    ],
  },
  { label: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isLinkActive = (link: NavItem): boolean => {
    if (link.href === pathname) return true
    return !!link.children?.some((c) => c.href === pathname)
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
      <nav className="w-full max-w-[1400px] mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo + title */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/Toastmasters-International-logo-color-300.webp"
              alt="Toastmasters International"
              width={44}
              height={44}
              className="w-11 h-11"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-bold text-[#1C1C1C] text-lg md:text-xl tracking-tight">
                Gilbert Toastmasters
              </span>
              <span className="italic text-[#1C1C1C]/70 text-xs md:text-sm">
                Listen, Think, and Speak
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 group/nav">
            {NAV_LINKS.map((link) => {
              const isActive = isLinkActive(link)
              const linkClass =
                'text-sm font-semibold tracking-wider uppercase transition-colors border-b-4 pb-1 ' +
                (isActive
                  ? 'nav-home text-[#772432] border-[#772432] group-has-[.nav-other:hover]/nav:border-transparent group-has-[.nav-other:hover]/nav:text-[#1C1C1C]'
                  : 'nav-other text-[#1C1C1C] border-transparent hover:text-[#772432] hover:border-[#772432]')

              if (link.children?.length) {
                return (
                  <div key={link.href} className="relative group/dd inline-flex items-center">
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                    <div className="absolute left-0 top-full pt-3 hidden group-hover/dd:block">
                      <div className="bg-white border border-black/10 rounded-md shadow-lg py-2 min-w-[220px]">
                        {link.children.map((child) => {
                          const childClass =
                            'block px-4 py-2 text-sm font-semibold tracking-wider uppercase transition-colors border-l-4 ' +
                            (child.href === pathname
                              ? 'text-[#772432] border-[#772432]'
                              : 'text-[#1C1C1C] border-transparent hover:text-[#772432] hover:border-[#772432]')
                          const isHashLink = child.href.includes('#')
                          return isHashLink ? (
                            <a key={child.href} href={child.href} className={childClass}>
                              {child.label}
                            </a>
                          ) : (
                            <Link key={child.href} href={child.href} className={childClass}>
                              {child.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/#contact"
              className="rounded-full bg-[#F2DF74] text-[#1C1C1C] font-semibold text-sm px-6 py-3 hover:brightness-95 transition"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#1C1C1C]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-black/5 pt-4">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold tracking-wider uppercase text-[#1C1C1C] hover:text-[#772432]"
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => {
                    const isHashLink = child.href.includes('#')
                    const childClass =
                      'ml-4 text-sm font-semibold tracking-wider uppercase text-[#1C1C1C]/70 hover:text-[#772432]'
                    return isHashLink ? (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={childClass}
                      >
                        {child.label}
                      </a>
                    ) : (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={childClass}
                      >
                        {child.label}
                      </Link>
                    )
                  })}
                </div>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="self-start rounded-full bg-[#F2DF74] text-[#1C1C1C] font-semibold text-sm px-6 py-3 hover:brightness-95 transition"
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
