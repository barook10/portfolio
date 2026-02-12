'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'AppointmentHub',
    subtitle: 'Booking Management System',
    description: 'Production appointment booking system with admin dashboard, real-time notifications, and automated email confirmations. Improved booking efficiency by 50%.',
    icon: '📅',
    technologies: ['React.js', 'Firebase', 'Material-UI', 'EmailJS'],
    github: 'https://github.com/barook10/appointmenthub',
    highlights: ['Admin dashboard', 'Email automation', '50% efficiency gain']
  },
  {
    id: 2,
    title: 'Taste Navigator Hub',
    subtitle: 'Restaurant Discovery Platform',
    description: 'React-based restaurant recommendation platform integrated with Yelp API for discovering local dining options with real-time search and filtering.',
    icon: '🍽️',
    technologies: ['React', 'Yelp API', 'JavaScript', 'CSS'],
    link: 'https://tastenavigatorhubs.netlify.app/',
    github: 'https://github.com/barook10',
    highlights: ['Live restaurant search', 'Sorting by rating/reviews', 'Mobile-first UI']
  },
  {
    id: 3,
    title: 'Spotify Playlisting App',
    subtitle: 'Music Playlist Builder',
    description: 'Full-stack playlist management application using Spotify API and OAuth integration for seamless user authentication and real-time music management.',
    icon: '🎵',
    technologies: ['React', 'Spotify API', 'OAuth', 'Node.js'],
    link: 'https://spotifyplaylisting.netlify.app/',
    github: 'https://github.com/barook10',
    highlights: ['OAuth authentication', 'Real-time playlist management', 'Search & discovery']
  },
  {
    id: 4,
    title: 'Focus Mode',
    subtitle: 'Browser Extension',
    description: 'Chrome extension that eliminates distractions and helps maintain deep focus with smart website blocking and productivity analytics.',
    icon: '🎯',
    technologies: ['JavaScript', 'Chrome API', 'CSS'],
    github: 'https://github.com/barook10/focus-mode-extension',
    highlights: ['Website blocking', 'Focus timer', 'Usage analytics']
  },
  {
    id: 5,
    title: 'Sorting Visualizer',
    subtitle: 'Algorithm Visualization',
    description: 'Interactive visualization of sorting algorithms with real-time execution, step-by-step breakdown, and performance comparison across different approaches.',
    icon: '📊',
    technologies: ['React', 'TypeScript', 'Canvas API'],
    github: 'https://github.com/barook10/sorting-algo',
    highlights: ['Multiple algorithms', 'Speed controls', 'Performance comparison']
  }
]

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = document.querySelectorAll('[data-index]')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-medium text-muted-foreground">Featured Work</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-4">
            Projects That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Each project represents my commitment to building solutions that solve real problems with clean code and thoughtful design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              data-index={idx}
              className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-card to-card/80 backdrop-blur-xl p-8 transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 ${
                visibleCards.includes(idx)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Accent glow */}
              <div className="absolute -inset-full top-0 right-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-l from-accent to-transparent blur-3xl" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="text-4xl filter drop-shadow-lg">{project.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-accent/80 uppercase tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-foreground/90 border border-border/60 group-hover:border-accent/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-8 space-y-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  {(project as any).link && (
                    <a
                      href={(project as any).link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40"
                    >
                      View Live
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors px-4 py-2 rounded-lg border border-border/60 hover:border-accent/40 hover:bg-accent/5"
                  >
                    Code
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
