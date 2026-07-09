import { Link } from 'react-router-dom';
import { Project } from '@/data/projects';
import LogoOverlay from './LogoOverlay';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ThumbnailGridProps {
  items: Project[];
  activeId: number;
  onHover: (item: Project) => void;
}

const ThumbnailGrid = ({ items, activeId, onHover }: ThumbnailGridProps) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 pt-1">
      {items.map((item, index) => (
        <Link
          key={item.id}
          to={`/project/${item.id}`}
          className={`thumbnail-item reveal-item aspect-[4/3] rounded-none block group ${
            activeId === item.id ? 'thumbnail-active' : ''
          }`}
          style={{ transitionDelay: `${Math.min(index * 60, 300)}ms` }}
          onMouseEnter={() => onHover(item)}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {item.logo ? (
            <LogoOverlay logo={item.logo} title={item.title} blendMode={item.logoBlendMode} />
          ) : (
            <div
              className={`absolute inset-0 flex ${
                item.category === '' ? 'items-center justify-center bg-foreground/70' : 'items-end bg-gradient-to-t from-foreground/60 to-transparent'
              } p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            >
              {item.category === '' ? (
                <p className="text-primary-foreground text-sm md:text-base font-display tracking-widest uppercase">
                  {item.title}
                </p>
              ) : (
                <div>
                  <p className="text-primary-foreground text-xs tracking-wider uppercase opacity-80">{item.category}</p>
                  <p className="text-primary-foreground text-sm font-display">{item.title}</p>
                </div>
              )}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default ThumbnailGrid;
