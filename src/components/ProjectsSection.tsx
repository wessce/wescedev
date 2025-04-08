
import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Rover Multifunctional Bot',
    year: '2019',
    description: 'A versatile Discord bot with numerous features including moderation, music playback, custom commands, and interactive games.',
    tags: ['Discord.js', 'Node.js', 'MongoDB', 'JavaScript']
  },
  {
    title: 'Rover Website',
    description: 'A full configuration dashboard for the Rover bot, allowing users to customize settings, view analytics, and manage their server experience.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Express', 'MongoDB']
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-darkblue to-navyblue">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 opacity-0"
      >
        <h2 className="section-title text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="glass-card p-6 hover-scale opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              {project.year && (
                <p className="text-sm text-accent1 mb-3">{project.year}</p>
              )}
              <p className="mb-4 text-lightgray">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-navyblue px-3 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
