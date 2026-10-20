import { useEffect, useState } from 'react'
import { scrollToId } from '../utils'
import { navLinks, themes } from '../data/nav'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const [pop, setPop] = useState(false)
  const pick = (id) => {
    setTheme(id); setPop(false); document.documentElement.dataset.theme = id
    try { localStorage.setItem('theme', id) } catch (e) {}
  }
  const cur = themes.find((t) => t[0] === theme) || themes[0]

  // Close the theme picker on outside click or Escape
  useEffect(() => {
    if (!pop) return
    const away = (e) => !e.target.closest('.themes') && setPop(false)
    const esc = (e) => e.key === 'Escape' && setPop(false)
    document.addEventListener('mousedown', away); document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('mousedown', away); document.removeEventListener('keydown', esc) }
  }, [pop])

  // Highlight the link of the section currently on screen
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' })
    navLinks.forEach(([id]) => { const el = document.getElementById(id); el && obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  // Click outside the header closes the mobile menu
  useEffect(() => {
    if (!open) return
    const close = (e) => !e.target.closest('.kn') && setOpen(false)
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  const go = (id) => { scrollToId(id); setOpen(false) }
  return (
    <header className="kn">
      <div className="kn-pill">
        <button className="kn-brand" onClick={() => go('hero')} aria-label="Kim Kardashian, back to top">
          <span className="kn-mono" aria-hidden="true"><span>K</span><span>K</span></span>
          <span className="kn-sep" aria-hidden="true" />
          <span className="kn-name">Kim Kardashian</span>
        </button>
        <nav className={open ? 'kn-links open' : 'kn-links'} aria-label="Main">
          {navLinks.map(([id, label]) => (
            <button key={id} className={active === id ? 'kn-link on' : 'kn-link'} aria-current={active === id ? 'true' : undefined} onClick={() => go(id)}>{label}</button>
          ))}
          <span className="kn-sep kn-sep-r" aria-hidden="true" />
          <button className="kn-cta" onClick={() => go('ventures')}>Explore Ventures <span aria-hidden="true">{'\u2192'}</span></button>
        </nav>
        <div className="themes">
          <button className="kn-theme" aria-haspopup="true" aria-expanded={pop} aria-label={`Colour theme: ${cur[1]}`} onClick={() => setPop(!pop)}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" fill="currentColor" /></svg>
          </button>
          {pop && (
            <div className="tpop" role="group" aria-label="Colour theme">
              <p className="tpop-t">Colour theme</p>
              {themes.map(([id, label, a, b]) => (
                <button key={id} className="topt" aria-pressed={theme === id} onClick={() => pick(id)}>
                  <span className="sw" style={{ '--a': a, '--b': b }} />{label}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="kn-burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? '\u2715' : '\u2630'}</button>
      </div>
    </header>
  )
}
