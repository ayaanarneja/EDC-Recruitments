# Interactive Entrepreneur Showcase — Kim Kardashian

## Project Overview
A React + Vite site that presents Kim Kardashian's journey, ventures, impact and lessons. Content comes from structured data arrays and is rendered with `.map()`.

## Features
- Interactive timeline (one milestone open at a time, keyboard accessible)
- Clickable venture cards with a modal (Escape, outside click, Previous / Next)
- Industry filter shared with the About tags
- Structured data in `src/data`
- Responsive layout with a mobile hamburger menu
- Source links on every factual section
- Impact cards and lessons that expand

## Design
One unified design system in `src/index.css`: plum-noir surface with rose glow. Cards, stats, timeline items and source tiles share a cursor-follow glow (`src/useGlow.js` + the `data-glow` attribute). Motion is limited to a slow hero light drift and respects `prefers-reduced-motion`.

## Themes
Dark is the default. The sun or moon button in the nav switches to light mode and remembers the choice (localStorage). Theme tokens live at the top of `src/index.css`; light overrides sit under `html[data-theme="light"]`.

## Tech Stack
React, Vite, JavaScript, CSS

## Run Locally
```
npm install
npm run dev
```

## Build
```
npm run build
```

## Project Structure
- `src/data/` all content and lists: `ventures.js`, `milestones.js`, `sources.js`, `impact.js`, `lessons.js`, `nav.js`
- `src/components/` one component per section; `TimelineItem`, `VentureCard`, `VentureModal`, `Marquee`, `Splash`, `ScrollProgress` are reusable pieces
- `src/styles/` the stylesheet split by topic (tokens, base, nav, hero, ventures, footer, themes, responsive, effects ...). They are imported in `main.jsx` in a fixed order, because later files can override earlier ones
- `src/App.jsx` shared state: `category`, `selectedIndex`, `intro`
- `src/useGlow.js`, `src/useReveal.js` small hooks for the cursor glow and the fade-up on scroll
- `src/utils.js` the `scrollToId` helper

## Motion
Intro signature screen, scroll progress bar, fade-up sections, staggered venture cards, a scrolling venture strip and a hero entrance. All of it is switched off for visitors who prefer reduced motion (`effects.css`).

## Research & Sources
Business Wire (SKKY Partners announcement), Britannica, Associated Press report on the 2018 commutation, Vogue Singapore, EBSCO Research Starters, skims.com. See the Sources section on the page.

## Before submitting
- Add licensed photos to `public/images` and credit them in `src/data/sources.js` (the site ships with labelled image slots).
- Open every link once. In particular, confirm https://skkypartners.com loads.
- No social or email links are included because none were verified.

## AI Disclosure
AI tools were used as development assistance for ideation, code scaffolding, content organization, and debugging. Final implementation, design decisions, source verification, and testing were reviewed by the developer.

## Content
Copy lives in `src/data/`: `milestones.js` (11-step timeline), `ventures.js` (9 ventures, including The Kardashians and American Horror Story: Delicate) and `sources.js` (16 sources). All three lists are in date order, oldest first. The Impact toggle, the four lessons, the early-life card and the closing section are in `src/components/`.

## Image sourcing
Images live in `public/images/`. A venture has one main `image` plus an optional `gallery` (small thumbnails in the modal); `pos` sets which part of the picture stays visible when cropped. Timeline items use `image`, `imageAlt` and `pos` in `milestones.js`. Check licensing before using publisher or search-result images.

## Before submitting
Open every link in `sources.js` and the `sources` lists in `ventures.js`; the Coty, Nike, SKKY and White House URLs were taken from the supplied content document and not re-checked.
