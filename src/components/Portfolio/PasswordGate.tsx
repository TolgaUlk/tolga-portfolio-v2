import { useState, useRef, useEffect } from 'react';
import { Lock } from 'lucide-react';

interface PasswordGateProps {
  open: boolean;
  onUnlock: () => void;
  onClose: () => void;
}

const PasswordGate = ({ open, onUnlock, onClose }: PasswordGateProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setPassword('');
      setError(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'youshallpass') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 600);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 rounded-xl p-8 max-w-sm w-full mx-4 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Lock className="w-8 h-8 text-neutral-400 mx-auto mb-4" />
        <p className="text-white text-sm mb-1 font-medium">This video is protected</p>
        <p className="text-neutral-400 text-xs mb-6">Enter password to play</p>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={`w-full bg-neutral-800 text-white text-sm rounded-lg px-4 py-3 outline-none border transition-all ${
              error
                ? 'border-red-500 animate-[shake_0.3s_ease-in-out]'
                : 'border-neutral-700 focus:border-neutral-500'
            }`}
          />
          <button
            type="submit"
            className="w-full mt-3 bg-white text-black text-sm font-medium rounded-lg px-4 py-3 hover:bg-neutral-200 transition-colors"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
