import React from 'react';
import type { Script } from '../types';

interface ScriptItemProps {
  script: Script;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

const CheckboxIcon = ({ isSelected }: { isSelected: boolean }) => (
  <div className={`w-5 h-5 rounded-md flex items-center justify-center border-2 transition-all duration-200 flex-shrink-0 ${isSelected ? 'bg-cyan-400 border-cyan-400' : 'bg-black/20 border-white/20 group-hover:border-white/40'}`}>
    {isSelected && (
      <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    )}
  </div>
);


export const ScriptItem: React.FC<ScriptItemProps> = ({ script, isSelected, onToggle }) => {
  const codePreview = script.code.split('\n').slice(0, 3).join('\n');
  
  return (
    <div
      className={`group bg-white/5 rounded-lg p-4 border border-transparent transition-all duration-200 cursor-pointer relative overflow-hidden backdrop-blur-sm
      ${ isSelected ? 'border-fuchsia-500/50' : 'hover:bg-white/10' }
      `}
      onClick={() => onToggle(script.id)}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && onToggle(script.id)}
    >
        <div className={`absolute inset-0 transition-all duration-300 pointer-events-none ${isSelected ? 'opacity-100' : 'opacity-0'}`}
             style={{
                 background: 'radial-gradient(circle at top left, rgba(0, 255, 255, 0.2), transparent 40%), radial-gradient(circle at bottom right, rgba(255, 0, 255, 0.2), transparent 40%)'
             }}
        />
      <div className="flex items-start gap-4 relative z-10">
        <CheckboxIcon isSelected={isSelected} />
        <div className="flex-1">
          <h3 className="font-semibold text-white font-mono">{script.name}</h3>
          <p className="text-zinc-400 text-sm mt-1">{script.description}</p>
        </div>
      </div>
      <div className="mt-4 pl-9 relative z-10">
        <pre className="bg-black/30 rounded p-2 text-xs text-zinc-500 font-mono overflow-x-auto">
          <code>{codePreview}{script.code.split('\n').length > 3 ? '\n...' : ''}</code>
        </pre>
      </div>
    </div>
  );
};