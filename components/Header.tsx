'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Meeting Roles', href: '/meeting-roles' },
  { label: 'For Members', href: '/for-members' },
  { label: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

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
              const isActive = link.href === pathname
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    'text-sm font-semibold tracking-wider uppercase transition-colors border-b-4 pb-1 ' +
                    (isActive
                      ? 'nav-home text-[#772432] border-[#772432] group-has-[.nav-other:hover]/nav:border-transparent group-has-[.nav-other:hover]/nav:text-[#1C1C1C]'
                      : 'nav-other text-[#1C1C1C] border-transparent hover:text-[#772432] hover:border-[#772432]')
                  }
                >
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-wider uppercase text-[#1C1C1C] hover:text-[#772432]"
                >
                  {link.label}
                </Link>
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
