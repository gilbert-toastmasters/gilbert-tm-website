export default function IcebreakerTopic() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-center">
          {/* Left — text */}
          <div>
            <h2 className="font-extrabold text-[#1C1C1C] text-2xl md:text-3xl leading-[1.15] tracking-tight mb-5">
              What You Talk About Is Up to You
            </h2>
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1C1C1C]/80">
              <p>
                Some members walk through their life story. Some focus on one defining moment. Some talk about why they joined Toastmasters. Some don&apos;t mention Toastmasters at all.
              </p>
              <p>
                A few starting points if you want one: some members like the FORD approach &mdash; Family, Occupation, Recreation, Dreams &mdash; because it&apos;s broad and gives the audience a full picture of who you are. Others prefer a simple three-part structure: opening, body, conclusion. Pathways suggests that structure too, and it works well.
              </p>
              <p>
                But none of these are required. If you have a story you want to tell, tell it. This speech is yours.
              </p>
            </div>
          </div>

          {/* Right — Icebreaker example video */}
          <div className="aspect-video overflow-hidden rounded-md shadow-md">
            <iframe
              src="https://www.youtube.com/embed/J07kNEFJXhc"
              title="Example Icebreaker speech at Gilbert Toastmasters"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
