/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT
 * ---------------------------------------------------------------------------
 * Every piece of copy on the site lives here. Layout is driven by tokens.
 * ---------------------------------------------------------------------------
 */

export const site = {
  /** Shown letter-by-letter in the hero. Keep it short — it is the poster. */
  displayWord: 'PORTFOLIO',
  /** Set to -1 so all letters render normally (normal 'O' fill, no face cutout). */
  faceLetterIndex: -1,

  eyebrow: '',
  year: '',

  firstName: 'MOHAMED',
  signatureName: 'MOHAMED IBRAHIM',
  lastName: 'IBRAHIM',

  connect: {
    status: 'is available for graphic design & media projects',
    cta: "Let's connect",
    href: '#contact',
  },

  intro: {
    heading: 'HELLO',
    lede: "I'm **Mohamed Ibrahim**, a passionate Graphic Designer and Visual Communication professional with an M.Sc. in Visual Communication.",
    paragraphs: [
      'I specialize in **graphic design, branding, photography, videography, and visual storytelling** to create engaging visual experiences.',
      'With expertise in **Adobe Creative Suite, DaVinci Resolve, Canva, and digital media**, I turn creative ideas into impactful designs.',
    ],
  },

  education: {
    heading: 'EDUCATION',
    items: [
      {
        year: '2023 – 2025',
        degree: 'M.Sc. Visual Communication',
        institution: 'Government Arts and Science College, Tiruchirappalli',
      },
      {
        year: '2020 – 2023',
        degree: 'B.Sc. Visual Communication',
        institution: 'Sir Issac Newton College of Arts and Science, Nagapattinam',
      },
      {
        year: '2019 – 2020',
        degree: 'HSC (Higher Secondary)',
        institution: "St. Xavier's Higher Secondary School, Neermulai",
      },
      {
        year: '2018 – 2019',
        degree: 'SSLC (Secondary School)',
        institution: "St. Antony's Matriculation Higher Secondary School, Thiruthuraipoondi",
      },
    ],
  },

  skills: {
    heading: 'SOFTWARE SKILLS',
    items: [
      { label: 'Adobe Photoshop', short: 'Ps', src: null, scale: 1 },
      { label: 'Adobe Illustrator', short: 'Ai', src: null, scale: 1 },
      { label: 'Premiere Pro', short: 'Pr', src: null, scale: 1 },
      { label: 'DaVinci Resolve', short: 'Dr', src: null, scale: 1 },
      { label: 'After Effects', short: 'Ae', src: null, scale: 1 },
      { label: 'Canva', short: 'Cv', src: null, scale: 1 },
      { label: 'Lightroom', short: 'Lr', src: null, scale: 1 },
      { label: 'CapCut', short: 'Cc', src: null, scale: 1 },
    ] as { label: string; short: string; src: string | null; scale: number }[],
  },

  technicalSkills: {
    heading: 'TECHNICAL SKILLS',
    items: [
      'Graphic Design',
      'Digital Media Production',
      'Photography & Photo Editing',
      'Videography & Video Editing',
      'Multimedia Content Creation',
      'Social Media Content Design',
      'Layout & Typography',
      'Content Development',
    ],
  },

  experience: {
    heading: 'EXPERIENCE',
    company: 'Aurora Pixel Studio',
    period: '1 Year of Experience',
    role: 'Graphic Designer, Photographer & Video Editor',
    points: [
      'Designed creative graphics for social media, marketing campaigns, advertisements, and branding materials.',
      'Created visual content using industry-standard software such as Adobe Photoshop, Adobe Illustrator, and Canva.',
      'Planned and executed photography sessions for events, products, and promotional campaigns.',
      'Captured and edited high-quality photographs to meet client and organizational requirements.',
      'Conducted video shoots and managed videography projects from concept development to final production.',
      'Edited videos using professional software, including transitions, visual effects, color correction, and audio enhancement.',
      'Collaborated with marketing and content teams to produce engaging multimedia content.',
      'Maintained brand consistency across all visual communication materials.',
      'Delivered projects within deadlines while maintaining high creative and technical standards.',
    ],
  },

  projects: {
    heading: 'GRAPHIC DESIGN PROJECTS',
    items: [
      {
        title: 'Brand Identity & Social Media Campaigns',
        category: 'Graphic Design & Branding',
        description:
          'Designed creative graphics for marketing campaigns, digital advertisements, social media posts, and brand collateral using Adobe Photoshop, Illustrator, and Canva while maintaining strict brand consistency.',
      },
      {
        title: 'Commercial Photography & High-End Retouching',
        category: 'Photography & Editing',
        description:
          'Planned and executed professional photography shoots for corporate events, products, and client campaigns. Performed advanced color grading and photo editing in Adobe Lightroom and Photoshop.',
      },
      {
        title: 'Videography Production & Motion Editing',
        category: 'Video Production',
        description:
          'Managed end-to-end videography projects from camera setup to post-production. Produced high-quality video content using Premiere Pro, DaVinci Resolve, and CapCut with transitions, color correction, and audio tuning.',
      },
    ],
  },

  studio: {
    heading: 'THE STU',
    items: [
      {
        quote: 'Capturing moments, creating visual stories.',
        author: 'Mohamed Ibrahim',
        rotation: -5,
        drop: 0,
        shade: 0.2,
        skew: -0.9,
        indent: 1,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
      {
        quote: 'Combining creativity with impactful media solutions.',
        author: 'Aurora Pixel Studio',
        rotation: 1.2,
        drop: 11,
        shade: 0.6,
        skew: 0.7,
        indent: 0,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
      {
        quote: 'Graphic Design, Photography & Video Editing.',
        author: 'Nagapattinam, Tamil Nadu',
        rotation: 4,
        drop: 3,
        shade: 0.35,
        skew: -0.5,
        indent: 2,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
    ],
  },

  footer: {
    heading: "Let's connect",
    acknowledged: 'See you there',
    sub: 'Have an idea, a project, or simply want to say hello?',
    href: 'mailto:mhmdibraheem02@gmail.com',
    marquee: ['MOHAMED IBRAHIM', 'GRAPHIC DESIGNER', 'CREATIVE'],
    links: [
      { label: 'Phone', href: 'tel:6381967078' as string | null },
      { label: 'Location', href: null as string | null },
      { label: 'Email', href: 'mailto:mhmdibraheem02@gmail.com' as string | null },
    ],
  },
} as const

export type Site = typeof site
