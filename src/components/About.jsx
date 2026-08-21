// About section — honest, concise professional introduction

// Quick-stat cards shown alongside the bio
const HIGHLIGHTS = [
  {
    title: 'Current CGPA',
    detail: '9.3 / 10.0 — B.Tech CSE, GIET',
  },
  {
    title: 'Internship Experience',
    detail: 'Applied AI Intern (CSRBOX / IBM SkillsBuild) · Data Analytics Virtual Intern (Deloitte via Forage)',
  },
  {
    title: 'Startup Founder',
    detail: 'GreenEnvo Technologies — sustainability startup targeting plastic pollution reduction',
  },
  {
    title: 'Core Interests',
    detail: 'Software Development · Artificial Intelligence · Problem Solving · Practical Technology Solutions',
  },
]

function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About</span>
          <h2 className="section-title">A bit about me</h2>
          <div className="section-divider" />
        </div>

        <div className="about__grid">
          {/* --- Bio text --- */}
          <div className="about__text">
            <p>
              I'm Himabindu, a second-year B.Tech Computer Science &amp; Engineering student
              at Godavari Institute of Engineering &amp; Technology (GIET), currently
              maintaining a CGPA of 9.3/10. I'm genuinely interested in software
              development and AI — not just as course topics, but as tools for building
              things that actually work.
            </p>
            <p>
              I've completed internship programmes with CSRBOX/IBM SkillsBuild (Applied AI)
              and Deloitte via Forage (Data Analytics), which gave me hands-on exposure to
              generative AI agent development and structured data analysis workflows.
            </p>
            <p>
              Outside coursework, I founded GreenEnvo Technologies, an early-stage
              sustainability startup focused on reducing plastic pollution. The experience
              taught me market research, pitching ideas, and thinking through real-world
              problems beyond the classroom.
            </p>
            <p>
              I enjoy working on projects that have a clear purpose — from building AI
              agents tied to UN Sustainable Development Goals to crafting responsive web
              interfaces. I'm currently looking for opportunities to contribute to
              meaningful software projects.
            </p>
          </div>

          {/* --- Highlight cards --- */}
          <div className="about__highlights">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="about__highlight-card">
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
