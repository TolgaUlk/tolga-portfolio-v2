import { useState, useCallback } from 'react';
import PortfolioHeader from '@/components/Portfolio/PortfolioHeader';
import HeroImage from '@/components/Portfolio/HeroImage';
import ThumbnailGrid from '@/components/Portfolio/ThumbnailGrid';
import { projects, landingHero, Project } from '@/data/projects';

const Index = () => {
  const [activeItem, setActiveItem] = useState<Project | typeof landingHero>(landingHero);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThumbnailHover = useCallback(
    (item: Project) => {
      if (item.id !== activeItem.id) {
        setIsAnimating(true);
        setActiveItem(item);
        setTimeout(() => setIsAnimating(false), 600);
      }
    },
    [activeItem.id]
  );

  const handleLogoClick = useCallback(() => {
    if (activeItem.id !== landingHero.id) {
      setIsAnimating(true);
      setActiveItem(landingHero);
      setTimeout(() => setIsAnimating(false), 600);
    }
  }, [activeItem.id]);

  return (
    <div className="min-h-screen bg-background">
      <section id="work" className="relative">
        <PortfolioHeader onLogoClick={handleLogoClick} isLandingHero={activeItem.id === landingHero.id} />
        <HeroImage item={activeItem} isAnimating={isAnimating} />
      </section>

      <section>
        <ThumbnailGrid items={projects} activeId={activeItem.id} onHover={handleThumbnailHover} />
      </section>

      <footer className="border-t border-border py-8 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto text-sm text-muted-foreground">
          <p className="font-body">© {new Date().getFullYear()} Tolga Ülkümen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
