import { MediaBlock } from '@/data/projects';
import SmartVideo from '@/components/Media/SmartVideo';
import ProtectedMedia from './ProtectedMedia';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const widthClass = (w?: MediaBlock['width']) => {
  switch (w) {
    case 'full':
      return 'section-full';
    case 'wide':
      return 'section-wide';
    case 'medium':
      return 'section-medium';
    case 'narrow':
      return 'section-narrow';
    case 'half':
      return 'section-half';
    default:
      return 'section-wide';
  }
};

interface ProjectSectionProps {
  block: MediaBlock;
  isUnlocked: boolean;
  onRequestUnlock: () => void;
}

/**
 * Renders a single case-study content block from a project's `sections` array.
 * Adding a new block to a project = adding one object to the data file, no JSX
 * required. Every block gets a scroll-reveal fade automatically.
 */
const ProjectSection = ({ block, isUnlocked, onRequestUnlock }: ProjectSectionProps) => {
  const revealRef = useScrollReveal<HTMLElement>();

  if (block.type === 'divider') {
    return (
      <section ref={revealRef} className="section-wide reveal-item py-4">
        <div className="w-full h-px bg-neutral-400" />
      </section>
    );
  }

  if (block.type === 'text') {
    const paragraphs = Array.isArray(block.body) ? block.body : (block.body ?? '').split('\n\n');
    return (
      <section ref={revealRef} className={`${widthClass(block.width)} reveal-item py-6 md:py-8`}>
        <div className="text-center space-y-4">
          {block.heading && <h2 className="text-foreground text-xl md:text-2xl">{block.heading}</h2>}
          <div className="text-foreground/90 text-[11px] md:text-xs font-sans leading-relaxed space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} style={{ whiteSpace: 'pre-line' }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (block.type === 'credits') {
    return (
      <section ref={revealRef} className="section-wide reveal-item py-8">
        <div className="w-full h-px bg-neutral-400 mb-8" />
        <div className="text-center">
          <h3 className="text-foreground text-sm md:text-base font-medium mb-6 tracking-wider">CREDITS</h3>
          <div className="text-muted-foreground text-[10px] md:text-xs font-sans leading-relaxed space-y-1">
            {block.lines?.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (block.type === 'image') {
    const src = Array.isArray(block.src) ? block.src[0] : block.src;
    return (
      <section ref={revealRef} className={`${widthClass(block.width)} reveal-item pb-6 md:pb-8`}>
        <ProtectedMedia isProtected={!!block.protected} isUnlocked={isUnlocked} onRequestUnlock={onRequestUnlock}>
          <img src={src} alt={(block.alt as string) || ''} className="w-full h-auto rounded-lg object-cover" />
        </ProtectedMedia>
      </section>
    );
  }

  if (block.type === 'stacked-images') {
    const items = Array.isArray(block.src) ? block.src : [block.src].filter(Boolean) as string[];
    const alts = Array.isArray(block.alt) ? block.alt : [block.alt].filter(Boolean) as string[];
    return (
      <section ref={revealRef} className={`${widthClass(block.width)} reveal-item pb-6 md:pb-8 space-y-4`}>
        {items.map((src, i) => (
          <img key={i} src={src} alt={alts[i] || ''} className="w-full h-auto rounded-lg object-cover" />
        ))}
      </section>
    );
  }

  if (block.type === 'image-row') {
    const items = Array.isArray(block.src) ? block.src : [block.src].filter(Boolean) as string[];
    const alts = Array.isArray(block.alt) ? block.alt : [block.alt].filter(Boolean) as string[];
    const cols = items.length >= 4 ? 'grid-cols-2 md:grid-cols-4' : items.length === 3 ? 'grid-cols-3' : 'grid-cols-2';
    return (
      <section ref={revealRef} className={`${widthClass(block.width)} reveal-item pb-6 md:pb-8`}>
        <div className={`grid ${cols} gap-3 md:gap-4`}>
          {items.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <img src={src} alt={alts[i] || ''} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === 'video') {
    return (
      <section ref={revealRef} className={`${widthClass(block.width)} reveal-item pb-6 md:pb-8`}>
        <div className="rounded-lg overflow-hidden">
          <ProtectedMedia isProtected={!!block.protected} isUnlocked={isUnlocked} onRequestUnlock={onRequestUnlock}>
            <SmartVideo
              vimeoId={block.vimeoId}
              localSrc={block.localSrc}
              poster={block.poster}
              autoplayLoop={block.autoplayLoop}
              playable={block.playable}
              className="w-full h-auto rounded-lg"
            />
          </ProtectedMedia>
        </div>
      </section>
    );
  }

  return null;
};

export default ProjectSection;
