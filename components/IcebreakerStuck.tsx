const PROMPTS = [
  'Why did you join Toastmasters?',
  "What's one thing people would be surprised to learn about you?",
  'Describe a turning point in your life.',
  'What are you passionate about?',
  'What does a typical day look like for you?',
]

const DOWNLOADS = [
  {
    title: 'Icebreaker Project Guide',
    description: 'The original Competent Communicator manual for Project 1.',
    href: '/downloads/icebreaker-cc-manual.pdf',
  },
  {
    title: 'Icebreaker Worksheet',
    description: 'A fill-in-the-blank worksheet to help shape your speech.',
    href: '/downloads/icebreaker-worksheet.pdf',
  },
  {
    title: 'Icebreaker Evaluation Form',
    description: 'What your evaluator will use during your speech.',
    href: '/downloads/icebreaker-evaluation-form.pdf',
  },
]

export default function IcebreakerStuck() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
          <div>
            <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
              Stuck?
            </p>
            <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-8">
              Start Here.
            </h2>

            <p className="text-[#1C1C1C]/85 text-lg md:text-xl leading-relaxed mb-8">
              If you&apos;re staring at a blank page and can&apos;t figure out what to say, try answering one of these:
            </p>

            <ul className="space-y-3 mb-8">
              {PROMPTS.map((prompt) => (
                <li
                  key={prompt}
                  className="flex items-start gap-3 text-[#1C1C1C] text-base md:text-[17px] leading-relaxed"
                >
                  <span
                    className="mt-2 block w-2 h-2 rounded-full bg-[#772432] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{prompt}</span>
                </li>
              ))}
            </ul>

            <p className="text-[#1C1C1C]/85 text-base md:text-[17px] leading-relaxed italic">
              Sometimes one question is all it takes to unlock the whole speech.
            </p>
          </div>

          <aside className="bg-[#F5F5F5] border-l-4 border-[#F2DF74] rounded-r-md px-6 md:px-7 py-7 md:py-8">
            <p className="text-xs font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-2">
              Downloads
            </p>
            <h3 className="font-bold text-[#1C1C1C] text-xl leading-tight tracking-tight mb-5">
              Helpful PDFs
            </h3>
            <ul className="space-y-4">
              {DOWNLOADS.map((d) => (
                <li key={d.href}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-start gap-3"
                  >
                    <svg
                      className="w-5 h-5 text-[#772432] mt-0.5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>
                      <span className="block font-bold text-[#1C1C1C] text-base leading-tight group-hover:text-[#772432] transition-colors">
                        {d.title}
                      </span>
                      <span className="block text-[#1C1C1C]/70 text-sm leading-relaxed mt-1">
                        {d.description}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
