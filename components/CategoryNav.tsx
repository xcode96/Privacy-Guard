import React from 'react';
import type { Category } from '../types';

interface CategoryNavProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  isSearching: boolean;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ categories, selectedCategory, onSelectCategory, isSearching }) => {
  return (
    <div className="border-b border-zinc-800">
        <nav className="container mx-auto flex items-center gap-2 px-4" aria-label="Categories">
            {categories.map(category => {
            const isSelected = !isSearching && selectedCategory === category.id;
            return (
                <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`flex items-center gap-2 px-3 py-3 text-sm font-medium transition-colors relative ${
                    isSelected
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
                >
                {React.cloneElement(category.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: 'w-5 h-5' })}
                <span>{category.name}</span>
                {isSelected && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></div>
                )}
                </button>
            )
            })}
        </nav>
    </div>
  );
};
