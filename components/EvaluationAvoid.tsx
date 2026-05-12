const AVOIDS = [
  {
    rule: "Don't retell the speech.",
    body: 'Your role is not "the speaker said this, then that, then this happened." The audience was there. They heard it. Evaluate, don\'t narrate.',
  },
  {
    rule: 'Evaluate the speech, not the speaker.',
    body: "Stay focused on what happened at the lectern. Don't get into personal territory.",
  },
  {
    rule: "Don't be vague.",
    body: '"Great speech" helps nobody. "Your opening story about your grandmother landed because you slowed down and let the silence do the work" — that\'s an evaluation.',
  },
]

export default function EvaluationAvoid() {
  return (
    <section
      className="py-24 md:py-32 border-y border-black/10"
      style={{
        backgroundColor: '#F8F5F2',
        backgroundImage:
          "linear-gradient(rgba(248, 245, 242, 0.5), rgba(248, 245, 242, 0.5)), url('/images/contour-pattern.svg')",
        backgroundSize: 'auto, 400px 400px',
        backgroundRepeat: 'repeat, repeat',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-xl px-7 md:px-12 py-12 md:py-16">
          <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
            What to avoid
          </p>
          <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-10">
            Three Traps to Skip
          </h2>

          <ul className="space-y-6">
            {AVOIDS.map((tip) => (
              <li key={tip.rule} className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-[#772432] mt-1 shrink-0"
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
                <span className="text-[#1C1C1C]/85 text-base md:text-lg leading-relaxed">
                  <span className="font-bold text-[#1C1C1C] block mb-1">{tip.rule}</span>
                  {tip.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
