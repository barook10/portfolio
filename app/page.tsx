'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
