'use client'

import { ReactNode, useState } from 'react'

export type FAQItem = {
  question: string
  answer: ReactNode
}

type Props = {
  eyebrow?: string
  heading?: ReactNode
  subhead?: ReactNode
  faqs: FAQItem[]
}

export default function FAQ({
  eyebrow = 'Common questions',
  heading = (
    <>
      Asked
      <br />
      and answered.
    </>
  ),
  subhead,
  faqs,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-white border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
          <div>
            <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
              {eyebrow}
            </p>
            <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-6">
              {heading}
            </h2>
            {subhead && (
              <div className="text-[#1C1C1C]/70 text-base leading-relaxed max-w-sm">
                {subhead}
              </div>
            )}
          </div>

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
