import React from 'react';

interface FooterProps {
  selectedCount: number;
  onClearAll: () => void;
  onGenerateScript: () => void;
}

export const Footer: React.FC<FooterProps> = ({ selectedCount, onClearAll, onGenerateScript }) => {
  return (
    <footer className="bg-slate-800/60 backdrop-blur-xl border-t border-slate-700 p-4 mt-auto">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold text-white text-lg">{selectedCount}</span>
          <span className="text-slate-400"> script{selectedCount !== 1 ? 's' : ''} selected</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClearAll}
            className="px-5 py-2 text-sm font-semibold text-slate-300 bg-slate-700/50 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            disabled={selectedCount === 0}
          >
            Clear
          </button>
          <button
            onClick={onGenerateScript}
            className="px-6 py-2 font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={selectedCount === 0}
          >
            Generate Script
          </button>
        </div>
      </div>
    </footer>
  );
};