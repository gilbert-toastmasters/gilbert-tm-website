'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function getNextThursday() {
  const now = new Date()
  const dayOfWeek = now.getDay()
  const daysUntilThursday = (4 - dayOfWeek + 7) % 7 || 7 // 4 = Thursday

  const nextThursday = new Date(now)
  nextThursday.setDate(now.getDate() + daysUntilThursday)
  nextThursday.setHours(19, 0, 0, 0) // 7pm

  return nextThursday
}

function getCalendarUrl() {
  const start = getNextThursday()
  const end = new Date(start)
  end.setHours(20, 0, 0, 0) // 8pm (1 hour meeting)

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  }

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Gilbert Toastmasters Meeting',
    dates: `${formatDate(start)}/${formatDate(end)}`,
    details: 'Weekly Toastmasters meeting. Just show up—no RSVP needed!',
    location: 'Greenfield Jr. High Library, 101 S Greenfield Rd, Gilbert, AZ 85296',
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export default function MeetingInfo() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollable = rect.height - windowHeight
      if (scrollable <= 0) return
      const p = -rect.top / scrollable
      setProgress(Math.max(0, Math.min(1, p)))
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const firstY = -progress * 100
  const secondY = (1 - progress) * 100

  return (
    <section ref={sectionRef} id="meetings" className="relative h-[200vh] bg-[#f5f5f5]">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center">
            {/* Text column - left */}
            <div className="relative h-[320px] overflow-hidden">
              <div
                className="absolute inset-0 text-left"
                style={{ transform: `translateY(${firstY}%)`, willChange: 'transform' }}
              >
                <a
                  href={getCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl md:text-4xl font-black mb-2 inline-block cursor-pointer transition-transform duration-200 hover:scale-105 text-black"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Thursdays at <span className="font-normal" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>7pm</span>
                </a>
                <p className="text-2xl md:text-4xl font-black text-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Greenfield Jr. High Library</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=101+S+Greenfield+Rd+Gilbert+AZ+85296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl text-black hover:underline block"
                >
                  101 S Greenfield Rd, Gilbert, AZ 85296
                </a>
              </div>
              <div
                className="absolute inset-0 text-left"
                style={{ transform: `translateY(${secondY}%)`, willChange: 'transform' }}
              >
                <p className="text-2xl md:text-4xl font-black text-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Visitors welcome. <span className="font-normal" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>No RSVP needed</span>.
                </p>
                <div className="text-lg md:text-xl text-gray-600">
                  <p>
                    Questions about upcoming meetings?<br />Email our VP of Membership at<br />
                    <a href="mailto:vpm-499@toastmastersclubs.org" className="underline hover:no-underline" style={{ color: '#004165' }}>
                      vpm-499@toastmastersclubs.org
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Big 3:2 photo - right */}
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
              <div
                className="absolute inset-0"
                style={{ transform: `translateY(${firstY}%)`, willChange: 'transform' }}
              >
                <Image
                  src="/images/Greenfield-Junior-High-Entrance-.webp"
                  alt="Greenfield Junior High entrance"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="absolute inset-0"
                style={{ transform: `translateY(${secondY}%)`, willChange: 'transform' }}
              >
                <Image
                  src="/images/Toastmasters-Meeting-at-Greenfield-Junior-High.webp"
                  alt="Toastmasters meeting at Greenfield Junior High"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
