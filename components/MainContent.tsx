

import React, { useMemo } from 'react';
import type { Script, SubCategory } from '../types';
import { ScriptItem } from './ScriptItem';
import { SubCategoryGroup } from './SubCategoryGroup';

interface MainContentProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  scripts: Script[];
  selectedScripts: Set<string>;
  onScriptToggle: (id: string) => void;
  onViewCode: (id: string) => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  isAdmin: boolean;
  onAddScriptClick: () => void;
  isSearching: boolean;
  subCategories: SubCategory[];
}

export const MainContent: React.FC<MainContentProps> = ({ title, description, icon, scripts, selectedScripts, onScriptToggle, onViewCode, onSelectAll, onDeselectAll, isAdmin, onAddScriptClick, isSearching, subCategories }) => {

  const currentCategoryId = scripts[0]?.categoryId;
  const categorySubCategories = useMemo(() => 
    subCategories.filter(sc => sc.categoryId === currentCategoryId),
    [subCategories, currentCategoryId]
  );
  
  const hasSubCategories = categorySubCategories.length > 0 && !isSearching;
  
  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    {React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-7 h-7 text-orange-500" })}
                    <span>{title}</span>
                </h2>
                <p className="text-zinc-400 mt-1">{description}</p>
            </div>
            <div className="flex gap-2 self-end sm:self-center">
                {isAdmin && !isSearching && (
                  <button
                    onClick={onAddScriptClick}
                    className="px-4 py-1.5 text-sm font-semibold text-white bg-orange-600 rounded-md hover:bg-orange-500 transition-colors"
                  >
                    Add Script
                  </button>
                )}
                <button 
                  onClick={onSelectAll}
                  className="px-4 py-1.5 text-sm font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-md hover:bg-zinc-700"
                >
                  Select All
                </button>
                <button 
                  onClick={onDeselectAll}
                  className="px-4 py-1.5 text-sm font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-md hover:bg-zinc-700"
                >
                  Deselect All
                </button>
            </div>
        </div>

      {hasSubCategories ? (
        <div className="space-y-4">
            {categorySubCategories.map(subCategory => {
                const subCategoryScripts = scripts.filter(s => s.subCategoryId === subCategory.id);
                if (subCategoryScripts.length === 0) return null;
                return (
                    <SubCategoryGroup
                        key={subCategory.id}
                        title={subCategory.name}
                        scripts={subCategoryScripts}
                        selectedScripts={selectedScripts}
                        onScriptToggle={onScriptToggle}
                        onViewCode={onViewCode}
                    />
                );
            })}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {scripts.map(script => (
            <ScriptItem
                key={script.id}
                script={script}
                isSelected={selectedScripts.has(script.id)}
                onToggle={onScriptToggle}
                onViewCode={onViewCode}
            />
            ))}
        </div>
      )}

      {scripts.length === 0 && (
        <div className="text-center py-12">
            <p className="text-zinc-500">{isSearching ? 'No scripts found matching your search.' : 'No scripts in this category yet.'}</p>
        </div>
      )}
    </main>
  );
};