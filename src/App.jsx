import { useEffect } from 'react'
import ThankYouHero from './components/ThankYouHero'
import Gallery from './components/Gallery'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <ThankYouHero />
      <Gallery />
      <Feedback />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
