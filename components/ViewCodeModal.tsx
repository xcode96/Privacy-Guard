import React, { useState, useEffect } from 'react';
import type { Script } from '../types';

interface ViewCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  script: Script | null;
}

export const ViewCodeModal: React.FC<ViewCodeModalProps> = ({ isOpen, onClose, script }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy Code');

  useEffect(() => {
    if (isOpen) {
      setCopyButtonText('Copy Code'); // Reset button text when modal opens
    }
  }, [isOpen]);

  const handleCopyCode = () => {
    if (script?.code) {
      navigator.clipboard.writeText(script.code).then(() => {
        setCopyButtonText('Copied!');
        setTimeout(() => setCopyButtonText('Copy Code'), 2000);
      }, () => {
        setCopyButtonText('Failed!');
        setTimeout(() => setCopyButtonText('Copy Code'), 2000);
      });
    }
  };

  if (!isOpen || !script) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-zinc-900 rounded-xl border border-zinc-700 w-full max-w-3xl max-h-[80vh] flex flex-col shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-zinc-800">
            <h2 className="text-xl font-bold text-white font-mono">{script.name}</h2>
            <p className="text-zinc-400 mt-1 text-sm">{script.description}</p>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
            <pre className="bg-zinc-950/70 rounded p-4 text-sm text-zinc-300 font-mono whitespace-pre-wrap break-words">
                <code>{script.code}</code>
            </pre>
        </div>
        <div className="p-4 bg-zinc-900/50 border-t border-zinc-800 flex justify-end">
            <button
                onClick={handleCopyCode}
                className="px-5 py-2 text-sm font-semibold text-white bg-orange-600 rounded-md hover:bg-orange-500 transition-all w-28"
            >
                {copyButtonText}
            </button>
        </div>
      </div>
    </div>
  );
};