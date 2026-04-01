export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo.svg" alt="Törökbálint Város Önkormányzata" className="footer-logo" />
            <h3>Törökbálint Város Önkormányzata</h3>
            <address className="footer-address">
              <p>2045 Törökbálint, Munkácsy Mihály utca 79.</p>
              <p><a href="tel:+3623335021">+36 23 335 021</a></p>
              <p><a href="https://www.torokbalint.hu" target="_blank" rel="noopener noreferrer">www.torokbalint.hu</a></p>
            </address>
          </div>

          <div className="footer-links">
            <h4>Gyors linkek</h4>
            <ul>
              <li><a href="#performers">Fellépők</a></li>
              <li><a href="#program">Program</a></li>
              <li><a href="#activities">Egésznapos élmények</a></li>
              <li><a href="#info">Tudnivalók</a></li>
              <li><a href="#map">Térkép</a></li>
              <li><a href="#volunteer">Önkéntesek</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Az eseményről</h4>
            <ul>
              <li><a href="#info">2026. május 1., péntek</a></li>
              <li><a href="#info">10:00 – 22:30</a></li>
              <li><a href="#map">Géza fejedelem út, Törökbálint</a></li>
              <li><a href="#info">Ingyenes belépés</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Törökbálint Város Önkormányzata — Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  )
}
