import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info } from 'lucide-react';
import { Project } from '@/data/projects';
import SmartVideo from '@/components/Media/SmartVideo';

interface FeaturedCardProps {
  project: Project;
}

/**
 * Large featured project card, used in the FeaturedSection under the hero.
 * Same hover-preview behavior as RowCard but taller and more cinematic —
 * these are the "you must watch this" tentpole entries.
 */
const FeaturedCard = ({ project }: FeaturedCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const hoverTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
  }, []);

  const handleEnter = () => {
    setIsHovering(true);
    hoverTimer.current = window.setTimeout(() => setShowPreview(true), 300);
  };
  const handleLeave = () => {
    setIsHovering(false);
    setShowPreview(false);
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
  };

  return (
    <Link
      to={`/project/${project.id}`}
      className="featured-card group relative w-full aspect-video rounded-lg overflow-hidden bg-neutral-900 shadow-xl"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <img
        src={project.backdrop || project.thumbnail}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {showPreview && project.previewVideo && (
        <div className="absolute inset-0 animate-fade-in">
          <SmartVideo
            vimeoId={project.previewVideo.vimeoId}
            localSrc={project.previewVideo.localSrc}
            autoplayLoop
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Dark side + bottom gradient always on */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
        {project.awards && project.awards.length > 0 && (
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            {project.awards.map((a, i) => (
              <span key={i} className="text-xs md:text-sm text-yellow-400/90 tracking-wider uppercase">
                ★ {a.label}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-1 md:mb-2">
          {project.title}
        </h3>
        <p className="text-white/80 text-sm md:text-base mb-3 md:mb-4 max-w-md line-clamp-2">
          {project.tagline || project.description}
        </p>
        <div className="flex items-center gap-2 md:gap-3">
          <span className="inline-flex items-center gap-2 px-4 md:px-5 py-2 bg-white text-black rounded font-medium text-sm md:text-base hover:bg-white/90 transition-colors">
            <Play size={16} className="fill-black" />
            Play
          </span>
          <span className="inline-flex items-center gap-2 px-4 md:px-5 py-2 bg-white/20 text-white rounded font-medium text-sm md:text-base backdrop-blur-sm hover:bg-white/30 transition-colors">
            <Info size={16} />
            More Info
          </span>
        </div>
      </div>
    </Link>
  );
};

interface FeaturedSectionProps {
  projects: Project[];
}

const FeaturedSection = ({ projects }: FeaturedSectionProps) => {
  if (projects.length === 0) return null;
  return (
    <section className="px-4 md:px-8 -mt-24 md:-mt-32 relative z-20">
      <h2 className="text-white/70 text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {projects.map((p) => (
          <FeaturedCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
