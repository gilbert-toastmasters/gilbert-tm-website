'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Vince D.',
    initials: 'VD',
    short:
      "With the assistance of fellow Toastmasters I learned ZOOM, and we've used it for three Christmas holidays with relatives across the country.",
    full:
      "When we replaced in-person Gilbert Toastmaster meetings due to Covid 19 with ZOOM, I didn't know what ZOOM was or how to use it. However, with the assistance of more savvy fellow Toastmasters I learned how to use this great two-way communication tool. I realized that ZOOM would be an excellent way to reach out to my relatives in western New York, Chicago, Cleveland, San Jose and Phoenix for Thanksgiving and Christmas. I found all relatives interested in participating, and we have used ZOOM for three Christmas holidays. Thanks Gilbert Toastmasters.",
  },
  {
    name: 'Brendan S.',
    initials: 'BS',
    short:
      'They were friendly and welcoming, and made sure that all of the guests had a chance to participate.',
    full:
      'My neighbor invited me to go with him, and it was interesting. They were friendly and welcoming, and made sure that all of the guests (there were 4 or 5 of us) had a chance to participate.',
  },
  {
    name: 'Soumya P.',
    initials: 'SP',
    short:
      'Today, if I have confidence to speak to groups of people, that credit goes to GTM club members who helped me learn, grow, and think!',
    full:
      'After the very first meeting, when the club president asked me to describe what I thought of the meeting, all I said was “My english was bad and I needed help to improve”. It did not take long for the club members to cheer me to join the club and empower myself to enjoy this journey. Today, if I have confidence to write about my journey, enjoy speaking to group of people, then that credit goes to GTM club members who have always helped me to learn, grow, speak, listen and think!',
  },
]

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  const [expanded, setExpanded] = useState(false)
  const canExpand = t.full !== t.short

  return (
    <article className="bg-white border border-black/10 rounded-lg p-7 flex flex-col">
      <div className="font-bold text-[#F2DF74] text-5xl leading-none mb-3">
        &ldquo;
      </div>
      <blockquote className="text-[#1C1C1C] text-[17px] leading-relaxed flex-1 mb-5">
        {expanded ? t.full : t.short}
      </blockquote>
      <div className="flex items-center justify-between gap-3 border-t border-black/10 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#772432] text-white font-bold text-sm flex items-center justify-center shrink-0">
            {t.initials}
          </div>
          <p className="font-bold text-[15px] text-[#1C1C1C]">{t.name}</p>
        </div>
        {canExpand && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[13px] underline hover:no-underline text-[#1C1C1C]/60"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    </article>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-[#F5F5F5] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 md:items-end mb-12 md:mb-14">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#772432] mb-3">
              Success stories
            </p>
            <h2 className="font-bold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight">
              Real members.
              <br />
              Real stories.
            </h2>
          </div>
          <p className="text-[#1C1C1C]/70 text-lg leading-relaxed max-w-xl">
            No one showed up polished.
          </p>
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
