export default function MapSection() {
  return (
    <section className="map-section" id="map">
      <div className="container">
        <h2 className="section-title">📍 Helyszín és Térkép</h2>
        <p className="section-subtitle">
          A rendezvény a Géza fejedelem úton kerül megrendezésre. Az alábbi interaktív térképen megtalálod a pontos helyszínt és a területi elrendezést.
        </p>

        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1TS0QwkB2BF5EjfEaI8zfPHveF3lk6XQ&ll=47.43618854974782%2C18.918094199999995&z=17"
            title="Törökbálint Városi Majális Térkép"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="map-info">
          <div className="map-info-item">
            <span className="info-icon">📍</span>
            <div>
              <strong>Géza fejedelem út</strong>
              <br />
              <span>Törökbálint, 2045</span>
            </div>
          </div>
          <div className="map-info-item">
            <span className="info-icon">📅</span>
            <div>
              <strong>2026. május 1.</strong>
              <br />
              <span>Péntek (munkaszüneti nap)</span>
            </div>
          </div>
          <div className="map-info-item">
            <span className="info-icon">⏰</span>
            <div>
              <strong>10:00 – 22:30</strong>
              <br />
              <span>Egésznapos élmények</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
