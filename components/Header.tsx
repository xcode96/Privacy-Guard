import React from 'react';
import { ShieldIcon } from './icons/ShieldIcon';
import { DownloadIcon } from './icons/DownloadIcon';
import { SearchIcon } from './icons/SearchIcon';

interface HeaderProps {
    searchQuery: string;
    onSearchQueryChange: (query: string) => void;
    isAdmin: boolean;
    hasUnsavedChanges: boolean;
    onExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchQueryChange, isAdmin, hasUnsavedChanges, onExport }) => {
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
                <div className="relative flex-grow md:w-80">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchQueryChange(e.target.value)}
                        placeholder="Search all scripts..."
                        className="w-full bg-black/30 text-zinc-200 border border-white/10 rounded-md py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                        <SearchIcon className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </header>
    );
};