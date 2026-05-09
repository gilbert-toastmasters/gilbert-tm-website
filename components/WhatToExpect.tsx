import Image from 'next/image'

const STEPS = [
  {
    num: 'Step 01',
    title: 'Sign in',
    body: "Grab a name tag at the welcome table. We'll ask how you found us.",
  },
  {
    num: 'Step 02',
    title: 'Meeting starts',
    body:
      "Early on, you'll stand and introduce yourself — your name and what brought you here. Brief and low-pressure.",
  },
  {
    num: 'Step 03',
    title: 'Engage',
    body:
      'Watch members give speeches and feedback. You may be invited to try Table Topics — 1–2 minutes of impromptu speaking. You can pass; most guests give it a shot.',
  },
  {
    num: 'Step 04',
    title: 'Closure',
    body:
      "At the end, we'll ask what you thought. We welcome your honest feedback.",
  },
]

export default function WhatToExpect() {
  return (
    <section className="bg-[#F5F5F5]">
      {/* Photo banner */}
      <div className="relative h-[300px] md:h-[460px] overflow-hidden">
        <Image
          src="/images/whattoexpect-bg.webp"
          alt=""
          aria-hidden="true"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
      </div>

      {/* White card overlapping the photo + extending below */}
      <div className="max-w-6xl mx-auto px-6 -mt-24 md:-mt-40 relative z-10 pb-20 md:pb-28">
        <div className="bg-white rounded-lg shadow-xl px-6 md:px-12 py-10 md:py-14">
          {/* Header */}
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 md:items-end mb-10 md:mb-12">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#772432] mb-3">
                What to expect
              </p>
              <h2 className="font-bold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight">
                Your first
                <br />
                visit, mapped.
              </h2>
            </div>
            <p className="text-[#1C1C1C]/70 text-lg leading-relaxed max-w-xl">
              You&apos;ll watch, you&apos;ll learn, and yes, you might get
              called on. Here&apos;s the full arc of a Thursday meeting from
              the moment you walk in.
            </p>
          </div>

          {/* 4-step grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-black/10">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={
                  'px-6 py-7 md:py-8 ' +
                  (i < STEPS.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-black/10'
                    : '')
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-7 h-1 bg-[#F2DF74]" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#772432]">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-[#1C1C1C] text-xl md:text-[22px] leading-tight tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-[#1C1C1C]/70 text-[15px] leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
