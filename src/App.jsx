import { useEffect, useState } from 'react'
import { about, navLinks, profile, projects, skillGroups } from './data'

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }
  if (name === 'mail') {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m3.5 6.5 8.5 6 8.5-6" />
      </svg>
    )
  }
  if (name === 'github') {
    return (
      <svg {...common}>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
      </svg>
    )
  }
  if (name === 'linkedin') {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4" />
      </svg>
    )
  }
  if (name === 'arrow') {
    return (
      <svg {...common}>
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    )
  }
  return null
}

function Pixels({ className = '' }) {
  return <span className={`pixels ${className}`} aria-hidden="true" />
}

function SectionTitle({ title, action }) {
  return (
    <div className="section-title" data-reveal>
      <h2>
        <span className="hash">#</span>
        {title}
      </h2>
      <span className="line" />
      {action}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    items.forEach((item) => io.observe(item))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Inicio">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 6 4 12l5 6M15 6l5 6-5 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            <span>Kevin</span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                <span className="hash">#</span>
                {link.label}
              </a>
            ))}
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span className="hash">#</span>github
            </a>
          </nav>

          <button
            type="button"
            className="menu-btn"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
          {[...navLinks, { label: 'github', href: profile.github, external: true }].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className="hash">#</span>
              {link.label}
            </a>
          ))}
          <div className="mobile-socials">
            <a href={`mailto:${profile.email}`} aria-label="Correo">
              <Icon name="mail" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <Pixels className="hero-pixels-left" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">// {profile.role}</p>
              <h1>
                Kevin es un <span className="accent">desarrollador Full Stack</span> e&nbsp;ingeniero
                de IA
              </h1>
              <p className="lead">
                Construyo aplicaciones web donde la automatización, los datos y el diseño se
                encuentran.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#contacto">
                  Contáctame
                  <Icon name="arrow" size={16} />
                </a>
                <a className="btn ghost" href="#proyectos">
                  Ver proyectos
                </a>
              </div>
              <p className="now">
                <span className="dot" aria-hidden="true" />
                Actualmente trabajando en <a href="#proyectos">Cuadre IQ</a>
              </p>
            </div>

            <div className="hero-art" data-reveal>
              <div className="code-card">
                <div className="code-bar">
                  <span className="win-dot" />
                  <span className="win-dot" />
                  <span className="win-dot" />
                  <em>kevin.js</em>
                </div>
                <div className="code-body">
                  <span className="line">
                    <span className="tok-key">const</span> <span className="tok-var">kevin</span> ={' '}
                    {'{'}
                  </span>
                  <span className="line">
                    {'  '}rol: <span className="tok-str">'Full Stack'</span>,
                  </span>
                  <span className="line">
                    {'  '}foco: <span className="tok-str">'IA &amp; datos'</span>,
                  </span>
                  <span className="line">
                    {'  '}stack: [<span className="tok-str">'React'</span>,{' '}
                    <span className="tok-str">'Python'</span>],
                  </span>
                  <span className="line">
                    {'  '}disponible: <span className="tok-bool">true</span>
                  </span>
                  <span className="line">{'}'}</span>
                </div>
              </div>
              <span className="chip chip-a">React</span>
              <span className="chip chip-b">Python</span>
              <span className="chip chip-c">IA</span>
              <span className="chip chip-d">FastAPI</span>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container quote-inner" data-reveal>
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>La simplicidad es el requisito previo de la fiabilidad.</blockquote>
            <cite>— Edsger W. Dijkstra</cite>
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="container">
            <SectionTitle
              title="proyectos"
              action={
                <a className="section-action" href={profile.github} target="_blank" rel="noreferrer">
                  Ver todos <span className="arrow-text">~~&gt;</span>
                </a>
              }
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" data-reveal key={project.id}>
                  <div className={`project-cover ${project.art}`}>
                    <span className="project-index">{project.index}</span>
                    <span className="project-glyph">{project.glyph}</span>
                  </div>
                  <ul className="tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          Live <span>&lt;~&gt;</span>
                        </a>
                      )}
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        Código <span>&gt;=</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="section">
          <div className="container">
            <SectionTitle title="habilidades" />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-col" data-reveal key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section">
          <div className="container">
            <SectionTitle title="sobre-mí" />
            <div className="about-grid">
              <div className="about-text" data-reveal>
                {about.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
                <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                  Leer más <span>-&gt;</span>
                </a>
              </div>
              <div className="about-art" data-reveal aria-hidden="true">
                <span className="about-square about-square-a" />
                <span className="about-square about-square-b" />
                <span className="about-monogram">&lt;KE/&gt;</span>
                <Pixels className="about-pixels" />
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container">
            <SectionTitle title="contacto" />
            <div className="contact-grid">
              <p className="contact-copy" data-reveal>
                Estoy abierto a prácticas, proyectos freelance y oportunidades donde pueda aportar en
                frontend, datos o automatización con IA. Si tienes una idea o una vacante, escríbeme.
              </p>
              <div className="contact-card" data-reveal>
                <h3>Escríbeme aquí</h3>
                <a href={`mailto:${profile.email}`}>
                  <Icon name="mail" />
                  {profile.email}
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Icon name="github" />
                  github.com/KevinLise
                </a>
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Icon name="linkedin" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-top">
              <a className="brand" href="#inicio">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M9 6 4 12l5 6M15 6l5 6-5 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
                <span>Kevin</span>
              </a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <p>{profile.role}</p>
          </div>

          <div className="footer-media">
            <h4>Media</h4>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icon name="github" size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Correo">
                <Icon name="mail" size={20} />
              </a>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Icon name="linkedin" size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="container copyright">
          <span>© 2026 Kevin Escorcia. Todos los derechos reservados.</span>
          <span>
            Diseño basado en{' '}
            <a href="https://github.com/EliasDevis" target="_blank" rel="noreferrer">
              Elias Portfolio
            </a>{' '}
            · CC BY 4.0
          </span>
        </div>
      </footer>
    </>
  )
}
