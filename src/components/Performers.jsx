const performers = [
  {
    name: 'New Level Empire',
    time: '18:00 – 19:20',
    type: 'Koncert',
    image: '/images/new-level-empire.jpg',
  },
  {
    name: 'Bruno x Spacc',
    time: '20:00 – 21:00',
    type: 'Koncert',
    image: '/images/bruno-spacc.jpg',
  },
  {
    name: 'DJ Náksi',
    time: '21:30 – 22:30',
    type: 'DJ Set',
    image: '/images/dj-naksi.jpg',
  },
  {
    name: 'Bing Nyuszi Show',
    time: '15:00 – 16:00',
    type: 'Gyerekprogram',
    image: '/images/bing-nyuszi.jpg',
  },
  {
    name: 'Boda Family',
    time: '17:00 – 17:30',
    type: 'Koncert',
    image: '/images/boda-family.jpg',
  },
]

export default function Performers() {
  return (
    <section className="performers-section" id="performers">
      <div className="container">
        <h2 className="section-title">Fellépők</h2>
        <p className="section-subtitle">
          Koncertek, show-k és DJ set – egész nap szól a zene!
        </p>

        <div className="performers-grid">
          {performers.map((performer, index) => (
            <div key={index} className="performer-card animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
              <img
                src={performer.image}
                alt={performer.name}
                loading="lazy"
              />
              <div className="performer-overlay">
                <h3 className="performer-name">{performer.name}</h3>
                <p className="performer-time">{performer.time}</p>
                <span className="performer-type">{performer.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
