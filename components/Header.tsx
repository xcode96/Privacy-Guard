import React, { useState } from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface HeaderProps {
    onAISearch: (query: string) => void;
    isAISearching: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onAISearch, isAISearching }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAISearch(query);
    };

    return (
        <header className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
                <h1 className="text-3xl font-bold text-white">Privacy Guard</h1>
                <p className="text-md text-slate-400 mt-1">Enhance your digital privacy with curated scripts.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full md:w-2/5">
                <div className="relative flex-grow">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="e.g., 'secure my browser'"
                        className="w-full bg-slate-800 text-slate-300 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
                        disabled={isAISearching}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <SparklesIcon />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-wait flex items-center gap-2"
                    disabled={isAISearching}
                >
                    {isAISearching ? 'Thinking...' : 'AI Select'}
                </button>
            </form>
        </header>
    );
};