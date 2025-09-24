import React from 'react';
import type { Category, Script } from '../types';
import { ScriptItem } from './ScriptItem';

interface MainContentProps {
  category: Category;
  scripts: Script[];
  selectedScripts: Set<string>;
  onScriptToggle: (id: string) => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  isAdmin: boolean;
  onAddScriptClick: () => void;
}

export const MainContent: React.FC<MainContentProps> = ({ category, scripts, selectedScripts, onScriptToggle, onSelectAll, onDeselectAll, isAdmin, onAddScriptClick }) => {
  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    {React.cloneElement(category.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-7 h-7 text-cyan-400" })}
                    <span>{category.name}</span>
                </h2>
                <p className="text-zinc-400 mt-1">Select scripts to add to your collection.</p>
            </div>
            <div className="flex gap-2 self-end sm:self-center">
                {isAdmin && (
                  <button
                    onClick={onAddScriptClick}
                    className="px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-fuchsia-600 rounded-md hover:opacity-90 transition-opacity"
                  >
                    Add Script
                  </button>
                )}
                <button 
                  onClick={onSelectAll}
                  className="px-4 py-1.5 text-sm font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-md hover:bg-white/10"
                >
                  Select All
                </button>
                <button 
                  onClick={onDeselectAll}
                  className="px-4 py-1.5 text-sm font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-md hover:bg-white/10"
                >
                  Deselect All
                </button>
            </div>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {scripts.map(script => (
          <ScriptItem
            key={script.id}
            script={script}
            isSelected={selectedScripts.has(script.id)}
            onToggle={onScriptToggle}
          />
        ))}
        {scripts.length === 0 && (
          <div className="lg:col-span-2 xl:col-span-3 text-center py-12">
            <p className="text-zinc-500">No scripts in this category yet.</p>
          </div>
        )}
      </div>
    </main>
  );
};