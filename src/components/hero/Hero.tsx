'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import HeroTypography from './HeroTypography'
import ScrollReveal from './ScrollReveal'

/**
 * ---------------------------------------------------------------------------
 * PAGE 01 — THE COVER
 * ---------------------------------------------------------------------------
 * Hero cover page with welcome banner and bottom-right email badge.
 * ---------------------------------------------------------------------------
 */
export default function Hero() {
  const hero = useRef<HTMLElement>(null)

  return (
    <section 
      ref={hero} 
      className="relative min-h-svh w-full overflow-hidden" 
      aria-label="Cover"
      style={{
        backgroundImage: 'url(/assets/intro-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for contrast and readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />
      
      {/* Bottom Right Corner Email Badge */}
      <motion.div
        className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20"
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <a
          href="mailto:mhmdibraheem02@gmail.com"
          className="flex items-center gap-2.5 rounded-full border border-ink/25 bg-paper-deep/85 px-4 py-2 shadow-sm backdrop-blur-xs transition-all duration-300 hover:border-signal hover:text-signal hover:shadow-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-signal"></span>
          </span>
          <span className="font-sans text-ink font-bold tracking-wider text-xs lowercase">
            mhmdibraheem02@gmail.com
          </span>
        </a>
      </motion.div>

      {/* Main Cover Center Content */}
      <div className="relative z-10 flex min-h-svh w-full items-center justify-center px-[4vw]">
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            transform:
              'translate3d(calc(var(--px, 0) * -2.5px), calc(var(--lockup-shift) + var(--py, 0) * -2px), 0)',
            willChange: 'transform',
          }}
        >
          <HeroTypography />
        </motion.div>
      </div>

      {/* Scroll Reveal gesture layer */}
      <ScrollReveal target={hero} />
    </section>
  )
}
