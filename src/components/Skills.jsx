import { useState } from 'react'

// Devicon CDN base URL — free, no npm needed
const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

// ── Tech skills with icons ──────────────────────────────────────
// type: 'img'   → use devicon image from URL
// type: 'badge' → custom colored letter-badge (for tools without devicons)
const TECH_SKILLS = [
  // Programming
  { name: 'Python',      category: 'Programming', type: 'img',   src: `${D}/python/python-original.svg` },
  { name: 'Java',        category: 'Programming', type: 'img',   src: `${D}/java/java-original.svg` },
  { name: 'JavaScript',  category: 'Programming', type: 'img',   src: `${D}/javascript/javascript-original.svg` },

  // Web
  { name: 'HTML5',       category: 'Web',         type: 'img',   src: `${D}/html5/html5-original.svg` },
  { name: 'CSS3',        category: 'Web',         type: 'img',   src: `${D}/css3/css3-original.svg` },

  // Database
  { name: 'MySQL',       category: 'Database',    type: 'img',   src: `${D}/mysql/mysql-original.svg` },

  // Tools
  { name: 'Git',         category: 'Tools',       type: 'img',   src: `${D}/git/git-original.svg` },
  { name: 'GitHub',      category: 'Tools',       type: 'img',   src: `${D}/github/github-original.svg` },
  { name: 'Google Colab',category: 'Tools',       type: 'img',   src: `${D}/googlecolab/googlecolab-original.svg` },
  {
    name: 'MS Excel',
    category: 'Tools',
    type: 'badge',
    label: 'XL',
    bgColor: 'linear-gradient(135deg,#1d6f42,#217346)',
  },
  {
    name: 'MS Word',
    category: 'Tools',
    type: 'badge',
    label: 'W',
    bgColor: 'linear-gradient(135deg,#185abd,#2b579a)',
  },
]

// ── CS Fundamentals — shown as pill tags at the bottom ──────────
const CORE_SKILLS = [
  { icon: '🔗', label: 'Data Structures & Algorithms' },
  { icon: '🗄️', label: 'Database Management Systems' },
  { icon: '💻', label: 'Operating Systems' },
  { icon: '🌐', label: 'Computer Networks' },
  { icon: '📦', label: 'Object-Oriented Programming' },
]

// ── Category filter tabs ─────────────────────────────────────────
const CATEGORIES = ['All', 'Programming', 'Web', 'Database', 'Tools']

// ── Skill icon card ──────────────────────────────────────────────
function SkillCard({ skill }) {
  return (
    <div className="skill-icon-card" title={skill.name}>
      {skill.type === 'img' ? (
        <img
          src={skill.src}
          alt={skill.name}
          className="skill-icon-card__img"
          loading="lazy"
          // graceful fallback if devicon CDN is offline
          onError={(e) => { e.target.style.display = 'none' }}
        />
      ) : (
        <div
          className="skill-icon-card__badge"
          style={{ background: skill.bgColor }}
          aria-hidden="true"
        >
          {skill.label}
        </div>
      )}
      <p className="skill-icon-card__name">{skill.name}</p>
      <p className="skill-icon-card__cat">{skill.category}</p>
    </div>
  )
}

// ── Main Skills section ──────────────────────────────────────────
function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills =
    activeCategory === 'All'
      ? TECH_SKILLS
      : TECH_SKILLS.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Languages, tools, and technologies I work with.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="skills-filter-tabs" role="tablist" aria-label="Filter skills by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`skills-filter-tab${activeCategory === cat ? ' skills-filter-tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Icon Grid ── */}
        <div
          className="skills-icon-grid"
          role="tabpanel"
          aria-label={`${activeCategory} skills`}
        >
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* ── CS Fundamentals ── */}
        {(activeCategory === 'All') && (
          <div className="skills-core">
            <p className="skills-core__title">CS Fundamentals</p>
            <ul className="skills-core__tags" role="list">
              {CORE_SKILLS.map((item) => (
                <li key={item.label}>
                  <span className="skills-core__tag">
                    <span aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
