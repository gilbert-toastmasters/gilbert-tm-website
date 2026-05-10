export default function IcebreakerWorksheet() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 md:items-center">
          <div>
            <h2 className="font-extrabold text-[#1C1C1C] text-2xl md:text-3xl leading-[1.15] tracking-tight mb-3">
              Want a Worksheet?
            </h2>
            <p className="text-[#1C1C1C]/80 text-base md:text-[17px] leading-relaxed">
              If you&apos;d like a structured template to organize your thoughts, you can download the Toastmasters Ice Breaker Speech Outline Worksheet.
            </p>
          </div>
          <div className="md:justify-self-end">
            <a
              href="/downloads/icebreaker-worksheet.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full bg-[#F2DF74] text-[#1C1C1C] font-semibold text-sm px-6 py-3 hover:brightness-95 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download the worksheet (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
