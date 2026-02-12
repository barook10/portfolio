'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-6 inline-block">
              <span className="text-xs font-semibold text-accent/90 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 uppercase tracking-wider">
                Software Engineer
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
              Building elegant digital
              <span className="text-accent block">experiences</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
              I'm Abdulmuabark Omar, a software engineer passionate about crafting intuitive interfaces and scalable applications. I combine clean code with thoughtful design to create digital products that truly make an impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/barook10"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/40 hover:-translate-y-1 transition-all"
              >
                View GitHub
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-7 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - PREMIUM IMAGE DESIGN */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Decorative background card */}
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl rotate-6 blur-xl opacity-40" />

            {/* Image container */}
            <div
              className={`relative w-72 h-72 lg:w-96 lg:h-96 transform transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-tr from-accent via-purple-400 to-accent">
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-background">
                  <Image
                    src="/profile.jpg"
                    alt="Abdulmuabark Omar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
