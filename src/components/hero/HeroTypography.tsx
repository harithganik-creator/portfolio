'use client'

import { motion } from 'framer-motion'
import { site } from '@/config/site'
import { hero } from '@/config/tokens'
import { cue, ease } from '@/lib/motion'
import AnimatedPortfolio from './AnimatedPortfolio'
import { usePrefersReducedMotion } from '@/lib/hooks'

export default function HeroTypography() {
  const reduced = usePrefersReducedMotion()

  return (
    <div className="lockup relative mx-auto w-fit flex flex-col items-center">
      {/* Welcome to my portfolio banner */}
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -16, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={reduced ? { duration: 0 } : { duration: 0.9, delay: 0.1, ease: ease.paper }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper-deep/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-ink shadow-xs">
          <span className="text-signal text-sm">✦</span> WELCOME TO MY
        </span>
      </motion.div>

      <div className="lockup-labels w-full">
        <motion.p
          className="eyebrow m-0 text-ink"
          style={{ fontSize: hero.eyebrowSize }}
          initial={{ opacity: 0, y: '0.5em', clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 -20% 0)' }}
          transition={reduced ? { duration: 0 } : { duration: 0.9, delay: cue.eyebrow, ease: ease.paper }}
        >
          {site.eyebrow}
        </motion.p>

        {site.year ? (
          <div style={{ transform: 'translateY(var(--year-drop))' }}>
            <motion.p
              className="meta m-0 text-ink"
              style={{ fontSize: hero.yearSize }}
              initial={{ opacity: 0, y: '0.35em' }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduced ? { duration: 0 } : { duration: 0.85, delay: cue.year, ease: ease.paper }}
            >
              {site.year}
            </motion.p>
          </div>
        ) : null}
      </div>

      <AnimatedPortfolio word={site.displayWord} faceIndex={site.faceLetterIndex} />
    </div>
  )
}
