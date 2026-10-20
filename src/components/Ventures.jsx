import { categories, ventures } from '../data/ventures'
import VentureCard from './VentureCard'
export default function Ventures({ category, onPickCategory, onOpenVenture }) {
  const shown = ventures.filter((v) => category === 'All' || v.industry === category)
  return (
    <section id="ventures" className="section">
      <p className="eyebrow">Ventures</p>
      <h2>Ideas. Brands. Businesses.</h2>
      <p className="muted">Building brands around culture, identity and everyday experience.</p>
      <div className="filters" role="group" aria-label="Filter by industry">
        {categories.map((c) => <button key={c} className={category === c ? 'tag on' : 'tag'} aria-pressed={category === c} onClick={() => onPickCategory(c)}>{c}</button>)}
      </div>
      <p className="small muted" aria-live="polite">Showing {shown.length} {shown.length === 1 ? 'venture' : 'ventures'}</p>
      {shown.length === 0
        ? <div className="empty"><p>No ventures in this category yet.</p><button className="textbtn" onClick={() => onPickCategory('All')}>Show all ventures {'\u2192'}</button></div>
        : <div className="vgrid" key={category}>{shown.map((v, i) => <VentureCard key={v.id} venture={v} number={String(i + 1).padStart(2, '0')} onClick={() => onOpenVenture(v.id)} />)}</div>}
    </section>
  )
}
