'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function WhoWeAre() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
              Who we are
            </p>
            <h2
              ref={headingRef}
              className={
                'font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-6 transition-all duration-700 ease-out ' +
                (visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12')
              }
            >
              50+ members.
              <br />
              Every Thursday.
              <br />
              One library.
            </h2>
            <p className="text-[#1C1C1C]/70 text-base md:text-[17px] leading-relaxed mb-4">
              Members from all backgrounds, different ages, different countries,
              different skill levels. We meet every Thursday in a junior high
              library and take speaking seriously without taking ourselves too
              seriously.
            </p>
            <p className="text-[#1C1C1C]/70 text-base md:text-[17px] leading-relaxed mb-8">
              We compete at district contests. We cheer loudly for each other.
              And we give the kind of honest, useful feedback that actually
              helps people improve.
            </p>
            <Link
              href="/leadership"
              className="inline-block rounded-full border border-[#1C1C1C] text-[#1C1C1C] font-semibold text-sm px-6 py-3 hover:bg-[#1C1C1C] hover:text-[#F2DF74] transition-colors"
            >
              Meet the officer team
            </Link>
          </div>

          {/* Right — Photo collage */}
          <div className="grid grid-cols-[3fr_2fr] grid-rows-[180px_180px] md:grid-rows-[220px_220px] gap-3">
            <div className="row-span-2 overflow-hidden rounded-md">
              <Image
                src="/images/who-IMG_8928.webp"
                alt="A full Thursday meeting in the Greenfield library"
                width={1000}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-md">
              <Image
                src="/images/who-IMG_1036.webp"
                alt="Members at a Gilbert Toastmasters meeting"
                width={1000}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-md">
              <Image
                src="/images/who-IMG_9154.webp"
                alt="Members at a Gilbert Toastmasters meeting"
                width={1000}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
