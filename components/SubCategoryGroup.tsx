import React, { useState } from 'react';
import type { Script } from '../types';
import { ScriptItem } from './ScriptItem';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface SubCategoryGroupProps {
    title: string;
    scripts: Script[];
    selectedScripts: Set<string>;
    onScriptToggle: (id: string) => void;
    onViewCode: (id: string) => void;
}

export const SubCategoryGroup: React.FC<SubCategoryGroupProps> = ({ title, scripts, selectedScripts, onScriptToggle, onViewCode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-zinc-800/40 rounded-lg border border-zinc-700/80">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-white flex items-baseline gap-2">
                  <span>{title}</span>
                  <span className="text-sm font-normal text-zinc-500">({scripts.length} scripts)</span>
                </h3>
                <ChevronDownIcon className={`w-5 h-5 text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {scripts.map(script => (
                            <ScriptItem
                                key={script.id}
                                script={script}
                                isSelected={selectedScripts.has(script.id)}
                                onToggle={onScriptToggle}
                                onViewCode={onViewCode}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}