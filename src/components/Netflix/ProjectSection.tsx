import { MediaBlock } from '@/data/projects';
import SmartVideo from '@/components/Media/SmartVideo';

const widthClass = (w?: MediaBlock['width']) => {
  switch (w) {
    case 'full': return 'max-w-full';
    case 'wide': return 'max-w-6xl';
    case 'medium': return 'max-w-3xl';
    case 'narrow': return 'max-w-xl';
    case 'half': return 'max-w-2xl';
    default: return 'max-w-6xl';
  }
};

const ProjectSection = ({ block }: { block: MediaBlock }) => {
  const wrap = `mx-auto px-4 md:px-8 ${widthClass(block.width)}`;

  if (block.type === 'text') {
    const paragraphs = Array.isArray(block.body) ? block.body : (block.body ?? '').split('\n\n');
    return (
      <section className={`${wrap} py-6 md:py-8`}>
        {block.heading && <h2 className="text-white text-xl md:text-2xl mb-3">{block.heading}</h2>}
        <div className="text-white/80 text-sm md:text-base leading-relaxed space-y-3">
          {paragraphs.map((p, i) => (<p key={i} style={{ whiteSpace: 'pre-line' }}>{p}</p>))}
        </div>
      </section>
    );
  }

  if (block.type === 'image') {
    const src = Array.isArray(block.src) ? block.src[0] : block.src;
    return (
      <section className={`${wrap} pb-6 md:pb-8`}>
        <img src={src} alt={(block.alt as string) || ''} className="w-full h-auto rounded-lg object-cover" loading="lazy" />
      </section>
    );
  }

  if (block.type === 'stacked-images') {
    const items = (Array.isArray(block.src) ? block.src : [block.src].filter(Boolean)) as string[];
    const alts = (Array.isArray(block.alt) ? block.alt : [block.alt].filter(Boolean)) as string[];
    return (
      <section className={`${wrap} pb-6 md:pb-8 space-y-4`}>
        {items.map((src, i) => (
          <img key={i} src={src} alt={alts[i] || ''} className="w-full h-auto rounded-lg object-cover" loading="lazy" />
        ))}
      </section>
    );
  }

  if (block.type === 'image-row') {
    const items = (Array.isArray(block.src) ? block.src : [block.src].filter(Boolean)) as string[];
    const alts = (Array.isArray(block.alt) ? block.alt : [block.alt].filter(Boolean)) as string[];
    const cols = items.length >= 4 ? 'grid-cols-2 md:grid-cols-4' : items.length === 3 ? 'grid-cols-3' : 'grid-cols-2';
    return (
      <section className={`${wrap} pb-6 md:pb-8`}>
        <div className={`grid ${cols} gap-2 md:gap-3`}>
          {items.map((src, i) => (
            <img key={i} src={src} alt={alts[i] || ''} className="w-full h-full object-cover rounded-md" loading="lazy" />
          ))}
        </div>
      </section>
    );
  }

  if (block.type === 'video') {
    return (
      <section className={`${wrap} pb-6 md:pb-8`}>
        <div className="rounded-lg overflow-hidden">
          <SmartVideo
            vimeoId={block.vimeoId}
            localSrc={block.localSrc}
            poster={block.poster}
            autoplayLoop={block.autoplayLoop}
            playable={block.playable}
            className="w-full h-auto"
          />
        </div>
      </section>
    );
  }

  return null;
};

export default ProjectSection;
