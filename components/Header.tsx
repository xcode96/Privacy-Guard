
import React from 'react';
import { ShieldIcon } from './icons/ShieldIcon';
import { SearchIcon } from './icons/SearchIcon';
import { GitHubIcon } from './icons/GitHubIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface HeaderProps {
    searchQuery: string;
    onSearchQueryChange: (query: string) => void;
    isAdmin: boolean;
    hasUnsavedChanges: boolean;
    onPublish: () => void;
    publisherStatus: 'idle' | 'publishing' | 'success' | 'error';
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchQueryChange, isAdmin, hasUnsavedChanges, onPublish, publisherStatus }) => {
    
    const getPublishButtonContent = () => {
        switch (publisherStatus) {
            case 'publishing':
                return (
                    <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Publishing...
                    </>
                );
            case 'success':
                 return (
                    <>
                        <SparklesIcon className="w-5 h-5" />
                        Published!
                    </>
                );
            case 'error':
                return 'Publish Failed';
            case 'idle':
            default:
                return (
                    <>
                        <GitHubIcon className="w-5 h-5" />
                        Publish Changes
                    </>
                );
        }
    };
    
    const getPublishButtonClass = () => {
        let baseClass = "text-white font-semibold px-4 py-2.5 rounded-md transition-all flex items-center justify-center gap-2 w-48";
        if (!hasUnsavedChanges) {
             return `${baseClass} bg-zinc-700 cursor-not-allowed opacity-50`;
        }
        switch (publisherStatus) {
            case 'publishing':
                return `${baseClass} bg-orange-600 cursor-wait`;
            case 'success':
                return `${baseClass} bg-green-600`;
            case 'error':
                 return `${baseClass} bg-red-600`;
            case 'idle':
            default:
                return `${baseClass} bg-orange-600 hover:bg-orange-500`;
        }
    };

    return (
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-lg sticky top-0 z-40">
            <div className="flex items-center gap-3">
                <ShieldIcon className="w-8 h-8 text-orange-500" />
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-zinc-100">Privacy Guard</h1>
                        {isAdmin && <span className="text-xs font-bold text-orange-300 bg-orange-900/50 px-2 py-1 rounded-full">ADMIN</span>}
                    </div>
                    <p className="text-md text-zinc-400">Generate privacy-enhancing scripts.</p>
                </div>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
                {isAdmin && (
                    <button
                        onClick={onPublish}
                        className={getPublishButtonClass()}
                        title="Publish updated data to GitHub"
                        disabled={!hasUnsavedChanges || publisherStatus === 'publishing'}
                    >
                        {getPublishButtonContent()}
                    </button>
                )}
                <div className="relative flex-grow md:w-80">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchQueryChange(e.target.value)}
                        placeholder="Search all scripts..."
                        className="w-full bg-zinc-800/50 text-zinc-200 border border-zinc-700 rounded-md py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                        <SearchIcon className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </header>
    );
};
