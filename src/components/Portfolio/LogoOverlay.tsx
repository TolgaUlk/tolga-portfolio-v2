interface LogoOverlayProps {
  logo: string;
  title: string;
  blendMode?: 'screen' | 'normal';
}

/**
 * Client logo shown on thumbnail hover. Every logo is constrained to the same
 * bounding box (via max-width/max-height + object-contain) so differently
 * shaped logos (wide wordmarks vs. square marks vs. a GIF) all read as the
 * same visual size, instead of the old per-project hand-tuned percentages.
 */
const LogoOverlay = ({ logo, title, blendMode }: LogoOverlayProps) => {
  return (
    <>
      <div className={`absolute inset-0 ${blendMode === 'screen' ? 'bg-black/70' : 'bg-foreground/70'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 md:p-8">
        <img
          src={logo}
          alt={`${title} logo`}
          className="max-w-[60%] max-h-[45%] w-auto h-auto object-contain"
          style={blendMode ? { mixBlendMode: blendMode } : undefined}
        />
      </div>
    </>
  );
};

export default LogoOverlay;
