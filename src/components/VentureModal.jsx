import { useEffect, useRef, useState } from 'react'
const tabs = [['overview', 'Overview'], ['facts', 'Key facts'], ['sources', 'Sources']]
// Native <dialog>: Escape key and focus handling come built in
export default function VentureModal({ ventures, index, onClose, onChange }) {
  const ref = useRef(null)
  const [tab, setTab] = useState('overview')
  const [shot, setShot] = useState(0) // which picture is showing (main image or a gallery image)
  const v = ventures[index]
  const shots = v.image ? [{ src: v.image, alt: v.alt, pos: v.pos }, ...(v.gallery || [])] : []
  const current = shots[shot] || shots[0]
  useEffect(() => {
    const d = ref.current
    if (!d.open) d.showModal()
    return () => d.open && d.close()
  }, [])
  const step = (n) => { setTab('overview'); setShot(0); onChange((index + n + ventures.length) % ventures.length) }
  return (
    <dialog ref={ref} className="modal" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()} aria-label={v.name}>
      <button className="x" onClick={onClose} aria-label="Close">{'\u2715'}</button>
      <div className="modal-grid">
        <div className={`ph mimg ${v.tone}`}>{current && <img className="photo" src={current.src} alt={current.alt} style={{ objectPosition: current.pos }} />}
          {shots.length > 1 && (
            <div className="thumbs" role="group" aria-label="Pictures">
              {shots.map((s, i) => <button key={s.src} className={i === shot ? 'on' : ''} aria-pressed={i === shot} aria-label={`Show picture ${i + 1} of ${shots.length}`} onClick={() => setShot(i)}><img src={s.src} alt="" /></button>)}
            </div>
          )}
        </div>
        <div className="modal-in">
          <p className="eyebrow">{v.industry} · {v.year} · {v.status}</p>
          <h3>{v.name}</h3>
          <p className="muted">{v.role}</p>
          <div className="tabs" role="tablist">
            {tabs.map(([id, label]) => <button key={id} role="tab" aria-selected={tab === id} className={tab === id ? 'tab on' : 'tab'} onClick={() => setTab(id)}>{label}</button>)}
          </div>
          {tab === 'overview' && <div className="pane"><p>{v.story}</p><p><b>Why it matters:</b> {v.significance}</p>
            <ul className="hl">{v.highlights.map((h) => <li key={h}>{h}</li>)}</ul></div>}
          {tab === 'facts' && <dl className="pane facts">{v.facts.map(([k, val]) => <div key={k}><dt>{k}</dt><dd>{val}</dd></div>)}</dl>}
          {tab === 'sources' && <div className="pane">
            {v.website && <p><a className="btn dark" href={v.website} target="_blank" rel="noopener noreferrer">{v.websiteLabel || 'Official website'} {'\u2197'}</a></p>}
            <ul className="hl">{v.sources.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label} {'\u2197'}</a></li>)}</ul></div>}
          <div className="pager">
            <button className="textbtn" onClick={() => step(-1)}>{'\u2190'} Previous</button>
            <span>{String(index + 1).padStart(2, '0')} / {String(ventures.length).padStart(2, '0')}</span>
            <button className="textbtn" onClick={() => step(1)}>Next {'\u2192'}</button>
          </div>
        </div>
      </div>
    </dialog>
  )
}
