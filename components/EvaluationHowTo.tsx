const STRUCTURES = [
  {
    name: 'The Sandwich',
    body: 'Start with what worked. Then what to improve. Close with something positive. Simple, reliable, and easy to follow for your first few evaluations.',
  },
  {
    name: 'What I Saw, What I Heard, What I Felt',
    body: "Three lenses. What did body language and movement communicate? What stood out in their words and voice? What emotional response did the speech create? Forces you to be specific.",
  },
  {
    name: 'M.A.R.S.',
    body: "Message: did we understand what the speaker wanted to say? Amazing: what did the speaker do well? Recommendations: where's the opportunity for growth? Summarize: wrap it up. Clean and thorough.",
  },
  {
    name: '3-2-1',
    body: 'Three things the speaker did well. Two things to work on. One thing the speaker was amazing at. Fun to deliver, easy for the audience to follow.',
  },
  {
    name: 'Structure, Content, Delivery',
    body: 'A more technical breakdown. Best suited for advanced speakers who want detailed feedback on the mechanics of their speech.',
  },
]

export default function EvaluationHowTo() {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mb-12 md:mb-16">
          <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
            Pick a structure
          </p>
          <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-6">
            How to Give a Good Evaluation
          </h2>
          <p className="text-[#1C1C1C]/85 text-lg md:text-xl leading-relaxed">
            You don&apos;t have to wing it. Here are five approaches that work well at Gilbert. Use whichever fits the speech and your style — the structure is there to help you organize your thoughts, not to box you in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {STRUCTURES.map((s) => (
            <div
              key={s.name}
              className="bg-white border border-black/10 rounded-md px-6 py-7"
            >
              <h3 className="font-bold text-[#1C1C1C] text-xl leading-tight tracking-tight mb-3">
                {s.name}
              </h3>
              <div className="w-12 h-1 bg-[#F2DF74] mb-4" aria-hidden />
              <p className="text-[#1C1C1C]/75 text-base leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
