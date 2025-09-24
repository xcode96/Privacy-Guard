import React from 'react';
import type { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <aside className="w-full md:w-56 flex-shrink-0">
      <h2 className="text-sm font-semibold mb-3 text-slate-400 uppercase tracking-wider">Categories</h2>
      <nav className="flex flex-row md:flex-col gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`w-full text-left flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-base font-medium relative ${
              selectedCategory === category.id
                ? 'bg-violet-500/10 text-violet-300'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg transition-all ${selectedCategory === category.id ? 'bg-violet-500' : 'bg-transparent'}`}></div>
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};