import { useLayoutEffect } from 'react'

// Sections and timeline items start hidden (CSS class "reveal") and fade up once they scroll into view.
// Nothing is hidden if the browser has no IntersectionObserver or the visitor prefers reduced motion.
export default function useReveal() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('in')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -8% 0px' })

    document.querySelectorAll('.section, .tl').forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
}
