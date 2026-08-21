// Achievements section — clean cards without flashy animations

const ACHIEVEMENTS = [
  {
    id: 1,
    icon: '🥇',
    title: '1st Place — Ideathon',
    subtitle: 'Won first place at an ideathon competition for GreenEnvo Technologies concept.',
  },
  {
    id: 2,
    icon: '🥉',
    title: '3rd Place — Hackathon',
    subtitle: 'Secured third place in a hackathon, building a working solution under time constraints.',
  },
  {
    id: 3,
    icon: '🎓',
    title: '9.3 / 10 CGPA',
    subtitle: 'Maintaining a strong academic record across B.Tech Computer Science & Engineering.',
  },
]

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Recognition &amp; Results</h2>
          <div className="section-divider" />
        </div>

        <div className="achievements__grid">
          {ACHIEVEMENTS.map((item) => (
            <article key={item.id} className="achievement-card card">
              <div className="achievement-card__icon" aria-hidden="true">
                {item.icon}
              </div>
              <div className="achievement-card__content">
                <h3 className="achievement-card__title">{item.title}</h3>
                <p className="achievement-card__sub">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
