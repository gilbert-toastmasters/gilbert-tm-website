'use client'

import { useEffect, useRef, useState } from 'react'

type Stat =
  | { kind: 'count'; target: number; suffix: string; label: string }
  | { kind: 'fade'; display: string; label: string }

const STATS: Stat[] = [
  { kind: 'fade', display: '1978', label: 'Meeting every Thursday since' },
  { kind: 'count', target: 50, suffix: '+', label: 'Members from across the world' },
  { kind: 'count', target: 15, suffix: '', label: "Years President's Distinguished" },
  { kind: 'fade', display: '499', label: 'Chartered Toastmasters Club number' },
]

function CountUp({
  target,
  suffix,
  start,
  delay,
}: {
  target: number
  suffix: string
  start: boolean
  delay: number
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf = 0
    const startDelay = setTimeout(() => {
      const startTime = performance.now()
      const duration = 1500
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(target * eased))
        if (progress < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(startDelay)
      cancelAnimationFrame(raf)
    }
  }, [target, start, delay])

  return (
    <>
      {value}
      {suffix}
    </>
  )
}

export default function Stats() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = gridRef.current
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
    <section className="bg-[#F5F5F5] py-24 md:py-32 border-y border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
          Our track record
        </p>
        <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-12 md:mb-14">
          The numbers speak for themselves.
        </h2>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {STATS.map((stat, i) => {
            const delay = i * 200
            const key = stat.kind === 'fade' ? stat.display : `${stat.target}${stat.suffix}`
            return (
              <div key={key}>
                <div
                  style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
                  className={
                    'font-[Montserrat] font-extrabold text-[#772432] text-6xl md:text-[76px] leading-none tracking-tight transition-all duration-700 ease-out ' +
                    (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2')
                  }
                >
                  {stat.kind === 'count' ? (
                    <CountUp
                      target={stat.target}
                      suffix={stat.suffix}
                      start={visible}
                      delay={delay}
                    />
                  ) : (
                    stat.display
                  )}
                </div>
                <p className="text-[#1C1C1C]/70 text-base mt-3 max-w-[220px]">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
