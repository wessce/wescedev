
import { useEffect, useRef } from 'react';

const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'];
const backendSkills = ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs', 'PostgreSQL'];
const designSkills = ['UI/UX Design', 'Figma', 'Adobe XD', 'Responsive Design'];
const otherSkills = ['Git', 'Discord.js', 'Python', 'Docker', 'CI/CD'];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillSetRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    skillSetRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      skillSetRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const renderSkillSet = (title: string, skills: string[], index: number) => (
    <div 
      ref={el => skillSetRefs.current[index] = el}
      className="glass-card p-6 opacity-0"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <h3 className="text-xl font-bold mb-4 text-accent1">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <span 
            key={skillIndex} 
            className="skill-badge hover-scale"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-navyblue to-midnight">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 opacity-0"
      >
        <h2 className="section-title text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderSkillSet("Frontend", frontendSkills, 0)}
          {renderSkillSet("Backend", backendSkills, 1)}
          {renderSkillSet("Design", designSkills, 2)}
          {renderSkillSet("Other", otherSkills, 3)}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
