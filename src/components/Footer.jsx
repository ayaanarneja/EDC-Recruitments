import { scrollToId } from '../utils'
import { navLinks } from '../data/nav'

// Soft glowing ribbon with one sparkle. The colours come from CSS (theme aware), so it works in every theme.
function Ribbon({ side }) {
  const id = `rib-${side}`
  return (
    <svg className={`f-rib ${side}`} viewBox="0 0 600 440" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--rc)' }} stopOpacity=".6" />
          <stop offset="1" style={{ stopColor: 'var(--rc)' }} stopOpacity=".08" />
        </linearGradient>
      </defs>
      <path fill={`url(#${id})`} d="M0 110C70 170 130 280 250 340C340 385 450 395 560 380C450 360 360 320 290 260C210 190 130 130 0 90Z" />
      <path fill={`url(#${id})`} d="M0 250C100 270 200 290 290 330C370 366 470 410 600 430C480 380 380 330 300 295C200 252 100 232 0 215Z" />
      <g className="rib-line">
        <path d="M0 60C90 110 150 190 230 270C300 335 400 380 520 395" />
        <path d="M0 110C70 170 130 280 250 340C340 385 450 395 560 380" />
        <path d="M0 215C100 232 200 252 300 295C380 330 480 380 600 430" />
      </g>
      <path className="rib-star" transform="translate(128 150)" d="M0-16C2-5 5-2 16 0C5 2 2 5 0 16C-2 5-5 2-16 0C-5-2-2-5 0-16Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <span className="f-glow" aria-hidden="true" />
      <Ribbon side="l" />
      <Ribbon side="r" />
      <div className="f-mid">
        <div className="f-orn" aria-hidden="true"><i /><span>{'\u2726'}</span><i /></div>
        <button className="logo" onClick={() => scrollToId('hero')}>Kim Kardashian</button>
        <p>Entrepreneur · Creator · Builder</p>
        <nav aria-label="Footer">
          {navLinks.map(([id, l]) => <button key={id} className={id === 'hero' ? 'link on' : 'link'} onClick={() => scrollToId(id)}>{l}</button>)}
        </nav>
      </div>
    </footer>
  )
}
