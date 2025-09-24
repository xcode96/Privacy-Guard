import React from 'react';
import type { Script } from '../types';

interface ScriptItemProps {
  script: Script;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

const CheckboxIcon = ({ isSelected }: { isSelected: boolean }) => (
  <div className={`w-6 h-6 rounded-md flex items-center justify-center border-2 transition-all duration-200 ${isSelected ? 'bg-violet-500 border-violet-500' : 'bg-slate-700 border-slate-600 group-hover:border-slate-500'}`}>
    {isSelected && (
      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    )}
  </div>
);


export const ScriptItem: React.FC<ScriptItemProps> = ({ script, isSelected, onToggle }) => {
  return (
    <div
      className={`group bg-slate-800 rounded-xl p-4 border transition-all duration-200 cursor-pointer relative overflow-hidden ${
        isSelected ? 'border-violet-500/50' : 'border-slate-700 hover:border-slate-600'
      }`}
      onClick={() => onToggle(script.id)}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && onToggle(script.id)}
    >
        <div 
          className={`absolute top-0 left-0 h-full w-1 transition-all duration-300 ${isSelected ? 'bg-violet-500' : 'bg-transparent'}`}
        />
        <div className="flex items-start justify-between gap-4 pl-2">
          <div className="flex-1">
            <h3 className="font-semibold text-white">{script.name}</h3>
            <p className="text-slate-400 text-sm mt-1">{script.description}</p>
          </div>
          <CheckboxIcon isSelected={isSelected} />
        </div>
    </div>
  );
};