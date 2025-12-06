import Project from "@/components/project/project";
import Achievements from "@/components/achievements/achievements";
import Hero from "@/components/hero/hero";
import HomeNavigation from "@/components/home-navigation/home-navigation";

export default function Home() {
  return (
    <>
      <div className="font-codefont min-h-screen w-full bg-[#FEFFF0] p-4 pt-28 md:pt-28 md:p-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Hero Section */}
          <Hero />

          {/* Achievements Section */}
          <div className="mt-24">
            <Achievements />
          </div>

          {/* Projects Section */}
          <div className="mt-24">
            <Project />
          </div>
        </div>
      </div>
      
      {/* Navigation Links */}
      <HomeNavigation />
    </>
  );
}
