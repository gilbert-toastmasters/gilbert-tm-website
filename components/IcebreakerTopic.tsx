const STARTERS = [
  'Where are you from?',
  'What do you do for work?',
  'What brought you to Toastmasters?',
  'What are your hobbies and interests?',
  "What's an interesting fact about you?",
  'What do you hope to achieve in Toastmasters?',
  'A memorable story from your life.',
]

const FORD_ITEMS = [
  { letter: 'F', name: 'Family', description: 'where you come from' },
  { letter: 'O', name: 'Occupation', description: 'what you do all day' },
  { letter: 'R', name: 'Recreation', description: 'what you do for fun' },
  { letter: 'D', name: 'Dream', description: 'where you want to go' },
]

const OTHER_APPROACHES = [
  {
    name: 'Three Things',
    body: 'Three moments or experiences that shaped who you are today, and walk through each one.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 3 21 8 12 13 3 8 12 3" />
        <polyline points="3 13 12 18 21 13" />
        <polyline points="3 17 12 22 21 17" />
      </svg>
    ),
  },
  {
    name: 'Storytelling',
    body: 'Focus on one meaningful story that reveals who you are.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: '“Why I’m here”',
    body: 'What brought you to Toastmasters and what you hope to gain.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polygon points="16 8 13 14 8 16 11 10 16 8" />
      </svg>
    ),
  },
  {
    name: 'Chronological',
    body: 'Walk through your journey from childhood to now.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 14" />
      </svg>
    ),
  },
]

const TEXTURE_BG = {
  backgroundColor: '#F8F5F2',
  backgroundImage:
    "linear-gradient(rgba(248, 245, 242, 0.5), rgba(248, 245, 242, 0.5)), url('/images/contour-pattern.svg')",
  backgroundSize: 'auto, 400px 400px',
  backgroundRepeat: 'repeat, repeat',
}

const SECTION_LABEL = 'text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432]'

export default function IcebreakerTopic() {
  return (
    <section className="bg-white pt-20 md:pt-28">
      <div className="max-w-5xl mx-auto px-6 pb-16 md:pb-20">
        <p className={`${SECTION_LABEL} mb-3`}>Your topic</p>
        <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-8">
          What to talk about.
        </h2>

        <p className="text-[#1C1C1C]/80 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl text-pretty">
          The question isn&apos;t &ldquo;what&apos;s the right thing to say?&rdquo; It&apos;s &ldquo;what do I want these people to know about me?&rdquo;
        </p>

        <div className="mb-6">
          <p className={`${SECTION_LABEL} mb-4`}>Some places to start</p>
          <div className="flex flex-wrap gap-2">
            {STARTERS.map((starter) => (
              <span
                key={starter}
                className="inline-flex items-center bg-[#F2DF74] text-[#1C1C1C] text-sm md:text-base px-3 py-1.5 rounded-md leading-snug"
              >
                {starter}
              </span>
            ))}
          </div>
        </div>

        <p className="text-[#1C1C1C]/80 text-base md:text-[17px] leading-relaxed max-w-3xl mb-14 md:mb-16">
          You don&apos;t need to cover all of that. Pick two or three things that feel right and build from there.
        </p>

        <p className={`${SECTION_LABEL} mb-5`}>Frameworks members use</p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-12 md:mb-14 items-stretch">
          <div className="md:col-span-3 bg-[#772432] text-white rounded-xl p-7 md:p-9">
            <p className="text-xs font-[Montserrat] font-bold tracking-[0.18em] uppercase text-[#F2DF74] mb-4">
              Most-used framework
            </p>
            <h3 className="font-extrabold text-white text-4xl md:text-5xl tracking-tight mb-4">
              FORD
            </h3>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              A four-part framework &mdash; one short story for each part. Easy to plan, easy to remember on stage.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {FORD_ITEMS.map((item) => (
                <div key={item.letter} className="bg-white/10 rounded-lg p-4 md:p-5">
                  <p className="font-extrabold text-[#F2DF74] text-2xl leading-none mb-3">
                    {item.letter}
                  </p>
                  <p className="font-bold text-white text-base leading-tight mb-1">
                    {item.name}
                  </p>
                  <p className="text-white/70 text-sm leading-snug">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <article className="md:col-span-2 bg-white border border-black/10 rounded-lg p-7 flex flex-col">
            <div className="font-bold text-[#F2DF74] text-5xl leading-none mb-3">
              &ldquo;
            </div>
            <blockquote className="text-[#1C1C1C] text-[17px] leading-relaxed flex-1 mb-5">
              I picked three cities I lived in: Paris, where I grew up, New York, where I went to college, and Gilbert, where I live now.
            </blockquote>
            <div className="flex items-center gap-3 border-t border-black/10 pt-4">
              <div className="w-11 h-11 rounded-full bg-[#772432] text-white font-bold text-sm flex items-center justify-center shrink-0">
                JD
              </div>
              <div>
                <p className="font-bold text-base text-[#1C1C1C] leading-tight">John D</p>
                <p className="text-xs text-[#1C1C1C]/60 mt-0.5">Imaginary Icebreaker</p>
              </div>
            </div>
          </article>
        </div>

        <p className={`${SECTION_LABEL} mb-5`}>Or try one of these</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {OTHER_APPROACHES.map((a) => (
            <div
              key={a.name}
              className="border border-black/10 rounded-md px-5 py-6"
            >
              <div className="w-9 h-9 text-[#772432] mb-3">
                {a.icon}
              </div>
              <h3 className="font-bold text-[#1C1C1C] text-lg leading-tight tracking-tight mb-2">
                {a.name}
              </h3>
              <p className="text-[#1C1C1C]/70 text-sm leading-relaxed">
                {a.body}
              </p>
            </div>
          ))}
        </div>

        <p className="font-bold text-[#1C1C1C] text-lg md:text-xl leading-relaxed">
          There&apos;s no prescribed framework at Gilbert Toastmasters. Your speech, your call.
        </p>
      </div>

      <div style={TEXTURE_BG} className="py-16 md:py-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <p className={`${SECTION_LABEL} mb-3`}>Example</p>
              <h3 className="font-extrabold text-[#1C1C1C] text-3xl md:text-4xl leading-tight tracking-tight mb-4">
                Watch an Icebreaker
              </h3>
              <p className="text-[#1C1C1C]/75 text-base md:text-lg leading-relaxed">
                Icebreaker by David M, given at Gilbert Toastmasters in December 2023.
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-md overflow-hidden border border-black/10 shadow-lg bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/J07kNEFJXhc"
                title="Icebreaker speech example"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
