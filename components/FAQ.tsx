'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How big is the club?',
    answer: '40-50 members, give or take. Big enough to learn from a lot of different people. Small enough that we actually know each other.',
  },
  {
    question: 'What does membership cost?',
    answer: 'Dues are billed twice a year and cover the venue, Toastmasters International fees, and the little stuff like name badges. For current pricing, email our VP of Membership at vpm-499@toastmastersclubs.org.',
  },
  {
    question: 'Any hidden costs?',
    answer: "Nope. We do an annual fundraiser (voluntary) and we hang out after meetings—usually somewhere in downtown Gilbert (also voluntary, also fun).",
  },
  {
    question: 'Do I need experience to join?',
    answer: "No. We've got complete beginners and people who've been doing this for decades. You'll fit in.",
  },
  {
    question: 'Can I visit before I commit?',
    answer: 'Yes. Come as many times as you want. No pressure.',
  },
  {
    question: 'How often will I get to speak?',
    answer: "Honest answer: 3-4 prepared speeches per year. We're a big club, so we share the stage. If you want to race through the program, we might not be the right fit. If you want a community that actually invests in your growth—and a lot of other ways to learn besides speeches—you're in the right place.",
  },
  {
    question: 'Is there an age requirement?',
    answer: "18 or older. No upper limit. We've got recent grads and retirees in the same room, and it works.",
  },
  {
    question: 'What about leadership development?',
    answer: "It's built in. You'll take on meeting roles—Timer, Evaluator, Toastmaster of the Day—that teach you to lead by doing. No lectures. Just practice.",
  },
  {
    question: "What's the culture like?",
    answer: "Multigenerational. International. People from India, Mexico, China, France, Brazil, Bahrain, and all over the U.S. We like each other. We spend time together outside of meetings. That's not a line—it's just true.",
  },
  {
    question: 'Will I get a mentor?',
    answer: "Yes. We'll pair you with someone, but honestly, the whole club looks out for new members. You won't be left to figure it out alone.",
  },
  {
    question: 'Do you meet online?',
    answer: "No. We're 100% in person. Every Thursday. We like being in the same room.",
  },
  {
    question: 'How do I join?',
    answer: "Show up to a meeting. Tell any member you're interested. We'll introduce you to our VP of Membership and take it from there.",
  },
]

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/20">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span
          className="text-xl md:text-2xl font-bold text-white"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {faq.question}
        </span>
        <span className="text-3xl text-white ml-4 flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-lg text-white/90 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20" style={{ background: 'linear-gradient(to bottom, #3B0104, #781327)' }}>
      <div className="max-w-3xl mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-black text-white text-center mb-12"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Got questions?{' '}
          <span className="relative inline-block font-normal" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>
            We've got answers.
            <svg
              className="absolute left-0 -bottom-2 w-full h-3"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 6 Q 10 2, 20 6 T 40 6 T 60 6 T 80 6 T 100 6"
                stroke="#F2DF74"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h2>

        <div className="mt-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
