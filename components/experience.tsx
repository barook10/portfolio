'use client'

import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    id: 1,
    role: 'Web Developer',
    company: 'Somalia Embassy',
    period: 'Jul 2025 - Feb 2026',
    icon: '🏢',
    highlights: [
      'Developed multilingual website with appointment booking system using React.js and Firebase',
      'Built responsive admin dashboard with Material-UI and Firebase Authentication',
      'Automated email confirmations using EmailJS for 100+ monthly bookings',
      'Improved booking efficiency by ~50% through optimized UI and streamlined logic'
    ]
  },
  {
    id: 2,
    role: 'Technical Support Assistant',
    company: 'DHF TECH',
    period: 'Feb 2025 - Dec 2025',
    icon: '🛠️',
    highlights: [
      'Diagnosed and resolved software issues across mobile and desktop environments',
      'Configured operating systems and applications for optimal performance',
      'Implemented security hardening on 50+ devices',
      'Provided technical training with clear, user-friendly communication'
    ]
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'QETC Education & Training Consultancy',
    period: 'Jul 2022 - Aug 2023',
    icon: '💻',
    highlights: [
      'Built and maintained 10+ websites using HTML, CSS, JavaScript, and jQuery',
      'Ensured cross-browser compatibility and mobile responsiveness',
      'Collaborated with designers and clients on feature implementation',
      'Transformed 30+ mockups into fully functional web applications'
    ]
  }
]

const education = [
  {
    degree: 'Master of Software Engineering',
    school: 'Universiti Teknologi Malaysia',
    date: 'Nov 2025',
    icon: '🎓'
  },
  {
    degree: 'Bachelor of Software Engineering',
    school: 'Unitar International University',
    date: 'Jan 2023',
    icon: '🎓'
  }
]

const certifications = [
  'Meta Front-End Developer Professional Certificate',
  'ReactJs and TypeScript Specialization'
]

export default function Experience() {
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
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-index]')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-medium text-muted-foreground">Background</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2">
            Experience & Education
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-10">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                data-index={idx}
                className={`group relative overflow-hidden rounded-lg border border-border bg-card/50 p-6 sm:p-8 transition-all duration-500 hover:border-foreground/30 ${
                  visibleCards.includes(idx)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{exp.icon}</span>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                          <p className="text-sm font-medium text-muted-foreground">{exp.company}</p>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground px-2 py-1 rounded-full bg-secondary/50 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 ml-11">
                    {exp.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border/50 bg-secondary/20 backdrop-blur-sm hover:border-border transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{edu.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{edu.school}</p>
                    <span className="text-xs font-medium text-muted-foreground px-2 py-1 rounded-full bg-foreground/5">
                      {edu.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium text-foreground flex items-center gap-2"
              >
                <span>✓</span>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
