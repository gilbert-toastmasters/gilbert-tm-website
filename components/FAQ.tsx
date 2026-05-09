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
    <section className="py-24 md:py-32 bg-white border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
          {/* Left — eyebrow + heading + sub */}
          <div>
            <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
              Common questions
            </p>
            <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-6">
              Asked
              <br />
              and answered.
            </h2>
            <p className="text-[#1C1C1C]/70 text-base leading-relaxed max-w-sm">
              Still wondering? Email our VP of Membership at{' '}
              <a
                href="mailto:vpm-499@toastmastersclubs.org"
                className="underline hover:text-[#772432]"
              >
                vpm-499@toastmastersclubs.org
              </a>
              . We&apos;d rather you ask than guess.
            </p>
          </div>

          {/* Right — FAQ list */}
          <ul className="border-t border-b border-black/10 divide-y divide-black/10">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <li key={faq.question}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="group w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="inline-block origin-left font-bold text-[#1C1C1C] text-lg md:text-xl transition-all duration-200 group-hover:text-[#772432] group-hover:translate-x-2 group-hover:scale-110">
                      {faq.question}
                    </span>
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold text-[#772432] flex-shrink-0 group-hover:bg-[#F2DF74] transition-colors"
                      aria-hidden
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 md:pb-6 text-[#1C1C1C]/70 text-base md:text-[17px] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
