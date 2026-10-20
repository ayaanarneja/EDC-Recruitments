import { categories, ventures } from '../data/ventures'
export default function About({ category, onPickCategory, onOpenVenture }) {
  return (
    <section id="about" className="section about3">
      <div className="collage">
        <figure className="ph tall"><img className="photo" src="/images/kardashians.png" alt="Promotional portrait of the cast of The Kardashians, with Kim Kardashian in front" /></figure>
        <figure className="mini m1" aria-hidden="true"><img src="/images/skims.png" alt="" /></figure>
        <figure className="mini m2" aria-hidden="true"><img src="/images/kkw-beauty.png" alt="" /></figure>
      </div>
      <div>
        <p className="eyebrow">About</p>
        <h2>More Than a Business.<br />A <em>Point of View.</em></h2>
        <p>Kimberly Noel Kardashian was born on 21 October 1980 in Los Angeles. She is an American entrepreneur, media personality, producer and public figure whose career spans reality television, fashion, beauty, digital media and criminal justice reform.</p>
        <p>She became widely recognised through Keeping Up with the Kardashians in 2007, then built businesses of her own: KKW Beauty in 2017 and SKIMS in 2019. In 2022 she returned to television with The Kardashians on Hulu and co-founded the private equity firm SKKY Partners, and in 2023 she took her first scripted role in American Horror Story: Delicate. Her story is a case study in celebrity, entrepreneurship, marketing and personal reinvention.</p>
        <p className="muted small">Pick a category to filter the ventures below.</p>
        <div className="tags">
          {categories.filter((c) => c !== 'All').map((c) => (
            <button key={c} className={category === c ? 'tag on' : 'tag'} aria-pressed={category === c} onClick={() => onPickCategory(category === c ? 'All' : c)}>{c}</button>
          ))}
        </div>
      </div>
      <aside className="glance" data-glow><p className="glance-t">At a glance</p>
        {ventures.map((v) => <button key={v.id} onClick={() => onOpenVenture(v.id)}><span>{v.name}<small>{v.year} · {v.industry}</small></span><span className="arr">{'\u2192'}</span></button>)}
      </aside>
    </section>
  )
}
