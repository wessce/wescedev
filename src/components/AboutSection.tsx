
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-darkblue/50 to-midnight/80 z-0"></div>
      
      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 opacity-0 relative z-10"
      >
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="glass-card p-8 max-w-3xl mx-auto backdrop-blur-md bg-darkblue/40 border border-accent1/20">
          <p className="text-lg mb-6">
            I'm a passionate developer with expertise in both front-end and back-end technologies. 
            My journey in development started with Discord bots, which eventually led me to explore 
            web development, UI/UX design, and full-stack applications.
          </p>
          
          <p className="text-lg">
            I strive to create clean, efficient, and user-friendly solutions that not only look great 
            but also provide exceptional functionality. My approach combines technical expertise with 
            creative problem-solving to deliver the best possible user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
