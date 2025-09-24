import React, { useState } from 'react';
import type { Script, Category } from '../types';

interface AddScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddScript: (script: Omit<Script, 'id'>) => void;
  categories: Category[];
}

export const AddScriptModal: React.FC<AddScriptModalProps> = ({ isOpen, onClose, onAddScript, categories }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [categoryId, setCategoryId] = useState(categories[0]?.id || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !code || !categoryId) {
      alert('Please fill out all fields.');
      return;
    }
    onAddScript({ name, description, code, categoryId });
    // Reset form
    setName('');
    setDescription('');
    setCode('');
    setCategoryId(categories[0]?.id || '');
  };

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
              placeholder="#!/bin/bash&#10;echo 'Hello, World!'"
              required
            />
          </div>
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