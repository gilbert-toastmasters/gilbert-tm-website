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
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-8 md:px-16">
        <p className="text-lg md:text-xl mb-4 tracking-widest uppercase">
          Listen, Think, and Speak
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Gilbert Toastmasters
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          We&apos;ve been doing this since 1978. President&apos;s Distinguished every year. But we&apos;re not here to impress you, we&apos;re here to help you get better.
        </p>
      </div>
    </section>
  )
}
