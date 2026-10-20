import { ventures } from '../data/ventures'

// A slow scrolling strip of every venture. Each name opens its details.
// The list is rendered twice so the loop has no gap; the copy is hidden from keyboards and screen readers.
export default function Marquee({ onOpenVenture }) {
  const items = [...ventures, ...ventures]
  return (
    <section className="marquee" aria-label="Ventures in date order">
      <div className="marquee-track">
        {items.map((v, i) => {
          const copy = i >= ventures.length
          return (
            <button key={`${v.id}-${i}`} className="marquee-item" onClick={() => onOpenVenture(v.id)}
              tabIndex={copy ? -1 : 0} aria-hidden={copy ? 'true' : undefined}>
              <span>{v.name}</span><small>{v.year}</small><i aria-hidden="true">{'\u2726'}</i>
            </button>
          )
        })}
      </div>
    </section>
  )
}
