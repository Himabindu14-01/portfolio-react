// Certifications & Badges section
// All PDFs are in: public/certificates/
// Badge images go in: public/badges/

// ── Certificate data — one entry per file ──
const CERTIFICATES = [
  {
    id: 'ibm-hackathon',
    title: 'IBM Hackathon Certificate',
    organisation: 'IBM',
    date: '2025',
    description:
      'Certificate of achievement from an IBM-organised hackathon event.',
    file: '/certificates/ibm-hackathon.pdf',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    organisation: 'NPTEL / Online Course',
    date: '2025',
    description:
      'Completed a structured course covering core cloud computing concepts, deployment models, and cloud services.',
    file: '/certificates/cloud-computing.pdf',
  },
  {
    id: 'tata-job-simulation',
    title: 'Job Simulation',
    organisation: 'Tata via Forage',
    date: '2025',
    description:
      'Completed a virtual job simulation covering real-world business tasks aligned with Tata Group operations.',
    file: '/certificates/tata-job-simulation.pdf',
  },
  {
    id: 'deloitte',
    title: 'Data Analytics Virtual Internship',
    organisation: 'Deloitte via Forage',
    date: 'March 2026',
    description:
      'Certificate of completion for the Deloitte data analytics and forensic technology virtual internship programme.',
    file: '/certificates/deloitte-certificate.pdf',
  },
  {
    id: '1m1b-internship',
    title: '1M1B Internship Certificate',
    organisation: '1 Million for 1 Billion (1M1B)',
    date: '2025',
    description:
      'Certificate for completing an internship programme with 1M1B, focused on social impact and entrepreneurship.',
    file: '/certificates/1m1b-internship.pdf',
  },
  {
    id: 'internship-2025',
    title: 'Internship Certificate 2025–26',
    organisation: 'Organisation',
    date: '2025–2026',
    description:
      'Certificate for a completed internship programme during 2025–26.',
    file: '/certificates/internship-certificate-2025.pdf',
  },
]

// ── Badges — add entries here when you have badge images in public/badges/ ──
const BADGES = [
  // Example (uncomment and fill in real values):
  // {
  //   id: 'ibm-ai-badge',
  //   name: 'Applied AI Badge',
  //   organisation: 'IBM',
  //   image: '/badges/ibm-ai.png',
  //   viewUrl: 'https://www.credly.com/...',
  // },
]

function Certifications() {
  return (
    <section id="certifications" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Certifications &amp; Badges</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Certificates earned through internships, virtual programmes, and online courses.
          </p>
        </div>

        {/* ── Certificate cards ── */}
        <div className="certs__grid">
          {CERTIFICATES.map((cert) => (
            <article key={cert.id} className="cert-card card">
              <h3 className="cert-card__title">{cert.title}</h3>
              <p className="cert-card__org">{cert.organisation}</p>
              <p className="cert-card__date">{cert.date}</p>
              <p className="cert-card__desc">{cert.description}</p>
              <a
                href={cert.file}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View certificate: ${cert.title}`}
                style={{ alignSelf: 'flex-start', marginTop: 'auto' }}
              >
                View Certificate ↗
              </a>
            </article>
          ))}
        </div>

        {/* ── Badges subsection — only shown when BADGES has entries ── */}
        {BADGES.length > 0 && (
          <div className="certs__badges-section">
            <h3 className="certs__badges-title">Digital Badges</h3>
            <div className="badges__grid">
              {BADGES.map((badge) => (
                <article key={badge.id} className="badge-card card">
                  <img
                    src={badge.image}
                    alt={`${badge.name} badge from ${badge.organisation}`}
                    className="badge-card__img"
                  />
                  <p className="badge-card__name">{badge.name}</p>
                  <p className="badge-card__org">{badge.organisation}</p>
                  {badge.viewUrl && (
                    <a
                      href={badge.viewUrl}
                      className="btn btn-ghost"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${badge.name} badge`}
                      style={{ fontSize: '0.75rem' }}
                    >
                      View Badge ↗
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications
