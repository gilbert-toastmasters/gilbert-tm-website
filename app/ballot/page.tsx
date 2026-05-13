'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ballotApi,
  CATEGORIES,
  CATEGORY_LABELS,
  type Category,
  type Meeting,
  type Vote,
} from '@/lib/ballotApi'

export default function BallotPage() {
  const [meeting, setMeeting] = useState<Meeting | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [vote, setVote] = useState<Vote>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    ballotApi
      .getMeeting()
      .then(setMeeting)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await ballotApi.submitVote(vote)
      setSubmitted(true)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main>
      <Header />
      <section className="bg-white min-h-[calc(100vh-200px)]">
        <div className="max-w-[600px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-4">
            Ballot
          </p>
          <h1 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
            Cast your vote.
          </h1>

          {loading && <p className="text-[#1C1C1C]/70">Loading…</p>}

          {!loading && !meeting && (
            <div className="border border-black/10 rounded-lg p-6 bg-[#F5F5F5]">
              <p className="text-[#1C1C1C]/80">
                No meeting is open for voting right now. Check with the General
                Evaluator.
              </p>
            </div>
          )}

          {!loading && meeting && meeting.status === 'closed' && (
            <div className="border border-black/10 rounded-lg p-6 bg-[#F5F5F5]">
              <p className="text-[#1C1C1C]/80">
                Voting is closed for this meeting. Winners will be announced
                shortly.
              </p>
            </div>
          )}

          {!loading && meeting && meeting.status === 'open' && submitted && (
            <div className="border border-[#F2DF74] bg-[#FEF7D6] rounded-lg p-6">
              <p className="text-[#1C1C1C] font-bold text-lg mb-2">
                Vote recorded.
              </p>
              <p className="text-[#1C1C1C]/80">
                Thanks for voting. Winners will be announced at the end of the
                meeting.
              </p>
            </div>
          )}

          {!loading && meeting && meeting.status === 'open' && !submitted && (
            <form onSubmit={onSubmit} className="space-y-8">
              <p className="text-[#1C1C1C]/80 leading-relaxed">
                Pick one nominee per category. Leave a category blank if you
                don&apos;t want to vote for it.
              </p>

              {CATEGORIES.map((cat) => (
                <CategoryPicker
                  key={cat}
                  category={cat}
                  nominees={meeting.nominees[cat] || []}
                  selected={vote[cat]}
                  onChange={(name) =>
                    setVote((v) => ({ ...v, [cat]: name || undefined }))
                  }
                />
              ))}

              {error && (
                <p className="text-[#772432] text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#772432] text-white font-bold uppercase tracking-wider text-base px-6 py-4 rounded-full hover:bg-[#5a1a26] transition-colors disabled:opacity-50"
              >
                {submitting ? 'Submitting…' : 'Submit ballot'}
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}

function CategoryPicker({
  category,
  nominees,
  selected,
  onChange,
}: {
  category: Category
  nominees: string[]
  selected?: string
  onChange: (name: string) => void
}) {
  return (
    <fieldset>
      <legend className="font-extrabold text-[#1C1C1C] text-xl md:text-2xl mb-3">
        {CATEGORY_LABELS[category]}
      </legend>
      {nominees.length === 0 ? (
        <p className="text-[#1C1C1C]/60 text-sm italic">
          No nominees in this category.
        </p>
      ) : (
        <div className="space-y-2">
          {nominees.map((name) => (
            <label
              key={name}
              className="flex items-center gap-3 p-3 border border-black/10 rounded-lg cursor-pointer hover:bg-[#F5F5F5]"
            >
              <input
                type="radio"
                name={category}
                value={name}
                checked={selected === name}
                onChange={() => onChange(name)}
                className="w-5 h-5 accent-[#772432]"
              />
              <span className="text-[#1C1C1C]">{name}</span>
            </label>
          ))}
          <label className="flex items-center gap-3 p-3 border border-dashed border-black/15 rounded-lg cursor-pointer hover:bg-[#F5F5F5]">
            <input
              type="radio"
              name={category}
              value=""
              checked={!selected}
              onChange={() => onChange('')}
              className="w-5 h-5 accent-[#772432]"
            />
            <span className="text-[#1C1C1C]/60 italic">Skip this category</span>
          </label>
        </div>
      )}
    </fieldset>
  )
}
