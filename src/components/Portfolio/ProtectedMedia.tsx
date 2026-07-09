import { ReactNode } from 'react';
import { Lock } from 'lucide-react';

interface ProtectedMediaProps {
  isProtected: boolean;
  isUnlocked: boolean;
  onRequestUnlock: () => void;
  children: ReactNode;
}

/**
 * Wraps any media block (image or video) with an optional password gate.
 * Since all current work is released and public, `isProtected` defaults to
 * false everywhere — this only kicks in for a project you explicitly mark
 * `protected: true` in the data file (e.g. an unreleased or NDA'd piece).
 */
const ProtectedMedia = ({ isProtected, isUnlocked, onRequestUnlock, children }: ProtectedMediaProps) => {
  if (!isProtected || isUnlocked) return <>{children}</>;

  return (
    <div className="relative cursor-pointer group" onClick={onRequestUnlock}>
      <div className="pointer-events-none blur-sm">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
        <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
          <Lock className="w-6 h-6 text-black" />
        </span>
      </div>
    </div>
  );
};

export default ProtectedMedia;
