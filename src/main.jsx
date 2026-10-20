
import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'motion/react'
import {
  ArrowUpRight, Github, Linkedin, Mail, FileText,
  Trophy, MapPin, GraduationCap, Code2,
  ArrowDown, Menu, X
} from 'lucide-react'
import './style.css'

const PROFILE = {
  name: 'Rachit Bandaram',
  email: '',
  linkedin: '',
  github: 'https://github.com/rkb004',
  resume: '/rachit_personal_portfoilio/resume.pdf',
  lightVideo: 'https://drive.google.com/file/d/19HBUrt14rkw0wvP2O8ewLHNfEFR9BviU/preview',
}

const experiences = [
  {
    company: 'Rockwell Automation',
    title: 'AI Engineering Intern',
    period: 'May – Aug 2026',
    place: 'Milwaukee, WI',
    description: 'Built a personalized AI assistant with persistent memory and optimized production workflows.',
    highlights: [
      'Reduced token costs by 17% with input/output compression strategies.',
      'Improved workflow efficiency by ~45% through server-side pagination.',
      'Integrated long-term and episodic memory capabilities for an AI assistant.'
    ],
    tags: ['Python', 'AI Agents', 'LLMs', 'C# / .NET']
  },
  {
    company: 'Extreme Engineering Solutions',
    title: 'Associate Data Engineering Intern',
    period: 'Jan – Jun 2026',
    place: 'Madison, WI',
    description: 'Developed and maintained analytics infrastructure supporting business reporting.',
    highlights: [
      'Reduced manual reporting work by 40%.',
      'Built 35+ fact and dimension models supporting 50+ stakeholders.',
      'Worked with dbt, SQL, PostgreSQL, and Airflow pipelines.'
    ],
    tags: ['SQL', 'dbt', 'Airflow', 'PostgreSQL']
  },
  {
    company: 'University of Chicago',
    title: 'Lead NLP Research Assistant',
    period: 'May 2025 – Present',
    place: 'Remote',
    description: 'Led research-oriented NLP processing and analysis across a large transcript corpus.',
    highlights: [
      'Analyzed 3,500+ transcripts and 100+ research keywords.',
      'Led a team of four research assistants.',
      'Contributed to academic research and co-authored a paper.'
    ],
    tags: ['Python', 'NLP', 'LLMs', 'Research']
  },
  {
    company: 'Oshkosh Defense',
    title: 'Digital Technology Intern',
    period: 'Feb – Sep 2024',
    place: 'Wisconsin',
    description: 'Supported enterprise technology and ERP workflows in a complex operational environment.',
    highlights: [
      'Worked on enterprise systems and technology process improvements.'
    ],
    tags: ['ERP', 'Enterprise Systems']
  }
]

const projects = [
  {
    number: '01',
    name: 'Personalized AI Assistant',
    type: 'Applied AI · Rockwell Automation',
    description: 'An assistant with persistent memory, workflow integrations, and token-efficient interactions, built during my internship.',
    tags: ['AI Agents', 'LLMs', 'Memory', '.NET'],
    link: ''
  },
  {
    number: '02',
    name: 'Local LLM Language Tutor',
    type: 'Personal Project',
    description: 'A privacy-minded language-learning assistant powered by local LLMs, FastAPI, speech recognition, and conversational context.',
    tags: ['Python', 'FastAPI', 'Ollama', 'Whisper'],
    link: ''
  },
  {
    number: '03',
    name: 'Bias Detection - NLP',
    type: 'Research · University of Chicago',
    description: 'A scalable language-analysis workflow for thousands of transcripts, supporting structured keyword analysis and research insights to determine effects of podcasts on the 2024 presidential election.',
    tags: ['Python', 'NLP', 'GCP', 'Data Pipelines'],
    link: ''
  }
]

const skills = [
  ['Languages', 'Python', 'SQL', 'C#', 'Java', 'Kotlin', 'JavaScript'],
  ['AI & Data', 'LLMs', 'NLP', 'AI Agents', 'dbt', 'Airflow', 'PostgreSQL'],
  ['Engineering', 'React', 'FastAPI', '.NET', 'Git', 'GCP']
]

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.13 },
  transition: { duration: 0.55 }
}

function LinkButton({ href, children, primary = false, download = false }) {
  return (
    <a
      className={'button ' + (primary ? 'primary' : 'secondary')}
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      download={download || undefined}
    >
      {children}
      <ArrowUpRight size={16} />
    </a>
  )
}

function SectionHeading({ kicker, title, desc }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  )
}

function App() {
  const [menu, setMenu] = React.useState(false)
  const nav = ['About', 'Experience', 'Achievement', 'Projects', 'Skills', 'Contact']

  return (
    <>
      <header className="nav-wrap">
        <nav className="nav shell">
          <a href="#top" className="logo">RB<span>.</span></a>

          <div className={'nav-links ' + (menu ? 'open' : '')}>
            {nav.map(x => (
              <a
                key={x}
                href={'#' + x.toLowerCase()}
                onClick={() => setMenu(false)}
              >
                {x}
              </a>
            ))}
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main id="top">

        {/* HERO */}
        <section className="hero shell" id="about">
          <div className="glow" />

          <motion.div {...fade}>
            <div className="availability">
              <span className="dot" />
              OPEN TO NEW-GRAD OPPORTUNITIES
            </div>

            <p className="intro">
              Hey, I'm Rachit <span className="wave">✳</span>
            </p>

            <h1>
              Building intelligent<br />
              <span>things that matter.</span>
            </h1>

            <p className="hero-copy">
              I'm <strong>Rachit Bandaram</strong>, a software engineer
              focused on applied AI, data engineering, and systems
              that make a measurable difference. Computer Science
              at the University of Wisconsin–Madison.
            </p>

            <div className="hero-actions">
              <LinkButton href="#experience" primary>
                Explore my work
              </LinkButton>
              <LinkButton href={PROFILE.github}>
                GitHub
              </LinkButton>
            </div>

            <div className="hero-meta">
              <span><MapPin size={15} /> Madison, Wisconsin</span>
              <span>
                <GraduationCap size={16} />
                Graduating December 2026
              </span>
            </div>
          </motion.div>

          <a className="scroll-hint" href="#experience">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </section>

        {/* EXPERIENCE */}
        <section className="section shell" id="experience">
          <motion.div {...fade}>
            <SectionHeading
              kicker="01 / WHERE I'VE WORKED"
              title="Experience with impact."
              desc="From production AI systems to enterprise data infrastructure and NLP research."
            />
          </motion.div>

          <div className="experience-list">
            {experiences.map((e, i) => (
              <motion.article
                {...fade}
                className="experience"
                key={e.company}
              >
                <div className="exp-side">
                  <span className="exp-number">0{i + 1}</span>
                  <p>{e.period}</p>
                  <p>{e.place}</p>
                </div>

                <div>
                  <h3>{e.company}</h3>
                  <div className="role">{e.title}</div>
                  <p className="exp-description">{e.description}</p>

                  <ul>
                    {e.highlights.map(h => <li key={h}>{h}</li>)}
                  </ul>

                  <div className="tags">
                    {e.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* LIGHT THE HOAN ACHIEVEMENT */}
        <section className="section shell" id="achievement">
          <motion.div {...fade}>
            <SectionHeading
              kicker="02 / FEATURED ACHIEVEMENT"
              title="A first-place finish."
              desc="A highlight from my time at Rockwell Automation."
            />
          </motion.div>

          <motion.div {...fade} className="achievement">
            <div className="achievement-top">
              <span className="winner">
                <Trophy size={16} /> FIRST PLACE
              </span>
              <span className="achievement-context">
                LIGHT THE HOAN · 2026
              </span>
            </div>

            <div className="achievement-grid">
              <div>
                <h3>Turning ideas into a winning light show.</h3>

                <p>
                  While interning at Rockwell Automation, I led a
                  team that won first place in a Light the Hoan
                  competition. The experience brought together
                  creativity, collaboration, and technical execution.
                </p>

                <p className="muted">
                  A reminder that engineering is at its best when
                  a team turns an ambitious idea into something
                  people can experience.
                </p>

                <a
                  className="text-link"
                  href={PROFILE.lightVideo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch full video <ArrowUpRight size={16} />
                </a>
              </div>

              {/* EMBEDDED GOOGLE DRIVE VIDEO */}
              <div
                className="light-video"
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#111827',
                  minHeight: '240px'
                }}
              >
                <iframe
                  src={PROFILE.lightVideo}
                  title="Light the Hoan — First Place Light Show"
                  width="100%"
                  height="100%"
                  style={{
                    display: 'block',
                    border: 'none'
                  }}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section className="section shell" id="projects">
          <motion.div {...fade}>
            <SectionHeading
              kicker="03 / THINGS I'VE BUILT"
              title="Selected projects."
              desc="A few examples of the problems I enjoy solving."
            />
          </motion.div>

          <div className="project-grid">
            {projects.map(p => (
              <motion.article
                {...fade}
                className="project"
                key={p.name}
              >
                <div className="project-head">
                  <span>{p.number} / PROJECT</span>
                  <Code2 size={21} />
                </div>

                <p className="project-type">{p.type}</p>
                <h3>{p.name}</h3>
                <p>{p.description}</p>

                <div className="tags">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    className="text-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project <ArrowUpRight size={15} />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section shell" id="skills">
          <motion.div {...fade}>
            <SectionHeading
              kicker="04 / MY TOOLKIT"
              title="Skills & technologies."
            />
          </motion.div>

          <div className="skill-grid">
            {skills.map(([heading, ...items]) => (
              <motion.div
                {...fade}
                className="skill-panel"
                key={heading}
              >
                <h3>{heading}</h3>
                <div className="tags">
                  {items.map(t => <span key={t}>{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact shell" id="contact">
          <motion.div {...fade}>
            <span className="eyebrow">05 / LET'S CONNECT</span>

            <h2>
              Have something<br />
              <span>interesting in mind?</span>
            </h2>

            <p>
              I'm interested in opportunities across software
              engineering, AI/ML, and data engineering. I'd love
              to hear about what you're building.
            </p>

            <div className="hero-actions">
              {PROFILE.email && (
                <LinkButton href={'mailto:' + PROFILE.email} primary>
                  <Mail size={16} /> Say hello
                </LinkButton>
              )}

              <LinkButton href={PROFILE.github}>
                <Github size={16} /> GitHub
              </LinkButton>

              {PROFILE.linkedin && (
                <LinkButton href={PROFILE.linkedin}>
                  <Linkedin size={16} /> LinkedIn
                </LinkButton>
              )}

              <LinkButton href={PROFILE.resume}>
                <FileText size={16} /> Resume
              </LinkButton>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Rachit Bandaram</span>
        <span>Designed & built with intention.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
