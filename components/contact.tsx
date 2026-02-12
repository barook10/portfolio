'use client'

import React, { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
        ; (e.target as HTMLFormElement).reset()
      setTimeout(() => setSubmitted(false), 4000)
    }, 1000)
  }

  const contactMethods = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'mubaraksaeed118@gmail.com',
      href: 'mailto:mubaraksaeed118@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+971556558158',
      href: 'tel:+971556558158'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/barook10',
      href: 'https://github.com/barook10'
    }
  ]

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-medium text-muted-foreground">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-6 rounded-lg border border-border/50 bg-secondary/30 hover:border-border hover:bg-secondary/50 transition-all block"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{method.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      {method.label}
                    </h3>
                    <p className="text-foreground font-medium group-hover:text-foreground/80 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-2.5 bg-secondary/50 text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition-all disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-2.5 bg-secondary/50 text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition-all disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={isLoading}
                  rows={4}
                  className="w-full px-4 py-2.5 bg-secondary/50 text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition-all resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || submitted}
                className="w-full px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="inline-block animate-spin">↻</span>
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <span>✓</span>
                    Message Sent!
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitted && (
                <p className="text-sm text-center text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
