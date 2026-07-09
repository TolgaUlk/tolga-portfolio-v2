import { useEffect, useRef, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SmartVideoProps {
  vimeoId?: string;
  localSrc?: string;
  poster?: string;
  className?: string;
  /** Silent, looping, no controls — used for background/ambient videos */
  autoplayLoop?: boolean;
  /** Click-to-play with our minimal custom chrome (big play button + scrubber) */
  playable?: boolean;
  /** Autoplay muted, no chrome at all (hero videos) */
  hero?: boolean;
}

/**
 * Renders either a Vimeo embed (stripped of all default chrome — no logo, title,
 * byline, or share button) or a local <video> file, with an identical minimal
 * custom UI on top: one centered play button before playback starts, and the
 * browser-native scrubber/volume once playing (for local video). Vimeo videos
 * get our own play-button overlay and otherwise use Vimeo's own scrubber, since
 * we intentionally strip everything else from the embed via player params.
 *
 * Falls back to `localSrc` automatically if `vimeoId` is empty/undefined, so the
 * site keeps working during video migration.
 */
const SmartVideo = ({ vimeoId, localSrc, poster, className, autoplayLoop, playable, hero }: SmartVideoProps) => {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) setIsPaused(v.paused);
  }, [vimeoId, localSrc]);

  const triggerPlay = () => {
    const v = videoRef.current;
    if (v && v.paused) v.play().catch(() => {});
  };

  // --- Background / hero style (always autoplay, muted, looping, no chrome at all) ---
  if (autoplayLoop || hero) {
    if (vimeoId) {
      const src = `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0&portrait=0&badge=0`;
      return (
        <div className={cn('relative overflow-hidden', className)}>
          <iframe
            src={src}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
            allow="autoplay; fullscreen"
            title="Background video"
          />
        </div>
      );
    }
    return (
      <video
        src={localSrc}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className={className}
      />
    );
  }

  // --- Playable style (click to play, minimal chrome, timeline scrubber) ---
  if (playable) {
    if (vimeoId) {
      // dnt=1 disables Do-Not-Track pings; keeping only play/pause + scrubber via
      // Vimeo's controls, everything else (logo, title, byline, portrait) is off.
      const src = `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&dnt=1`;
      return (
        <div className={cn('relative w-full', className)} style={{ aspectRatio: '16 / 9' }}>
          <iframe
            src={src}
            className="absolute inset-0 w-full h-full rounded-[inherit]"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Project video"
          />
        </div>
      );
    }
    return (
      <div className={cn('relative', className)}>
        <video
          ref={videoRef}
          src={localSrc}
          poster={poster}
          controls
          playsInline
          controlsList="nodownload"
          onPlay={() => setIsPaused(false)}
          onPause={() => setIsPaused(true)}
          className="w-full h-full rounded-[inherit]"
        />
        {isPaused && (
          <button
            type="button"
            aria-label="Play video"
            onClick={triggerPlay}
            className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors group"
          >
            <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Play className="w-7 h-7 md:w-8 md:h-8 text-black fill-black ml-1" />
            </span>
          </button>
        )}
      </div>
    );
  }

  // Default: plain local video, no chrome
  return <video src={localSrc} poster={poster} playsInline className={className} />;
};

export default SmartVideo;
