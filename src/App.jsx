import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Performers from './components/Performers'
import Program from './components/Program'
import MapSection from './components/MapSection'
import Activities from './components/Activities'
import Info from './components/Info'
import Volunteer from './components/Volunteer'
import Newsletter from './components/Newsletter'
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
      <Navbar />
      <Hero />
      <Countdown />
      <Performers />
      <Program />
      <MapSection />
      <Activities />
      <Info />
      <Volunteer />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
