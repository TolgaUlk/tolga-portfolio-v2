import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, ArrowLeft } from 'lucide-react';
import { getProject } from '@/data/projects';
import NavHeader from '@/components/Netflix/NavHeader';
import ProjectSection from '@/components/Netflix/ProjectSection';
import PlayerModal from '@/components/Netflix/PlayerModal';

const ProjectInfo = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProject(Number(id));
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-white/60">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <NavHeader />

      {/* Backdrop hero */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={project.backdrop || project.thumbnail}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none" />

        <button
          onClick={() => navigate('/')}
          className="absolute top-20 md:top-24 left-4 md:left-8 z-10 inline-flex items-center gap-2 text-white/80 hover:text-white text-sm tracking-wider"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-8 md:pb-12 max-w-4xl">
          {project.awards && project.awards.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
              {project.awards.map((a, i) => (
                <span key={i} className="text-yellow-400/90 text-xs md:text-sm tracking-widest uppercase">
                  ★ {a.label}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-2 md:mb-3">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-white/70 text-xs md:text-sm mb-4">
            {project.year && <span>{project.year}</span>}
            {project.client && <span>• {project.client}</span>}
            <span>• {project.role}</span>
          </div>
          <p className="text-white/85 text-sm md:text-base max-w-2xl leading-relaxed mb-5 md:mb-6">
            {project.description}
          </p>
          <button
            type="button"
            onClick={() => setShowPlayer(true)}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-black rounded font-medium text-sm md:text-base hover:bg-white/90 transition-colors"
          >
            <Play size={18} className="fill-black" />
            Play
          </button>
        </div>
      </section>

      {/* Credits */}
      {project.credits.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 md:px-8 py-10">
          <h3 className="text-white/60 text-xs tracking-widest uppercase mb-3">Credits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-white/85 text-sm md:text-base">
            {project.credits.map((c, i) => (<p key={i}>{c}</p>))}
          </div>
        </section>
      )}

      {/* Below-the-fold extra content */}
      {project.sections && project.sections.length > 0 && (
        <div className="pb-16">
          {project.sections.map((block, i) => (
            <ProjectSection key={i} block={block} />
          ))}
        </div>
      )}

      <PlayerModal
        open={showPlayer}
        vimeoId={project.mainVideo.vimeoId}
        localSrc={project.mainVideo.localSrc}
        poster={project.backdrop || project.thumbnail}
        onClose={() => setShowPlayer(false)}
      />
    </div>
  );
};

export default ProjectInfo;
