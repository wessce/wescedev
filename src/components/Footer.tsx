
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-darkblue/30 to-midnight/90 z-0"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center space-x-4 mb-6">
          <a 
            href="#" 
            className="text-lightgray hover:text-accent1 transition-colors p-2 hover:bg-darkblue/50 rounded-full"
          >
            <Github size={24} />
          </a>
        </div>
        
        <p className="text-lightgray text-sm">
          &copy; {new Date().getFullYear()} wessce. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
