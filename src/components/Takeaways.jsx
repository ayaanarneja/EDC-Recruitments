import { useState } from 'react'
import { lessons } from '../data/lessons'

export default function Takeaways() {
  const [openId, setOpenId] = useState('l1')
  return (
    <section className="section">
      <p className="eyebrow">Entrepreneurial Takeaway</p>
      <h2>4 Lessons From the Journey</h2>
      <p className="muted small">These are our interpretations, not quotes from Kim.</p>
      <div className="two-grid">
        {lessons.map((l) => {
          const open = openId === l.id
          return (
            <button key={l.id} className={open ? 'lesson open' : 'lesson'} data-glow aria-expanded={open} onClick={() => setOpenId(open ? null : l.id)}>
              <b>{l.n}</b><strong>{l.title}</strong>
              {open && <span className="tl-more">{l.body}<br /><br /><em>{l.takeaway}</em></span>}
              <span className="go">{open ? 'Hide insight' : 'Read insight'} <span className="chev" aria-hidden="true">{'\u2193'}</span></span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
