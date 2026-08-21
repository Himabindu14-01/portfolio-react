// Projects section

const PROJECTS = [
  {
    id: 1,
    num: '01',
    title: 'AI Agent for Sustainable Development',
    shortDesc:
      'Python-based AI agent built as the IBM SkillsBuild Applied AI Internship capstone, targeting a UN Sustainable Development Goal.',
    points: [
      'Developed using Google Colab and Relay with modular, structured code.',
      'Implemented agentic workflow for a defined UN SDG use case.',
      'Covered tool calling, task automation, and GenAI agent design patterns.',
    ],
    tags: ['Python', 'Generative AI', 'Agentic AI', 'Google Colab'],
    githubUrl: null,
    demoUrl: null,
  },
  {
    id: 2,
    num: '02',
    title: 'Responsive Web Applications',
    shortDesc:
      'A collection of responsive web pages and UI components built with plain HTML, CSS, and JavaScript.',
    points: [
      'Clean, semantic layouts using HTML5 and vanilla CSS without frameworks.',
      'Responsive design across desktop, tablet, and mobile viewports.',
      'Focused on component-level thinking and reusable UI patterns.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: null,
    demoUrl: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Selected projects built to apply and demonstrate what I've learned.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card card">
              {/* Large background number for visual interest */}
              <span className="project-card__num" aria-hidden="true">
                {project.num}
              </span>

              <div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.shortDesc}</p>
              </div>

              <ul className="project-card__points" role="list">
                {project.points.map((point, idx) => (
                  <li key={idx} className="project-card__point">{point}</li>
                ))}
              </ul>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-card__actions">
                {project.githubUrl ? (
                  <a href={project.githubUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                ) : (
                  <span className="btn btn-ghost" style={{ opacity: .5, cursor: 'default' }} aria-disabled="true">
                    GitHub (soon)
                  </span>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
