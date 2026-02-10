import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { AegionSection } from "@/components/aegion-section";
import { ProjectsSection } from "@/components/projects-section";
import { PublicationsSection } from "@/components/publications-section";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AegionSection />
        <ProjectsSection />
        <PublicationsSection />
      </main>
      <SiteFooter />
    </>
  );
}
