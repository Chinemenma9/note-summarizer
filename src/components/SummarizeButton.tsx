import { Sparkles } from 'lucide-react';

interface SummarizeButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled?: boolean;
}

export function SummarizeButton({ onClick, isLoading, disabled = false }: SummarizeButtonProps) {
  return (
    <button
      className="btn-primary"
      onClick={onClick}
      disabled={disabled || isLoading}
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
  );
}
