
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 py-4 transition-all duration-300 ${scrolled ? 'bg-midnight/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gradient">wessce</a>
        
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-white hover:text-accent1 transition-colors">About</a>
          <a href="#projects" className="text-white hover:text-accent1 transition-colors">Projects</a>
          <a href="#skills" className="text-white hover:text-accent1 transition-colors">Skills</a>
        </div>
        
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-darkblue/95 backdrop-blur-lg transition-all duration-300 ${isMenuOpen ? 'max-h-56 py-4' : 'max-h-0 py-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#about" onClick={toggleMenu} className="text-white hover:text-accent1 transition-colors py-2">About</a>
          <a href="#projects" onClick={toggleMenu} className="text-white hover:text-accent1 transition-colors py-2">Projects</a>
          <a href="#skills" onClick={toggleMenu} className="text-white hover:text-accent1 transition-colors py-2">Skills</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
