import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { AddScriptModal } from './components/AddScriptModal';
import { CATEGORIES, INITIAL_SCRIPTS } from './constants/data';
import type { Script } from './types';
import { getScriptsForQuery } from './services/geminiService';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [scripts, setScripts] = useState<Script[]>(INITIAL_SCRIPTS);
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].id);
  const [selectedScripts, setSelectedScripts] = useState<Set<string>>(new Set());
  const [isAISearching, setIsAISearching] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('code') === 'dq.adm') {
      setIsAdmin(true);
    }
  }, []);

  const scriptsForCategory = useMemo(() => {
    return scripts.filter(script => script.categoryId === selectedCategory);
  }, [selectedCategory, scripts]);

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

  const handleSelectAllInCategory = useCallback(() => {
    const categoryScriptIds = scriptsForCategory.map(s => s.id);
    setSelectedScripts(prev => {
      const newSet = new Set(prev);
      categoryScriptIds.forEach(id => newSet.add(id));
      return newSet;
    });
  }, [scriptsForCategory]);

  const handleDeselectAllInCategory = useCallback(() => {
    const categoryScriptIds = new Set(scriptsForCategory.map(s => s.id));
    setSelectedScripts(prev => {
      const newSet = new Set(prev);
      newSet.forEach(id => {
        if (categoryScriptIds.has(id)) {
          newSet.delete(id);
        }
      });
      return newSet;
    });
  }, [scriptsForCategory]);

  const handleClearAll = useCallback(() => {
    setSelectedScripts(new Set());
  }, []);

  const handleGenerateScript = useCallback(() => {
    const header = `
# Privacy Guard Script
# Generated on: ${new Date().toISOString()}
#
# This script contains the following privacy enhancements:
${Array.from(selectedScripts)
  .map(id => scripts.find(s => s.id === id))
  .filter(Boolean)
  .map(s => `# - ${s!.name}`)
  .join('\n')}
# ----------------------------------------------------

`;
    const scriptContent = Array.from(selectedScripts)
      .map(id => {
        const script = scripts.find(s => s.id === id);
        return script ? `\n# --- ${script.name} ---\n${script.code}` : '';
      })
      .join('\n');
    
    const fullScript = header + scriptContent;

    const blob = new Blob([fullScript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'privacy-guard-script.sh';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [selectedScripts, scripts]);

  const handleAISearch = useCallback(async (query: string) => {
    if (!query) return;
    setIsAISearching(true);
    setAiError(null);
    try {
      const scriptIds = await getScriptsForQuery(query, scripts);
      setSelectedScripts(prev => {
        const newSet = new Set(prev);
        scriptIds.forEach(id => newSet.add(id));
        return newSet;
      });
    } catch (error) {
      console.error("AI Search Failed:", error);
      setAiError("AI search failed. Please try again.");
    } finally {
      setIsAISearching(false);
    }
  }, [scripts]);

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

  return (
    <div className="min-h-screen w-full bg-[#0b0914] text-zinc-300 font-sans flex flex-col">
      <Header 
        onAISearch={handleAISearch} 
        isAISearching={isAISearching} 
        isAdmin={isAdmin}
        hasUnsavedChanges={hasUnsavedChanges}
        onExport={handleExportConfig}
      />
      <main className="flex-1 flex overflow-hidden">
        <Sidebar
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          {aiError && <div className="bg-red-900/50 border border-red-700 text-red-300 text-center p-3 rounded-lg m-4">{aiError}</div>}
          <div className="flex-1 flex flex-col overflow-hidden bg-black/20 m-4 mt-0 rounded-xl border border-white/10 shadow-lg">
              <MainContent
                key={selectedCategory}
                category={CATEGORIES.find(c => c.id === selectedCategory)!}
                scripts={scriptsForCategory}
                selectedScripts={selectedScripts}
                onScriptToggle={handleScriptToggle}
                onSelectAll={handleSelectAllInCategory}
                onDeselectAll={handleDeselectAllInCategory}
                isAdmin={isAdmin}
                onAddScriptClick={() => setIsAddModalOpen(true)}
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