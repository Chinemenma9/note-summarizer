import { Sparkles, RefreshCw } from 'lucide-react';

interface ActionButtonsProps {
  onSummarize: () => void;
  onResummarize: () => void;
  isLoading: boolean;
  canSummarize: boolean;
  hasSummary: boolean;
}

export function ActionButtons({ 
  onSummarize, 
  onResummarize, 
  isLoading, 
  canSummarize, 
  hasSummary 
}: ActionButtonsProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        className="btn-premium"
        onClick={onSummarize}
        disabled={!canSummarize || isLoading}
        aria-label={isLoading ? 'Summarizing...' : 'Summarize notes'}
      >
        {isLoading ? (
          <>
            <span className="spinner" />
            <span>Summarizing...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            <span>Summarize</span>
          </>
        )}
      </button>

      {hasSummary && !isLoading && (
        <button
          className="btn-secondary"
          onClick={onResummarize}
          aria-label="Re-summarize"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Re-summarize</span>
        </button>
      )}
    </div>
  );
}
