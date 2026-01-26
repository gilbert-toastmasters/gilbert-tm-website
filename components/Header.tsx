'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold" style={{ color: '#772432' }}>
              Gilbert Toastmasters
            </span>
            <span className="text-sm text-gray-500">Club #499</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#772432] transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-[#772432] transition-colors">
              About
            </Link>
            <Link href="#meetings" className="text-gray-700 hover:text-[#772432] transition-colors">
              Meetings
            </Link>
            <Link
              href="#join"
              className="px-5 py-2 rounded-full text-white transition-colors"
              style={{ backgroundColor: '#772432' }}
            >
              Visit Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-[#772432]">Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-[#772432]">About</Link>
              <Link href="#meetings" className="text-gray-700 hover:text-[#772432]">Meetings</Link>
              <Link
                href="#join"
                className="px-5 py-2 rounded-full text-white text-center"
                style={{ backgroundColor: '#772432' }}
              >
                Visit Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
