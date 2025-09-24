import React, { useState } from 'react';
import { SparklesIcon } from './icons/SparklesIcon';
import { ShieldIcon } from './icons/ShieldIcon';
import { DownloadIcon } from './icons/DownloadIcon';

interface HeaderProps {
    onAISearch: (query: string) => void;
    isAISearching: boolean;
    isAdmin: boolean;
    hasUnsavedChanges: boolean;
    onExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAISearch, isAISearching, isAdmin, hasUnsavedChanges, onExport }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAISearch(query);
    };

    return (
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border-b border-white/10 bg-black/20 backdrop-blur-lg sticky top-0 z-40">
            <div className="flex items-center gap-3">
                <ShieldIcon className="w-8 h-8 text-cyan-300" />
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-white">Privacy Guard</h1>
                        {isAdmin && <span className="text-xs font-bold text-cyan-300 bg-cyan-900/50 px-2 py-1 rounded-full">ADMIN</span>}
                    </div>
                    <p className="text-md text-zinc-400">Generate privacy-enhancing scripts.</p>
                </div>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
                {isAdmin && hasUnsavedChanges && (
                    <button
                        onClick={onExport}
                        className="bg-purple-600 text-white font-semibold px-4 py-2.5 rounded-md hover:bg-purple-500 transition-colors flex items-center gap-2 animate-pulse"
                        title="Download updated data.ts file"
                    >
                        <DownloadIcon className="w-5 h-5" />
                        Export Changes
                    </button>
                )}
                <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-grow md:w-80">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="e.g., 'secure my browser'"
                            className="w-full bg-black/30 text-zinc-200 border border-white/10 rounded-md py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none transition-all"
                            disabled={isAISearching}
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-fuchsia-400">
                          <SparklesIcon />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-wait flex items-center gap-2"
                        disabled={isAISearching}
                    >
                        {isAISearching ? 'Thinking...' : 'AI Select'}
                    </button>
                </form>
            </div>
        </header>
    );
};