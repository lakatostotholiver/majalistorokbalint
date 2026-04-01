const infoItems = [
  {
    icon: '🎟️',
    title: 'Ingyenes belépés',
    desc: 'A rendezvény látogatása mindenki számára ingyenes! Gyere te is, hozd a családodat és barátaidat.',
    highlight: false,
  },
  {
    icon: '🚌',
    title: 'Tömegközlekedés',
    desc: 'Törökbálint vasútállomásról gyalog 10 perc. Buszok: 40-es, 140-es, 240-es – Törökbálint, Városháza megálló.',
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
]

export default function Info() {
  return (
    <section className="info-section" id="info">
      <div className="container">
        <h2 className="section-title">Tudnivalók</h2>
        <p className="section-subtitle">
          Minden fontos tudnivaló a látogatáshoz – parkolástól a belépőig.
        </p>

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
              <ul className="parking-details-list">
                <li><strong>Behajtás:</strong> A Csokonai utca felől a Kossuth közön, illetve a Szegfű utcán keresztül.</li>
                <li><strong>Kihajtás:</strong> A Bajcsy-Zsilinszky út irányába.</li>
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
