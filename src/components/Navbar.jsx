import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#" className="navbar-logo">
          <img src="/logo.svg" alt="Törökbálint Majális 2026 logo" className="navbar-logo-img" />
          <span>Majális 2026</span>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#performers" onClick={(e) => handleNavClick(e, 'performers')}>Fellépők</a></li>
          <li><a href="#program" onClick={(e) => handleNavClick(e, 'program')}>Program</a></li>
          <li><a href="#activities" onClick={(e) => handleNavClick(e, 'activities')}>Programok</a></li>
          <li><a href="#info" onClick={(e) => handleNavClick(e, 'info')}>Tudnivalók</a></li>
          <li><a href="#map" onClick={(e) => handleNavClick(e, 'map')}>Térkép</a></li>
          <li><a href="#volunteer" onClick={(e) => handleNavClick(e, 'volunteer')}>Önkéntesek</a></li>
          <li className="mobile-menu-cta">
            <a
              href="https://forms.cloud.microsoft/e/3XtcMxmLVU?origin=lprLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jelentkezz önkéntesnek!
            </a>
          </li>
        </ul>

        <a
          href="https://forms.cloud.microsoft/e/3XtcMxmLVU?origin=lprLink"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
        >
          Jelentkezz önkéntesnek!
        </a>

        <button
          className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <div
          className="mobile-menu-backdrop visible"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  )
}
