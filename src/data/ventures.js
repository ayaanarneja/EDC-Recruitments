const BRIT = { label: 'Britannica', url: 'https://www.britannica.com/print/article/1817098' }
const VOGUE = { label: 'Vogue Singapore', url: 'https://vogue.sg/kim-kardashian-skincare-brand/' }
const EBSCO = { label: 'EBSCO Research Starters', url: 'https://www.ebsco.com/research-starters/biography/kim-kardashian/' }
const BW = { label: 'Business Wire announcement', url: 'https://www.businesswire.com/news/home/20220907005784/en/5279926/Kim-Kardashian-and-Jay-Sammons-Launch-SKKY-Partners' }
const NIKE = { label: 'Nike announcement', url: 'https://about.nike.com/en/newsroom/releases/nikeskims-official-announcement' }
const COTY_KKW = { label: 'Coty announcement (2020)', url: 'https://www.coty.com/news/coty-and-kim-kardashian-west-announce-strategic-relationship-to-expand-beauty' }
const COTY_SKKN = { label: 'Coty: SKKN BY KIM launch', url: 'https://www.coty.com/news/kim-kardashian-launches-skkn-by-kim-a-new-line-of-high-performance-skincare' }
const COTY_2025 = { label: 'Coty: 2025 update', url: 'https://www.coty.com/news/coty-divests-stake-in-skkn-by-kim' }
const SKKY = { label: 'SKKY Partners profile', url: 'https://www.skky.com/team/kim-kardashian' }
const WH = { label: 'White House archives', url: 'https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-second-chance-hiring/' }
const HULU = { label: 'Hulu: The Kardashians', url: 'https://www.hulu.com/series/the-kardashians' }
const FX_CAST = { label: 'FX: AHS Delicate cast', url: 'https://www.fxnetworks.com/shows/american-horror-story/ahs-delicate/cast' }
const FX_CHAR = { label: 'FX: Kim Kardashian as Siobhan Corbyn', url: 'https://www.fxnetworks.com/shows/american-horror-story/ahs-delicate/cast/kim-kardashian-siobhan-corbyn' }
const FX_EXTRAS = { label: 'FX: behind-the-scenes videos and interviews', url: 'https://www.fxnetworks.com/shows/american-horror-story/ahs-delicate/video-extras/extras' }
const AP = { label: 'Associated Press report', url: 'https://www.fox35orlando.com/news/trump-commutes-term-of-kardashian-championed-drug-offender-alice-marie-johnson' }
export const categories = ['All', 'Beauty', 'Fashion', 'Media', 'Investment', 'Social Impact']
// Listed in date order (oldest first). The cards, About list and modal pager all follow this order.
export const ventures = [
  { id: 'v5', name: 'Keeping Up with the Kardashians', role: 'Co-star', industry: 'Media', year: '2007', tone: 'rose', status: 'Ended 2021',
    image: '/images/kardashians.png', alt: 'Promotional portrait of the cast of The Kardashians', faces: true, pos: 'center 20%',
    tags: ['Reality TV', 'Streaming'], website: 'https://www.primevideo.com/detail/0HKE6I9IYS5S51R9SSUBEDKUED', websiteLabel: 'Watch on Prime Video', sources: [BRIT, EBSCO],
    description: 'The E! reality series (2007\u20132021) that followed the Kardashian family and built her public profile.',
    story: 'The series premiered on E! in October 2007 and ran for 20 seasons. It spawned Kourtney and Kim Take Miami (2009\u201313) and Kourtney and Kim Take New York (2011\u201312). In 2020 the family signed a Hulu deal, and The Kardashians began on Hulu in 2022.',
    significance: 'It was the platform that made her ventures visible. She starred in it but did not found it as a company.',
    highlights: ['Premiered October 2007 on E!', 'Ended in 2021 after 20 seasons.', 'Continued as The Kardashians on Hulu from 2022.'],
    facts: [['Type', 'Reality television series'], ['Premiered', 'October 2007'], ['Kim\u2019s role', 'Co-star'], ['Successor', 'The Kardashians (Hulu, 2022)']] },
  { id: 'v3', name: 'KKW Beauty', role: 'Founder (historical)', industry: 'Beauty', year: '2017', tone: 'blush', status: 'Former brand',
    image: '/images/kkw-beauty.png', alt: 'KKW Beauty cr\u00E8me lipstick set in clear cases beside its box',
    tags: ['Cosmetics', 'Historical'], website: 'https://www.kardashianbeauty.eu/kkw-face/', websiteLabel: 'Visit the KKW Beauty page', sources: [VOGUE, COTY_KKW],
    description: 'Her first beauty line, launched in 2017 with KKW Fragrance following. It is a former brand: she later introduced SKKN BY KIM in 2022.',
    story: 'KKW Beauty was built around Kim\u2019s recognisable makeup aesthetic, especially contouring, complexion products and neutral tones. Its direct-to-consumer approach sold through its own online channels to an audience already familiar with her looks. KKW Fragrance followed later in 2017. In 2020 Coty announced an agreement to acquire a 20% stake in the business. Vogue describes KKW Beauty as her former brand and quotes her saying her later skincare line was a chance to rethink what a beauty line could look like.',
    significance: 'It was her first large product business, and its reinvention shows how she reshapes ventures.',
    highlights: ['Launched in June 2017; KKW Fragrance followed that year.', 'In 2020 Coty announced a 20% stake in the business.', 'Now a former brand; followed by SKKN BY KIM in 2022.'],
    facts: [['Type', 'Cosmetics line'], ['Launched', '2017'], ['Kim\u2019s role', 'Founder'], ['Status', 'Former brand'], ['Successor', 'SKKN BY KIM (2022)']] },
  { id: 'v1', name: 'SKIMS', role: 'Co-founder', industry: 'Fashion', year: '2019', tone: 'sand', status: 'Active',
    image: '/images/skims.png', alt: 'SKIMS campaign image: models wearing neutral-toned shapewear, with the SKIMS logo',
    tags: ['Shapewear', 'Apparel'], website: 'https://skims.com/en-in', sources: [BRIT, EBSCO, NIKE],
    description: 'A shapewear, underwear and lifestyle apparel brand that Kim Kardashian co-founded in 2019 with Jens Grede.',
    story: 'SKIMS was created to offer shapewear and underwear with a focus on fit, comfort and a variety of body shapes and skin tones. Kim brought her knowledge of fashion, consumer preferences and personal branding, while co-founder Jens Grede brought experience building consumer businesses. Together they built an identity around neutral colours, clean product presentation and inclusive sizing. It has since grown into underwear, loungewear and wider apparel, with collaborations and a growing retail presence.',
    significance: 'It shows how a brand can move from one clearly defined product category into a wider lifestyle business, and the difference between promoting a product and shaping a company\u2019s identity.',
    highlights: ['Launched in 2019 as a shapewear company, co-founded with Jens Grede.', 'Built around fit, multiple shades and extended sizing.', 'Partnered with Nike on NikeSKIMS (2025); took over Coty\u2019s SKKN BY KIM stake (2025).'],
    facts: [['Type', 'Shapewear and apparel brand'], ['Launched', '2019'], ['Kim\u2019s role', 'Co-founder'], ['Co-founder', 'Jens Grede'], ['Status', 'Active']] },
  { id: 'v4', name: 'The Justice Project', role: 'Subject & advocate', industry: 'Social Impact', year: '2020', tone: 'ivory', status: 'Documentary',
    image: '/images/justice-project.png', alt: 'Promotional image for Kim Kardashian West: The Justice Project',
    tags: ['Advocacy', 'Documentary'], website: 'https://www.primevideo.com/detail/0Q7KQ464X9YFYKGMIXSDP17H3B', websiteLabel: 'Watch on Prime Video', sources: [BRIT, AP, WH],
    description: 'A 2020 documentary, Kim Kardashian West: The Justice Project, about her criminal justice reform work.',
    story: 'The documentary aired in 2020. It followed her 2018 advocacy for Alice Marie Johnson, whose life sentence President Trump commuted after Kim visited the White House. She has also studied law through an apprenticeship route and passed California\u2019s baby bar in 2021.',
    significance: 'It put the issue in front of a mainstream audience. It is a film, not a company, and the legal outcomes were not hers alone.',
    highlights: ['Aired in 2020.', 'Linked to the 2018 Alice Marie Johnson case.', 'Passed the \u201Cbaby bar\u201D in 2021 (Vogue).'],
    facts: [['Type', 'Documentary'], ['Released', '2020'], ['Kim\u2019s role', 'Subject and advocate'], ['Related event', 'Commutation of Alice Marie Johnson, June 2018']] },
  { id: 'v8', name: 'The Kardashians', role: 'Star & executive producer', industry: 'Media', year: '2022', tone: 'rose', status: 'On Hulu',
    image: '/images/the-kardashians-poster.png', alt: 'Poster for The Kardashians showing the cast in neutral-toned gowns', faces: true, pos: 'center 8%',
    tags: ['Reality TV', 'Hulu'], website: 'https://www.hotstar.com/in/shows/the-kardashians/1260097206?search_query=kardashians', websiteLabel: 'Watch on Hotstar', sources: [HULU, BRIT],
    description: 'The Hulu reality series (premiered 14 April 2022) that followed Keeping Up with the Kardashians. Kim is a main cast member and executive producer.',
    story: 'The Kardashians follows Kim and her family as they manage their personal lives, careers, relationships and business ventures. It began after Keeping Up with the Kardashians ended its original run in 2021. Kim\u2019s appearances often connect to her work in fashion and beauty, brand launches and developing entertainment projects. It is built on reality-TV storytelling: personal conversations, behind-the-scenes footage and major professional moments.',
    significance: 'It continued her television career, documented the growth of her businesses and showed how a long-running public profile can change as a career changes. As an executive producer she also has a role behind the camera.',
    highlights: ['Premiered 14 April 2022 on Hulu in the United States.', 'Kim is a main cast member and executive producer.', 'Availability outside the US varies by region.'],
    facts: [['Type', 'Reality television series'], ['Premiered', '14 April 2022'], ['Platform', 'Hulu (US); varies by region'], ['Kim\u2019s role', 'Main cast member and executive producer'], ['Predecessor', 'Keeping Up with the Kardashians (2007\u20132021)']] },
  { id: 'v6', name: 'SKKN BY KIM', role: 'Launched the line, with Coty as partner', industry: 'Beauty', year: '2022', tone: 'blush', status: 'Under SKIMS',
    image: '/images/skkn.png', alt: 'SKKN BY KIM skincare products arranged on stone blocks',
    gallery: [{ src: '/images/portrait-beige.png', alt: 'Close-up portrait of Kim Kardashian with long dark hair against a beige background', pos: 'center 30%' }],
    tags: ['Skincare', 'Minimal'], website: 'https://skknbykim.com', sources: [VOGUE, COTY_SKKN, COTY_2025],
    description: 'A skincare line launched in 2022 in partnership with Coty, with a deliberately minimal look.',
    story: 'SKKN BY KIM launched in June 2022 as a skincare-focused business developed with Coty. The original collection had nine products, including cleanser, toner, exfoliator, serums, face cream, eye cream and facial oils, presented as one coordinated routine. Its identity relied on understated packaging and a minimalist presentation. In March 2025 Coty announced the sale of its 20% stake to SKIMS, uniting Kim\u2019s beauty and lifestyle ventures under SKIMS, so the corporate structure changed.',
    significance: 'It shows an entrepreneur using existing recognition to enter an adjacent market, and how related businesses can later be consolidated under a broader brand.',
    highlights: ['Launched in June 2022 with Coty as partner.', 'Original range: nine products in minimalist packaging.', 'In March 2025 Coty\u2019s 20% stake passed to SKIMS.'],
    facts: [['Type', 'Skincare line'], ['Launched', '2022'], ['Partner', 'Coty (until 2025)'], ['Status', 'Under the SKIMS umbrella']] },
  { id: 'v2', name: 'SKKY Partners', role: 'Co-founder & Co-Managing Partner', industry: 'Investment', year: '2022', tone: 'navy', status: 'Active',
    image: '/images/skky-partners.png', alt: 'SKKY Partners logo on a pale blue-grey gradient',
    tags: ['Private equity', 'Consumer & media'], website: 'https://www.skky.com', sources: [BW, SKKY],
    description: 'A private equity firm focused on consumer and media companies, co-founded with Jay Sammons. Kris Jenner is a partner.',
    story: 'On 7 September 2022 Kim and private equity veteran Jay Sammons, a former Carlyle Group executive, announced SKKY Partners. The firm invests in high-growth, market-leading consumer and media companies, using both control and minority investments. Rather than concentrating on one consumer brand, private equity means investing in businesses and working toward their growth. Kim\u2019s consumer-brand experience and understanding of media visibility sit alongside Sammons\u2019 institutional investment experience.',
    significance: 'It shows an interest in business at an investment level, beyond the products carrying her name, and a move from building a brand to participating in a wider portfolio of businesses.',
    highlights: ['Kim and Jay Sammons are Co-Founders and Co-Managing Partners.', 'Kris Jenner serves as a Partner.', 'Focus: control and minority investments in consumer and media companies.'],
    facts: [['Type', 'Private equity firm'], ['Established', '2022 (announced 7 Sep 2022)'], ['Kim\u2019s role', 'Co-founder and Co-Managing Partner'], ['Co-founder', 'Jay Sammons'], ['Partner', 'Kris Jenner'], ['Status', 'Active']] },
  { id: 'v9', name: 'American Horror Story: Delicate', role: 'Actor (Siobhan Corbyn)', industry: 'Media', year: '2023', tone: 'navy', status: 'Scripted role',
    image: '/images/ahs-delicate-poster.png', alt: 'American Horror Story: Delicate poster with Kim Kardashian, long white hair and a large black spider', pos: 'center 22%',
    gallery: [{ src: '/images/ahs-delicate-still.png', alt: 'Portrait of Kim Kardashian in a dark dress with a gold shoulder necklace, in the style of the American Horror Story: Delicate promotion', pos: 'center 25%' }],
    tags: ['Scripted TV', 'Acting'], website: 'https://www.fxnetworks.com/shows/american-horror-story/ahs-delicate/cast', sources: [FX_CHAR, FX_CAST, FX_EXTRAS],
    description: 'Season 12 of the FX horror anthology, which premiered on 20 September 2023. Kim plays Siobhan Corbyn, a publicist and close friend of the lead character.',
    story: 'Unlike reality television, where Kim appears as herself, this project asked her to play a fictional character in a scripted psychological horror story created by Ryan Murphy and Brad Falchuk. The season follows Anna Victoria Alcott (Emma Roberts), an actress who wants to become a mother while pursuing success. Kim plays Siobhan Corbyn, Anna\u2019s best friend and publicist, a role that sits between celebrity image, ambition and media attention. Siobhan is fictional, with her own motivations and storyline.',
    significance: 'It marked a prominent move into scripted dramatic television and widened her public identity beyond reality TV and entrepreneurship.',
    highlights: ['Season 12 of American Horror Story, premiered 20 September 2023.', 'Kim plays Siobhan Corbyn, a publicist and close friend of Anna.', 'A scripted role, unlike her reality-TV work as herself.'],
    facts: [['Type', 'Scripted television (psychological horror)'], ['Premiered', '20 September 2023'], ['Platform', 'FX; streaming on Hulu (US)'], ['Kim\u2019s role', 'Siobhan Corbyn'], ['Creators', 'Ryan Murphy and Brad Falchuk']] },
  { id: 'v7', name: 'NikeSKIMS', role: 'SKIMS co-founder & chief creative officer', industry: 'Fashion', year: '2025', tone: 'sand', status: 'Announced 2025',
    image: '/images/nikeskims-store.png', alt: 'NikeSKIMS store display with a lit rail of neutral-toned clothing and a Nike and SKIMS sign',
    gallery: [
      { src: '/images/nikeskims-shoe.png', alt: 'Oversized metallic pink-bronze sneaker display with a SKIMS strap' },
      { src: '/images/portrait-platinum.png', alt: 'Portrait of Kim Kardashian with long platinum hair, in a black ribbed turtleneck', pos: 'center 20%' },
      { src: '/images/portrait-seated.png', alt: 'Kim Kardashian seated on a wooden stool in black athletic wear against a grey wall', pos: 'center 25%' },
    ],
    tags: ['Performance', 'Partnership'], website: 'https://www.nike.com/nikeskims', sources: [NIKE],
    description: 'A women\u2019s performance and lifestyle apparel brand from Nike and SKIMS.',
    story: 'NikeSKIMS combines Nike\u2019s sports research and technical product capabilities with SKIMS\u2019 experience in women\u2019s underwear, shapewear and lifestyle clothing. It differs from Kim starting a new independent brand: two established businesses each contribute what they do best, reaching customers through a shared product concept.',
    significance: 'It is an example of collaboration as a growth strategy: entering a new market by partnering with an organisation that already has the expertise.',
    highlights: ['Announced in 2025 by Nike and SKIMS.', 'Serves athletes and people with active lifestyles.', 'Kim\u2019s role: SKIMS co-founder and chief creative officer.'],
    facts: [['Type', 'Performance apparel brand'], ['Announced', '2025'], ['Partners', 'Nike and SKIMS'], ['Kim\u2019s role', 'SKIMS co-founder and chief creative officer']] },
]
