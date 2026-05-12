import Link from 'next/link'
import { ReactNode } from 'react'

const officerLinkClass = 'text-[#772432] underline hover:no-underline'

const ITEMS: { num: string; lead: string; body: ReactNode }[] = [
  {
    num: '01',
    lead: "You don't schedule your own speech.",
    body: (
      <>
        The <Link href="/leadership#vp-of-education" className={officerLinkClass}>VPE</Link> assigns your Icebreaker date. You&apos;ll typically give it about 6 to 8 weeks after joining — enough time to attend a few meetings, find your mentor, and prepare.
      </>
    ),
  },
  {
    num: '02',
    lead: "You don't choose your evaluator.",
    body: (
      <>
        The <Link href="/leadership#vp-of-education" className={officerLinkClass}>VPE</Link> assigns one to you. Your evaluator is an experienced member who will give you both a verbal evaluation during the meeting and written feedback afterward.
      </>
    ),
  },
  {
    num: '03',
    lead: 'What you should do:',
    body:
      'After the meeting, sit down with your evaluator to go over their notes. This conversation is often more valuable than the evaluation itself.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 md:items-end mb-10 md:mb-12">
          <div>
            <h2 className="font-extrabold text-[#1C1C1C] text-2xl md:text-3xl leading-[1.15] tracking-tight">
              How it works at Gilbert.
            </h2>
          </div>
          <p className="text-[#1C1C1C]/70 text-lg leading-relaxed max-w-xl">
            Here&apos;s where Gilbert does things a little differently from what you might read in Pathways or other Toastmasters materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <div
              key={item.num}
              className="border border-black/10 rounded-md px-6 py-7 md:py-8"
            >
              <h3 className="font-bold text-[#1C1C1C] text-xl md:text-[22px] leading-tight tracking-tight mb-3">
                {item.lead}
              </h3>
              <p className="text-[#1C1C1C]/70 text-[15px] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
