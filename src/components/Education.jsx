// Education section

const COURSEWORK = [
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Object-Oriented Programming',
]

function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <div className="section-divider" />
        </div>

        <div className="education__card card">
          <div className="education__card__top">
            <div>
              <h3 className="education__institute">
                Godavari Institute of Engineering &amp; Technology
              </h3>
              <p className="education__degree">
                B.Tech — Computer Science &amp; Engineering
              </p>
              <p className="education__year">2023 – 2027</p>
            </div>

            {/* Styled CGPA badge */}
            <div className="education__cgpa">
              <span className="education__cgpa-label">Current CGPA</span>
              <span className="education__cgpa-value">9.3</span>
              <span className="education__cgpa-sub">out of 10.0</span>
            </div>
          </div>

          <div>
            <p className="education__coursework-title">Relevant Coursework</p>
            <ul className="education__coursework-list" role="list">
              {COURSEWORK.map((course) => (
                <li key={course}>
                  <span className="tag">{course}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
