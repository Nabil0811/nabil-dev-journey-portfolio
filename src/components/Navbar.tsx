
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { title: "Accueil", path: "/" },
    { title: "À propos", path: "/about" },
    { title: "Stages", path: "/internships" },
    { title: "Projets", path: "/projects" },
    { title: "Compétences", path: "/skills" },
    { title: "Contact", path: "/contact" }
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-violet-700">
          Nabil Bennadi
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.title}
            </Link>
          ))}
          <a
            href="/cv-nabil-bennadi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Mon CV
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-lg ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <a
              href="/cv-nabil-bennadi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-4"
            >
              Mon CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
