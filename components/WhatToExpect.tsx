'use client'

import Image from 'next/image'
import { ReactNode, useEffect, useRef, useState } from 'react'

export type Step = {
  num?: string
  title: string
  body: string
}

type Props = {
  bgImage: string
  bgImagePosition?: string
  eyebrow: string
  heading: ReactNode
  description: ReactNode
  steps: Step[]
  animate?: boolean
}

const COLS_CLASS: Record<number, string> = {
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
}

export default function WhatToExpect({
  bgImage,
  bgImagePosition = 'center 25%',
  eyebrow,
  heading,
  description,
  steps,
  animate = true,
}: Props) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(!animate)

  useEffect(() => {
    if (!animate) return
    const el = gridRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [animate])

  const colsClass = COLS_CLASS[steps.length] ?? 'md:grid-cols-4'

  return (
    <section className="bg-[#F5F5F5]">
      <div className="relative h-[300px] md:h-[460px] overflow-hidden">
        <Image
          src={bgImage}
          alt=""
          aria-hidden="true"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: bgImagePosition }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-24 md:-mt-40 relative z-10 pb-20 md:pb-28">
        <div className="bg-white rounded-lg shadow-xl px-6 md:px-12 py-10 md:py-14">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 md:items-end mb-10 md:mb-12">
            <div>
              <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
                {eyebrow}
              </p>
              <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight">
                {heading}
              </h2>
            </div>
            <p className="text-[#1C1C1C]/70 text-lg leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          <div ref={gridRef} className={`grid grid-cols-1 ${colsClass} border-t border-b border-black/10`}>
            {steps.map((step, i) => (
              <div
                key={step.title}
                style={{ transitionDelay: visible ? `${i * 250}ms` : '0ms' }}
                className={
                  'px-6 py-7 md:py-8 transition-all duration-700 ease-out ' +
                  (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4') +
                  ' ' +
                  (i < steps.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-black/10'
                    : '')
                }
              >
                {step.num && (
                  <div className="flex items-center gap-3 mb-4">
                    <span className="block w-7 h-1 bg-[#F2DF74]" />
                    <span className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432]">
                      {step.num}
                    </span>
                  </div>
                )}
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
