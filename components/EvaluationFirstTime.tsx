const TIPS = [
  {
    rule: 'Use a structure.',
    body: "The Sandwich or What I Saw, What I Heard, What I Felt are the easiest starting points. Having a framework means you're not staring at a blank notepad wondering what to say.",
  },
  {
    rule: 'Write notes during the speech.',
    body: "Don't try to remember everything. Jot down moments as they happen — a phrase that worked, a gesture that distracted, a moment where the speaker connected with the room.",
  },
  {
    rule: "You don't need to cover everything.",
    body: 'Pick two or three things that stood out and go deep on those. A focused evaluation is more useful than a list of ten surface-level observations.',
  },
  {
    rule: 'Be specific.',
    body: 'Not "good eye contact" — but "you made eye contact with the left side of the room for most of the speech; try including the right side next time." Specifics are what speakers remember and can actually act on.',
  },
  {
    rule: 'Watch the evaluators you admire.',
    body: "There's no secret formula to becoming a great evaluator. It comes from experience and from being inspired by the people who do it well. Pay attention to how they structure their feedback, how they balance praise and suggestions, and how they hold the room while doing it.",
  },
  {
    rule: 'Talk to the whole room.',
    body: "You're standing in front of everyone. This is a speech. Make eye contact, project your voice, and deliver your evaluation like it matters — because it does.",
  },
]

export default function EvaluationFirstTime() {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
          First time evaluating
        </p>
        <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-6">
          Tips for First-Time Evaluators
        </h2>
        <p className="text-[#1C1C1C]/85 text-lg md:text-xl leading-relaxed mb-10">
          You&apos;re going to be nervous. That&apos;s normal. Here&apos;s what to keep in mind.
        </p>

        <ul className="space-y-6">
          {TIPS.map((tip) => (
            <li key={tip.rule} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-[#006094] mt-1 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-[#1C1C1C]/85 text-base md:text-[17px] leading-relaxed">
                <span className="font-bold text-[#1C1C1C]">{tip.rule}</span>{' '}
                {tip.body}
              </span>
            </li>
          ))}
        </ul>

        <div className="bg-white border-l-4 border-[#F2DF74] rounded-r-md p-6 md:p-8 mt-12 md:mt-14">
          <p className="font-bold text-[#1C1C1C] text-lg md:text-xl leading-relaxed mb-4">
            Still not sure what to say?
          </p>
          <p className="text-[#1C1C1C]/85 text-base md:text-[17px] leading-relaxed mb-3">
            Ask yourself two questions: Did I learn something from that speech? Was I inspired by something in that speech? The answers are your evaluation.
          </p>
          <p className="text-[#1C1C1C]/85 text-base md:text-[17px] leading-relaxed">
            You have <strong>2 to 3 minutes and 30 seconds</strong>. That&apos;s enough time to say something meaningful without dragging. Practice staying within that window.
          </p>
        </div>
      </div>
    </section>
  )
}
