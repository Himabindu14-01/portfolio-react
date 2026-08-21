// Experience section — timeline layout

// Update this array to add or modify experience entries
const EXPERIENCES = [
  {
    id: 1,
    role: 'Applied AI Intern',
    organisation: 'CSRBOX Foundation · AICTE & IBM SkillsBuild',
    period: 'Dec 2025 – Jan 2026',
    points: [
      'Completed a 6-week programme covering Generative AI, Agentic AI, and automation workflows.',
      'Built a functional AI agent in Python as the capstone project.',
      'Attended expert-led sessions on AI agent development and workflow automation.',
    ],
  },
  {
    id: 2,
    role: 'Data Analytics Virtual Intern',
    organisation: 'Deloitte via Forage',
    period: 'March 2026',
    points: [
      'Completed data analysis and forensic technology tasks in a virtual programme.',
      'Used structured analytical methods to draw insights from provided datasets.',
    ],
  },
  {
    id: 3,
    role: 'Founder',
    organisation: 'GreenEnvo Technologies',
    period: '2024 – Present',
    points: [
      'Founded and led an early-stage sustainability startup focused on reducing plastic pollution.',
      'Conducted market research to understand the problem space and potential customer segments.',
      'Pitched the concept at ideathons and at Technovative of India.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Work & Internships</h2>
          <div className="section-divider" />
        </div>

        {/* Timeline */}
        <div className="experience__timeline">
          {EXPERIENCES.map((exp) => (
            <article key={exp.id} className="exp-card card">
              <div className="exp-card__header">
                <h3 className="exp-card__title">{exp.role}</h3>
                <span className="exp-card__date">{exp.period}</span>
              </div>
              <p className="exp-card__org">{exp.organisation}</p>
              <ul className="exp-card__details" role="list">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="exp-card__point">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
