const activities = [
  { icon: '🎡', name: 'Vidámpark', desc: 'Láncos körhinta, Eurojumping, Megacsúszda, Spongyabob ugrálóvár' },
  { icon: '🚂', name: 'Kisvonat', desc: '2 kisvonat – kötöttpályás és gumikerekű! Vonatozz a Nádas-tó körül a kicsikkel.' },
  { icon: '🥽', name: 'VR Élmény', desc: 'Élményszimulátor és VR szemüveggel – próbáld ki a jövő technológiáját!' },
  { icon: '🫧', name: 'Óriásbuborékshow', desc: 'Mesés buborékshow a kicsiknek és nagyoknak – 11:00–12:00 és 13:00–14:00 között' },
  { icon: '🎨', name: 'Arcfestés', desc: 'Arcfestés, csillámos tetoválás és hajfonás' },
  { icon: '⚽', name: 'Ügyességi játékok', desc: 'Biliárdfoci, vetődős focikapu, 4 az 1-ben ügyességi játékok' },
  { icon: '👨‍👩‍👧‍👦', name: 'Családi programok', desc: 'Közösségi programok az egész családnak egész nap' },
  { icon: '🍕', name: 'Ételek és italok', desc: 'Változatos gasztronómiai kínálat – Mojito Lemon és sok más' },
  { icon: '🏘️', name: 'Civilfalu', desc: 'Törökbálint civil szervezeteinek bemutatkozása' },
  { icon: '🤝', name: 'Testvérvárosok', desc: 'Ismerkedj meg testvérvárosaink kultúrájával!' },
  { icon: '🎪', name: 'Színpadi programok', desc: 'Élő előadások egész nap a nagyszínpadon' },
  { icon: '🌍', name: 'Közösségi élmény', desc: 'Találkozz szomszédaiddal és ismerőseiddel!' },
]

export default function Activities() {
  return (
    <section className="activities-section" id="activities">
      <div className="container">
        <h2 className="section-title">Egésznapos élmények</h2>
        <p className="section-subtitle">
          A színpadi programokon kívül rengeteg szórakozási lehetőség vár egész nap!
        </p>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card animate-on-scroll" style={{ transitionDelay: `${index * 0.05}s` }}>
              <span className="activity-icon">{activity.icon}</span>
              <h3 className="activity-name">{activity.name}</h3>
              <p className="activity-desc">{activity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
