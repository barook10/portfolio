'use client'

import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    category: 'Frontend',
    icon: '⚛️',
    skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Tailwind CSS', 'Material-UI']
  },
  {
    category: 'Backend',
    icon: '🔧',
    skills: ['Node.js', 'PHP', 'Firebase', 'MySQL']
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Agile Development', 'Code Architecture', 'Testing']
  },
  {
    category: 'Core Competencies',
    icon: '⭐',
    skills: ['Component-Driven Development', 'Responsive Design', 'Full-stack Integration', 'Clean Code']
  }
]

const competencies = [
  {
    title: 'Web Development',
    description: 'Building scalable, maintainable applications with modern frameworks, clean architecture, and best practices.',
    icon: '💻'
  },
  {
    title: 'Responsive Design',
    description: 'Creating intuitive, mobile-first interfaces that prioritize user experience across all devices.',
    icon: '📱'
  },
  {
    title: 'Problem Solving',
    description: 'Analytical approach to debugging, optimization, and finding elegant solutions to complex challenges.',
    icon: '🧠'
  },
  {
    title: 'Collaboration',
    description: 'Effective communication with teams and stakeholders. Thriving in agile, collaborative environments.',
    icon: '👥'
  }
]

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-medium text-muted-foreground">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2">
            Skills & Technologies
          </h2>
        </div>

        {/* Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`p-6 sm:p-8 rounded-lg border border-border bg-card/50 transition-all duration-500 ${
                visibleCards.includes(idx)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-secondary/50 text-foreground text-sm font-medium border border-border/50 hover:border-border transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-10">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competencies.map((comp, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-lg border border-border/50 bg-secondary/30 backdrop-blur-sm hover:border-border hover:bg-secondary/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{comp.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {comp.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
