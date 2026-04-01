import { useState, useEffect } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const eventDate = new Date('2026-05-01T10:00:00+02:00')
    const now = new Date()
    const diff = eventDate - now

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true }
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      passed: false,
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (timeLeft.passed) {
    return (
      <section className="countdown-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">🎉 A Majális elkezdődött!</h2>
          <p className="section-subtitle">Gyere és csatlakozz hozzánk a Géza fejedelem úton!</p>
        </div>
      </section>
    )
  }

  return (
    <section className="countdown-section">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '40px' }}>
          Visszaszámlálás a Majálisig
        </h2>
        <div className="countdown-grid">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">Nap</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="countdown-label">Óra</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="countdown-label">Perc</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="countdown-label">Másodperc</span>
          </div>
        </div>
      </div>
    </section>
  )
}
