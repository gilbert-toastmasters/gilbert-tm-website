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

export default function IcebreakerTopic() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
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
          Members approach this differently. Some walk through their life chronologically. Some pick a theme &mdash; &ldquo;three things that shaped who I am.&rdquo; Some tell one story that captures something essential about them. Some talk about why they walked through the door in the first place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {APPROACHES.map((a) => (
            <div
              key={a.name}
              className="border border-black/10 rounded-md px-5 py-6"
            >
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
          There&apos;s no prescribed framework at Gilbert. Your speech, your call.
        </p>
      </div>
    </section>
  )
}
