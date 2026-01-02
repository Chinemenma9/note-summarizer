import { FileText, Type } from 'lucide-react';

interface WordCounterProps {
  text: string;
}

export function WordCounter({ text }: WordCounterProps) {
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <div className="flex items-center gap-4">
      <div className="badge-soft flex items-center gap-2">
        <FileText className="w-3.5 h-3.5" />
        <span>{wordCount} {wordCount === 1 ? 'word' : 'words'}</span>
      </div>
      <div className="badge-soft flex items-center gap-2">
        <Type className="w-3.5 h-3.5" />
        <span>{charCount} chars</span>
      </div>
    </div>
  );
}
