const infoItems = [
  {
    icon: '🎟️',
    title: 'Ingyenes belépés',
    desc: 'A rendezvény látogatása mindenki számára ingyenes! Gyere te is, hozd a családodat és barátaidat.',
    highlight: false,
  },
  {
    icon: '♿',
    title: 'Akadálymentesség',
    desc: 'A rendezvényhelyszín akadálymentesen megközelíthető, kerekesszékkel is látogatható.',
    highlight: false,
  },
  {
    icon: '🐾',
    title: 'Kedvencek',
    desc: 'A jól nevelt, pórázon tartott kutyákat szeretettel várjuk a rendezvényen.',
    highlight: false,
  },
  {
    icon: '🍼',
    title: 'Pelenkázó',
    desc: 'Kisgyermekes szülők számára pelenkázó helyiség áll rendelkezésre a helyszínen.',
    highlight: false,
  },
  {
    icon: '🚲',
    title: 'Kerékpártároló',
    desc: 'Kerékpártároló állványok a Nyár utcai parkolóban – gyere bringával!',
    highlight: false,
  },
]

export default function Info() {
  return (
    <section className="info-section" id="info">
      <div className="container">
        <h2 className="section-title">Tudnivalók</h2>
        <p className="section-subtitle">
          Minden fontos tudnivaló a látogatáshoz – parkolástól a belépőig.
        </p>

        <div className="parking-map-block animate-on-scroll">
          <div className="parking-map-header">
            <span className="parking-map-icon">🗺️</span>
            <h3>Parkolási térkép</h3>
          </div>
          <a href="/images/terkep_04_21.jpg" target="_blank" rel="noreferrer" className="parking-map-link" aria-label="Parkolási térkép megnyitása teljes méretben">
            <img
              src="/images/terkep_04_21.jpg"
              alt="Parkolási térkép"
              className="parking-map-image"
            />
          </a>
        </div>

        {/* Parkolás – külön kiemelve */}
        <div className="parking-block animate-on-scroll">
          <div className="parking-block-header">
            <span className="parking-icon">🅿️</span>
            <h3>Parkolás – a rendezvény napján 06:00–23:00 között</h3>
          </div>
          <div className="parking-block-body">
            <div className="parking-main">
              <p>
                <strong>1. Elsődleges parkoló:</strong> A <strong>törökbálinti temető melletti zöld felület</strong>,
                amelyet a <strong>Raktárvárosi útról</strong> lehet megközelíteni.
              </p>
              <p>
                <strong>2. Géza fejedelem útja</strong> (korlátozott számú parkolóhely, dedikált mozgássérült parkolóhelyek):
              </p>
              <p style={{ marginTop: '8px', marginBottom: '4px' }}><strong>Megközelítés:</strong></p>
              <ul className="parking-details-list">
                <li>Bajcsy-Zsilinszky utca – Szegfű utca felől</li>
                <li>Bajcsy-Zsilinszky utca – Szegfű utca – Rózsa köz felől</li>
                <li>Bajcsy-Zsilinszky utca – Diófa utca – Szegfű utca vagy Rózsa köz felől</li>
                <li>Nyár u. – Csokonai Vitéz Mihály utca – Kossuth köz felől</li>
                <li>Nyár u. – Csokonai Vitéz Mihály utca – Rózsa köz felől</li>
                <li>Nyár u. – Csokonai Vitéz Mihály utca – Szegfű utca felől</li>
              </ul>
              <ul className="parking-details-list" style={{ marginTop: '12px' }}>
                <li><strong>Parkolás módja:</strong> Kérjük, hogy a Nádas-tó felőli oldalon <strong>halszálkás alakzatban</strong> parkoljanak, így több gépjármű tud megállni ezen az útszakaszon.</li>
                <li><strong>Tilos parkolni:</strong> A Géza fejedelem útja lakóházak felőli oldalán!</li>
              </ul>
            </div>
            <div className="parking-notice">
              <span className="parking-notice-icon">⚠️</span>
              <div>
                <p>
                  Kérjük, kizárólag <strong>szilárd útburkolaton</strong> álljanak meg! A zöldterületek megóvása érdekében ott a parkolás <strong>szigorúan tilos</strong>.
                </p>
                <p>
                  A megadott időszakon kívül (<strong>23:00 óra után</strong>) a területen hagyott gépjárműveket <strong>elszállítják</strong>, mivel az útszakaszt újra megnyitják a közforgalom számára.
                </p>
                <p>
                  Kérünk mindenkit, hogy lehetőség szerint <strong>ne gépjárművel érkezzen</strong>,
                  hanem alternatív közlekedési eszközzel (kerékpár, roller, tömegközlekedés).
                  Kérjük, <strong>ne parkolj a lakóutcákban</strong>, mivel ez a helyi lakóknak kellemetlenséget okoz!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buszközlekedés – terelőútvonal */}
        <div className="bus-block animate-on-scroll">
          <div className="bus-block-header">
            <span className="bus-icon">🚌</span>
            <h3>Buszközlekedés – terelőútvonal a rendezvény ideje alatt</h3>
          </div>
          <div className="bus-block-body">
            <p className="bus-intro">
              A Törökbálinti Majális megrendezése miatt a <strong>Géza fejedelem utca</strong> Bajcsy-Zsilinszky utca és
              Szabadság tér (körforgalom) közötti szakasza <strong>2026. április 30. (csütörtök) 09:00</strong> és{' '}
              <strong>2026. május 2. (szombat) 04:00</strong> között lezárásra kerül.
            </p>
            <p className="bus-intro">
              A forgalomkorlátozás időtartama alatt az alábbi autóbuszvonalak érintett járatai <strong>mindkét irányban</strong> a{' '}
              <strong>Munkácsy Mihály utca – Szent István utca – Baross Gábor utca – Bajcsy-Zsilinszky utca</strong>{' '}
              terelőútvonalon közlekednek:
            </p>
            <ul className="bus-lines-list">
              <li><strong>88</strong> – Kelenföld vasútállomás M ↔ Budatétény vasútállomás (Campona)</li>
              <li><strong>88A</strong> – Kelenföld vasútállomás M ↔ Márta utca</li>
              <li><strong>172</strong> – Kelenföld vasútállomás M ↔ Törökbálint, Nyár utca (körjárat)</li>
              <li><strong>173</strong> – Kelenföld vasútállomás M ↔ Törökbálint, Harangláb (körjárat)</li>
              <li><strong>972</strong> – Móricz Zsigmond körtér M ↔ Törökbálint, Nyár utca</li>
              <li><strong>9728</strong> – Móricz Zsigmond körtér M ↔ Törökbálint, Nyár utca</li>
            </ul>
            <div className="bus-notice">
              <span className="bus-notice-icon">ℹ️</span>
              <p>
                Kérjük az utasokat, hogy a megváltozott útvonalra tekintettel tervezzenek <strong>több időt</strong> az utazásra!
                A terelés időtartama: <strong>2026. április 30. 09:00 – május 2. 04:00</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="info-grid">
          {infoItems.map((item, index) => (
            <div key={index} className="info-card animate-on-scroll" style={{ transitionDelay: `${index * 0.08}s` }}>
              <span className="info-card-icon">{item.icon}</span>
              <div className="info-card-body">
                <h3 className="info-card-title">{item.title}</h3>
                <p className="info-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
