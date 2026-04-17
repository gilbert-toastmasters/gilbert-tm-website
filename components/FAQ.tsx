'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How big is the club?',
    answer:
      "40–50 members. Big enough to learn from a variety of perspectives. Small enough that we know each other.",
  },
  {
    question: 'What does membership cost?',
    answer:
      "Dues are billed twice a year and cover the venue, Toastmasters International fees, and essentials like name badges. For current pricing, email our VP of Membership at vpm-499@toastmastersclubs.org.",
  },
  {
    question: 'Any additional costs?',
    answer:
      "None required. We host an annual fundraiser (optional) and gather socially after meetings—usually somewhere in downtown Gilbert (also optional).",
  },
  {
    question: 'Do I need experience to join?',
    answer:
      "No. We have complete beginners and seasoned speakers in the same room. You'll fit in.",
  },
  {
    question: 'Can I visit before committing?',
    answer: "Yes. Come as many times as you'd like. No pressure.",
  },
  {
    question: 'How often will I speak?',
    answer:
      "Prepared speeches happen about 3–4 times per year. We're a large club, so we share the stage. If rapid advancement is your goal, we may not be the right fit. If you want a community invested in your growth—with many ways to learn beyond speeches—you're in the right place.",
  },
  {
    question: 'Is there an age requirement?',
    answer: '18 or older. No upper limit.',
  },
  {
    question: 'What about leadership development?',
    answer:
      "It's built into the program. You'll take on meeting roles—Timer, Evaluator, Toastmaster of the Day—that develop leadership through practice.",
  },
  {
    question: "What's the culture like?",
    answer:
      "Multigenerational. International. Members from India, Mexico, China, France, Brazil, Bahrain, and across the U.S. We support each other, and we spend time together outside of meetings.",
  },
  {
    question: 'Will I get a mentor?',
    answer:
      "Yes. We'll pair you with someone, and the whole club looks out for new members. You won't figure this out alone.",
  },
  {
    question: 'Do you meet online?',
    answer: "No. We're 100% in person, every Thursday.",
  },
  {
    question: 'How do I join?',
    answer:
      "Visit a meeting. Tell any member you're interested. We'll take it from there.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <p
          className="text-sm md:text-base tracking-widest uppercase mb-4"
          style={{ color: '#772432', fontFamily: 'Montserrat, sans-serif' }}
        >
          FAQs
        </p>
        <h2
          className="text-3xl md:text-5xl font-black mb-16 text-black"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Common questions
        </h2>

        <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <li key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left hover:opacity-70 transition-opacity"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-lg md:text-xl font-black text-black"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="text-2xl font-light text-black flex-shrink-0"
                    aria-hidden
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 text-base md:text-lg text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
