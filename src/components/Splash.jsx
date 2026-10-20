import { useEffect, useRef, useState } from 'react'

const INTRO_AUDIO = '/audio/bg-music.mp3'   // replace this file in /public/audio with your own track
const INTRO_VOLUME = 0.9

// Black intro screen: the name is "written" in a glowing script font, then the screen fades into the site.
export default function Splash({ onDone }) {
  const [go, setGo] = useState(false)        // true once the script font is ready, so the writing starts cleanly
  const [leaving, setLeaving] = useState(false)
  const audioRef = useRef(null)
  const fadeRef = useRef(null)

  // intro sound: plays only while this screen is up, then fades out and stops for good
  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = INTRO_VOLUME   // short clip: start at full intro volume
    const events = ['pointerdown', 'keydown', 'touchstart']
    const begin = () => a.play()
    const onGesture = () => { begin().then(() => events.forEach((e) => window.removeEventListener(e, onGesture))).catch(() => {}) }
    begin().catch(() => events.forEach((e) => window.addEventListener(e, onGesture)))   // browser blocked autoplay: start on first tap/click
    return () => { events.forEach((e) => window.removeEventListener(e, onGesture)); clearInterval(fadeRef.current); a.pause() }
  }, [])

  // fade the sound out as the screen leaves
  useEffect(() => {
    if (!leaving) return
    const a = audioRef.current
    if (!a) return
    clearInterval(fadeRef.current)
    fadeRef.current = setInterval(() => { a.volume = Math.max(0, a.volume - 0.05); if (a.volume <= 0) { clearInterval(fadeRef.current); a.pause() } }, 40)
  }, [leaving])

  // 1) wait for the font (or give up after 1.5s), then start the animation
  useEffect(() => {
    const fontReady = document.fonts ? document.fonts.load('1em Allura') : Promise.resolve()
    const timeout = new Promise((resolve) => setTimeout(resolve, 1500))
    Promise.race([fontReady, timeout]).catch(() => {}).then(() => setGo(true))
  }, [])

  // 2) once started: hold, fade out, then tell App we are done
  useEffect(() => {
    if (!go) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t1 = setTimeout(() => setLeaving(true), reduce ? 700 : 4800)
    const t2 = setTimeout(onDone, reduce ? 1000 : 5600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [go])

  // 3) no page scrolling behind the black screen
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const skip = () => { setLeaving(true); setTimeout(onDone, 600) }

  return (
    <div className={`splash${go ? ' go' : ''}${leaving ? ' out' : ''}`} onClick={skip} role="status" aria-label="Kim Kardashian">
      <div className="sig-wrap">
        <p className="sig" aria-hidden="true">Kim Kardashian</p>
        <svg className="sig-line" viewBox="0 0 600 40" aria-hidden="true">
          <path pathLength="1" d="M5 28 C 120 6, 260 36, 420 14 S 560 10, 595 22" />
        </svg>
      </div>
      <audio ref={audioRef} src={INTRO_AUDIO} preload="auto" />
      <button className="splash-skip" onClick={skip}>Skip</button>
    </div>
  )
}
