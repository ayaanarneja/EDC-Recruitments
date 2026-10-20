// A venture with a `website` opens that site in a new tab when the card is clicked.
// A small "Details" button on the card still opens the modal.
// A venture without a website would open the modal instead.
export default function VentureCard({ venture, number, onClick }) {
  const style = { '--i': Number(number) - 1 } // delay for the rise-in animation
  const inner = (
    <>
      <span className={`ph vimg ${venture.tone}${venture.faces ? ' faces' : ''}`}>
        {venture.image && <img className="photo" src={venture.image} alt="" style={{ objectPosition: venture.pos }} />}
        <b>{number}</b><em className="badge">{venture.status}</em>
        <span className="peek">{venture.highlights[0]}</span>
      </span>
      <span className="vbody">
        <strong>{venture.name}</strong>
        <small className="muted">{venture.role} · {venture.year}</small>
        <span className="vdesc">{venture.description}</span>
        <span className="vfoot"><span className="chips">{venture.tags.map((t) => <i key={t}>{t}</i>)}</span><span className="circ" aria-hidden="true">{venture.website ? '\u2197' : '\u2192'}</span></span>
      </span>
    </>
  )

  if (!venture.website) {
    return <button className="vcard" style={style} data-glow onClick={onClick} aria-label={`Open details for ${venture.name}`}>{inner}</button>
  }
  return (
    <div className="vwrap" style={style}>
      <a className="vcard" data-glow href={venture.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit the ${venture.name} website (opens in a new tab)`}>{inner}</a>
      <button className="vdetails" onClick={onClick} aria-label={`Open details for ${venture.name}`}>Details</button>
    </div>
  )
}
