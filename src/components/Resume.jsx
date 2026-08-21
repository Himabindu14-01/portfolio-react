// Resume section — vibrant gradient card

// Resume section — vibrant gradient card

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="resume__box">
          <div className="resume__icon" aria-hidden="true">📄</div>
          <h2 className="resume__title">My Resume</h2>
          <p className="resume__desc">
            Want a full picture of my skills, experience, and projects?
            Download or view my resume below.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="btn-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Himabindu's resume (PDF)"
          >
            ↓ Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
