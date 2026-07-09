import { Award } from '@/data/projects';

interface AwardsRowProps {
  awards?: Award[];
  /** 'hero' = small overlay on the hero image; 'section' = larger, standalone on the case-study page */
  variant?: 'hero' | 'section';
}

/**
 * Renders award/logo badges at a single consistent size, regardless of the
 * award image's own aspect ratio or resolution. Fixes the old per-award
 * hand-tuned pixel widths (135px / 286px / 291px / 616px / etc.) that made
 * awards look mismatched next to each other.
 */
const AwardsRow = ({ awards, variant = 'hero' }: AwardsRowProps) => {
  if (!awards || awards.length === 0) return null;

  const sizeClass =
    variant === 'hero'
      ? 'h-6 md:h-8 lg:h-9' // fixed HEIGHT, width follows aspect ratio — every badge lines up evenly
      : 'h-10 md:h-12';

  return (
    <div className={`flex items-center gap-3 md:gap-4 flex-wrap ${variant === 'section' ? 'justify-center' : ''}`}>
      {awards.map((award, i) => (
        <img
          key={i}
          src={award.icon}
          alt={award.label}
          className={`${sizeClass} w-auto object-contain`}
        />
      ))}
    </div>
  );
};

export default AwardsRow;
