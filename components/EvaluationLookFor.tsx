const CATEGORIES = [
  {
    name: 'Eye Contact and Gesture',
    items: [
      'Whole-body movement',
      'Moving on purpose, not just pacing',
      'Meaningful gestures that support the message',
      'Scanning the room and talking to the whole audience',
    ],
  },
  {
    name: 'Interest',
    items: [
      'Word choices that surprise or delight',
      'A title that pulls you in',
      'Humor that serves the speech',
      'Staying away from clichés',
      'A strong hook',
      'Use of stage props',
      'Strategic pauses',
      'Audience participation',
    ],
  },
  {
    name: 'Comfort Level',
    items: [
      'Owning the stage',
      'Demeanor and energy',
      'Authenticity and credibility',
      'Confidence without arrogance',
      'Demonstrating authority on the topic',
    ],
  },
  {
    name: 'Vocal Variety',
    items: [
      'Pitch, pace, pauses, and projection',
      'Storytelling through the voice',
      'Emotional connection with the audience',
      'Multi-person conversations and character voices',
      'Matching the vocal style to the content',
    ],
  },
  {
    name: 'Clarity',
    items: [
      'Speech structure: opening, middle, close',
      'Clear and well-articulated language',
      'Easy to follow from start to finish',
      'Style of the speech working with the content',
    ],
  },
]

export default function EvaluationLookFor() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
            What to look for
          </p>
          <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-6">
            The Elements that Make a Speech Work
          </h2>
          <p className="text-[#1C1C1C]/85 text-lg md:text-xl leading-relaxed">
            Not sure what to evaluate? You don&apos;t need to cover all of these. Pick the ones that stood out, for better or worse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="border border-black/10 rounded-md p-6"
            >
              <h3 className="font-bold text-[#1C1C1C] text-lg md:text-xl leading-tight tracking-tight mb-3">
                {cat.name}
              </h3>
              <div className="w-12 h-1 bg-[#F2DF74] mb-4" aria-hidden />
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[#1C1C1C]/80 text-[15px] leading-relaxed"
                  >
                    <span
                      className="mt-[7px] block w-1.5 h-1.5 rounded-full bg-[#772432] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
