export default function Hero() {
  return (
    <section
      className="relative py-24 md:py-32 text-white"
      style={{ backgroundColor: '#772432' }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg md:text-xl mb-4 opacity-90">Listen. Think. Speak.</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Uncover Your Public Speaking Skill
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join Gilbert Toastmasters and watch your public speaking skills skyrocket.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#meetings"
            className="px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: '#c4a44a', color: '#1C1C1C' }}
          >
            Join a Meeting
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-[#772432] transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
