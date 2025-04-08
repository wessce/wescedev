
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-midnight">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-lightgray hover:text-accent1 transition-colors">
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
