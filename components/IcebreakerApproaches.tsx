const APPROACHES = [
  {
    name: 'Chronological',
    body: 'My journey from childhood to now.',
  },
  {
    name: 'Themed',
    body: 'Three things that shaped who I am.',
  },
  {
    name: 'Storytelling',
    body: 'Focus on one meaningful story that reveals who you are.',
  },
  {
    name: '“Why I’m here”',
    body: 'What brought you to Toastmasters and what you hope to gain.',
  },
]

export default function IcebreakerApproaches() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
          Common patterns
        </p>
        <h2 className="font-extrabold text-[#1C1C1C] text-3xl md:text-4xl leading-[1.1] tracking-tight mb-10">
          A few ways to approach it.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {APPROACHES.map((a) => (
            <div
              key={a.name}
              className="bg-white border border-black/10 rounded-md px-6 py-7 md:py-8"
            >
              <h3 className="font-bold text-[#1C1C1C] text-xl md:text-[22px] leading-tight tracking-tight mb-3">
                {a.name}
              </h3>
              <p className="text-[#1C1C1C]/70 text-[15px] leading-relaxed">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
