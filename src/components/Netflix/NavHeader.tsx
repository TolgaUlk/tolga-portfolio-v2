import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/95' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        <Link to="/" className="text-white font-medium tracking-widest text-sm md:text-base">
          TOLGA ÜLKÜMEN
        </Link>
        <nav className="flex items-center gap-4 md:gap-6 text-white/80 text-xs md:text-sm">
          <button onClick={() => navigate('/')} className="hover:text-white transition-colors">
            Work
          </button>
          <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">
            About
          </button>
          <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavHeader;
