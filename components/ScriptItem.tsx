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
      className={`group bg-zinc-900 rounded-lg p-4 border border-zinc-800 transition-all duration-200 cursor-pointer relative overflow-hidden
      ${ isSelected ? 'border-orange-500/50' : 'hover:border-zinc-700' }
      `}
      onClick={() => onToggle(script.id)}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && onToggle(script.id)}
    >
      <div className={`absolute left-0 top-0 h-full w-1 bg-orange-500 transition-transform duration-300 ${isSelected ? 'scale-y-100' : 'scale-y-0'}`} />
        
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-zinc-100 font-mono">{script.name}</h3>
          <p className="text-zinc-400 text-sm mt-1">{script.description}</p>
        </div>
        <button
          onClick={handleViewClick}
          className="p-2 rounded-md bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label={`View code for ${script.name}`}
          title={`View code for ${script.name}`}
        >
          <EyeIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-4">
        <pre className="bg-zinc-950 rounded p-2 text-xs text-zinc-500 font-mono overflow-x-auto">
          <code>{codePreview}{script.code.split('\n').length > 3 ? '\n...' : ''}</code>
        </pre>
      </div>
    </div>
  );
};