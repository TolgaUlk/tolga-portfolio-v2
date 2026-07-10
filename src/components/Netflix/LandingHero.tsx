import { landingHero } from '@/data/projects';
import SmartVideo from '@/components/Media/SmartVideo';

const LandingHero = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-black">
      <SmartVideo
        vimeoId={landingHero.showreel.vimeoId}
        localSrc={landingHero.showreel.localSrc}
        autoplayLoop
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Bottom gradient - fades into the black page below */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
      {/* Side gradient for text legibility */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32 max-w-4xl">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
          {landingHero.title}
        </h1>
        <p className="text-white/80 text-base md:text-xl mt-3 md:mt-4">{landingHero.tagline}</p>
      </div>
    </section>
  );
};

export default LandingHero;
