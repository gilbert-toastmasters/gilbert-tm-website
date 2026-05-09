'use client'

import Image from 'next/image'
import { useState } from 'react'

const OFFICERS = [
  {
    title: 'Vice President of Education',
    description:
      "The VPE manages the meeting schedule. Reach out to introduce yourself, share any upcoming travel or conflicts, and talk about when your Icebreaker might be scheduled. You don't need to chase a date — they'll assign it — but keeping them in the loop helps.",
    cta: 'See current VPE',
    href: '#',
    image: '/images/officers-placeholder.webp',
  },
  {
    title: 'Vice President of Mentoring',
    description:
      'The VP of Mentoring matches you with a mentor — an experienced member who can answer your questions, help you prep for speeches, and give you honest feedback. Before you reach out, have two or three people in mind whose speaking style you admire.',
    cta: 'See current VP of Mentoring',
    href: '#',
    image: '/images/officers-placeholder.webp',
  },
]

export default function KeyOfficers() {
  const [active, setActive] = useState(0)
  const officer = OFFICERS[active]

  const next = () => setActive((i) => (i + 1) % OFFICERS.length)
  const prev = () => setActive((i) => (i - 1 + OFFICERS.length) % OFFICERS.length)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
            Your first connections
          </p>
          <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight">
            Two people to reach out to.
          </h2>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] md:aspect-auto md:h-[580px] md:w-[68%] relative overflow-hidden rounded-md md:rounded-lg">
            <Image
              key={officer.image}
              src={officer.image}
              alt={officer.title}
              fill
              sizes="(max-width: 768px) 100vw, 68vw"
              className="object-cover"
            />
          </div>

          <div className="md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:w-[42%] -mt-12 md:mt-0 z-10 bg-white p-7 md:p-9 shadow-2xl rounded-md md:rounded-lg flex flex-col">
            <div className="flex gap-2 mb-6">
              {OFFICERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1 w-12 rounded-full transition-colors ${
                    i === active ? 'bg-[#772432]' : 'bg-black/15 hover:bg-black/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex-1">
              <h2 className="font-extrabold text-[#1C1C1C] text-3xl md:text-4xl leading-[1.1] tracking-tight mb-4">
                {officer.title}
              </h2>
              <p className="text-[#1C1C1C]/80 text-base md:text-[17px] leading-relaxed mb-8">
                {officer.description}
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 mt-auto">
              <a
                href={officer.href}
                className="inline-flex items-center rounded-full bg-[#F2DF74] text-[#1C1C1C] font-semibold text-sm px-5 py-3 hover:brightness-95 transition"
              >
                {officer.cta}
              </a>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous officer"
                  className="w-10 h-10 rounded-full border border-black/25 text-[#1C1C1C] flex items-center justify-center hover:bg-[#F2DF74] hover:border-[#F2DF74] transition"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next officer"
                  className="w-10 h-10 rounded-full border border-black/25 text-[#1C1C1C] flex items-center justify-center hover:bg-[#F2DF74] hover:border-[#F2DF74] transition"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
