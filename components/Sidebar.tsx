import React from 'react';
import type { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  isSearching: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onSelectCategory, isSearching }) => {
  return (
    <aside className="w-64 p-4 border-r border-white/10 hidden md:block">
      <h2 className="text-sm font-semibold mb-4 text-zinc-500 uppercase tracking-wider px-2">Categories</h2>
      <nav className="flex flex-col gap-2">
        {categories.map(category => {
          const isSelected = !isSearching && selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`w-full text-left flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-base font-medium relative overflow-hidden group ${
                isSelected
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {isSelected && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              )}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-fuchsia-500 transition-transform duration-300 scale-y-0 group-hover:scale-y-100"
                  style={{ transform: isSelected ? 'scaleY(1)' : '' }}
              ></div>
              <div className="relative z-10 flex items-center gap-3">
                {React.cloneElement(category.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: 'w-5 h-5' })}
                <span>{category.name}</span>
              </div>
            </button>
          )
        })}
      </nav>
    </aside>
  );
};