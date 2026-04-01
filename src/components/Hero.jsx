export default function Hero() {
  const scrollToPerformers = (e) => {
    e.preventDefault()
    document.getElementById('performers')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-pattern" />

      <div className="hero-balloons">
        <div className="balloon" />
        <div className="balloon" />
        <div className="balloon" />
        <div className="balloon" />
        <div className="balloon" />
        <div className="balloon" />
      </div>

      <div className="hero-bunting" style={{ textAlign: 'center' }}>
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className="bunting-flag" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Törökbálint Város Önkormányzata
        </div>

        <img src="/logo.svg" alt="Törökbálinti Majális 2026" className="hero-logo" />

        <h1>
          Törökbálinti<br />
          <span className="highlight">Majális 2026</span>
        </h1>

        <div className="hero-date">
          2026. május 1. &nbsp;|&nbsp; 10:00 – 22:30
        </div>

        <div className="hero-location">
          Géza fejedelem út, Törökbálint
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToPerformers}>
            Fellépők és program
          </button>
          <a
            href="https://forms.cloud.microsoft/e/3XtcMxmLVU?origin=lprLink"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Legyél önkéntes
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow" />
        <span>Görgess lejjebb</span>
      </div>
    </section>
  )
}
