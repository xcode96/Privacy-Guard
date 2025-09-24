
import React, { useState, useMemo, useEffect } from 'react';
import type { Script, Category, SubCategory } from '../types';

interface AddScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddScript: (script: Omit<Script, 'id'>) => void;
  categories: Category[];
  subCategories: SubCategory[];
}

export const AddScriptModal: React.FC<AddScriptModalProps> = ({ isOpen, onClose, onAddScript, categories, subCategories }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [categoryId, setCategoryId] = useState(categories[0]?.id || '');
  const [subCategoryId, setSubCategoryId] = useState('');

  const relevantSubCategories = useMemo(() => 
    subCategories.filter(sc => sc.categoryId === categoryId),
    [categoryId, subCategories]
  );
  
  useEffect(() => {
    // Auto-select the first sub-category when the category changes
    if (relevantSubCategories.length > 0) {
      setSubCategoryId(relevantSubCategories[0].id);
    } else {
      setSubCategoryId('');
    }
  }, [categoryId, relevantSubCategories]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !code || !categoryId || (relevantSubCategories.length > 0 && !subCategoryId)) {
      alert('Please fill out all fields.');
      return;
    }
    onAddScript({ name, description, code, categoryId, subCategoryId: subCategoryId || undefined });
    // Reset form
    setName('');
    setDescription('');
    setCode('');
    setCategoryId(categories[0]?.id || '');
  };

  const codePlaceholder = useMemo(() => {
    if (categoryId === 'win') {
      return `REM Your batch script commands here...\r\necho "Hello from Batch!"`;
    }
    return `#!/bin/bash\n# Your shell script commands here...\necho "Hello from Shell!"`;
  }, [categoryId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-[#100e19] rounded-xl border border-white/10 w-full max-w-2xl shadow-2xl relative p-8" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-white mb-6">Add New Script</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">Script Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black/30 text-zinc-200 border border-white/10 rounded-md p-2.5 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-1">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full bg-black/30 text-zinc-200 border border-white/10 rounded-md p-2.5 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-zinc-300 mb-1">Code</label>
            <textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={6}
              className="w-full bg-black/30 text-zinc-200 border border-white/10 rounded-md p-2.5 font-mono text-sm focus:ring-2 focus:ring-fuchsia-500 focus:outline-none transition-all"
              placeholder={codePlaceholder}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-zinc-300 mb-1">Category</label>
              <select
                id="category"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full bg-black/30 text-zinc-200 border border-white/10 rounded-md p-2.5 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none transition-all"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id} className="bg-[#100e19]">{cat.name}</option>
                ))}
              </select>
            </div>
             {relevantSubCategories.length > 0 && (
              <div>
                <label htmlFor="subCategory" className="block text-sm font-medium text-zinc-300 mb-1">Sub-Category</label>
                <select
                  id="subCategory"
                  value={subCategoryId}
                  onChange={(e) => setSubCategoryId(e.target.value)}
                  className="w-full bg-black/30 text-zinc-200 border border-white/10 rounded-md p-2.5 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none transition-all"
                  required
                >
                  {relevantSubCategories.map(subCat => (
                    <option key={subCat.id} value={subCat.id} className="bg-[#100e19]">{subCat.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold text-zinc-300 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 font-semibold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-md hover:opacity-90 transition-opacity"
            >
              Save Script
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
