'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

type Section = { label?: string; body: ReactNode }
type Role = {
  key: string
  title: string
  teaser: string
  duration?: string
  sections: Section[]
}

const ROLES: Role[] = [
  {
    key: 'toastmaster',
    title: 'Toastmaster',
    teaser: 'Host the meeting. Introduce speakers. Set the tone.',
    sections: [
      { body: "You're the host of the meeting. You run the program, introduce each speaker, and keep the energy moving." },
      {
        label: 'Before the meeting',
        body: 'Confirm all speakers, evaluators, and the Table Topics Master. Prepare a short introduction for each prepared speech that hints at the topic without giving it away.',
      },
      {
        label: 'During the meeting',
        body: 'Welcome the room. Run through the agenda. Introduce each speaker by name, project number, and speech title. Lead applause between segments. Transition smoothly from one part of the meeting to the next.',
      },
      {
        label: 'Reporting',
        body: 'No formal report — your job is to run the meeting itself. Hand off to the General Evaluator when the program is complete.',
      },
    ],
  },
  {
    key: 'general-evaluator',
    title: 'General Evaluator',
    teaser: 'Evaluate the meeting. Run the evaluation portion.',
    duration: 'Report: 2–3 minutes',
    sections: [
      { body: 'You evaluate the meeting as a whole and run the evaluation portion of the program.' },
      {
        label: 'Before the meeting',
        body: 'Confirm who is filling each functionary role (Timer, Ah Counter, Grammarian, Word of the Day, Joke Master, Word of Wisdom) and each speech evaluator.',
      },
      {
        label: 'During the meeting',
        body: (
          <>
            <p>When the Toastmaster hands off, run the evaluation portion of the meeting:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Call each speech evaluator to deliver their evaluation.</li>
              <li>Call each functionary for their report.</li>
              <li>Give your own overall evaluation at the end.</li>
            </ul>
          </>
        ),
      },
      {
        label: 'Reporting',
        body: 'Give your overall meeting evaluation. What worked? What could improve? Comment on time management, energy, transitions, and the overall flow of the meeting.',
      },
    ],
  },
  {
    key: 'evaluator',
    title: 'Evaluator',
    teaser: 'Give a speaker feedback in 2 to 3 minutes.',
    duration: '2:00 – 3:30 (3:00 target)',
    sections: [
      { body: "You give a prepared speech evaluation. The goal is honest, useful feedback that helps the speaker grow." },
      {
        label: 'Timing',
        body: 'Evaluations run 2 to 3:30 minutes. Green at 2:00, yellow at 2:30, red at 3:00, disqualified for awards at 3:30.',
      },
      {
        label: 'Full guide coming',
        body: 'A standalone Evaluator guide will live at /evaluator (in progress).',
      },
    ],
  },
  {
    key: 'word-of-the-day',
    title: 'Word of the Day',
    teaser: 'Pick a word. Everyone tries to use it.',
    duration: 'Report: 60s max',
    sections: [
      { body: "You pick a word. Everyone tries to use it. It's simple and it works." },
      {
        label: 'Choosing the word',
        body: "Pick something that adds to people's vocabulary without making them reach for a dictionary mid-sentence. It should be a real word people could actually use in conversation or at work, not something archaic or obscure. Pick a word you'd enjoy hearing repeated. Examples: persuade, articulate, ephemeral, visionary.",
      },
      {
        label: 'Before the meeting',
        body: 'Write the word in large letters on a piece of paper and tape it where the room can see it.',
      },
      {
        label: 'During the meeting',
        body: 'When the Toastmaster calls on you, announce the word, define it, and use it in a sentence. Let everyone know they should work it into their remarks. Keep a tally of who uses it.',
      },
      {
        label: 'Reporting',
        body: "When the General Evaluator calls on you, share your report. Note who used the word and remind those who didn't that there's a 5-cent fine for skipping it. Guests are exempt.",
      },
    ],
  },
  {
    key: 'ah-counter',
    title: 'Ah Counter',
    teaser: 'Listen for filler words. Click. Build awareness.',
    duration: 'Report: 60s max',
    sections: [
      { body: 'You listen for filler words: "um," "ah," "you know," "so," "like," and repeated sounds like "I, I" or "well, well."' },
      {
        label: 'Before the meeting',
        body: 'Pick up the clicker from the kitty. This is your main tool.',
      },
      {
        label: 'During the meeting',
        body: (
          <>
            <p>When the Toastmaster introduces you, briefly explain your role. Demonstrate the clicker so everyone knows what it sounds like. Let them know about the fine system: 5 cents per filler word, up to 25 cents maximum. Guests are exempt.</p>
            <p className="mt-3">Use the clicker during Table Topics, functionary reports, and general remarks. Don&apos;t use it during prepared speeches or when guests are speaking.</p>
            <p className="mt-3">If someone reacts to the clicker, that&apos;s fine. The goal isn&apos;t to embarrass anyone. It&apos;s to build awareness over time. Encourage speakers to keep going without acknowledging the click.</p>
          </>
        ),
      },
      {
        label: 'Reporting',
        body: "When called on by the General Evaluator, give a quick summary of trends you noticed. Don't read a list of every filler from every speaker. Focus on patterns, not a play-by-play.",
      },
    ],
  },
  {
    key: 'grammarian',
    title: 'Grammarian',
    teaser: 'Catch language wins as much as language slips.',
    duration: 'Report: 60s max',
    sections: [
      { body: 'You listen to how people use language, the good and the not-so-good.' },
      {
        label: 'During the meeting',
        body: "When introduced, briefly explain your role. Then pay attention. You're listening for grammar mistakes, awkward phrasing, and words used incorrectly. But you're also listening for the moments when someone says something particularly well. A sharp turn of phrase. A sentence that landed perfectly. A word choice that elevated the whole speech.",
      },
      {
        label: 'Reporting',
        body: 'When the General Evaluator calls on you, share what you noticed. Mention a few errors and suggest improvements, but also highlight two or three sentences from the meeting that stood out for the right reasons. Quote them. This role is about celebrating strong language as much as correcting weak spots.',
      },
    ],
  },
  {
    key: 'timer',
    title: 'Timer',
    teaser: 'Keep the meeting honest about time.',
    sections: [
      { body: 'You keep the meeting honest about time.' },
      {
        label: 'Before the meeting',
        body: 'Set up your station. Plug in the light tower, grab the remote and test it to make sure it works, and have the bell and tracking sheet ready. Confirm speech lengths with each speaker.',
      },
      {
        label: 'During the meeting',
        body: (
          <>
            <p>When introduced, briefly explain your role and walk through the timing signals. Here&apos;s how timing works at Gilbert:</p>

            <p className="font-bold text-[#1C1C1C] mt-5 mb-2">Table Topics (1 to 2 minutes, grace to 2:30)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Green at 1:00, speaker is in the qualifying range</li>
              <li>Yellow at 1:30</li>
              <li>Red at 2:00</li>
              <li>Blinking red at 2:30, disqualified for awards</li>
              <li>At 3:00, ring the bell</li>
            </ul>
            <p className="mt-2">
              When reporting: give each speaker&apos;s name, whether they qualify, and a short sentence reminding the audience what they talked about. This is the hardest part of the job. Don&apos;t just repeat the question they were asked. Capture what they actually said.
            </p>

            <p className="font-bold text-[#1C1C1C] mt-5 mb-2">Prepared Speeches (varies by project)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Green at the minimum time</li>
              <li>Yellow at the midpoint</li>
              <li>Red at the maximum</li>
              <li>Blinking red 30 seconds past maximum, disqualified</li>
              <li>90 seconds overtime, ring the bell</li>
            </ul>
            <p className="mt-2">Qualification means speaking within 30 seconds above or below the target time.</p>

            <p className="font-bold text-[#1C1C1C] mt-5 mb-2">Evaluations (2 to 3:30 minutes)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Green at 2:00</li>
              <li>Yellow at 2:30</li>
              <li>Red at 3:00</li>
              <li>Blinking red at 3:30, disqualified</li>
              <li>At 4:00, ring the bell</li>
            </ul>

            <p className="font-bold text-[#1C1C1C] mt-5 mb-2">Functionary Reports</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Most reports have a 60-second maximum. Joke Master and Word of Wisdom have 90 seconds.</li>
              <li>Ring the bell once when time is reached.</li>
              <li>If they keep going, ring the bell again after a 30-second grace period.</li>
            </ul>
          </>
        ),
      },
      {
        label: 'Reporting',
        body: 'For prepared speeches and evaluations, just state who qualifies for awards. Keep it efficient.',
      },
    ],
  },
  {
    key: 'joke-master',
    title: 'Joke Master',
    teaser: 'Bring the laugh. Short, clean, fun.',
    duration: '90 seconds max',
    sections: [
      { body: 'You bring the laugh. Keep it short, keep it clean, keep it fun.' },
      {
        label: 'Before the meeting',
        body: 'Find a joke or short anecdote that works for a mixed audience. Practice delivering it without notes. This is a mini performance, not a reading.',
      },
      {
        label: 'During the meeting',
        body: 'When the General Evaluator calls on you, step up and deliver. Use your voice, your timing, your facial expressions. This is your chance to practice the performance side of speaking in a low-pressure way.',
      },
      {
        label: 'Goal',
        body: "Give the room a moment of energy and laughter. Not every joke kills. That's fine. The delivery matters as much as the material.",
      },
    ],
  },
  {
    key: 'word-of-wisdom',
    title: 'Word of Wisdom',
    teaser: 'Share something worth thinking about.',
    duration: '90 seconds max',
    sections: [
      { body: 'You share something worth thinking about.' },
      {
        label: 'Before the meeting',
        body: "Choose a quote, a personal insight, or an idea that resonates with you. Then think about why it matters. The best Words of Wisdom aren't just read. They're explained. What does this idea mean to you? When has it applied in your life? Why should the room care?",
      },
      {
        label: 'During the meeting',
        body: "When called on, deliver your word of wisdom as a short speech. Don't just read a quote and sit down. Connect with the audience. Share the context. Make it yours.",
      },
      {
        label: 'What to aim for',
        body: "Leave the room thinking. The best Words of Wisdom stick with people past the meeting. Choose something you'd want to hear again, and deliver it like it matters.",
      },
    ],
  },
]

export default function MeetingRolesGuide() {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)

  const openRole = (key: string, target: HTMLElement) => {
    previousFocusRef.current = target
    setActiveKey(key)
  }

  const closeRole = () => {
    setActiveKey(null)
    previousFocusRef.current?.focus()
  }

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
