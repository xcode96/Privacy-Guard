
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { AddScriptModal } from './components/AddScriptModal';
import { ViewCodeModal } from './components/ViewCodeModal';
import { GitHubPublishModal } from './components/GitHubPublishModal';
import { CATEGORIES, INITIAL_SCRIPTS, SUB_CATEGORIES } from './constants/data';
import type { Script } from './types';
import { SearchIcon } from './components/icons/SearchIcon';
import { GitHubIcon } from './components/icons/GitHubIcon';

interface GitHubSettings {
  repoOwner: string;
  repoName: string;
  filePath: string;
  pat: string;
}

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [scripts, setScripts] = useState<Script[]>(INITIAL_SCRIPTS);
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].id);
  const [selectedScripts, setSelectedScripts] = useState<Set<string>>(new Set());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [scriptToView, setScriptToView] = useState<Script | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [publisherStatus, setPublisherStatus] = useState<'idle' | 'publishing' | 'success' | 'error'>('idle');

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
  
  const handleViewCode = useCallback((scriptId: string) => {
    const script = scripts.find(s => s.id === scriptId);
    if (script) {
        setScriptToView(script);
        setIsViewModalOpen(true);
    }
  }, [scripts]);

  const handleGenerateScript = useCallback(() => {
    const allSelectedScripts = Array.from(selectedScripts)
      .map(id => scripts.find(s => s.id === id))
      .filter((s): s is Script => s !== undefined);

    const windowsScripts = allSelectedScripts.filter(s => s.categoryId === 'win');
    const shellScripts = allSelectedScripts.filter(s => ['mac', 'linux', 'browser'].includes(s.categoryId));
    
    const downloadFile = (filename: string, content: string, useCRLF = false) => {
      const finalContent = useCRLF ? content.replace(/\\n/g, '\\r\\n') : content;
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
${windowsScripts.map(s => `REM - ${s.name}`).join('\\r\\n')}
REM ----------------------------------------------------

`;
        const scriptContent = windowsScripts
            .map(script => `\nREM --- ${script.name} ---\n${script.code}`)
            .join('\\n');
        
        downloadFile('privacy-guard-script.bat', header + scriptContent, true);
    }

    if (shellScripts.length > 0) {
        const header = `
#!/bin/bash
# Privacy Guard Script (Shell)
# Generated on: ${new Date().toISOString()}
#
# This script contains the following privacy enhancements:
${shellScripts.map(s => `# - ${s.name}`).join('\\n')}
# ----------------------------------------------------

`;
        const scriptContent = shellScripts
            .map(script => `\n# --- ${script.name} ---\n${script.code}`)
            .join('\\n');
        
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

  const handlePublishToGitHub = useCallback(async () => {
    const settingsString = localStorage.getItem('githubPublishSettings');
    if (!settingsString) {
      setIsPublishModalOpen(true);
      return;
    }
    const settings: GitHubSettings = JSON.parse(settingsString);
    if (!settings.pat || !settings.repoOwner || !settings.repoName || !settings.filePath) {
      setIsPublishModalOpen(true);
      return;
    }

    setPublisherStatus('publishing');

    const fileContent = `
import React from 'react';
import type { Category, Script, SubCategory } from '../types';
import { WindowsIcon } from '../components/icons/WindowsIcon';
import { AppleIcon } from '../components/icons/AppleIcon';
import { LinuxIcon } from '../components/icons/LinuxIcon';
import { BrowserIcon } from '../components/icons/BrowserIcon';

export const CATEGORIES: Category[] = ${JSON.stringify(CATEGORIES, null, 2).replace(/"(React\.createElement\(.+?\))"/g, '$1')};

export const SUB_CATEGORIES: SubCategory[] = ${JSON.stringify(SUB_CATEGORIES, null, 2)};

export const INITIAL_SCRIPTS: Script[] = ${JSON.stringify(scripts, null, 2)};
`.trim();
    
    // btoa can fail on Unicode characters, so we need to encode them first.
    const encodedContent = btoa(unescape(encodeURIComponent(fileContent)));

    const url = `https://api.github.com/repos/${settings.repoOwner}/${settings.repoName}/contents/${settings.filePath}`;
    
    try {
      // 1. Get the file to get its SHA (for updates)
      let sha: string | undefined;
      const getFileResponse = await fetch(url, {
        headers: {
          Authorization: `token ${settings.pat}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (getFileResponse.ok) {
        const fileData = await getFileResponse.json();
        sha = fileData.sha;
      } else if (getFileResponse.status !== 404) {
        const errorData = await getFileResponse.json();
        throw new Error(`Failed to fetch file: ${errorData.message || getFileResponse.statusText}`);
      }
      
      // 2. Create or update the file
      const updateResponse = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: `token ${settings.pat}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Update scripts data - ${new Date().toISOString()}`,
          content: encodedContent,
          sha: sha, // Include SHA if updating, otherwise it's undefined for new file
        }),
      });

      if (!updateResponse.ok) {
        const errorData = await updateResponse.json();
        throw new Error(`GitHub API error: ${errorData.message || updateResponse.statusText}`);
      }

      setPublisherStatus('success');
      setHasUnsavedChanges(false);
      setTimeout(() => setPublisherStatus('idle'), 3000);

    } catch (error) {
      console.error('Failed to publish to GitHub:', error);
      setPublisherStatus('error');
      alert(`Failed to publish to GitHub. Check console for details. Error: ${error instanceof Error ? error.message : String(error)}`);
      setTimeout(() => setPublisherStatus('idle'), 5000);
    }
  }, [scripts]);

  const handleSavePublishSettings = (settings: GitHubSettings) => {
    localStorage.setItem('githubPublishSettings', JSON.stringify(settings));
    setIsPublishModalOpen(false);
    if (hasUnsavedChanges) {
        // Use a short timeout to allow the modal to close visually first
        setTimeout(() => {
            handlePublishToGitHub();
        }, 100);
    }
  };
  
  const currentCategory = CATEGORIES.find(c => c.id === selectedCategory)!;

  return (
    <div className="min-h-screen w-full bg-zinc-900 text-zinc-300 font-sans flex flex-col">
      <Header 
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        isAdmin={isAdmin}
        hasUnsavedChanges={hasUnsavedChanges}
        onPublish={handlePublishToGitHub}
        publisherStatus={publisherStatus}
      />
       <CategoryNav
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          isSearching={isSearching}
        />
      <main className="flex-1 flex flex-col overflow-hidden w-full">
          <div className="flex-1 flex flex-col overflow-hidden">
              <MainContent
                key={isSearching ? 'search' : selectedCategory}
                title={isSearching ? `Search Results` : currentCategory.name}
                description={isSearching ? `${displayedScripts.length} script(s) found for "${searchQuery}"` : "Select scripts to add to your collection."}
                icon={isSearching ? <SearchIcon className="w-7 h-7 text-orange-500" /> : currentCategory.icon}
                scripts={displayedScripts}
                selectedScripts={selectedScripts}
                onScriptToggle={handleScriptToggle}
                onViewCode={handleViewCode}
                onSelectAll={handleSelectAllDisplayed}
                onDeselectAll={handleDeselectAllDisplayed}
                isAdmin={isAdmin}
                onAddScriptClick={() => setIsAddModalOpen(true)}
                isSearching={isSearching}
                subCategories={SUB_CATEGORIES}
              />
              <Footer
                selectedCount={selectedScripts.size}
                onClearAll={handleClearAll}
                onGenerateScript={handleGenerateScript}
              />
          </div>
      </main>
      <AddScriptModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddScript={handleAddNewScript}
        categories={CATEGORIES}
        subCategories={SUB_CATEGORIES}
      />
      <ViewCodeModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        script={scriptToView}
      />
      <GitHubPublishModal
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
        onSave={handleSavePublishSettings}
      />
      <a
        href="https://github.com/xcode96"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-3 bg-zinc-900/50 border border-zinc-700 rounded-full text-zinc-400 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300 shadow-lg backdrop-blur-sm"
        aria-label="View source on GitHub"
        title="View source on GitHub"
      >
        <GitHubIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
