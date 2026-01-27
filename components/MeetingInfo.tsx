'use client'

import Image from 'next/image'

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
  return (
    <section id="meetings" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <a
            href={getCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-5xl font-black mb-2 inline-block cursor-pointer transition-transform duration-200 hover:scale-110 text-black"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Thursdays,{' '}
            <span className="relative inline-block font-normal" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>
              7pm
              <svg
                className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)]"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 8 28 C 5 18, 15 8, 30 6 C 50 3, 75 5, 88 12 C 98 18, 97 32, 85 40 C 70 48, 40 49, 20 44 C 8 40, 6 35, 8 28"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </a>
          <p className="text-3xl md:text-5xl font-black text-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Greenfield Jr. High Library</p>
          <p className="text-3xl md:text-5xl font-black text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Just show up. Seriously—<span className="relative inline-block font-normal" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>
              no RSVP
              <svg
                className="absolute left-0 -bottom-2 w-full h-3"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 6 Q 10 2, 20 6 T 40 6 T 60 6 T 80 6 T 100 6"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>, no pressure.
          </p>
          <div className="text-xl md:text-2xl text-gray-600 mt-10">
            <p>Want to double-check we're meeting?</p>
            <p>
              Email our VP of Membership at{' '}
              <a href="mailto:vpm-499@toastmastersclubs.org" className="underline hover:no-underline" style={{ color: '#772432' }}>
                vpm-499@toastmastersclubs.org
              </a>
            </p>
            <p>But we're always there. Almost always.</p>
          </div>
        </div>

        <div className="relative h-[50vh] w-full flex justify-center">
          {/* Meeting photo - tilted left */}
          <div
            className="absolute left-[10%] top-0 bg-white p-3 shadow-xl rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            style={{ transform: 'rotate(-6deg)' }}
          >
            <Image
              src="/images/Toastmasters-Meeting-at-Greenfield-Junior-High.webp"
              alt="Toastmasters meeting at Greenfield Junior High"
              width={500}
              height={350}
              className="w-[35vw] max-w-[400px] h-[30vh] max-h-[300px] object-cover rounded-lg"
            />
          </div>
          {/* Address - positioned between photos */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=101+S+Greenfield+Rd+Gilbert+AZ+85296"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[55%] top-[6vh] z-20 text-lg md:text-xl cursor-pointer hover:underline text-black"
            style={{ transform: 'rotate(-2deg)' }}
          >
            101 S Greenfield Rd, Gilbert, AZ 85296
          </a>
          {/* Hand-drawn arrow pointing to photos */}
          <svg
            className="absolute left-[58%] top-[10vh] z-20 w-24 h-16"
            style={{ transform: 'scaleX(-1)' }}
            viewBox="0 0 100 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 10 5 C 20 15, 30 35, 50 50 C 60 58, 70 62, 85 60"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 75 52 L 88 60 L 78 68"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          {/* School entrance photo - tilted right, overlapping */}
          <div
            className="absolute left-[40%] top-[22vh] bg-white p-3 shadow-xl rounded-xl z-10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            style={{ transform: 'rotate(4deg)' }}
          >
            <Image
              src="/images/Greenfield-Junior-High-Entrance-.webp"
              alt="Greenfield Junior High entrance"
              width={500}
              height={350}
              className="w-[35vw] max-w-[400px] h-[30vh] max-h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
