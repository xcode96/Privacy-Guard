import React from 'react';

interface FooterProps {
  selectedCount: number;
  onClearAll: () => void;
  onGenerateScript: () => void;
}

export const Footer: React.FC<FooterProps> = ({ selectedCount, onClearAll, onGenerateScript }) => {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 p-4 mt-auto">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold text-white text-lg">{selectedCount}</span>
          <span className="text-zinc-400"> script{selectedCount !== 1 ? 's' : ''} selected</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClearAll}
            className="px-5 py-2 text-sm font-semibold text-zinc-300 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            disabled={selectedCount === 0}
          >
            Clear
          </button>
          <button
            onClick={onGenerateScript}
            className="px-6 py-2 font-semibold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={selectedCount === 0}
          >
            Generate Script
          </button>
        </div>
      </div>
    </footer>
  );
};