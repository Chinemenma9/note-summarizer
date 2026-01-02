import { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';

interface SummaryCardProps {
  summary: string;
}

export function SummaryCard({ summary }: SummaryCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text');
    }
  };

  return (
    <div className="card-summary animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-2 text-primary">
          <FileText className="w-5 h-5" />
          <h3 className="font-semibold text-foreground">Summary</h3>
        </div>
        <button
          onClick={handleCopy}
          className="btn-ghost"
          aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          {copied ? (
            <Check className="w-4 h-4 text-primary" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <p className="text-foreground leading-relaxed whitespace-pre-wrap">
        {summary}
      </p>
    </div>
  );
}
