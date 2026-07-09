import { Project, landingHero } from '@/data/projects';
import AwardsRow from './AwardsRow';
import SmartVideo from '@/components/Media/SmartVideo';

interface HeroImageProps {
  item: Project | typeof landingHero;
  isAnimating: boolean;
}

const isLanding = (item: Project | typeof landingHero): item is typeof landingHero => item.id === 0;

const HeroImage = ({ item, isAnimating }: HeroImageProps) => {
  if (isLanding(item)) {
    return (
      <div className="relative w-full h-[62vh] overflow-hidden bg-background">
        <div className="flex h-full">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 lg:p-16 pt-20 md:pt-28 lg:pt-32">
            <h1 className="text-foreground text-3xl md:text-5xl lg:text-6xl font-display font-normal leading-snug">
              An advertiser
              <br />
              with a few tricks
              <br />
              up his sleeve
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm font-body tracking-[0.3em] uppercase mt-6 md:mt-8">
              SR. ART DIRECTOR&nbsp;&nbsp;&nbsp;&nbsp;CONCEPT FINDER&nbsp;&nbsp;&nbsp;&nbsp;AI FILM MAKER
            </p>
          </div>
          <div className="hidden md:block w-1/2 h-full p-4">
            <SmartVideo
              vimeoId={item.showreel.vimeoId}
              localSrc={item.showreel.localSrc}
              autoplayLoop
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    );
  }

  const project = item as Project;
  const objectPosition = project.id === 2 ? 'center top' : 'center center';

  return (
    <div className="relative w-full h-[62vh] overflow-hidden bg-secondary">
      {project.heroVideo ? (
        <div className="absolute inset-0" style={{ objectPosition }}>
          <SmartVideo
            key={project.id}
            vimeoId={project.heroVideo.vimeoId}
            localSrc={project.heroVideo.localSrc}
            autoplayLoop
            className="hero-image w-full h-full object-cover"
          />
        </div>
      ) : (
        <img
          key={project.id}
          src={project.heroImage || project.thumbnail}
          alt={project.title}
          className="hero-image w-full h-full object-cover"
        />
      )}

      <div className={`absolute bottom-8 left-8 md:bottom-12 md:left-12 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <p className="text-white text-xs md:text-sm font-body tracking-[0.2em] uppercase mb-2">{project.category}</p>
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-body">{project.title}</h2>
      </div>

      {project.awards && project.awards.length > 0 && (
        <div className={`absolute bottom-6 right-6 md:bottom-8 md:right-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <AwardsRow awards={project.awards} variant="hero" />
        </div>
      )}
    </div>
  );
};

export default HeroImage;
