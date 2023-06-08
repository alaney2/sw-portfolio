import { useEffect } from 'react';

export default function Modal({ onClose, children }) {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div onClick={handleClickOutside} className="fixed inset-0 flex items-center justify-center z-[99999] bg-slate-950 bg-opacity-50">
      <div className="relative bg-slate-800 px-6 md:px-10 py-6 md:py-10 rounded-xl flex flex-col z-[9999]">
        <button onClick={onClose} className="absolute left-2 top-2 md:left-4 md:top-4 mb-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 hover:bg-red-600 rounded-full" />
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
