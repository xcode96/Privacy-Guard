import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { AddScriptModal } from './components/AddScriptModal';
import { CATEGORIES, INITIAL_SCRIPTS } from './constants/data';
import type { Script } from './types';
import { SearchIcon } from './components/icons/SearchIcon';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [scripts, setScripts] = useState<Script[]>(INITIAL_SCRIPTS);
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].id);
  const [selectedScripts, setSelectedScripts] = useState<Set<string>>(new Set());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('code') === 'dq.adm') {
      setIsAdmin(true);
    }
  }, []);

  const isSearching = searchQuery.trim().length > 0;

  const displayedScripts = useMemo(() => {
    const lowercasedQuery = searchQuery.toLowerCase().trim();
    if (!lowercasedQuery) {
      return scripts.filter(script => script.categoryId === selectedCategory);
    }
    return scripts.filter(
      script =>
        script.name.toLowerCase().includes(lowercasedQuery) ||
        script.description.toLowerCase().includes(lowercasedQuery)
    );
  }, [searchQuery, scripts, selectedCategory]);
  
  const handleCategorySelect = useCallback((id: string) => {
    setSelectedCategory(id);
    setSearchQuery(''); // Clear search when a category is clicked
  }, []);

  const handleScriptToggle = useCallback((scriptId: string) => {
    setSelectedScripts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(scriptId)) {
        newSet.delete(scriptId);
      } else {
        newSet.add(scriptId);
      }
      return newSet;
    });
  }, []);

  const handleSelectAllDisplayed = useCallback(() => {
    const displayedScriptIds = displayedScripts.map(s => s.id);
    setSelectedScripts(prev => {
      const newSet = new Set(prev);
      displayedScriptIds.forEach(id => newSet.add(id));
      return newSet;
    });
  }, [displayedScripts]);

  const handleDeselectAllDisplayed = useCallback(() => {
    const displayedScriptIds = new Set(displayedScripts.map(s => s.id));
    setSelectedScripts(prev => {
      const newSet = new Set(prev);
      newSet.forEach(id => {
        if (displayedScriptIds.has(id)) {
          newSet.delete(id);
        }
      });
      return newSet;
    });
  }, [displayedScripts]);

  const handleClearAll = useCallback(() => {
    setSelectedScripts(new Set());
  }, []);

  const handleGenerateScript = useCallback(() => {
    const allSelectedScripts = Array.from(selectedScripts)
      .map(id => scripts.find(s => s.id === id))
      .filter((s): s is Script => s !== undefined);

    const windowsScripts = allSelectedScripts.filter(s => s.categoryId === 'win');
    const shellScripts = allSelectedScripts.filter(s => ['mac', 'linux', 'browser'].includes(s.categoryId));
    
    const downloadFile = (filename: string, content: string, useCRLF = false) => {
      const finalContent = useCRLF ? content.replace(/\n/g, '\r\n') : content;
      const blob = new Blob([finalContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    if (windowsScripts.length > 0) {
        const header = `
@echo off
REM Privacy Guard Script (Windows)
REM Generated on: ${new Date().toISOString()}
REM
REM This script contains the following privacy enhancements:
${windowsScripts.map(s => `REM - ${s.name}`).join('\n')}
REM ----------------------------------------------------

`;
        const scriptContent = windowsScripts
            .map(script => `\nREM --- ${script.name} ---\n${script.code}`)
            .join('\n');
        
        downloadFile('privacy-guard-script.bat', header + scriptContent, true);
    }

    if (shellScripts.length > 0) {
        const header = `
#!/bin/bash
# Privacy Guard Script (Shell)
# Generated on: ${new Date().toISOString()}
#
# This script contains the following privacy enhancements:
${shellScripts.map(s => `# - ${s.name}`).join('\n')}
# ----------------------------------------------------

`;
        const scriptContent = shellScripts
            .map(script => `\n# --- ${script.name} ---\n${script.code}`)
            .join('\n');
        
        downloadFile('privacy-guard-script.sh', header + scriptContent);
    }
  }, [selectedScripts, scripts]);

  const handleAddNewScript = (newScript: Omit<Script, 'id'>) => {
    setScripts(prev => [
      ...prev,
      { ...newScript, id: `custom-${Date.now()}` }
    ]);
    setHasUnsavedChanges(true);
    setIsAddModalOpen(false);
  };

  const handleExportConfig = useCallback(() => {
    const fileContent = `
import React from 'react';
import type { Category, Script } from '../types';
import { WindowsIcon } from '../components/icons/WindowsIcon';
import { AppleIcon } from '../components/icons/AppleIcon';
import { LinuxIcon } from '../components/icons/LinuxIcon';
import { BrowserIcon } from '../components/icons/BrowserIcon';

export const CATEGORIES: Category[] = [
  { id: 'win', name: 'Windows', icon: React.createElement(WindowsIcon) },
  { id: 'mac', name: 'macOS', icon: React.createElement(AppleIcon) },
  { id: 'linux', name: 'Linux', icon: React.createElement(LinuxIcon) },
  { id: 'browser', name: 'Browsers', icon: React.createElement(BrowserIcon) },
];

export const INITIAL_SCRIPTS: Script[] = ${JSON.stringify(scripts, null, 2).replace(/"(React\.createElement\(.+?\))"/g, '$1')};
`;
    const blob = new Blob([fileContent.trim()], { type: 'application/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setHasUnsavedChanges(false);
  }, [scripts]);
  
  const currentCategory = CATEGORIES.find(c => c.id === selectedCategory)!;

  return (
    <div className="min-h-screen w-full bg-[#0b0914] text-zinc-300 font-sans flex flex-col">
      <Header 
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        isAdmin={isAdmin}
        hasUnsavedChanges={hasUnsavedChanges}
        onExport={handleExportConfig}
      />
      <main className="flex-1 flex overflow-hidden">
        <Sidebar
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          isSearching={isSearching}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex flex-col overflow-hidden bg-black/20 m-4 mt-0 rounded-xl border border-white/10 shadow-lg">
              <MainContent
                key={isSearching ? 'search' : selectedCategory}
                title={isSearching ? `Search Results` : currentCategory.name}
                description={isSearching ? `${displayedScripts.length} script(s) found for "${searchQuery}"` : "Select scripts to add to your collection."}
                icon={isSearching ? <SearchIcon className="w-7 h-7 text-cyan-400" /> : currentCategory.icon}
                scripts={displayedScripts}
                selectedScripts={selectedScripts}
                onScriptToggle={handleScriptToggle}
                onSelectAll={handleSelectAllDisplayed}
                onDeselectAll={handleDeselectAllDisplayed}
                isAdmin={isAdmin}
                onAddScriptClick={() => setIsAddModalOpen(true)}
                isSearching={isSearching}
              />
              <Footer
                selectedCount={selectedScripts.size}
                onClearAll={handleClearAll}
                onGenerateScript={handleGenerateScript}
              />
          </div>
        </div>
      </main>
      <AddScriptModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddScript={handleAddNewScript}
        categories={CATEGORIES}
      />
    </div>
  );
}