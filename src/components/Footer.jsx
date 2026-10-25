// Footer — minimal and clean

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">Himabindu</p>

        <nav className="footer__links" aria-label="Footer navigation">
          <a href="https://github.com/Himabindu14-01" className="footer__link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/himabindu14/" className="footer__link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:velisihima@gmail.com" className="footer__link">
            Email
          </a>
        </nav>

        <p className="footer__copy">
          &copy; {currentYear} Himabindu. Built with React &amp; Vite.
        </p>
      </div>
    </footer>
  )
}

export default Footer
