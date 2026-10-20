export default function TimelineItem({ milestone, isOpen, onToggle, onOpenVenture }) {
  const m = milestone
  return (
    <li className={isOpen ? 'tl open' : 'tl'}>
      <span className="tl-year">{m.year}</span>
      <div className="tl-card" data-glow>
        <button className="tl-head" aria-expanded={isOpen} onClick={onToggle}>
          <span><small className="eyebrow">{m.category}</small><strong>{m.title}</strong><span className="muted">{m.description}</span></span>
          <span className="chev" aria-hidden="true">{'\u2193'}</span>
        </button>
        {isOpen && (
          <div className={m.image ? 'tl-more has-img' : 'tl-more'}>
            {m.image && (
              <figure className="tl-fig">
                <img className="tl-img" src={m.image} alt={m.imageAlt} loading="lazy" />
              </figure>
            )}
            <div className="tl-text">
              {m.story && <p>{m.story}</p>}
              <p><b>Kim’s role:</b> {m.role}</p>
              <p><b>Why it mattered:</b> {m.why}</p>
              <div className="row">
                {m.source && <a href={m.source.url} target="_blank" rel="noopener noreferrer">Source: {m.source.label} {'\u2197'}</a>}
                {m.venture && <button className="textbtn" onClick={() => onOpenVenture(m.venture)}>Open related venture {'\u2192'}</button>}
              </div>
            </div>
          </div>
        )}
      </div>
    </li>
  )
}
