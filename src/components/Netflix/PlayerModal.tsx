import { useEffect } from 'react';
import { X } from 'lucide-react';
import SmartVideo from '@/components/Media/SmartVideo';

interface PlayerModalProps {
  open: boolean;
  vimeoId?: string;
  localSrc?: string;
  poster?: string;
  onClose: () => void;
}

/**
 * Full-screen video modal, opened when the user clicks Play on the info page.
 * Uses SmartVideo with `playable=true` so it gets the minimal-chrome player
 * (big centered play button on start, then just a scrubber).
 */
const PlayerModal = ({ open, vimeoId, localSrc, poster, onClose }: PlayerModalProps) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
      >
        <X size={22} />
      </button>
      <div className="w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <SmartVideo vimeoId={vimeoId} localSrc={localSrc} poster={poster} playable className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default PlayerModal;
