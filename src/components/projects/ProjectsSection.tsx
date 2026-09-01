'use client'

import { motion, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

export default function ProjectsSection() {
  const reduced = usePrefersReducedMotion()

  const group: Variants = {
    hidden: {},
    show: { transition: { delayChildren: reduced ? 0 : 0.06 } },
  }

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.9, delay: i * 0.14, ease: ease.paper },
    }),
  }

  return (
    <section
      id="projects"
      className="relative w-full pt-[clamp(2.5rem,7vw,6rem)] pb-[clamp(3rem,8vw,6rem)] px-[max(1.5rem,7vw)]"
      aria-label={site.projects.heading}
    >
      <motion.div
        className="mx-auto max-w-[112rem]"
        variants={group}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <div className="flex flex-col items-start gap-2 mb-[clamp(2rem,5vw,3.5rem)]">
          <span className="eyebrow text-signal tracking-[0.2em] font-semibold text-xs uppercase">
            SELECTED WORK
          </span>
          <h2
            className="display m-0 text-ink"
            style={{ fontSize: 'clamp(2.25rem, 4.8vw, 6rem)', letterSpacing: '-0.04em' }}
          >
            {site.projects.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.25rem,3vw,2.5rem)]">
          {site.projects.items.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              custom={i}
              className="group relative flex flex-col justify-between rounded-2xl border border-ink/15 bg-paper-deep/40 p-[clamp(1.25rem,3vw,2rem)] transition-all duration-300 hover:-translate-y-1.5 hover:border-ink/40 hover:bg-paper-deep/80 hover:shadow-md"
            >
              <div>
                <span className="inline-block rounded-full border border-ink/20 bg-paper px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-ink/80 mb-4">
                  {project.category}
                </span>
                <h3 className="body-copy m-0 text-ink font-bold text-lg md:text-xl leading-snug mb-3 group-hover:text-signal transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="body-copy m-0 text-graphite text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between text-xs font-semibold text-ink/70">
                <span>0{i + 1} / PROJECT</span>
                <span className="text-signal opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  EXPLORE &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
