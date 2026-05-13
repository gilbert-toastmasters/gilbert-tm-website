'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'

const PLAYBACK_RATE = 0.5

export default function BlogHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = PLAYBACK_RATE
    }
  }, [])

  return (
    <section className="relative h-[calc(100vh-200px)] min-h-[500px] w-full overflow-hidden">
      <Image
        src="/images/blog-hero-mobile.webp"
        alt="Gilbert Toastmasters club ribbons and awards"
        fill
        priority
        sizes="(max-width: 767px) 100vw, 0px"
        className="object-cover md:hidden"
      />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = PLAYBACK_RATE
        }}
        className="absolute inset-0 w-full h-full object-cover hero-video hidden md:block"
      >
        <source src="/videos/blog-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 h-full flex flex-col items-start justify-center text-white text-left px-8 md:px-16">
        <p className="mb-4">
          <span className="inline-block bg-[#F2DF74] text-[#1C1C1C] text-lg md:text-xl tracking-widest uppercase px-3 py-1">
            Blog
          </span>
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Notes from the club.
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          Speech reflections, meeting highlights, member spotlights, and the occasional opinion on what makes public speaking actually work.
        </p>
      </div>
    </section>
  )
}
