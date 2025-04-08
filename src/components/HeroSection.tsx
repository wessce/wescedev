
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in');
      }
    }, 300);
    
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.classList.add('animate-fade-in');
      }
    }, 600);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight/90 via-accent1/20 to-darkblue/80 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-4 opacity-0"
        >
          <span className="text-gradient">wessce</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-lightgray mb-8 max-w-2xl mx-auto opacity-0"
        >
          Discord Developer | Web Developer | UX/UI Designer | Frontend & Backend Enthusiast
        </p>
        
        <div ref={buttonRef} className="opacity-0">
          <a 
            href="#about"
            className="inline-block animate-float mt-8"
          >
            <ChevronDown className="text-accent1 w-10 h-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
