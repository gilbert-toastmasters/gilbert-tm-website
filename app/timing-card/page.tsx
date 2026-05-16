import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Timing Card — Gilbert Toastmasters',
  description:
    'Quick reference for the Timer role. Signals and times for Table Topics, prepared speeches, evaluations, and functionary reports.',
}

type SignalKind = 'green' | 'yellow' | 'red' | 'red-blink' | 'bell'
type ListRow = { signal: SignalKind; time: string; note?: string }
type TableRow = { signal: SignalKind; label: string; values: string[] }
type Section =
  | { kind: 'list'; title: string; subtitle: string; rows: ListRow[] }
  | { kind: 'table'; title: string; subtitle: string; columns: string[]; rows: TableRow[] }

const SECTIONS: Section[] = [
  {
    kind: 'list',
    title: 'Table Topics',
    subtitle: '1:00 – 2:00 (grace to 2:30)',
    rows: [
      { signal: 'green', time: '1:00', note: 'Qualifying range begins' },
      { signal: 'yellow', time: '1:30' },
      { signal: 'red', time: '2:00' },
      { signal: 'red-blink', time: '2:30', note: 'Disqualified for awards' },
      { signal: 'bell', time: '3:00', note: 'Ring the bell' },
    ],
  },
  {
    kind: 'table',
    title: 'Prepared Speeches',
    subtitle: 'Common project lengths at Gilbert',
    columns: ['Milestone', 'Speech (5–7 min)', 'Icebreaker (4–6 min)'],
    rows: [
      { signal: 'green', label: 'Minimum', values: ['5:00', '4:00'] },
      { signal: 'yellow', label: 'Halfway', values: ['6:00', '5:00'] },
      { signal: 'red', label: 'Maximum', values: ['7:00', '6:00'] },
      { signal: 'red-blink', label: '+30 sec', values: ['7:30', '6:30'] },
      { signal: 'bell', label: '+60 sec', values: ['8:00', '7:00'] },
    ],
  },
  {
    kind: 'list',
    title: 'Evaluations',
    subtitle: '2:00 – 3:30',
    rows: [
      { signal: 'green', time: '2:00' },
      { signal: 'yellow', time: '2:30' },
      { signal: 'red', time: '3:00' },
      { signal: 'red-blink', time: '3:30', note: 'Disqualified for awards' },
      { signal: 'bell', time: '4:00', note: 'Ring the bell' },
    ],
  },
  {
    kind: 'list',
    title: 'Functionary Reports',
    subtitle: '60s max — Ah Counter, Grammarian, Word of the Day, Timer',
    rows: [
      { signal: 'bell', time: '1:00', note: 'At max — ring the bell once' },
      { signal: 'bell', time: '1:30', note: '+30s grace — ring again if they keep going' },
    ],
  },
  {
    kind: 'list',
    title: 'Word of Wisdom & Joke Master',
    subtitle: '90s max',
    rows: [
      { signal: 'bell', time: '1:30', note: 'At max — ring the bell once' },
      { signal: 'bell', time: '2:00', note: '+30s grace — ring again if they keep going' },
    ],
  },
]

function Signal({ kind }: { kind: SignalKind }) {
  if (kind === 'green') {
    return (
      <span
        className="inline-block w-6 h-6 rounded-full bg-[#16A34A] shrink-0 print:border print:border-black"
        aria-label="Green light"
      />
    )
  }
  if (kind === 'yellow') {
    return (
      <span
        className="inline-block w-6 h-6 rounded-full bg-[#FACC15] shrink-0 print:border print:border-black"
        aria-label="Yellow light"
      />
    )
  }
  if (kind === 'red') {
    return (
      <span
        className="inline-block w-6 h-6 rounded-full bg-[#DC2626] shrink-0 print:border print:border-black"
        aria-label="Red light"
      />
    )
  }
  if (kind === 'red-blink') {
    return (
      <span className="inline-flex items-center gap-1 shrink-0" aria-label="Red blinking">
        <span className="inline-block w-6 h-6 rounded-full bg-[#DC2626] animate-pulse print:border print:border-black" />
        <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider print:text-black">Blink</span>
      </span>
    )
  }
  return (
    <span className="inline-flex w-6 h-6 items-center justify-center text-[#772432] shrink-0" aria-label="Bell">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
        <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6V11a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z" />
      </svg>
    </span>
  )
}

function SectionCard({ section }: { section: Section }) {
  return (
    <div className="border border-black/10 rounded-md p-5 md:p-6 print:border-black/40 print:break-inside-avoid">
      <h2 className="font-extrabold text-[#1C1C1C] text-2xl md:text-3xl tracking-tight mb-1 print:text-xl">
        {section.title}
      </h2>
      <p className="text-[#1C1C1C]/70 text-sm md:text-base mb-5 print:text-xs">
        {section.subtitle}
      </p>

      {section.kind === 'list' ? (
        <ul className="space-y-3">
          {section.rows.map((row, i) => (
            <li key={i} className="flex items-center gap-4">
              <Signal kind={row.signal} />
              <span className="font-bold text-[#1C1C1C] text-lg md:text-xl tabular-nums print:text-base">
                {row.time}
              </span>
              {row.note ? (
                <span className="text-[#1C1C1C]/75 text-base md:text-[17px] print:text-sm">
                  — {row.note}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-black/15 print:border-black/40">
                <th className="text-left py-2 pr-3 w-12">
                  <span className="sr-only">Signal</span>
                </th>
                {section.columns.map((col) => (
                  <th
                    key={col}
                    className="text-left py-2 px-2 font-bold text-[#1C1C1C] text-sm md:text-base print:text-xs"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-black/5 last:border-0 print:border-black/20"
                >
                  <td className="py-3 pr-3 align-middle">
                    <Signal kind={row.signal} />
                  </td>
                  <td className="py-3 px-2 align-middle font-bold text-[#1C1C1C] text-base md:text-lg print:text-sm">
                    {row.label}
                  </td>
                  {row.values.map((value, j) => (
                    <td
                      key={j}
                      className="py-3 px-2 align-middle font-bold text-[#1C1C1C] text-lg md:text-xl tabular-nums print:text-base"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default function TimingCard() {
  return (
    <main className="bg-white print:bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <section className="pt-16 md:pt-20 pb-12 md:pb-16 print:pt-4 print:pb-4">
        <div className="max-w-3xl mx-auto px-6 print:px-4">
          <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
            Timer reference
          </p>
          <h1 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-4 print:text-3xl">
            Timing Card
          </h1>
          <p className="text-[#1C1C1C]/80 text-base md:text-lg leading-relaxed mb-8 print:text-sm">
            Signals and times at a glance. Bookmark this page or save it to your home screen for quick reference during the meeting.
          </p>

          <div className="space-y-6 md:space-y-8">
            {SECTIONS.map((section) => (
              <SectionCard key={section.title} section={section} />
            ))}
          </div>

          <p className="mt-10 text-[#1C1C1C]/80 text-base md:text-[17px] leading-relaxed print:hidden">
            Full role guide:{' '}
            <Link
              href="/meeting-roles#timer"
              className="text-[#772432] underline hover:no-underline"
            >
              Timer on the Meeting Roles page →
            </Link>
          </p>

          <div className="mt-8 print:hidden text-sm text-[#1C1C1C]/65 leading-relaxed">
            <p className="font-bold text-[#1C1C1C]/85 mb-1">Save it for the meeting:</p>
            <p>
              On iPhone, tap the Share icon in Safari and choose &ldquo;Add to Home Screen&rdquo; for a one-tap shortcut.
              You can also print this page (Share → Print) or save it as a PDF to keep offline.
            </p>
          </div>
        </div>
      </section>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  )
}
