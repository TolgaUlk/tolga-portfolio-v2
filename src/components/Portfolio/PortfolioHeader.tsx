import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface PortfolioHeaderProps {
  onLogoClick?: () => void;
  isLandingHero?: boolean;
}

const PortfolioHeader = ({ onLogoClick, isLandingHero = false }: PortfolioHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between py-6 md:py-8 px-4 md:px-6">
      <div className="animate-fade-up">
        <button 
          onClick={onLogoClick}
          className={`text-xl md:text-2xl font-display font-medium tracking-tight transition-colors duration-200 ${isLandingHero ? 'text-foreground hover:text-foreground/80' : 'text-white hover:text-white/80'}`}
        >
          tolga ulkumen
        </button>
      </div>
      
      <nav className="animate-fade-up-delay-1 relative">
        <button
          onClick={toggleMenu}
          className={`transition-colors duration-200 p-2 ${isLandingHero ? 'text-foreground hover:text-foreground/80' : 'text-white hover:text-white/80'}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2">
            <ul className="flex flex-col text-xl font-body text-right">
              <li className="opacity-0 animate-menu-slide-down" style={{ animationDelay: '0ms' }}>
                <a 
                  href="#work" 
                  className={`block py-2 transition-colors duration-200 ${isLandingHero ? 'text-foreground hover:text-foreground/70' : 'text-white hover:text-white/70'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Work
                </a>
              </li>
              <li className="opacity-0 animate-menu-slide-down" style={{ animationDelay: '50ms' }}>
                <button 
                  className={`block py-2 transition-colors duration-200 ${isLandingHero ? 'text-foreground/80 hover:text-foreground' : 'text-white/80 hover:text-white'}`}
                  onClick={() => { setIsMenuOpen(false); navigate('/about'); }}
                >
                  About
                </button>
              </li>
              <li className="opacity-0 animate-menu-slide-down" style={{ animationDelay: '100ms' }}>
                <button 
                  className={`block py-2 transition-colors duration-200 ${isLandingHero ? 'text-foreground/80 hover:text-foreground' : 'text-white/80 hover:text-white'}`}
                  onClick={() => { setIsMenuOpen(false); navigate('/contact'); }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default PortfolioHeader;
