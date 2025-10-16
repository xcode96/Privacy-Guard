
import React from 'react';

interface FooterProps {
  selectedCount: number;
  onClearAll: () => void;
  onGenerateScript: () => void;
}

export const Footer: React.FC<FooterProps> = ({ selectedCount, onClearAll, onGenerateScript }) => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <span className="font-bold text-white text-lg">{selectedCount}</span>
          <span className="text-zinc-400"> script{selectedCount !== 1 ? 's' : ''} selected</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClearAll}
            className="px-5 py-2 text-sm font-semibold text-zinc-300 bg-zinc-800/50 border border-zinc-700 rounded-md hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            disabled={selectedCount === 0}
          >
            Clear
          </button>
          <button
            onClick={onGenerateScript}
            className="px-6 py-2 font-semibold text-white bg-orange-600 rounded-md hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={selectedCount === 0}
          >
            Generate Script
          </button>
        </div>
      </div>
    </footer>
  );
};
