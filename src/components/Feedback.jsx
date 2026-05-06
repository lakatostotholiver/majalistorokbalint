export default function Feedback() {
  return (
    <section className="feedback-section" id="visszajelzes">
      <div className="feedback-bg-pattern" />
      <div className="container">
        <div className="feedback-inner animate-on-scroll">

          <div className="feedback-icon-wrap">
            <span className="feedback-big-icon">📝</span>
          </div>

          <h2 className="feedback-title">Mondd el a véleményed!</h2>
          <p className="feedback-desc">
            Köszönjük, hogy részt vett a <strong>2026-os Törökbálinti Majálison!</strong><br />
            Visszajelzésed segít nekünk abban, hogy jövőre még jobb eseményt szervezzünk.
          </p>

          <a
            href="https://forms.office.com/e/mAqefyNC2e"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-feedback-big"
          >
            <span>Kitöltöm a kérdőívet</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>

          <p className="feedback-note">
            Mindössze 2 perc — névtelen és önkéntes
          </p>

        </div>
      </div>
    </section>
  )
}
