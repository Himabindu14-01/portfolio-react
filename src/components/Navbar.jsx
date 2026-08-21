import { useState } from 'react'

// Navigation links — update labels or hrefs to add/remove sections
const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Experience',    href: '#experience' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Certifications',href: '#certifications' },
  { label: 'Education',     href: '#education' },
  { label: 'Contact',       href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu when a link is clicked
  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        {/* Brand / Logo */}
        <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
          Himabindu
        </a>

        {/* Desktop & Mobile Nav Links */}
        <ul
          className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}
          role="list"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — visible only on mobile */}
        <button
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
