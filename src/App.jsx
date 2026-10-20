import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import About from './components/About'
import Journey from './components/Journey'
import Ventures from './components/Ventures'
import VentureModal from './components/VentureModal'
import Impact from './components/Impact'
import Takeaways from './components/Takeaways'
import Closing from './components/Closing'
import Sources from './components/Sources'
import Footer from './components/Footer'
import Splash from './components/Splash'
import ScrollProgress from './components/ScrollProgress'
import Marquee from './components/Marquee'
import { ventures } from './data/ventures'
import { scrollToId } from './utils'
import useGlow from './useGlow'
import useReveal from './useReveal'

export default function App() {
  useGlow()
  useReveal()
  const [category, setCategory] = useState('All')        // shared by About tags + Ventures filter
  const [selectedIndex, setSelectedIndex] = useState(null) // which venture the modal shows
  const [showTop, setShowTop] = useState(false)
  const [intro, setIntro] = useState(true)             // black signature screen shown first

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lets the hero animate in only after the intro screen is gone
  useEffect(() => { if (!intro) document.documentElement.dataset.ready = 'true' }, [intro])

  const openVenture = (id) => setSelectedIndex(ventures.findIndex((v) => v.id === id))
  const pickCategory = (c) => { setCategory(c); scrollToId('ventures') }

  return (
    <>
      {intro && <Splash onDone={() => setIntro(false)} />}
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero onOpenVenture={openVenture} onPickCategory={pickCategory} />
        <StatsStrip onOpenVenture={openVenture} onScroll={scrollToId} />
        <About category={category} onPickCategory={pickCategory} onOpenVenture={openVenture} />
        <Marquee onOpenVenture={openVenture} />
        <Journey onOpenVenture={openVenture} />
        <Ventures category={category} onPickCategory={setCategory} onOpenVenture={openVenture} />
        <Impact onOpenVenture={openVenture} />
        <Takeaways />
        <Closing />
        <Sources />
      </main>
      <Footer />
      {selectedIndex !== null && <VentureModal ventures={ventures} index={selectedIndex} onChange={setSelectedIndex} onClose={() => setSelectedIndex(null)} />}
      {showTop && <button className="top" onClick={() => scrollToId('hero')} aria-label="Back to top">{'\u2191'}</button>}
    </>
  )
}
