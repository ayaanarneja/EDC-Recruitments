import { sources, imageCredits } from '../data/sources'
export default function Sources() {
  return (
    <section id="sources" className="section">
      <p className="eyebrow">Sources</p>
      <h2>Sources &amp; Credits</h2>
      <ul className="slist">
        {sources.map((s) => (
          <li key={s.id}><a data-glow href={s.url} target="_blank" rel="noopener noreferrer"><small className="eyebrow">{s.type}</small><strong>{s.name}</strong><span className="muted">{s.note}</span><span className="go">{s.label} {'\u2197'}</span></a></li>
        ))}
      </ul>
      <p className="muted small">{imageCredits}</p>
      <p className="muted small">Research sources are provided for educational purposes. Information and links were checked against publicly available sources.</p>
    </section>
  )
}
