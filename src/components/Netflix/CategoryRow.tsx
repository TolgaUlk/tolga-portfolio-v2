import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/data/projects';
import RowCard from './RowCard';

interface CategoryRowProps {
  title: string;
  projects: Project[];
}

/**
 * Horizontally-scrolling category row of RowCards. Overflow items scroll via
 * click-arrows or trackpad/mouse-wheel swipe. Chevron arrows only appear on
 * hover of the row itself, matching Netflix's UX.
 */
const CategoryRow = ({ title, projects }: CategoryRowProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const distance = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === 'left' ? -distance : distance, behavior: 'smooth' });
  };

  if (projects.length === 0) return null;

  return (
    <section className="category-row group/row py-6 md:py-8">
      <h2 className="text-white text-lg md:text-xl font-medium mb-3 md:mb-4 px-4 md:px-8">{title}</h2>
      <div className="relative">
        {/* Left arrow */}
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollBy('left')}
          className="hidden md:flex opacity-0 group-hover/row:opacity-100 transition-opacity absolute left-0 top-0 bottom-0 z-40 w-12 items-center justify-center bg-black/60 hover:bg-black/80"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>

        {/* Scroller */}
        <div
          ref={scrollerRef}
          className="flex gap-2 md:gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 md:px-8 pb-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {projects.map((p) => (
            <div key={p.id} className="snap-start">
              <RowCard project={p} />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollBy('right')}
          className="hidden md:flex opacity-0 group-hover/row:opacity-100 transition-opacity absolute right-0 top-0 bottom-0 z-40 w-12 items-center justify-center bg-black/60 hover:bg-black/80"
        >
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>
    </section>
  );
};

export default CategoryRow;
