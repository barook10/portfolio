'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'GitHub', href: 'https://github.com/barook10', icon: '↗' },
    { label: 'Email', href: 'mailto:mubaraksaeed118@gmail.com', icon: '↗' }
  ]

  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Abdulmuabark Omar</h3>
            <p className="text-sm text-muted-foreground">
              Frontend Developer crafting elegant, intuitive web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Navigate</h4>
            <ul className="space-y-2">
              {[
                { label: 'Projects', id: 'projects' },
                { label: 'Experience', id: 'experience' },
                { label: 'Skills', id: 'skills' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() =>
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Connect</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <span className="text-xs">{link.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Abdulmuabark Omar. All rights reserved.</p>
          <p>Designed & built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  )
}
