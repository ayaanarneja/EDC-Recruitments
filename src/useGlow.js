import { useEffect } from 'react'
// Cursor-follow glow: writes --mx / --my on any element with [data-glow]
// so the CSS spotlight tracks the pointer inside that element.
export default function useGlow() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const move = (e) => {
      const el = e.target.closest?.('[data-glow]')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', move, { passive: true })
    return () => document.removeEventListener('pointermove', move)
  }, [])
}
