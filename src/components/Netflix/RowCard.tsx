import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info } from 'lucide-react';
import { Project } from '@/data/projects';
import SmartVideo from '@/components/Media/SmartVideo';

interface RowCardProps {
  project: Project;
}

/**
 * Netflix-style row card.
 * - Idle: thumbnail image, muted.
 * - On hover (after a small delay to avoid flicker as the user scans): the card
 *   enlarges via CSS transform, and the project's preview video autoplays
 *   muted underneath a subtle darkened bottom-gradient with the title and
 *   quick actions.
 * - The whole card is a Link to the info page, but the hover-preview and
 *   Play/Info buttons work without leaving the page.
 */
const RowCard = ({ project }: RowCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const hoverTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    };
  }, []);

  const handleEnter = () => {
    setIsHovering(true);
    hoverTimer.current = window.setTimeout(() => setShowPreview(true), 350);
  };
  const handleLeave = () => {
    setIsHovering(false);
    setShowPreview(false);
    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  return (
    <div
      className="row-card relative flex-shrink-0 w-[240px] md:w-[280px] lg:w-[320px] aspect-video"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        to={`/project/${project.id}`}
        className={`absolute inset-0 rounded-md overflow-hidden bg-neutral-900 shadow-md transition-transform duration-300 ease-out will-change-transform ${
          isHovering ? 'scale-[1.12] shadow-2xl z-30' : 'z-10'
        }`}
        style={{ transformOrigin: 'center center' }}
      >
        {/* Base thumbnail */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Hover-preview video layered on top of the thumbnail */}
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

        {/* Bottom info panel that slides up on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 md:p-4 transition-all duration-300 ${
            isHovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <button
              type="button"
              className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90"
              aria-label="View project"
            >
              <Play size={14} className="fill-black ml-0.5" />
            </button>
            <button
              type="button"
              className="w-8 h-8 rounded-full border border-white/50 bg-black/40 text-white flex items-center justify-center hover:border-white"
              aria-label="More info"
            >
              <Info size={14} />
            </button>
          </div>
          <p className="text-white font-medium text-sm md:text-base leading-tight line-clamp-1">{project.title}</p>
          <p className="text-white/70 text-[10px] md:text-xs mt-0.5 line-clamp-1">
            {project.client}
            {project.year ? ` • ${project.year}` : ''}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RowCard;
