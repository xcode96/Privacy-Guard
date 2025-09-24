import React from 'react';
import type { Script } from '../types';
import { EyeIcon } from './icons/EyeIcon';

interface ScriptItemProps {
  script: Script;
  isSelected: boolean;
  onToggle: (id: string) => void;
  onViewCode: (id: string) => void;
}

export const ScriptItem: React.FC<ScriptItemProps> = ({ script, isSelected, onToggle, onViewCode }) => {
  const codePreview = script.code.split('\n').slice(0, 3).join('\n');
  
  const handleViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewCode(script.id);
  }

  return (
    <div
      className={`group relative bg-zinc-800/60 rounded-lg border transition-all duration-300 cursor-pointer ${isSelected ? 'border-orange-500/80' : 'border-zinc-700 hover:border-zinc-600'}`}
      onClick={() => onToggle(script.id)}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && onToggle(script.id)}
    >
        <div className={`absolute top-0 left-0 bottom-0 w-1 bg-orange-500 rounded-l-lg transition-transform duration-300 ${isSelected ? 'scale-y-100' : 'scale-y-0'}`} />
        <div className="p-4">
            <div className="flex items-start gap-4">
                <div className="flex-1">
                    <h3 className="font-semibold text-zinc-100 font-mono">{script.name}</h3>
                    <p className="text-zinc-400 text-sm mt-1">{script.description}</p>
                </div>
                <button
                    onClick={handleViewClick}
                    className="p-2 rounded-md bg-zinc-700/50 text-zinc-400 hover:bg-zinc-600/70 hover:text-white transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                    aria-label={`View code for ${script.name}`}
                    title={`View code for ${script.name}`}
                >
                    <EyeIcon className="w-5 h-5" />
                </button>
            </div>
            <div className="mt-4">
                <pre className="bg-zinc-900/70 rounded p-2 text-xs text-zinc-500 font-mono overflow-x-auto">
                    <code>{codePreview}{script.code.split('\n').length > 3 ? '\n...' : ''}</code>
                </pre>
            </div>
        </div>
    </div>
  );
};