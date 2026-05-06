export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <img src="/logo.svg" alt="Törökbálint Város Önkormányzata" className="footer-logo" />
          <div className="footer-info">
            <p className="footer-org">Törökbálint Város Önkormányzata</p>
            <address className="footer-address">
              <span>2045 Törökbálint, Munkácsy Mihály utca 79.</span>
              <span className="footer-sep">·</span>
              <a href="tel:+3623335021">+36 23 335 021</a>
              <span className="footer-sep">·</span>
              <a href="https://www.torokbalint.hu" target="_blank" rel="noopener noreferrer">torokbalint.hu</a>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Törökbálint Város Önkormányzata</p>
        </div>
      </div>
    </footer>
  )
}
