import { useState } from 'react'

// Devicon CDN base URL — high-quality vector developer icons
const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

// ── Technical Skills ─────────────────────────────────────────────
const TECH_SKILLS = [
  // Programming
  {
    name: 'Python',
    category: 'Programming',
    type: 'img',
    src: `${D}/python/python-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #3776ab, #ffd43b)',
    fallbackText: 'Py',
  },
  {
    name: 'Java',
    category: 'Programming',
    type: 'img',
    src: `${D}/java/java-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #e76f00, #5382a1)',
    fallbackText: 'Ja',
  },
  {
    name: 'JavaScript',
    category: 'Programming',
    type: 'img',
    src: `${D}/javascript/javascript-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #f7df1e, #d4be11)',
    fallbackText: 'JS',
  },

  // Web
  {
    name: 'React',
    category: 'Web',
    type: 'img',
    src: `${D}/react/react-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #61dafb, #0088cc)',
    fallbackText: 'Re',
  },
  {
    name: 'HTML5',
    category: 'Web',
    type: 'img',
    src: `${D}/html5/html5-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #e34f26, #f06529)',
    fallbackText: 'H5',
  },
  {
    name: 'CSS3',
    category: 'Web',
    type: 'img',
    src: `${D}/css3/css3-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #1572b6, #33a9dc)',
    fallbackText: 'C3',
  },

  // Database & Data Platforms
  {
    name: 'MySQL',
    category: 'Database',
    type: 'img',
    src: `${D}/mysql/mysql-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #00758f, #f29111)',
    fallbackText: 'SQL',
  },
  {
    name: 'MS Fabric',
    category: 'Database',
    type: 'badge',
    label: 'Fabric',
    bgColor: 'linear-gradient(135deg, #0078d4, #00a4ef)',
  },

  // Tools & Platforms
  {
    name: 'Git',
    category: 'Tools',
    type: 'img',
    src: `${D}/git/git-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #f05032, #f14e32)',
    fallbackText: 'Git',
  },
  {
    name: 'GitHub',
    category: 'Tools',
    type: 'img',
    src: `${D}/github/github-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #24292e, #181717)',
    fallbackText: 'GH',
  },
  {
    name: 'VS Code',
    category: 'Tools',
    type: 'img',
    src: `${D}/vscode/vscode-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #007acc, #0065a9)',
    fallbackText: 'VSC',
  },
  {
    name: 'Google Colab',
    category: 'Tools',
    type: 'img',
    src: `${D}/googlecolab/googlecolab-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #f9ab00, #e37400)',
    fallbackText: 'GC',
  },
  {
    name: 'Pandas',
    category: 'Tools',
    type: 'img',
    src: `${D}/pandas/pandas-original.svg`,
    fallbackBg: 'linear-gradient(135deg, #150458, #ff4154)',
    fallbackText: 'Pd',
  },
  {
    name: 'MS Excel',
    category: 'Tools',
    type: 'badge',
    label: 'XL',
    bgColor: 'linear-gradient(135deg, #1d6f42, #217346)',
  },
  {
    name: 'MS Word',
    category: 'Tools',
    type: 'badge',
    label: 'W',
    bgColor: 'linear-gradient(135deg, #185abd, #2b579a)',
  },
]

// ── CS Fundamentals ─────────────────────────────────────────────
const CORE_SUBJECTS = [
  {
    icon: '🔗',
    title: 'Data Structures & Algorithms',
    desc: 'Arrays, Linked Lists, Trees, Graph Traversal, Sorting & Complexity Analysis',
  },
  {
    icon: '🗄️',
    title: 'Database Management Systems',
    desc: 'Relational Design, SQL Queries, Normalization, Indexing & ACID Principles',
  },
  {
    icon: '💻',
    title: 'Operating Systems',
    desc: 'Process Scheduling, Multi-threading, Synchronization & Memory Management',
  },
  {
    icon: '🌐',
    title: 'Computer Networks',
    desc: 'TCP/IP Architecture, OSI Layers, Routing Protocols & Web Fundamentals',
  },
  {
    icon: '📦',
    title: 'Object-Oriented Programming',
    desc: 'Encapsulation, Inheritance, Polymorphism, Abstraction & Design Patterns',
  },
]

// ── Category filter tabs ─────────────────────────────────────────
const CATEGORIES = ['All', 'Programming', 'Web', 'Database', 'Tools']

// ── Skill Card with enhanced image sizing and resilient fallback ───
function SkillCard({ skill }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="skill-icon-card" title={`${skill.name} (${skill.category})`}>
      <div className="skill-icon-card__icon-wrap">
        {skill.type === 'img' && !imgError ? (
          <img
            src={skill.src}
            alt={skill.name}
            className="skill-icon-card__img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="skill-icon-card__badge"
            style={{
              background: skill.bgColor || skill.fallbackBg || 'var(--grad-accent)',
            }}
            aria-hidden="true"
          >
            {skill.label || skill.fallbackText || skill.name.slice(0, 2)}
          </div>
        )}
      </div>

      <div className="skill-icon-card__details">
        <p className="skill-icon-card__name">{skill.name}</p>
        <span className="skill-icon-card__cat">{skill.category}</span>
      </div>
    </div>
  )
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills =
    activeCategory === 'All'
      ? TECH_SKILLS
      : TECH_SKILLS.filter((s) => s.category === activeCategory)

  const getCategoryCount = (cat) => {
    if (cat === 'All') return TECH_SKILLS.length
    return TECH_SKILLS.filter((s) => s.category === cat).length
  }

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Languages, frameworks, tools, and computer science concepts I work with.
          </p>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div
          className="skills-filter-tabs"
          role="tablist"
          aria-label="Filter skills by category"
        >
          {CATEGORIES.map((cat) => {
            const count = getCategoryCount(cat)
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                className={`skills-filter-tab${isActive ? ' skills-filter-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="skills-filter-tab__count">{count}</span>
              </button>
            )
          })}
        </div>

        {/* ── Prominent Skills Grid ── */}
        <div
          className="skills-icon-grid"
          role="tabpanel"
          aria-label={`${activeCategory} technical skills`}
        >
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* ── Computer Science Fundamentals ── */}
        <div className="skills-core">
          <div className="skills-core__header">
            <span className="section-label" style={{ fontSize: '.68rem' }}>
              Academic Foundation
            </span>
            <h3 className="skills-core__title">Computer Science Fundamentals</h3>
            <p className="skills-core__subtitle">
              Core academic competencies from coursework and practical problem solving.
            </p>
          </div>

          <div className="skills-core__grid">
            {CORE_SUBJECTS.map((item) => (
              <div key={item.title} className="skills-core__card">
                <div className="skills-core__card-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="skills-core__card-content">
                  <h4 className="skills-core__card-title">{item.title}</h4>
                  <p className="skills-core__card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
