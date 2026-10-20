const BRIT = { label: 'Britannica', url: 'https://www.britannica.com/print/article/1817098' }
const VOGUE = { label: 'Vogue Singapore', url: 'https://vogue.sg/kim-kardashian-skincare-brand/' }
const BW = { label: 'Business Wire', url: 'https://www.businesswire.com/news/home/20220907005784/en/5279926/Kim-Kardashian-and-Jay-Sammons-Launch-SKKY-Partners' }
const AP = { label: 'Associated Press report', url: 'https://www.fox35orlando.com/news/trump-commutes-term-of-kardashian-championed-drug-offender-alice-marie-johnson' }
const COTY_KKW = { label: 'Coty announcement (2020)', url: 'https://www.coty.com/news/coty-and-kim-kardashian-west-announce-strategic-relationship-to-expand-beauty' }
const COTY_SKKN = { label: 'Coty: SKKN BY KIM launch', url: 'https://www.coty.com/news/kim-kardashian-launches-skkn-by-kim-a-new-line-of-high-performance-skincare' }
const WH = { label: 'White House archives', url: 'https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-second-chance-hiring/' }
const SKKY = { label: 'SKKY Partners profile', url: 'https://www.skky.com/team/kim-kardashian' }
const HULU = { label: 'Hulu: The Kardashians', url: 'https://www.hulu.com/series/the-kardashians' }
const FX_CHAR = { label: 'FX: Kim Kardashian as Siobhan Corbyn', url: 'https://www.fxnetworks.com/shows/american-horror-story/ahs-delicate/cast/kim-kardashian-siobhan-corbyn' }
const NIKE = { label: 'Nike announcement', url: 'https://about.nike.com/en/newsroom/releases/nikeskims-official-announcement' }

// `story` is the longer expanded text shown when a milestone is opened.
// Listed in date order (oldest first).
export const milestones = [
  { id: 'm0', year: '2006', title: 'DASH, her first retail experience', category: 'Fashion',
    description: 'Kim and her sisters Kourtney and Khlo\u00E9 opened a fashion boutique in Calabasas, California.',
    story: 'The business exposed the family to the practical realities of retail: merchandise, customer preferences, store identity and the challenges of running a physical shop. DASH later appeared in the family\u2019s television projects, an early sign of how their personal lives and business activities would become intertwined.',
    role: 'Co-owner, with her sisters.', why: 'DASH built an early foundation in fashion retail before her larger ventures developed.', source: null, venture: null,
    image: '/images/dash-store.png', imageAlt: 'DASH boutique storefront with a black DASH sign and mannequins in the window', pos: 'center 40%' },
  { id: 'm1', year: '2007', title: 'Reality television changes everything', category: 'Media',
    description: 'Keeping Up with the Kardashians premiered on E! and made Kim a household name.',
    story: 'The programme made Kim and her family widely recognisable and created a continuing entertainment platform around their relationships and everyday lives. It also built a direct connection with its audience. That visibility later gave her a foundation for product launches, media projects and business partnerships.',
    role: 'Co-star of the series.', why: 'Reality television became the launchpad for a career that extended far beyond television.', source: BRIT, venture: 'v5',
    image: '/images/kardashians.png', imageAlt: 'The Kardashian\u2013Jenner family in black outfits, posed around a cream sofa against a mauve backdrop', pos: 'center 30%' },
  { id: 'm2', year: '2017', title: 'KKW Beauty: a signature look becomes a product', category: 'Beauty',
    description: 'Kim launched KKW Beauty in June 2017, followed by KKW Fragrance later that year.',
    story: 'Drawing on her association with makeup and contouring, the direct-to-consumer business sold products inspired by looks she had popularised. In 2020 Coty announced a strategic transaction to acquire a 20% stake in her beauty business, with a plan to support its development and international expansion.',
    role: 'Founder of the brand.', why: 'It showed how a public figure\u2019s signature style could become a distinct commercial proposition, and that brands can evolve rather than stay unchanged.', source: COTY_KKW, venture: 'v3',
    image: '/images/kkw-beauty.png', imageAlt: 'KKW Beauty cr\u00E8me lipstick set with clear acrylic cases and a tan gift box', pos: 'center 40%' },
  { id: 'm3', year: '2018', title: 'A new purpose beyond entertainment', category: 'Social Impact',
    description: 'After Kim advocated for Alice Marie Johnson, President Trump commuted her life sentence in June 2018.',
    story: 'Alice Marie Johnson\u2019s life sentence for a nonviolent drug offence was commuted by the President. Kim then spoke publicly about the case and engaged with wider discussions about sentencing, incarceration and second chances. Her advocacy grew into a sustained interest in legal reform rather than a single publicity event.',
    role: 'Public advocate for the case. The clemency decision itself was the President\u2019s.', why: 'It shows how a public platform can draw attention to legal issues and people who might otherwise get little visibility.', source: AP, venture: 'v4',
    image: '/images/justice-project.png', imageAlt: 'Kim Kardashian West in a black blazer with arms crossed, beside the title The Justice Project', pos: 'center 30%' },
  { id: 'm4', year: '2019', title: 'SKIMS, a lasting consumer brand', category: 'Fashion',
    description: 'Kim co-founded SKIMS with entrepreneur Jens Grede.',
    story: 'Initially centred on shapewear, the business grew into underwear, loungewear and broader apparel. It positioned itself around practical fit, multiple shades and extended sizing, with minimalist design and product-focused marketing. Rather than relying only on Kim\u2019s celebrity, it built its own identity through launches, retail expansion and collaborations.',
    role: 'Co-founder.', why: 'SKIMS is the clearest example of her evolution from media personality to co-founder of a major consumer brand.', source: BRIT, venture: 'v1',
    image: '/images/skims.png', imageAlt: 'SKIMS campaign image: models wearing neutral-toned shapewear, with the SKIMS logo', pos: 'center 40%' },
  { id: 'm5', year: '2019\u201321', title: 'Pursuing a legal education', category: 'Social Impact',
    description: 'Kim studied law through California\u2019s apprenticeship pathway and passed the \u201Cbaby bar\u201D in December 2021.',
    story: 'She chose the law-office apprenticeship route rather than conventional law school, closely tied to her work on criminal justice reform. The \u201Cbaby bar\u201D (First-Year Law Students\u2019 Examination) is not the final California bar exam and does not itself qualify someone to practise law.',
    role: 'Law student.', why: 'It reflects an effort to build subject knowledge and pursue a new direction alongside an established career.', source: VOGUE, venture: null },
  { id: 'm6', year: '2022', title: 'The Kardashians: a new media chapter', category: 'Media',
    description: 'After KUWTK ended in 2021, The Kardashians premiered on Hulu on 14 April 2022.',
    story: 'The series follows Kim and her family through their personal lives, careers and business ventures, and continued the family\u2019s entertainment presence after Keeping Up with the Kardashians. Kim is a main cast member and also an executive producer, so her work was no longer limited to appearing on screen. The show documents her work in fashion and beauty, brand launches and developing entertainment projects.',
    role: 'Main cast member and executive producer.', why: 'She kept her media presence while changing the format and context in which audiences meet her.', source: HULU, venture: 'v8',
    image: '/images/the-kardashians-poster.png', imageAlt: 'Poster for The Kardashians showing the cast in neutral-toned gowns', pos: 'center 20%' },
  { id: 'm7', year: '2022', title: 'SKKN BY KIM extends into skincare', category: 'Beauty',
    description: 'Kim launched SKKN BY KIM with Coty in June 2022, starting with nine products.',
    story: 'The original range covered cleanser, toner, exfoliator, serums, face cream, eye cream and facial oils, presented as one coordinated routine in minimalist, sculptural packaging. In March 2025 Coty announced it had sold its 20% stake to SKIMS, uniting her beauty and lifestyle businesses under SKIMS.',
    role: 'Founder of the line.', why: 'It demonstrates brand extension and the importance of adapting a business structure as a company develops.', source: COTY_SKKN, venture: 'v6',
    image: '/images/skkn.png', imageAlt: 'SKKN BY KIM skincare products in sculptural taupe packaging, stacked on concrete blocks', pos: 'center 40%' },
  { id: 'm8', year: '2022', title: 'SKKY Partners is founded', category: 'Investment',
    description: 'Kim and private equity veteran Jay Sammons announced SKKY Partners on 7 September 2022.',
    story: 'The firm focuses on consumer and media businesses. Investing differs from launching a product: the work is backing companies and helping them grow. Kim brings consumer-brand experience and an understanding of media visibility, while Sammons, a former Carlyle Group executive, brings institutional investment experience.',
    role: 'Co-founder and Co-Managing Partner.', why: 'She moved from building brands to investing in other consumer and media companies.', source: BW, venture: 'v2',
    image: '/images/skky-partners.png', imageAlt: 'SKKY Partners logo on a soft grey-blue gradient', pos: 'center' },
  { id: 'm10', year: '2023', title: 'American Horror Story: Delicate, her scripted acting role', category: 'Media',
    description: 'Kim played Siobhan Corbyn in Season 12 of American Horror Story, which premiered on 20 September 2023.',
    story: 'Siobhan is a publicist and close friend of the lead character, Anna Victoria Alcott (played by Emma Roberts). It was a different kind of work from reality television: Kim played a fictional character with her own motivations in a scripted psychological horror story, while drawing on her familiarity with celebrity culture.',
    role: 'Actor, playing Siobhan Corbyn.', why: 'It marked a prominent move into scripted dramatic acting and broadened her professional identity beyond reality TV and entrepreneurship.', source: FX_CHAR, venture: 'v9',
    image: '/images/ahs-delicate-poster.png', imageAlt: 'American Horror Story: Delicate poster with Kim Kardashian and a large black spider', pos: 'center 22%' },
  { id: 'm9', year: '2025', title: 'NikeSKIMS enters performance apparel', category: 'Fashion',
    description: 'Nike and SKIMS announced NikeSKIMS, a women\u2019s performance and lifestyle apparel brand.',
    story: 'The brand combines Nike\u2019s sports research and product-development expertise with SKIMS\u2019 approach to fit and design, extending the concept beyond shapewear into a category that serves athletes and active lifestyles. It is a partnership between two established businesses rather than a new independent brand.',
    role: 'SKIMS co-founder and chief creative officer.', why: 'It shows brand collaboration as a growth strategy: entering a new market with a partner that already has the relevant expertise.', source: NIKE, venture: 'v7',
    image: '/images/nikeskims-shoe.png', imageAlt: 'Oversized metallic pink-bronze sneaker display with a SKIMS strap', pos: 'center 40%' },
]
