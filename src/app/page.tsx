import Hero from '@/components/hero/Hero'
import IntroSection from '@/components/intro/IntroSection'
import NameStrip from '@/components/name/NameStrip'
import ProjectsSection from '@/components/projects/ProjectsSection'
import StudioSection from '@/components/studio/StudioSection'
import ConnectCard from '@/components/ui/ConnectCard'
import SiteFooter from '@/components/footer/SiteFooter'
import PaperRun from '@/components/paper/PaperRun'

export default function Page() {
  return (
    <>
      <main>
        {/* One sheet of paper runs the height of the document. Sections are
            laid on it; the black page in NameStrip is a second sheet laid on
            top of that. */}
        <PaperRun>
          <Hero />
          <IntroSection />
          <NameStrip />
          <ProjectsSection />
          <StudioSection />
          <SiteFooter />
        </PaperRun>
      </main>
      <ConnectCard />
    </>
  )
}
