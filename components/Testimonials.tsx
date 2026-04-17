'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Vince D.',
    short: "With the assistance of fellow Toastmasters I learned ZOOM, and we've used it for three Christmas holidays with relatives across the country.",
    full: "When we replaced in-person Gilbert Toastmaster meetings due to Covid 19 with ZOOM, I didn't know what ZOOM was or how to use it. However, with the assistance of more savvy fellow Toastmasters I learned how to use this great two-way communication tool. I realized that ZOOM would be an excellent way to reach out to my relatives in western New York, Chicago, Cleveland, San Jose and Phoenix for Thanksgiving and Christmas. I found all relatives interested in participating, and we have used ZOOM for three Christmas holidays. Thanks Gilbert Toastmasters.",
  },
  {
    name: 'Brendan S.',
    short: "They were friendly and welcoming, and made sure that all of the guests had a chance to participate.",
    full: "My neighbor invited me to go with him, and it was interesting. They were friendly and welcoming, and made sure that all of the guests (there were 4 or 5 of us) had a chance to participate.",
  },
  {
    name: 'Soumya P.',
    short: "Today, if I have confidence to speak to groups of people, that credit goes to GTM club members who helped me learn, grow, and think!",
    full: "After the very first meeting, when the club president asked me to describe what I thought of the meeting, all I said was \u201CMy english was bad and I needed help to improve\u201D. It did not take long for the club members to cheer me to join the club and empower myself to enjoy this journey. Today, if I have confidence to write about my journey, enjoy speaking to group of people, then that credit goes to GTM club members who have always helped me to learn, grow, speak, listen and think!",
  },
]

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  const [expanded, setExpanded] = useState(false)
  const canExpand = t.full !== t.short

  return (
    <article className="border-t border-gray-300 pt-8">
      <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
        &ldquo;{expanded ? t.full : t.short}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <p
          className="text-base font-black text-black"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {t.name}
        </p>
        {canExpand && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm underline hover:no-underline text-gray-600"
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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="text-sm md:text-base tracking-widest uppercase mb-4"
          style={{ color: '#772432', fontFamily: 'Montserrat, sans-serif' }}
        >
          Success stories
        </p>
        <h2
          className="text-3xl md:text-5xl font-black mb-6 text-black"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Real members. Real stories.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-16 max-w-2xl">
          No one showed up polished.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
