export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <h3 className="newsletter-title">Iratkozz fel hírlevelünkre!</h3>
            <p className="newsletter-desc">
              Legyél az első, aki értesül Törökbálint legújabb eseményeiről és híreiről.
            </p>
          </div>
          <a
            href="https://www.torokbalint.hu/app/cms/TorokbalintApp/index?id=53"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-newsletter"
          >
            Feliratkozás a hírlevélre
          </a>
        </div>
      </div>
    </section>
  )
}
