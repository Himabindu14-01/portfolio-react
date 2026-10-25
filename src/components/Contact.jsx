import { useState } from 'react'

const EMAIL = 'velisihima@gmail.com'

const DIRECT_LINKS = [
  {
    id: 'email',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    id: 'linkedin',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/himabindu14',
    href: 'https://www.linkedin.com/in/himabindu14/',
  },
  {
    id: 'github',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/Himabindu14-01',
    href: 'https://github.com/Himabindu14-01',
  },
  {
    id: 'location',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Andhra Pradesh, India',
    href: null,
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      // Sends form submission to user's email via FormSubmit AJAX service
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject || "Let's Connect"}`,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      const data = await response.json()

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(data.message || 'Form submission failed')
      }
    } catch (err) {
      console.error('Contact Form error:', err)
      setStatus('error')
      setErrorMsg(
        'Unable to send automatically right now. You can click below to send directly using your email client!'
      )
    }
  }

  const mailtoFallback = `mailto:${EMAIL}?subject=${encodeURIComponent(
    formData.subject || `Message from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Have an internship opportunity, a project idea, or just want to chat?
            Send me a message below and it will be delivered directly to my inbox!
          </p>
        </div>

        <div className="contact__layout">
          {/* LEFT: Info & Quick Links */}
          <div className="contact__info-pane">
            <div className="contact__info-header">
              <h3 className="contact__info-title">Get in Touch</h3>
              <p className="contact__info-desc">
                I'm actively seeking opportunities to collaborate on impactful software,
                web applications, and AI projects. Feel free to reach out directly
                or use the form.
              </p>
            </div>

            <div className="contact__availability">
              <span className="contact__status-dot" aria-hidden="true" />
              <span>Available for internships &amp; software roles</span>
            </div>

            <div className="contact__quick-list">
              {DIRECT_LINKS.map((link) => (
                <div key={link.id} className="contact__quick-item">
                  <div className="contact__quick-icon" aria-hidden="true">
                    {link.icon}
                  </div>
                  <div className="contact__quick-content">
                    <span className="contact__quick-label">{link.label}</span>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="contact__quick-link"
                        target={link.id !== 'email' ? '_blank' : undefined}
                        rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                      >
                        {link.value}
                      </a>
                    ) : (
                      <span className="contact__quick-text">{link.value}</span>
                    )}
                  </div>
                  {link.id === 'email' && (
                    <button
                      type="button"
                      className="contact__copy-btn"
                      onClick={handleCopyEmail}
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copied ? '✓ Copied' : 'Copy'}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="contact__note-card">
              <p className="contact__note-title">💡 Fast Response Guarantee</p>
              <p className="contact__note-text">
                Messages submitted through the form reach my personal email
                (<strong>{EMAIL}</strong>) in real time. I usually reply within 24 hours.
              </p>
            </div>
          </div>

          {/* RIGHT: Interactive Form */}
          <div className="contact__form-card">
            {status === 'success' ? (
              <div className="contact__success-state">
                <div className="contact__success-badge" aria-hidden="true">
                  ✓
                </div>
                <h3 className="contact__success-title">Message Sent!</h3>
                <p className="contact__success-text">
                  Thank you for reaching out! Your message was delivered straight to my
                  inbox (<strong>{EMAIL}</strong>). I will review it and get back to you shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact__form" noValidate>
                <h3 className="contact__form-title">Send a Direct Message</h3>

                {status === 'error' && (
                  <div className="contact__alert contact__alert--error">
                    <p>{errorMsg}</p>
                    <a
                      href={mailtoFallback}
                      className="btn btn-primary btn-sm"
                      style={{ marginTop: '10px', display: 'inline-block' }}
                    >
                      Open in Email App →
                    </a>
                  </div>
                )}

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="contact-name" className="contact__label">
                      Your Name <span className="contact__required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="contact__input"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="contact-email" className="contact__label">
                      Your Email <span className="contact__required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="contact__input"
                      disabled={status === 'submitting'}
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="contact-subject" className="contact__label">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    className="contact__input"
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="contact-message" className="contact__label">
                    Message <span className="contact__required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Himabindu, I came across your portfolio and would like to connect regarding..."
                    className="contact__textarea"
                    disabled={status === 'submitting'}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="contact__spinner" aria-hidden="true" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
