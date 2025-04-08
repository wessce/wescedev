
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Index;
