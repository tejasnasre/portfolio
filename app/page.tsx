import { Navigation } from "@/components/Navigation";
import { Divider } from "@/components/Divider";
import { HeroSection } from "@/components/sections/HeroSection";
import { ThingsIBuildSection } from "@/components/sections/ThingsIBuildSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background px-5 py-8 sm:px-6 sm:py-10">
      <JsonLd />
      <div className="mx-auto w-full max-w-xl">
        <Navigation />
        <HeroSection />
        <Divider />
        <ThingsIBuildSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <AchievementsSection />
      </div>
    </main>
  );
}
