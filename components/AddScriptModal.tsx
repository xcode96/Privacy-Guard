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
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-slate-800 rounded-2xl border border-slate-700 w-full max-w-2xl shadow-2xl relative p-8" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-white mb-6">Add New Script</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Script Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-900 text-slate-300 border border-slate-700 rounded-lg p-2.5 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full bg-slate-900 text-slate-300 border border-slate-700 rounded-lg p-2.5 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-slate-300 mb-1">Code</label>
            <textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={6}
              className="w-full bg-slate-900 text-slate-300 border border-slate-700 rounded-lg p-2.5 font-mono text-sm focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
              placeholder="#!/bin/bash&#10;echo 'Hello, World!'"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-slate-300 mb-1">Category</label>
            <select
              id="category"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full bg-slate-900 text-slate-300 border border-slate-700 rounded-lg p-2.5 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold text-slate-300 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
            >
              Save Script
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};