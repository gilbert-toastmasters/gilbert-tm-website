export default function EvaluationSpeakingRole() {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 bg-white rounded-md shadow-md overflow-hidden">
          {/* Left panel — heading + body */}
          <div className="p-8 md:p-12 flex flex-col justify-center md:border-r-[6px] md:border-[#F2DF74] border-b-[6px] md:border-b-0">
            <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
              Remember
            </p>
            <h2 className="font-extrabold text-[#1C1C1C] text-2xl md:text-3xl leading-[1.15] tracking-tight mb-4">
              This Is a Speaking Role
            </h2>
            <div className="space-y-4 text-[#1C1C1C]/80 text-base md:text-[17px] leading-relaxed">
              <p>
                You&apos;re not just giving feedback. You&apos;re giving a speech about someone else&apos;s speech. Talk to the whole room, not just the speaker. What you say should benefit every person listening. The best evaluators make their evaluations engaging, even entertaining. This is your chance to practice speaking too.
              </p>
              <p>
                Save the detailed, personal feedback for your one-on-one conversation with the speaker after the meeting. The verbal evaluation in front of the club is the highlight reel.
              </p>
            </div>
          </div>

          {/* Right panel — embedded video */}
          <div className="bg-black relative min-h-[260px] md:min-h-0">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/nSoQradJmwQ"
              title="Tips on giving a good Toastmasters evaluation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
