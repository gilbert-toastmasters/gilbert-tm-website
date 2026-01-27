'use client'

import { useRef, useEffect } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hero-video"
      >
        <source src="/images/hero-video.mov" type="video/quicktime" />
        <source src="/images/hero-video.mov" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <p className="text-lg md:text-xl mb-4 tracking-widest uppercase">
          Listen, Think, and Speak
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Gilbert Toastmasters
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          We bring pompoms to district events.<br />
          We also give really good evaluations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.toastmasters.org/Find-a-Club/00000499-gilbert-toastmasters-club/contact-club?id=b6803e9a-8cd7-ec11-a2fd-005056875f20"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: '#F2DF74', color: '#1C1C1C' }}
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
