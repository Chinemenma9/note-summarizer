import { useState } from 'react';
import { Copy, Check, Download, FileText } from 'lucide-react';

interface SummaryOutputProps {
  summary: string;
}

export function SummaryOutput({ summary }: SummaryOutputProps) {
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

  const handleDownload = () => {
    const blob = new Blob([summary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'summary.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="summary-card animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-cursive text-2xl text-foreground">Summary</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="btn-icon"
            aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
          >
            {copied ? (
              <Check className="w-4 h-4 text-primary" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={handleDownload}
            className="btn-icon"
            aria-label="Download summary"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <p className="text-foreground leading-relaxed whitespace-pre-wrap">
        {summary}
      </p>
    </div>
  );
}
