import { useState } from 'react'
import { milestones } from '../data/milestones'
import TimelineItem from './TimelineItem'
export default function Journey({ onOpenVenture }) {
  const [activeMilestone, setActiveMilestone] = useState(null) // only one open at a time
  return (
    <section id="journey" className="section">
      <p className="eyebrow">Journey</p>
      <h2>From screen to <em>boardroom.</em></h2>
      <div className="early" data-glow>
        <div>
          <p className="eyebrow">Early life</p>
          <h3>Before the fame</h3>
          <button className="chip-turn" onClick={() => onOpenVenture('v5')}>Turning point: 2007 {'\u2192'}</button>
        </div>
        <div className="early-body">
          <p>Kim grew up in Los Angeles in a family already connected to entertainment and public life. Her father, Robert Kardashian, was a lawyer who became nationally known for his part in the O. J. Simpson trial. Her mother, Kris Jenner, later became the manager behind many of the family{'\u2019'}s business and entertainment activities.</p>
          <p>Before becoming a household name she worked in fashion-related settings and developed an interest in styling, retail and celebrity culture, including organising and managing wardrobes for clients and people in her social circle.</p>
          <p>Her rise did not begin with a single company. It grew from social connections, fashion work, media exposure and a growing understanding of how personal identity could become part of a commercial brand.</p>
        </div>
      </div>
      <ol className="timeline">
        {milestones.map((m) => (
          <TimelineItem key={m.id} milestone={m} isOpen={activeMilestone === m.id}
            onToggle={() => setActiveMilestone(activeMilestone === m.id ? null : m.id)} onOpenVenture={onOpenVenture} />
        ))}
      </ol>
    </section>
  )
}
