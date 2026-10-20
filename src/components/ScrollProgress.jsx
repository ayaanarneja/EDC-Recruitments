import { useEffect, useRef } from 'react'

// Thin bar at the top of the page that fills as you scroll. It writes straight to the element,
// so scrolling does not re-render React.
export default function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    const update = () => {
      const page = document.documentElement
      const progress = page.scrollTop / (page.scrollHeight - page.clientHeight || 1)
      bar.current.style.transform = `scaleX(${progress})`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div className="progress" ref={bar} aria-hidden="true" />
}
