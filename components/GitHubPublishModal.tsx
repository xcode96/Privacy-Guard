

import React, { useState, useEffect } from 'react';

interface GitHubPublishModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: { repoOwner: string; repoName: string; filePath: string; pat: string }) => void;
}

export const GitHubPublishModal: React.FC<GitHubPublishModalProps> = ({ isOpen, onClose, onSave }) => {
  const [repoOwner, setRepoOwner] = useState('');
  const [repoName, setRepoName] = useState('');
  const [filePath, setFilePath] = useState('');
  const [pat, setPat] = useState('');

  useEffect(() => {
    if (isOpen) {
      const savedSettings = localStorage.getItem('githubPublishSettings');
      if (savedSettings) {
        try {
            const { repoOwner, repoName, filePath, pat } = JSON.parse(savedSettings);
            setRepoOwner(repoOwner || '');
            setRepoName(repoName || '');
            setFilePath(filePath || '');
            setPat(pat || '');
        } catch (e) {
            console.error("Failed to parse githubPublishSettings from localStorage", e);
        }
      }
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ repoOwner, repoName, filePath, pat });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-zinc-900 rounded-xl border border-zinc-700 w-full max-w-lg shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
            <h2 className="text-xl font-bold text-white">GitHub Publish Settings</h2>
            <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="repoOwner" className="block text-sm font-medium text-zinc-300 mb-2">Repository Owner</label>
            <input
              id="repoOwner"
              type="text"
              value={repoOwner}
              onChange={(e) => setRepoOwner(e.target.value)}
              className="w-full bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="repoName" className="block text-sm font-medium text-zinc-300 mb-2">Repository Name</label>
            <input
              id="repoName"
              type="text"
              value={repoName}
              onChange={(e) => setRepoName(e.target.value)}
              className="w-full bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="filePath" className="block text-sm font-medium text-zinc-300 mb-2">File Path in Repo</label>
            <input
              id="filePath"
              type="text"
              value={filePath}
              onChange={(e) => setFilePath(e.target.value)}
              placeholder="e.g., public/scripts.json" // Updated placeholder
              className="w-full bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              required
            />
          </div>
           <div>
            <label htmlFor="pat" className="block text-sm font-medium text-zinc-300 mb-2">Personal Access Token (PAT)</label>
            <input
              id="pat"
              type="password"
              value={pat}
              onChange={(e) => setPat(e.target.value)}
              className="w-full bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all font-mono"
              required
            />
            <p className="text-xs text-zinc-500 mt-2">Requires a Classic token with 'repo' scope. Stored in browser local storage.</p>
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-8 py-2.5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors w-full"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
