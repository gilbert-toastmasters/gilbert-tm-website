'use client'

import { useEffect, useState, useCallback } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ballotApi,
  CATEGORIES,
  CATEGORY_LABELS,
  type Category,
  type Meeting,
  type Tally,
} from '@/lib/ballotApi'

const PASSWORD_KEY = 'ballot-admin-password'
const POLL_MS = 4000

type Member = { name: string; email?: string }

export default function BallotAdminPage() {
  const [password, setPassword] = useState<string | null>(null)
  const [members, setMembers] = useState<Member[]>([])
  const [meeting, setMeeting] = useState<Meeting | null>(null)
  const [tally, setTally] = useState<Tally | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPassword(localStorage.getItem(PASSWORD_KEY))
    fetch('/data/members.json')
      .then((r) => r.json())
      .then(setMembers)
      .catch(() => setMembers([]))
  }, [])

  const refresh = useCallback(async () => {
    if (!password) return
    try {
      const r = await ballotApi.getResults(password)
      setMeeting(r?.meeting ?? null)
      setTally(r?.tally ?? null)
      setError(null)
    } catch (e) {
      const err = e as Error & { status?: number }
      if (err.status === 401) {
        localStorage.removeItem(PASSWORD_KEY)
        setPassword(null)
      } else {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }, [password])

  useEffect(() => {
    if (!password) {
      setLoading(false)
      return
    }
    refresh()
    const id = setInterval(refresh, POLL_MS)
    return () => clearInterval(id)
  }, [password, refresh])

  if (!password) {
    return (
      <Shell>
        <PasswordPrompt
          onSubmit={(pw) => {
            localStorage.setItem(PASSWORD_KEY, pw)
            setPassword(pw)
          }}
        />
      </Shell>
    )
  }

  if (loading) {
    return (
      <Shell>
        <p className="text-[#1C1C1C]/70">Loading…</p>
      </Shell>
    )
  }

  return (
    <Shell>
      {error && <p className="text-[#772432] text-sm mb-4">{error}</p>}

      {!meeting && (
        <NewMeetingForm
          members={members}
          onCreate={async (date, nominees) => {
            const m = await ballotApi.openMeeting(password, date, nominees)
            setMeeting(m)
            setTally({ speaker: {}, evaluator: {}, tableTopics: {} })
          }}
        />
      )}

      {meeting && (
        <LiveMeetingView
          meeting={meeting}
          tally={tally}
          onClose={async () => {
            try {
              const r = await ballotApi.closeMeeting(password)
              setMeeting(r.meeting)
              setTally(r.tally)
            } catch (e) {
              setError((e as Error).message)
            }
          }}
          onReset={async () => {
            if (!confirm('Clear current meeting and start fresh?')) return
            try {
              await ballotApi.resetMeeting(password)
              setMeeting(null)
              setTally(null)
            } catch (e) {
              setError((e as Error).message)
            }
          }}
          onLogout={() => {
            localStorage.removeItem(PASSWORD_KEY)
            setPassword(null)
          }}
        />
      )}
    </Shell>
  )
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <section className="bg-white min-h-[calc(100vh-200px)]">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-4">
            Ballot · Admin
          </p>
          <h1 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.05] tracking-tight mb-10">
            Run the meeting ballot.
          </h1>
          {children}
        </div>
      </section>
      <Footer />
    </main>
  )
}

function PasswordPrompt({ onSubmit }: { onSubmit: (pw: string) => void }) {
  const [pw, setPw] = useState('')
  const [err, setErr] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        if (!pw) return
        setBusy(true)
        setErr(null)
        try {
          await ballotApi.getResults(pw)
          onSubmit(pw)
        } catch (e) {
          const error = e as Error & { status?: number }
          setErr(
            error.status === 401
              ? 'Wrong password. Try again.'
              : error.message,
          )
          setBusy(false)
        }
      }}
      className="space-y-4 max-w-sm"
    >
      <label className="block">
        <span className="block font-bold text-[#1C1C1C] mb-2">
          Admin password
        </span>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="w-full border border-black/15 rounded-lg px-4 py-3"
          autoFocus
        />
      </label>
      {err && <p className="text-[#772432] text-sm">{err}</p>}
      <button
        type="submit"
        disabled={busy}
        className="bg-[#772432] text-white font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#5a1a26] disabled:opacity-50"
      >
        {busy ? 'Checking…' : 'Sign in'}
      </button>
    </form>
  )
}

function NewMeetingForm({
  members,
  onCreate,
}: {
  members: Member[]
  onCreate: (
    date: string,
    nominees: Record<Category, string[]>,
  ) => Promise<void>
}) {
  const today = new Date().toISOString().slice(0, 10)
  const [date, setDate] = useState(today)
  const [nominees, setNominees] = useState<Record<Category, string[]>>({
    speaker: [],
    evaluator: [],
    tableTopics: [],
  })
  const [submitting, setSubmitting] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  const toggle = (cat: Category, name: string) => {
    setNominees((n) => ({
      ...n,
      [cat]: n[cat].includes(name)
        ? n[cat].filter((x) => x !== name)
        : [...n[cat], name],
    }))
  }

  const addCustom = (cat: Category, name: string) => {
    if (!name.trim()) return
    setNominees((n) => ({ ...n, [cat]: [...n[cat], name.trim()] }))
  }

  const totalSelected =
    nominees.speaker.length + nominees.evaluator.length + nominees.tableTopics.length

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        setErr(null)
        if (totalSelected === 0) {
          setErr('Pick at least one nominee before opening voting.')
          return
        }
        setSubmitting(true)
        try {
          await onCreate(date, nominees)
        } catch (e) {
          setErr((e as Error).message)
        } finally {
          setSubmitting(false)
        }
      }}
      className="space-y-10"
    >
      <label className="block max-w-xs">
        <span className="block font-bold text-[#1C1C1C] mb-2">
          Meeting date
        </span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-black/15 rounded-lg px-4 py-3"
        />
      </label>

      {CATEGORIES.map((cat) => (
        <NomineePicker
          key={cat}
          category={cat}
          members={members}
          selected={nominees[cat]}
          onToggle={(name) => toggle(cat, name)}
          onAddCustom={(name) => addCustom(cat, name)}
        />
      ))}

      {err && (
        <p className="text-[#772432] text-sm font-bold" role="alert">
          {err}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="bg-[#772432] text-white font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#5a1a26] disabled:opacity-50"
      >
        {submitting ? 'Opening…' : 'Open voting'}
      </button>
    </form>
  )
}

function NomineePicker({
  category,
  members,
  selected,
  onToggle,
  onAddCustom,
}: {
  category: Category
  members: Member[]
  selected: string[]
  onToggle: (name: string) => void
  onAddCustom: (name: string) => void
}) {
  const [custom, setCustom] = useState('')
  return (
    <fieldset className="border border-black/10 rounded-lg p-5">
      <legend className="font-extrabold text-[#1C1C1C] text-xl px-2">
        {CATEGORY_LABELS[category]}
      </legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
        {members.map((m) => (
          <label key={m.name} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={selected.includes(m.name)}
              onChange={() => onToggle(m.name)}
              className="w-4 h-4 accent-[#772432]"
            />
            <span>{m.name}</span>
          </label>
        ))}
      </div>
      {selected.some((n) => !members.find((m) => m.name === n)) && (
        <div className="mt-4 pt-4 border-t border-black/10">
          <p className="text-sm font-bold text-[#1C1C1C] mb-2">
            Custom nominees:
          </p>
          <div className="flex flex-wrap gap-2">
            {selected
              .filter((n) => !members.find((m) => m.name === n))
              .map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center gap-2 bg-[#F5F5F5] px-3 py-1 rounded-full text-sm"
                >
                  {n}
                  <button
                    type="button"
                    onClick={() => onToggle(n)}
                    className="text-[#772432]"
                  >
                    ×
                  </button>
                </span>
              ))}
          </div>
        </div>
      )}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="Add custom name (guest, etc.)"
          className="flex-1 border border-black/15 rounded-lg px-3 py-2 text-sm"
        />
        <button
          type="button"
          onClick={() => {
            onAddCustom(custom)
            setCustom('')
          }}
          className="bg-[#1C1C1C] text-white px-4 py-2 rounded-lg text-sm font-bold"
        >
          Add
        </button>
      </div>
    </fieldset>
  )
}

function LiveMeetingView({
  meeting,
  tally,
  onClose,
  onReset,
  onLogout,
}: {
  meeting: Meeting
  tally: Tally | null
  onClose: () => Promise<void>
  onReset: () => Promise<void>
  onLogout: () => void
}) {
  const isOpen = meeting.status === 'open'
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#1C1C1C]/60">
            Meeting: {meeting.date} ·{' '}
            <span
              className={
                isOpen ? 'text-[#772432] font-bold' : 'text-[#1C1C1C]/60'
              }
            >
              {isOpen ? 'OPEN' : 'CLOSED'}
            </span>
          </p>
        </div>
        <button
          onClick={onLogout}
          className="text-sm text-[#1C1C1C]/60 underline"
        >
          Sign out
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CATEGORIES.map((cat) => (
          <CategoryTally
            key={cat}
            category={cat}
            counts={tally?.[cat] || {}}
            nominees={meeting.nominees[cat] || []}
            isOpen={isOpen}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-3 pt-4 border-t border-black/10">
        {isOpen && (
          <button
            onClick={onClose}
            className="bg-[#772432] text-white font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#5a1a26]"
          >
            Close voting
          </button>
        )}
        <button
          onClick={onReset}
          className="bg-[#1C1C1C] text-white font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-black"
        >
          {isOpen ? 'Cancel meeting' : 'Start new meeting'}
        </button>
      </div>
    </div>
  )
}

function CategoryTally({
  category,
  counts,
  nominees,
  isOpen,
}: {
  category: Category
  counts: Record<string, number>
  nominees: string[]
  isOpen: boolean
}) {
  const all = Array.from(new Set([...nominees, ...Object.keys(counts)]))
  const ranked = all
    .map((name) => ({ name, count: counts[name] || 0 }))
    .sort((a, b) => b.count - a.count)
  const top = ranked[0]?.count ?? 0
  return (
    <div className="border border-black/10 rounded-lg p-5">
      <h2 className="font-extrabold text-[#1C1C1C] text-lg mb-3">
        {CATEGORY_LABELS[category]}
      </h2>
      <ul className="space-y-1">
        {ranked.map(({ name, count }) => {
          const winner = !isOpen && count > 0 && count === top
          return (
            <li
              key={name}
              className={`flex items-center justify-between text-sm py-1 ${
                winner ? 'font-bold text-[#772432]' : 'text-[#1C1C1C]'
              }`}
            >
              <span>
                {winner && '★ '}
                {name}
              </span>
              <span className="tabular-nums">{count}</span>
            </li>
          )
        })}
        {ranked.length === 0 && (
          <li className="text-sm text-[#1C1C1C]/60 italic">No nominees</li>
        )}
      </ul>
    </div>
  )
}
