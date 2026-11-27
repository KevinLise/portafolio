import { useEffect, useState } from 'react'
import { about, navLinks, profile, projects, skillGroups, taglines, tools } from './data'

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

function BrandMark() {
  return (
    <svg
      className="brand-mark"
      width="26"
      height="32"
      viewBox="0 0 28 35"
      fill="none"
      aria-hidden="true"
    >
      <rect x="1" y="1.5" width="5" height="32" fill="#DEDCE0" />
      <path d="M9 17.5 25 2M9 17.5 25 33" stroke="#DEDCE0" strokeWidth="5" strokeLinecap="square" />
      <rect x="16.5" y="14.5" width="6" height="6" fill="#3C2BC2" />
    </svg>
  )
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return reduced
}

function Typewriter({ words }) {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) {
      setText(words[0])
      return
    }

    const word = words[index]
    let delay = deleting ? 28 : 55
    if (!deleting && text === word) delay = 1700
    if (deleting && text === '') delay = 300

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text === word) setDeleting(true)
        else setText(word.slice(0, text.length + 1))
      } else if (text === '') {
        setDeleting(false)
        setIndex((value) => (value + 1) % words.length)
      } else {
        setText(word.slice(0, text.length - 1))
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, deleting, index, reduced, words])

  return (
    <span className="typewriter" aria-hidden="true">
      <span>{text}</span>
      <span className="caret" />
    </span>
  )
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

function ToolMarquee({ items }) {
  return (
    <div className="tools-marquee" aria-label="Herramientas principales">
      <div className="marquee-track">
        <ul className="marquee-group">
          {items.map((item) => (
            <li className="marquee-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <ul className="marquee-group" aria-hidden="true">
          {items.map((item) => (
            <li className="marquee-item" key={`dup-${item}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
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
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Kevin — inicio">
            <BrandMark />
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
              <p className="eyebrow">
                <span className="sr-only">{profile.tagline}</span>
                <span aria-hidden="true">// </span>
                <Typewriter words={taglines} />
              </p>
              <h1>
                Desarrollo de software con enfoque en{' '}
                <span className="accent">automatización</span>
              </h1>
              <p className="lead">
                Automatizo procesos con agentes que trabajan sobre tus documentos: RAG, modelos
                locales y flujos que resuelven tareas repetitivas.
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
                    {'  '}rol: <span className="tok-str">'Automatización con IA'</span>,
                  </span>
                  <span className="line">
                    {'  '}foco: <span className="tok-str">'Agentes &amp; RAG'</span>,
                  </span>
                  <span className="line">
                    {'  '}stack: [<span className="tok-str">'RAG'</span>,{' '}
                    <span className="tok-str">'Ollama'</span>,{' '}
                    <span className="tok-str">'Qdrant'</span>],
                  </span>
                  <span className="line">
                    {'  '}disponible: <span className="tok-bool">true</span>
                  </span>
                  <span className="line">{'}'}</span>
                </div>
              </div>
              <span className="chip chip-a">RAG</span>
              <span className="chip chip-b">Ollama</span>
              <span className="chip chip-c">IA</span>
              <span className="chip chip-d">Qdrant</span>
            </div>
          </div>
        </section>

        <ToolMarquee items={tools} />

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
                Estoy abierto a prácticas, proyectos freelance y oportunidades donde pueda aportar
                en automatización, agentes de IA y diseño. Si tienes una idea o una vacante,
                escríbeme.
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
              <a className="brand" href="#inicio" aria-label="Kevin — inicio">
                <BrandMark />
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
