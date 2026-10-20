// Each stat is a button: it opens a venture or scrolls to a section
const stats = [
  { year: '2007', icon: '\u25B6', tint: 'lav', label: 'Reality TV era', action: { venture: 'v5' } },
  { year: '2018', icon: '\u2696', tint: 'mint', label: 'Justice advocacy', action: { scroll: 'impact' } },
  { year: '2019', icon: '\u25C7', tint: 'pink', label: 'SKIMS launches', action: { venture: 'v1' } },
  { year: '2022', icon: '\u2726', tint: 'sun', label: 'SKKY Partners', action: { venture: 'v2' } },
]
export default function StatsStrip({ onOpenVenture, onScroll }) {
  return (
    <section className="stats" aria-label="Key years">
      {stats.map((s) => (
        <button key={s.year} className="stat" data-glow onClick={() => s.action.venture ? onOpenVenture(s.action.venture) : onScroll(s.action.scroll)}>
          <span className={`ico ${s.tint}`} aria-hidden="true">{s.icon}</span><span className="st"><strong>{s.year}</strong><span>{s.label}</span></span>
        </button>
      ))}
    </section>
  )
}
