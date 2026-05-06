import { useEffect, useRef } from 'react'

const COLORS = [
  '#1B9E5A', '#2AAFB5', '#F7C948', '#F89F3C',
  '#E8A4C9', '#C4A6D7', '#4EC98B', '#2E8BC0'
]

export default function ThankYouHero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 7 + 3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speed: Math.random() * 1.5 + 0.8,
      sway: Math.random() * 1.5 - 0.75,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.07,
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.y += p.speed
        p.x += Math.sin(p.y * 0.02) * p.sway
        p.angle += p.spin
        if (p.y > canvas.height + 20) {
          p.y = -20
          p.x = Math.random() * canvas.width
        }
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)
        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.7
        if (p.shape === 'rect') {
          ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.6)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.r / 2, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="thankyou-hero">
      <canvas ref={canvasRef} className="confetti-canvas" />

      <div className="thankyou-hero-content">
        <img src="/logo.svg" alt="Törökbálinti Majális 2026" className="ty-logo" />

        <h1 className="ty-title">KÖSZÖNJÜK!</h1>

        <p className="ty-subtitle">Jövőre találkozunk!</p>

        <p className="ty-desc">
          Köszönjük, hogy velünk ünnepelted a <strong>2026-os Törökbálinti Majálist!</strong>
        </p>
      </div>
    </section>
  )
}
