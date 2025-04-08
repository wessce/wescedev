
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight text-white overflow-x-hidden relative">
      {/* Background pattern overlay */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-accent1/10 to-darkblue z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent2/10 via-transparent to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight to-transparent z-0"></div>
      </div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
