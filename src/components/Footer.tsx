
import { Link } from 'react-router-dom';
import { Mail, Phone, Github, Linkedin, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nabil Bennadi</h3>
            <p className="text-violet-200 mb-4">
              Étudiant en BTS SIO, passionné par le développement web et la cybersécurité.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/nabil-bennadi-21b977344/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-violet-300 transition-colors">Accueil</Link>
              <Link to="/about" className="hover:text-violet-300 transition-colors">À propos</Link>
              <Link to="/internships" className="hover:text-violet-300 transition-colors">Stages</Link>
              <Link to="/projects" className="hover:text-violet-300 transition-colors">Projets</Link>
              <Link to="/skills" className="hover:text-violet-300 transition-colors">Compétences</Link>
              <Link to="/contact" className="hover:text-violet-300 transition-colors">Contact</Link>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:nabil.bennadi@outlook.fr" className="hover:text-violet-300 transition-colors">
                  nabil.bennadi@outlook.fr
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:0782906413" className="hover:text-violet-300 transition-colors">
                  07 82 90 64 13
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-violet-700 mt-8 pt-6 text-center text-violet-300">
          <p>&copy; {new Date().getFullYear()} Nabil Bennadi - Portfolio BTS SIO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
