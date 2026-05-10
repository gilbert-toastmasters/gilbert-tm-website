const DOS = [
  {
    rule: 'Be yourself.',
    body: 'Authenticity beats polish every time. Nobody expects a keynote — they want to meet you.',
  },
  {
    rule: 'Tell at least one real story.',
    body: 'Specifics are what people remember. Not "I like to travel" — but where, when, and what happened.',
  },
  {
    rule: 'Practice out loud at least once.',
    body: 'Hearing your speech is different from reading it in your head. Time yourself — aim for the 4-to-6-minute window.',
  },
  {
    rule: 'Bring note cards, not a script.',
    body: 'Bullet points with key words keep you on track without disconnecting you from the room.',
  },
  {
    rule: 'Make eye contact.',
    body: "Look at different people as you speak. You're talking to them, not at the wall.",
  },
]

const DONTS = [
  {
    rule: "Don't apologize for being nervous.",
    body: "Everyone is. The room knows it. They've all been where you are.",
  },
  {
    rule: "Don't read word-for-word.",
    body: 'Memorize your opening and your closing. Know the middle well enough to talk through it naturally.',
  },
]

export default function IcebreakerTips() {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
          Before you go up
        </p>
        <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-10">
          Practical Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <p className="font-[Montserrat] font-bold text-[#006094] text-base tracking-[0.08em] uppercase mb-4">
              Do
            </p>
            <ul className="space-y-5">
              {DOS.map((tip) => (
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
          </div>

          <div>
            <p className="font-[Montserrat] font-bold text-[#772432] text-base tracking-[0.08em] uppercase mb-4">
              Don&apos;t
            </p>
            <ul className="space-y-5">
              {DONTS.map((tip) => (
                <li key={tip.rule} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#772432] mt-1 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="text-[#1C1C1C]/85 text-base md:text-[17px] leading-relaxed">
                    <span className="font-bold text-[#1C1C1C]">{tip.rule}</span>{' '}
                    {tip.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
