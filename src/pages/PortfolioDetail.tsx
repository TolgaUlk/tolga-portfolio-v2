import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, X, Menu } from 'lucide-react';
import { getProject, getAdjacentProjects } from '@/data/projects';
import PasswordGate from '@/components/Portfolio/PasswordGate';
import SmartVideo from '@/components/Media/SmartVideo';
import ProjectSection from '@/components/Portfolio/ProjectSection';
import AwardsRow from '@/components/Portfolio/AwardsRow';

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProject(Number(id));
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerDark, setHeaderDark] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(true); // all current work is released; gate is opt-in per block
  const [showPasswordGate, setShowPasswordGate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      setHeaderDark(window.scrollY > heroHeight - 60);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    );
  }

  const { prev, next } = getAdjacentProjects(project.id);
  const headerColorClass = headerDark ? 'text-foreground' : 'text-white';
  const handleRequestUnlock = () => setShowPasswordGate(true);
  const handleUnlock = () => {
    setIsUnlocked(true);
    setShowPasswordGate(false);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex items-center justify-between">
        <Link to="/" className={`inline-flex items-center gap-2 ${headerColorClass} hover:opacity-70 transition-all`}>
          <ArrowLeft className="w-5 h-5" />
          <span className="font-body text-sm tracking-wider uppercase">Back</span>
        </Link>
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${headerColorClass} hover:opacity-70 transition-all p-2`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2">
              <ul className="flex flex-col text-xl font-body text-right">
                {[
                  { label: 'Work', action: () => navigate('/') },
                  { label: 'About', action: () => navigate('/about') },
                  { label: 'Contact', action: () => navigate('/contact') },
                ].map((entry, i) => (
                  <li key={entry.label} className="opacity-0 animate-menu-slide-down" style={{ animationDelay: `${i * 50}ms` }}>
                    <button
                      className={`block py-2 ${headerColorClass} hover:opacity-70 transition-colors duration-200`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        entry.action();
                      }}
                    >
                      {entry.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full h-[60vh]">
        {project.heroVideo ? (
          <SmartVideo
            vimeoId={project.heroVideo.vimeoId}
            localSrc={project.heroVideo.localSrc}
            autoplayLoop
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={project.heroImage || project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
          <div className="text-left text-white">
            <p className="text-xs md:text-sm tracking-wider mb-1">ROLE:</p>
            <p className="text-sm md:text-base tracking-widest font-sans" style={{ color: '#f6f6f6', fontWeight: 200 }}>
              {project.role}
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10 w-full bg-background pt-8">
        {project.awards && project.awards.length > 0 && (
          <section className="section-wide py-6 flex justify-center">
            <AwardsRow awards={project.awards} variant="section" />
          </section>
        )}

        {project.intro && (
          <section className="section-medium py-8 md:py-12">
            <div className="text-center space-y-6">
              {project.intro.heading && <h2 className="text-foreground text-xl md:text-2xl">{project.intro.heading}</h2>}
              <div className="text-foreground text-[10px] md:text-xs font-sans leading-relaxed space-y-4">
                {project.intro.body.map((p, i) => (
                  <p key={i} style={{ whiteSpace: 'pre-line' }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.sections.map((block, i) => (
          <ProjectSection key={i} block={block} isUnlocked={isUnlocked} onRequestUnlock={handleRequestUnlock} />
        ))}

        {project.credits.length > 0 && (
          <section className="section-wide py-8">
            <div className="w-full h-px bg-neutral-400 mb-8" />
            <div className="text-center">
              <h3 className="text-foreground text-sm md:text-base font-medium mb-6 tracking-wider">CREDITS</h3>
              <div className="text-muted-foreground text-[10px] md:text-xs font-sans leading-relaxed space-y-1">
                {project.credits.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Prev / Next footer */}
      {prev && next && (
        <footer className="bg-black py-8 px-4 md:px-6">
          <div className="container max-w-7xl mx-auto flex items-center justify-between gap-4">
            <Link to={`/project/${prev.id}`} className="text-white text-left hover:opacity-80 transition-opacity">
              <p className="text-xs md:text-sm tracking-wider">Previous Project:</p>
              <p className="text-lg md:text-xl font-medium">{prev.title}</p>
            </Link>
            <Link to={`/project/${next.id}`} className="text-white text-right hover:opacity-80 transition-opacity">
              <p className="text-xs md:text-sm tracking-wider">Next Project:</p>
              <p className="text-lg md:text-xl font-medium">{next.title}</p>
            </Link>
          </div>
        </footer>
      )}

      <PasswordGate open={showPasswordGate} onUnlock={handleUnlock} onClose={() => setShowPasswordGate(false)} />
    </div>
  );
};

export default PortfolioDetail;
