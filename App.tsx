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

  useEffect(() => {
    const code = prompt("Enter admin code to access the application:");
    if (code === 'dq.adm') {
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
    setIsAddModalOpen(false);
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-slate-900 text-gray-300 font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Access Denied</h1>
          <p className="text-slate-400 mt-2">You need to be an admin to use this application. Please refresh and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-gray-300 font-sans">
      <div className="max-w-screen-xl mx-auto p-4 md:p-6 lg:p-8">
        <Header onAISearch={handleAISearch} isAISearching={isAISearching} />
        {aiError && <div className="bg-red-500/20 border border-red-500 text-red-300 text-center p-3 rounded-lg my-4">{aiError}</div>}
        <div className="flex flex-col md:flex-row gap-8 mt-6">
          <Sidebar
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <div className="flex-1 flex flex-col bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden min-h-[70vh]">
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
      </div>
      <AddScriptModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddScript={handleAddNewScript}
        categories={CATEGORIES}
      />
    </div>
  );
}