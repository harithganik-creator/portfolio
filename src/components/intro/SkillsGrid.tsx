'use client'

import { motion, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { ease } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

/**
 * Software Skills Grid — All skill cards rendered with identical height, width,
 * border styling and padding for perfect alignment.
 */
export default function SkillsGrid() {
  const reduced = usePrefersReducedMotion()

  const tile: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced
        ? { duration: 0 }
        : { duration: 0.6, delay: 0.42 + i * 0.055, ease: ease.paper },
    }),
  }

  return (
    <ul className="m-0 grid list-none grid-cols-2 gap-3 sm:grid-cols-4 p-0">
      {site.skills.items.map((skill, i) => (
        <motion.li key={skill.label} variants={tile} custom={i}>
          <div
            className="flex h-[4.8rem] w-full flex-col items-center justify-center rounded-xl border border-ink/20 bg-paper-deep/40 p-2 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/50 hover:bg-paper-deep/80 hover:shadow-sm"
            title={skill.label}
          >
            {skill.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={skill.src}
                alt={skill.label}
                className="h-7 w-7 object-contain mb-1"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-paper text-xs font-bold mb-1 tracking-tight">
                {skill.short}
              </span>
            )}
            <span className="text-[0.7rem] font-medium leading-tight text-ink/90 line-clamp-1">
              {skill.label}
            </span>
          </div>
        </motion.li>
      ))}
    </ul>
  )
}
