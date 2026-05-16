const STARTERS = [
  'Where are you from?',
  'What do you do for work?',
  'What brought you to Toastmasters?',
  'What are your hobbies and interests?',
  "What's an interesting fact about you?",
  'What do you hope to achieve in Toastmasters?',
  'A memorable story from your life.',
]

const APPROACHES = [
  {
    name: 'FORD',
    body: 'A four-part framework — one short story for each:',
    ford: [
      { letter: 'F', label: 'Family' },
      { letter: 'O', label: 'Occupation' },
      { letter: 'R', label: 'Recreation — what you do for fun' },
      { letter: 'D', label: 'Dream — where you want to go' },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="9" y1="10" x2="9" y2="20" />
      </svg>
    ),
  },
  {
    name: 'Three Things',
    body: 'Pick three moments or experiences that shaped who you are today, and walk through each one.',
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
    body: 'My journey from childhood to now.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 14" />
      </svg>
    ),
  },
  {
    name: 'A Day in My Life',
    body: 'Walk us through a typical day — what you do, who you spend it with, what makes it yours.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.9" y1="4.9" x2="7" y2="7" />
        <line x1="17" y1="17" x2="19.1" y2="19.1" />
        <line x1="4.9" y1="19.1" x2="7" y2="17" />
        <line x1="17" y1="7" x2="19.1" y2="4.9" />
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

export default function IcebreakerTopic() {
  return (
    <section className="bg-white pt-20 md:pt-28">
      <div className="max-w-4xl mx-auto px-6 pb-16 md:pb-20">
        <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
          Your topic
        </p>
        <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-8">
          What to Talk About
        </h2>

        <p className="text-[#1C1C1C]/80 text-lg md:text-xl leading-relaxed mb-10">
          The question isn&apos;t &ldquo;what&apos;s the right thing to say?&rdquo; It&apos;s &ldquo;what do I want these people to know about me?&rdquo;
        </p>

        <div className="bg-[#F5F5F5] border-l-4 border-[#F2DF74] rounded-r-md p-6 md:p-8 mb-10">
          <p className="font-bold text-[#1C1C1C] text-base md:text-lg mb-4">
            Some places to start:
          </p>
          <ul className="space-y-2">
            {STARTERS.map((starter) => (
              <li key={starter} className="flex items-start gap-3 text-[#1C1C1C]/85 text-base md:text-[17px] leading-relaxed">
                <span className="mt-2 block w-2 h-2 rounded-full bg-[#772432] shrink-0" aria-hidden="true" />
                <span>{starter}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-[#1C1C1C]/80 text-base md:text-[17px] leading-relaxed mb-6">
          You don&apos;t need to cover all of that. Pick two or three things that feel right and build from there.
        </p>

        <p className="text-[#1C1C1C]/80 text-base md:text-[17px] leading-relaxed mb-8">
          Members approach this differently. Some use the FORD framework. Some pick three moments that shaped them. Some tell one story that captures something essential. Some talk about why they walked through the door in the first place. Some walk through their life chronologically, or describe a typical day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {APPROACHES.map((a) => (
            <div
              key={a.name}
              className="border border-black/10 rounded-md px-5 py-6"
            >
              <div className="w-10 h-10 text-[#772432] mb-4">
                {a.icon}
              </div>
              <h3 className="font-bold text-[#1C1C1C] text-lg leading-tight tracking-tight mb-2">
                {a.name}
              </h3>
              <p className="text-[#1C1C1C]/70 text-sm leading-relaxed">
                {a.body}
              </p>
              {'ford' in a && a.ford ? (
                <ul className="mt-3 space-y-1.5">
                  {a.ford.map((item) => (
                    <li
                      key={item.letter}
                      className="flex items-start gap-2 text-[#1C1C1C]/80 text-sm leading-relaxed"
                    >
                      <span className="font-bold text-[#772432] w-4 shrink-0">{item.letter}</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
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
              <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
                Example
              </p>
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
