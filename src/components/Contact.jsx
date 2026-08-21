// Contact section — no backend form, just direct links

// Update the email address here
const EMAIL = 'velisihima@gmail.com'    // Replace with your real email

const CONTACT_LINKS = [
  {
    id: 'email',
    icon: '✉️',
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    id: 'linkedin',
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/himabindu14',
    href: 'https://www.linkedin.com/in/himabindu14/',
  },
  {
    id: 'github',
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Himabindu14-01',
    href: 'https://github.com/Himabindu14-01',
  },
]

function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider" />
        </div>

        <div className="contact__inner">
          <p className="contact__intro">
            I'm always open to interesting conversations, internship
            opportunities, or collaboration on projects. Feel free to reach
            out through any of the channels below.
          </p>

          <div className="contact__links">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="contact__link-row"
                target={link.id !== 'email' ? '_blank' : undefined}
                rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                aria-label={`Contact via ${link.label}: ${link.value}`}
              >
                <span className="contact__link-icon" aria-hidden="true">
                  {link.icon}
                </span>
                <div className="contact__link-body">
                  <span className="contact__link-label">{link.label}</span>
                  <span className="contact__link-value">{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
