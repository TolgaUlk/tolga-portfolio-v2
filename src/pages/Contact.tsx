import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import contactHero from '@/assets/contact-hero.jpg';

const Contact = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between py-6 md:py-8 px-4 md:px-6">
        <div>
          <button
            onClick={() => navigate('/')}
            className="text-xl md:text-2xl font-display font-medium tracking-tight text-foreground hover:text-foreground/80 transition-colors duration-200"
          >
            tolga ulkumen
          </button>
        </div>

        <nav className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-foreground/80 transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 z-20">
              <ul className="flex flex-col text-xl font-body text-right">
                <li className="opacity-0 animate-menu-slide-down" style={{ animationDelay: '0ms' }}>
                  <button
                    className="block py-2 text-foreground hover:text-foreground/70 transition-colors duration-200"
                    onClick={() => { setIsMenuOpen(false); navigate('/'); }}
                  >
                    Work
                  </button>
                </li>
                <li className="opacity-0 animate-menu-slide-down" style={{ animationDelay: '50ms' }}>
                  <button
                    className="block py-2 text-foreground/80 hover:text-foreground transition-colors duration-200"
                    onClick={() => { setIsMenuOpen(false); navigate('/about'); }}
                  >
                    About
                  </button>
                </li>
                <li className="opacity-0 animate-menu-slide-down" style={{ animationDelay: '100ms' }}>
                  <button
                    className="block py-2 text-foreground/80 hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Content - About page style layout */}
      <div className="pt-24 md:pt-32 px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left - Image */}
          <div className="lg:w-1/2">
            <img
              src={contactHero}
              alt="Tolga Ülkümen"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right - Contact Info */}
          <div className="lg:w-1/2 font-sans text-foreground flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-display font-medium mb-8">
              Get in touch
            </h1>

            <a
              href="mailto:tolgaulkumen@gmail.com"
              className="text-lg md:text-xl font-body text-foreground hover:text-foreground/70 transition-colors duration-200 underline underline-offset-4"
            >
              tolgaulkumen@gmail.com
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
