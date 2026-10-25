import { useState, useEffect } from 'react'

const getAssetUrl = (file) => `${import.meta.env.BASE_URL}${file.replace(/^\//, '')}`

// ── Certificate Data directly linked to authentic PDF credentials in public/certificates/ ──
const CERTIFICATES = [
  {
    id: 'microsoft-fabric-data-engineer',
    title: 'Microsoft Certified: Fabric Data Engineer Associate',
    organisation: 'Microsoft',
    date: 'October 15, 2026',
    credentialId: '101181660AD2386F',
    category: 'Data Engineering',
    icon: '🔷',
    description:
      'Certified by Microsoft in enterprise data architecture, data engineering pipelines, Lakehouse design, data transformations, and analytics solutions with Microsoft Fabric.',
    file: 'certificates/microsoft-fabric-data-engineer.pdf',
  },
  {
    id: 'internship-2025',
    title: 'Applied AI Internship (Learn, Design, and Build)',
    organisation: 'CSRBOX & AICTE in association with IBM SkillsBuild',
    date: 'Dec 2025 – Jan 2026',
    credentialId: '202526AICTECSRBOXAI433',
    category: 'Applied AI',
    icon: '🤖',
    description:
      'Completed a 6-week intensive Applied AI internship focusing on Generative AI agent design, problem-solving, and practical AI implementations.',
    file: 'certificates/internship-certificate-2025.pdf',
  },
  {
    id: 'ibm-hackathon',
    title: 'SkillUp Hackathon Certificate',
    organisation: 'IBM SkillsBuild',
    date: 'June 2026',
    credentialId: 'PLAN-DA048276D952',
    category: 'Hackathon',
    icon: '🏆',
    description:
      'Certificate of achievement for completing the SkillUp Hackathon conducted in collaboration with IBM SkillsBuild.',
    file: 'certificates/ibm-hackathon.pdf',
  },
  {
    id: 'deloitte',
    title: 'Data Analytics Job Simulation',
    organisation: 'Deloitte via Forage',
    date: 'March 2026',
    credentialId: '5CcvnEEvqdi8Syu7H',
    category: 'Data Analytics',
    icon: '📊',
    description:
      'Completed practical tasks in exploratory data analysis, forensic technology, and structured data-driven business decision workflows.',
    file: 'certificates/deloitte-certificate.pdf',
  },
  {
    id: 'tata-job-simulation',
    title: 'GenAI Powered Data Analytics Simulation',
    organisation: 'Tata Group via Forage',
    date: 'July 2026',
    credentialId: 'BN4JyqzmYam46yufK',
    category: 'GenAI & Analytics',
    icon: '💡',
    description:
      'Practical tasks in AI-powered predictive analysis, delinquency forecasting, and executive data storytelling for strategic operations.',
    file: 'certificates/tata-job-simulation.pdf',
  },
  {
    id: '1m1b-internship',
    title: 'AI for Sustainability Virtual Internship',
    organisation: '1 Million for 1 Billion (1M1B) & AICTE with IBM SkillsBuild',
    date: 'Dec 2025 – Jan 2026',
    credentialId: 'INTERNSHIP_17630914316916a3e755254',
    category: 'Sustainability & AI',
    icon: '🌱',
    description:
      'Hands-on internship building AI solutions tied to UN Sustainable Development Goals using Agentic AI, RAG systems, and responsible AI practices.',
    file: 'certificates/1m1b-internship.pdf',
  },
  {
    id: 'cloud-computing',
    title: 'Elite Cloud Computing Certification',
    organisation: 'NPTEL & IIT Kharagpur (MoE, Govt. of India)',
    date: 'Jul – Oct 2025',
    credentialId: 'NPTEL25CS107S367100283',
    category: 'Cloud Computing',
    icon: '☁️',
    description:
      'Completed a 12-week rigorous course covering cloud architecture, virtualization, distributed storage, and service models with an Elite Score (65%).',
    file: 'certificates/cloud-computing.pdf',
  },
]

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [selectedCert])

  return (
    <section id="certifications" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Certifications &amp; Credentials</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Verified credentials earned through industry internships, technical hackathons,
            and specialized academic programmes.
          </p>
        </div>

        {/* ── Certificate Cards Grid ── */}
        <div className="certs__grid">
          {CERTIFICATES.map((cert) => {
            const certUrl = getAssetUrl(cert.file)
            return (
              <article key={cert.id} className="cert-card card">
                <div className="cert-card__top">
                  <div className="cert-card__icon" aria-hidden="true">
                    {cert.icon}
                  </div>
                  <span className="cert-card__category">{cert.category}</span>
                </div>

                <div className="cert-card__body">
                  <h3 className="cert-card__title">{cert.title}</h3>
                  <p className="cert-card__org">
                    <span className="cert-card__verified" title="Verified credential">✓</span>
                    {cert.organisation}
                  </p>
                  <div className="cert-card__meta">
                    <span className="cert-card__date">🗓 {cert.date}</span>
                    {cert.credentialId && (
                      <span className="cert-card__id">ID: {cert.credentialId}</span>
                    )}
                  </div>
                  <p className="cert-card__desc">{cert.description}</p>
                </div>

                {/* Card Actions: Preview in modal OR Open direct PDF */}
                <div className="cert-card__actions">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm cert-card__preview-btn"
                    onClick={() => setSelectedCert({ ...cert, url: certUrl })}
                    aria-label={`Preview certificate for ${cert.title}`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    Preview
                  </button>

                  <a
                    href={certUrl}
                    className="btn btn-outline btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open certificate PDF in new tab: ${cert.title}`}
                  >
                    Open PDF ↗
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* ── Certificate Modal Viewer ── */}
        {selectedCert && (
          <div
            className="cert-modal-backdrop"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <div
              className="cert-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-header">
                <div>
                  <h3 id="cert-modal-title" className="cert-modal-title">
                    {selectedCert.title}
                  </h3>
                  <p className="cert-modal-org">{selectedCert.organisation}</p>
                </div>

                <button
                  type="button"
                  className="cert-modal-close"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate preview"
                >
                  ✕
                </button>
              </div>

              <div className="cert-modal-body">
                <iframe
                  src={`${selectedCert.url}#toolbar=0&view=FitH`}
                  title={`Certificate PDF: ${selectedCert.title}`}
                  className="cert-modal-iframe"
                />
              </div>

              <div className="cert-modal-footer">
                <span className="cert-modal-meta">
                  Credential ID: <strong>{selectedCert.credentialId}</strong>
                </span>

                <div className="cert-modal-footer-btns">
                  <a
                    href={selectedCert.url}
                    className="btn btn-outline btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in New Tab ↗
                  </a>
                  <a
                    href={selectedCert.url}
                    download
                    className="btn btn-primary btn-sm"
                  >
                    ↓ Download Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications
