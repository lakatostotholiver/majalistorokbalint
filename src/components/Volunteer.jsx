const features = [
  { icon: '🤝', text: 'Közösségi élmény',    color: '#1565C0' },
  { icon: '🎁', text: 'Exkluzív ajándékok', color: '#E65100' },
  { icon: '🌟', text: 'Új barátságok',      color: '#6A1B9A' },
  { icon: '💪', text: 'Tapasztalatszerzés', color: '#2E7D32' },
]

export default function Volunteer() {
  return (
    <section className="volunteer-section" id="volunteer">
      <div className="container">
        <div className="volunteer-content">
          <h2 className="section-title">Legyél önkéntes!</h2>
          <p className="section-subtitle">
            Szeretnél részese lenni Törökbálint legnagyobb közösségi eseményének? Csatlakozz önkéntes csapatunkhoz és segíts nekünk, hogy ez a nap felejthetetlen legyen!
          </p>

          <div className="volunteer-features">
            {features.map((f, i) => (
              <div
                key={i}
                className="volunteer-feature"
                style={{ background: f.color }}
              >
                <span className="feature-icon">{f.icon}</span>
                <span className="feature-text">{f.text}</span>
              </div>
            ))}
          </div>

          <a
            href="https://forms.cloud.microsoft/e/3XtcMxmLVU?origin=lprLink"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-volunteer"
          >
            Jelentkezem önkéntesnek!
          </a>
        </div>
      </div>
    </section>
  )
}
