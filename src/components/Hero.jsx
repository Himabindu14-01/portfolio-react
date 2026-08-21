import { useState } from 'react'

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 15V3m0 12-4-4m4 4 4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/>
  </svg>
)
const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6"/>
  </svg>
)

function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="hero">

      {/* Extra decorative blob (third) */}
      <div className="hero__blob3" aria-hidden="true" />

      {/* ── Main content grid ── */}
      <div className="hero__inner">

        {/* LEFT: Text */}
        <div className="hero__content">

          {/* Live status pill */}
          <div className="hero__eyebrow">
            <span className="dot" aria-hidden="true" />
            Open to Internships &amp; Opportunities
          </div>

          {/* Name — accent on last word */}
          <h1 className="hero__name">
            Hi, I'm{' '}
            <span className="accent">Himabindu.</span>
          </h1>

          <p className="hero__tagline">
            Computer Science &amp; Engineering student at GIET, building
            practical software and AI solutions. Passionate about clean
            code, problem-solving, and technology that matters.
          </p>

          {/* Primary CTA buttons */}
          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View Projects →
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume PDF"
            >
              <DownloadIcon /> Resume
            </a>
          </div>

          {/* Social / contact quick links */}
          <div className="hero__social">
            <a
              href="https://github.com/Himabindu14-01"
              className="hero__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/himabindu14/"
              className="hero__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="mailto:himabindu@example.com"
              className="hero__social-link"
              aria-label="Email"
            >
              <MailIcon /> Email
            </a>
          </div>
        </div>

        {/* RIGHT: Profile photo */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-card">
            {!imgError ? (
              <img
                src="/profile.jpg"
                alt="Himabindu — Computer Science student and developer"
                className="hero__photo"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="hero__photo-placeholder" aria-label="Profile photo placeholder">
                <span style={{ fontSize: '3.5rem' }}>👩‍💻</span>
                <span style={{ fontSize: '.82rem', textAlign: 'center' }}>
                  Add profile.jpg<br />to /public/
                </span>
              </div>
            )}

            {/* Floating CGPA badge below photo */}
            <div className="hero__badge" aria-label="CGPA 9.3 out of 10">
              <span className="star" aria-hidden="true">★</span>
              CGPA 9.3 / 10.0
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        Scroll
        <span className="hero__scroll-arrow">
          <ChevronDown />
        </span>
      </a>

      {/* ── Wave SVG separator — creates visual break from next section ── */}
      <div className="hero__wave" aria-hidden="true">
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,72 L0,72 Z"
            fill="#f3f1ff"
          />
        </svg>
      </div>

    </section>
  )
}

export default Hero
