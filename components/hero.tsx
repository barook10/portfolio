'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-8 inline-block">
            <span className="text-xs font-semibold text-accent/90 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 uppercase tracking-wider">
              Frontend Developer • Kuala Lumpur
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance leading-tight">
            Building elegant digital
            <span className="text-accent block">experiences</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl leading-relaxed text-balance">
            I'm Abdulmuabark Omar, a frontend developer passionate about crafting intuitive interfaces and scalable applications. I combine clean code with thoughtful design to create digital products that matter.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-3xl">
            <div className="group relative p-6 rounded-xl border border-border/40 bg-gradient-to-br from-secondary/50 to-secondary/20 backdrop-blur-sm hover:border-accent/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              <div className="relative">
                <h3 className="font-bold text-foreground mb-2 text-accent group-hover:text-accent/80 transition-colors">Latest Role</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Web Developer at Somalia Embassy — Built appointment booking system improving efficiency by 50%.
                </p>
              </div>
            </div>

            <div className="group relative p-6 rounded-xl border border-border/40 bg-gradient-to-br from-secondary/50 to-secondary/20 backdrop-blur-sm hover:border-accent/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              <div className="relative">
                <h3 className="font-bold text-foreground mb-2 text-accent group-hover:text-accent/80 transition-colors">Core Expertise</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  React, TypeScript, Firebase, Responsive Design, Component Architecture.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/barook10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/40 hover:-translate-y-1 transition-all"
            >
              View GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs font-semibold uppercase tracking-wide">Scroll to explore</span>
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
