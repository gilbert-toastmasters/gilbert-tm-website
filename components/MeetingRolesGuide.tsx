'use client'

import { useEffect, useRef, useState } from 'react'
import { ROLES } from './meetingRolesData'

export default function MeetingRolesGuide() {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)

  const openRole = (key: string, target?: HTMLElement | null) => {
    if (target) previousFocusRef.current = target
    setActiveKey(key)
    if (typeof window !== 'undefined' && window.location.hash !== `#${key}`) {
      history.replaceState(null, '', `#${key}`)
    }
  }

  const closeRole = () => {
    setActiveKey(null)
    previousFocusRef.current?.focus()
    if (typeof window !== 'undefined' && window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.slice(1)
      if (!hash) return
      if (ROLES.some((r) => r.key === hash)) setActiveKey(hash)
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [])

  useEffect(() => {
    if (!activeKey) return

    closeBtnRef.current?.focus()
    if (modalContentRef.current) modalContentRef.current.scrollTop = 0

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeRole()
    }
    document.addEventListener('keydown', onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey])

  const active = ROLES.find((r) => r.key === activeKey) ?? null

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
          Functionary &amp; advanced
        </p>
        <h1 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-6">
          Meeting roles.
        </h1>
        <div className="space-y-5 text-[#1C1C1C]/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
          <p>
            Every meeting at Gilbert Toastmasters has a team of people making it run. These aren&apos;t busywork assignments &mdash; each role builds a different skill.
          </p>
          <p>
            Here&apos;s what each role involves and how we do it at Gilbert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-14">
          {/* Left list */}
          <aside>
            <h2 className="font-[Montserrat] font-bold text-[#772432] text-sm tracking-[0.14em] uppercase mb-4">
              All roles
            </h2>
            <ul className="space-y-1">
              {ROLES.map((r) => (
                <li key={r.key}>
                  <button
                    onClick={(e) => openRole(r.key, e.currentTarget)}
                    className="w-full text-left px-3 py-2 rounded text-[#1C1C1C] hover:bg-[#F5F5F5] hover:text-[#772432] transition-colors font-semibold text-[15px]"
                  >
                    {r.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ROLES.map((r) => (
              <button
                key={r.key}
                onClick={(e) => openRole(r.key, e.currentTarget)}
                className="group text-left bg-white border border-black/10 rounded-md p-5 hover:border-[#772432] hover:shadow-md transition-all flex flex-col"
              >
                <h3 className="font-bold text-[#1C1C1C] text-lg leading-tight mb-2 group-hover:text-[#772432] transition-colors">
                  {r.title}
                </h3>
                {r.duration && (
                  <span className="self-start inline-flex items-center gap-1.5 bg-[#F2DF74] text-[#1C1C1C] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="12 7 12 12 15 14" />
                    </svg>
                    {r.duration}
                  </span>
                )}
                <p className="text-[#1C1C1C]/70 text-sm leading-relaxed flex-1">
                  {r.teaser}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[#772432] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more
                  <span aria-hidden="true">→</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-[fadeIn_0.15s_ease-out]"
          onClick={closeRole}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="role-modal-title"
            onClick={(e) => e.stopPropagation()}
            ref={modalContentRef}
            className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          >
            <button
              ref={closeBtnRef}
              onClick={closeRole}
              aria-label="Close"
              className="sticky top-4 float-right mr-4 w-10 h-10 rounded-full flex items-center justify-center text-[#1C1C1C] hover:bg-[#F5F5F5] transition-colors z-10 bg-white/80 backdrop-blur"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="p-8 md:p-10">
              <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
                Meeting role
              </p>
              <h2
                id="role-modal-title"
                className="font-extrabold text-[#1C1C1C] text-3xl md:text-4xl leading-tight tracking-tight mb-3"
              >
                {active.title}
              </h2>
              {active.duration && (
                <p className="inline-flex items-center gap-1.5 bg-[#F2DF74] text-[#1C1C1C] text-xs font-semibold px-2.5 py-1 rounded-full mb-6">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 14" />
                  </svg>
                  {active.duration}
                </p>
              )}
              <div className="space-y-5 text-[#1C1C1C]/85 text-base md:text-[17px] leading-relaxed">
                {active.sections.map((s, i) => (
                  <div key={i}>
                    {s.label && <p className="font-bold text-[#1C1C1C] mb-1">{s.label}</p>}
                    <div>{s.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
