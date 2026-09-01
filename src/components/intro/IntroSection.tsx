'use client'

import { motion, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { assets } from '@/config/assets'
import { intro } from '@/config/tokens'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'
import VideoArtFrame from './VideoArtFrame'
import SkillsGrid from './SkillsGrid'

export default function IntroSection() {
  const reduced = usePrefersReducedMotion()

  const group: Variants = {
    hidden: {},
    show: { transition: { delayChildren: reduced ? 0 : 0.05 } },
  }

  /** Copy and headings: a short rise. */
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.95, delay: i * 0.13, ease: ease.paper },
    }),
  }

  const plate: Variants = {
    hidden: { opacity: 0, scale: 1.05, y: 30, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: reduced ? { duration: 0 } : { duration: 1.2, delay: 0.1, ease: ease.paper },
    },
  }

  const heading: Variants = {
    hidden: { opacity: 0, y: 26, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: reduced ? { duration: 0 } : { duration: 0.95, delay: 0.13, ease: ease.paper },
    },
  }

  return (
    <section
      id="intro"
      className="relative w-full pb-0 pt-[clamp(3.5rem,10vh,8rem)]"
      aria-label="Introduction"
    >
      <div className="relative z-10 px-[max(1.5rem,7vw)] pb-[clamp(2.5rem,6vh,4.5rem)]">
        <motion.div
          className="intro-grid mx-auto max-w-[112rem]"
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {/* -------------------------------------------------- HELLO */}
          <motion.div className="area-heading flex flex-col items-start gap-1" variants={heading}>
            <span className="eyebrow text-signal tracking-[0.2em] font-bold text-xs uppercase mb-1">
              ABOUT ME
            </span>
            <h2
              className="display m-0 text-ink"
              style={{ fontSize: 'clamp(3.25rem, 6.4vw, 8.5rem)', letterSpacing: '-0.045em' }}
            >
              {site.intro.heading}
            </h2>
          </motion.div>

          {/* -------------------------------------------------- the plate */}
          <motion.div className="area-portrait relative z-[3] lg:-mb-[7vw]" variants={plate}>
            <VideoArtFrame
              video={assets.frame.video}
              poster={assets.frame.poster}
              image={assets.frame.image}
              aspect={intro.portraitAspect}
              objectFit={assets.frame.fit}
              objectPosition={assets.frame.position}
              keyBand={assets.frame.key}
              alt={`${site.firstName}, full length`}
            />
          </motion.div>

          <motion.div className="area-copy" variants={item} custom={2}>
            <p className="body-copy m-0 mt-[0.6em] font-bold text-ink">{site.intro.lede}</p>

            <div className="mt-3">
              <a
                href="mailto:mhmdibraheem02@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper-deep/70 px-4 py-1.5 text-xs font-bold text-ink transition-colors hover:border-signal hover:text-signal shadow-xs"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                mhmdibraheem02@gmail.com
              </a>
            </div>

            <div className="mt-[1.6em] flex flex-col gap-[1.15em]">
              {site.intro.paragraphs.map((para) => (
                <p key={para} className="body-copy copy m-0 text-graphite">
                  {para}
                </p>
              ))}
            </div>

            <h3 className="section-head m-0 mt-[1.8em] text-ink">{site.education.heading}</h3>

            <div className="m-0 mt-[1.1em] flex flex-col gap-[1.15em]">
              {site.education.items.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-ink/10 last:border-0"
                >
                  <div>
                    <h4 className="body-copy m-0 font-bold leading-snug text-ink">{edu.degree}</h4>
                    <p className="body-copy m-0 mt-[0.15em] text-xs leading-snug text-graphite">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-bold text-signal bg-paper-deep/60 px-2.5 py-0.5 rounded-full border border-ink/10">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* -------------------------------------------------- skills + experience */}
          <motion.div className="area-aside" variants={item} custom={3}>
            {/* SOFTWARE SKILLS */}
            <div>
              <h3 className="section-head m-0 mb-[0.75em] text-ink">{site.skills.heading}</h3>
              <SkillsGrid />
            </div>

            {/* TECHNICAL SKILLS (Column-wise orderly layout) */}
            <div className="mt-[2em]">
              <h3 className="section-head m-0 mb-[0.75em] text-ink">{site.technicalSkills.heading}</h3>
              <ul className="m-0 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 list-none p-0">
                {site.technicalSkills.items.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-[0.83rem] font-medium leading-snug text-ink/90"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-signal shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXPERIENCE */}
            <div className="mt-[2.2em]">
              <h3 className="section-head m-0 mb-[0.75em] text-ink">{site.experience.heading}</h3>
              <div className="rounded-xl border border-ink/15 bg-paper-deep/30 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h4 className="body-copy m-0 font-bold text-ink">
                    {site.experience.company}
                  </h4>
                  <span className="text-xs font-semibold text-signal uppercase tracking-wider">
                    {site.experience.period}
                  </span>
                </div>
                <p className="body-copy m-0 mt-1 font-semibold text-ink/80 text-sm">
                  {site.experience.role}
                </p>
                <ul className="m-0 mt-3 flex flex-col gap-2 p-0 pl-4 list-disc text-xs leading-relaxed text-graphite">
                  {site.experience.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom right corner email badge in intro section */}
      <motion.div
        className="absolute bottom-4 right-[max(1.5rem,7vw)] z-20"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a
          href="mailto:mhmdibraheem02@gmail.com"
          className="inline-flex items-center gap-2 rounded-full border border-ink/25 bg-paper-deep/90 px-4 py-1.5 text-xs font-bold text-ink lowercase shadow-sm transition-all hover:border-signal hover:text-signal hover:shadow-md backdrop-blur-xs"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          mhmdibraheem02@gmail.com
        </a>
      </motion.div>
    </section>
  )
}
