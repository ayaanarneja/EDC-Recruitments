import { useState } from 'react'
import { impactTabs as tabs } from '../data/impact'

// The toggle switches between the two kinds of impact. Each side has its own featured image and story.
export default function Impact({ onOpenVenture }) {
  const [id, setId] = useState('business')
  const t = tabs.find((x) => x.id === id)
  return (
    <section id="impact" className="section band">
      <p className="eyebrow">Impact</p>
      <h2>Building Influence<br />into <em>Impact.</em></h2>
      <div>
        <div className="seg" role="group" aria-label="Choose a type of impact">
          {tabs.map((x) => <button key={x.id} className={id === x.id ? 'on' : ''} aria-pressed={id === x.id} onClick={() => setId(x.id)}>{x.label}</button>)}
        </div>
      </div>
      <figure className="featured" key={t.id}>
        <img src={t.image} alt={t.alt} />
        <div className="feat-text">
          <p className="eyebrow">Featured story</p>
          <p>{t.feature}</p>
          <button className="btn dark" onClick={() => onOpenVenture(t.venture)}>{t.cta} <span className="arr">{'\u2192'}</span></button>
        </div>
        <figcaption>{t.caption}</figcaption>
      </figure>
      <article className="achv" key={t.id + 'a'} data-glow>
        <b>{t.n}</b>
        <div>
          <p className="eyebrow">Achievement {t.n} · {t.area}</p>
          <h3>{t.title}</h3>
          {t.paras.map((p) => <p key={p}>{p}</p>)}
          <p className="contrib"><em>{t.contribution}</em></p>
          <div className="row">{t.sources.map((s) => <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">Source: {s.label} {'\u2197'}</a>)}</div>
        </div>
      </article>
    </section>
  )
}
