const programItems = [
  { time: '10:00 – 10:10', title: 'Megnyitó, köszöntők',                         tag: 'Ünnepség',    highlight: false },
  { time: '10:15 – 10:35', title: 'Lendvai Károly Férfikar',                      tag: 'Fellépés',    highlight: false },
  { time: '10:40 – 10:55', title: 'Törökbálinti Cantabile Kórus',                 tag: 'Fellépés',    highlight: false },
  { time: '11:05',         title: 'Panic Crew Hip Hop Tánciskola',                tag: 'Tánc',        highlight: false },
  { time: '11:20',         title: 'Bushin Harcművészeti Egyesület',               tag: 'Bemutató',    highlight: false },
  { time: '11:40',         title: 'Törökbálinti Hagyományőrző Táncsoport',        tag: 'Néptánc',     highlight: false },
  { time: '12:00',         title: 'Diaspora Görög Hagyományőrző Egyesület',       tag: 'Kultúra',     highlight: false },
  { time: '12:20',         title: 'Törökbálinti Sakkbarátok SE',                  tag: 'Bemutató',    highlight: false },
  { time: '12:40',         title: 'Previ Team Egyesület',                         tag: 'Sport',       highlight: false },
  { time: '13:00',         title: 'Gyémántkút Egyesület',                         tag: 'Bemutató',    highlight: false },
  { time: '13:35',         title: 'Dance of Destiny TSE',                         tag: 'Tánc',        highlight: false },
  { time: '15:00 – 16:00', title: 'Bing Nyuszi Show',                             tag: 'Gyerekprogram', highlight: false },
  { time: '17:00 – 17:30', title: 'Boda Family',                                  tag: 'Koncert',     highlight: false },
  { time: '18:00 – 19:20', title: 'New Level Empire',                             tag: 'Főprogram',   highlight: true  },
  { time: '20:00 – 21:00', title: 'Bruno X',                                      tag: 'Főprogram',   highlight: true  },
  { time: '21:30 – 22:30', title: 'DJ Náksi',                                     tag: 'DJ Set',      highlight: true  },
]

const tagColors = {
  'Ünnepség':     { bg: '#e8f8ef', color: '#1B9E5A' },
  'Fellépés':     { bg: '#e8f4ff', color: '#2E8BC0' },
  'Tánc':         { bg: '#f3eeff', color: '#7c3aed' },
  'Bemutató':     { bg: '#fff3e0', color: '#e65c00' },
  'Néptánc':      { bg: '#fce4ec', color: '#c2185b' },
  'Kultúra':      { bg: '#e0f7fa', color: '#00838f' },
  'Sport':        { bg: '#e8f5e9', color: '#2e7d32' },
  'Gyerekprogram':{ bg: '#fff8e1', color: '#f57f17' },
  'Koncert':      { bg: '#e3f2fd', color: '#1565c0' },
  'Főprogram':    { bg: '#fff3cd', color: '#856404' },
  'DJ Set':       { bg: '#f3eeff', color: '#5b21b6' },
}

export default function Program() {
  return (
    <section className="program-section" id="program">
      <div className="container">
        <h2 className="section-title">Napi Program</h2>
        <p className="section-subtitle">
          Egész napos szórakozás vár rád és a családodat – 10:00-tól 22:30-ig!
        </p>

        <div className="program-table-wrapper animate-on-scroll">
          <table className="program-table">
            <thead>
              <tr>
                <th>Időpont</th>
                <th>Program</th>
                <th>Típus</th>
              </tr>
            </thead>
            <tbody>
              {programItems.map((item, index) => {
                const colors = tagColors[item.tag] || { bg: '#e8f8ef', color: '#1B9E5A' }
                return (
                  <tr key={index} className={item.highlight ? 'program-row--highlight' : ''}>
                    <td className="program-time">{item.time}</td>
                    <td className="program-title">{item.title}</td>
                    <td>
                      <span
                        className="program-tag"
                        style={{ background: colors.bg, color: colors.color }}
                      >
                        {item.tag}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
