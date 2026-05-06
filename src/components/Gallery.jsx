import { useState } from 'react'

const ONEDRIVE_URL =
  'https://torokbalintipolg-my.sharepoint.com/:f:/g/personal/lakatos-toth_oliver_torokbalint_hu/IgDEivzFEM6sR5qW8x1BUB35AcbUC9y1fxO6OiEU6HYAwQ4?e=YdhKnt'

const photos = [
  { src: '/images/20260501_majális-84.jpg',  alt: 'Majális 2026 – 1. kép',  featured: true  },
  { src: '/images/20260501_majális-247.jpg', alt: 'Majális 2026 – 2. kép',  featured: false },
  { src: '/images/20260501_majális-437.jpg', alt: 'Majális 2026 – 3. kép',  featured: false },
  { src: '/images/20260501_majális-443.jpg', alt: 'Majális 2026 – 4. kép',  featured: false },
  { src: '/images/20260501_majális-514.jpg', alt: 'Majális 2026 – 5. kép',  featured: false },
]

function PhotoCard({ src, alt, featured, index }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div
      className={`photo-card${featured ? ' photo-card--featured' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {!error ? (
        <>
          {!loaded && <div className="photo-skeleton" />}
          <img
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            style={{ opacity: loaded ? 1 : 0 }}
          />
        </>
      ) : (
        <div className="photo-skeleton photo-error">
          <span>📷</span>
        </div>
      )}
      <div className="photo-overlay">
        <div className="photo-overlay-icon">🔍</div>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="gallery-section" id="galeria">

      {/* Header */}
      <div className="gallery-header animate-on-scroll">
        <span className="gallery-tag">📸 Fotók</span>
        <h2 className="gallery-title">Emlékek a Majálisról</h2>
        <p className="gallery-subtitle">
          Néhány pillanat a 2026-os Törökbálinti Majálisról
        </p>
      </div>

      {/* Mosaic grid */}
      <div className="gallery-mosaic animate-on-scroll">
        {photos.map((p, i) => (
          <PhotoCard key={i} {...p} index={i} />
        ))}
      </div>

      {/* Download CTA */}
      <div className="gallery-download-wrap animate-on-scroll">
        <div className="gallery-download-card">
          <div className="download-card-left">
            <div className="download-icon-wrap">
              <span className="download-icon">☁️</span>
            </div>
            <div className="download-text">
              <h3>Töltsd le az összes fotót!</h3>
              <p>Az eseményen készült <strong>635 fénykép</strong> egy helyen, ingyen elérhető.</p>
            </div>
          </div>
          <a
            href={ONEDRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-download-big"
          >
            <span>Összes kép letöltése</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

    </section>
  )
}
