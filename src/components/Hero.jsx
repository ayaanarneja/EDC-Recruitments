import { scrollToId } from '../utils'
const quick = [['v1', 'SKIMS'], ['v2', 'SKKY Partners'], ['v3', 'KKW Beauty'], ['v4', 'The Justice Project']]
export default function Hero({ onOpenVenture }) {
  return (
    <section id="hero" className="hero2">
      <div className="orb o1" aria-hidden="true" /><div className="orb o2" aria-hidden="true" />
      <div className="stage2">
        <p className="k-script" aria-hidden="true">Kim</p>
        <h1 className="h-title" aria-label="Kim Kardashian">KARDASHIAN</h1>
        <figure className="frame2">
          <a className="frame-link" href="https://www.instagram.com/kimkardashian/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Open Kim Kardashian on Instagram">
            <img src="/images/portrait.png" alt="Portrait of Kim Kardashian" />
          </a>
        </figure>
        <figure className="mini2 a" aria-hidden="true"><img src="/images/skims.png" alt="" /></figure>
        <figure className="mini2 b" aria-hidden="true"><img src="/images/kkw-beauty.png" alt="" /></figure>
        <i className="spark sp1" aria-hidden="true">{'\u2726'}</i><i className="spark sp2" aria-hidden="true">{'\u2726'}</i>
      </div>
      <div className="h-bottom">
        <div>
          <p className="lead">From pop-culture icon to entrepreneur shaping modern consumer brands. A journey from reality television to SKIMS, private equity, scripted acting and criminal justice reform.</p>
          <div className="btns">
            <button className="btn dark" onClick={() => scrollToId('ventures')}>Explore Ventures <span className="arr">{'\u2192'}</span></button>
            <button className="btn ghost" onClick={() => scrollToId('journey')}>View Journey <span className="arr">{'\u2192'}</span></button>
          </div>
        </div>
        <div className="quick" role="group" aria-label="Jump to a venture">
          <span className="eyebrow">Jump to</span>
          {quick.map(([id, label]) => <button key={id} onClick={() => onOpenVenture(id)}>{label} <span className="arr">{'\u2192'}</span></button>)}
        </div>
      </div>
    </section>
  )
}
