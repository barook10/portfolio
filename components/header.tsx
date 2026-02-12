'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/60 backdrop-blur-xl border-b border-border/30 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold text-foreground hover:text-accent transition-colors duration-200 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent" />
          Abdulmuabark
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollToSection('contact')}
          className="hidden sm:inline-block text-sm font-semibold px-5 py-2 bg-accent text-accent-foreground rounded-lg hover:shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5 transition-all"
        >
          Contact
        </button>
      </nav>
    </header>
  )
}
