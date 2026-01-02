import { AlertCircle, X } from 'lucide-react';

interface ErrorStateProps {
  message: string;
  onDismiss?: () => void;
}

export function ErrorState({ message, onDismiss }: ErrorStateProps) {
  return (
    <div className="error-card animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
          <AlertCircle className="w-4 h-4 text-destructive" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-destructive mb-1">Oops! Something went wrong</h3>
          <p className="text-sm text-destructive/80">{message}</p>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="p-1.5 hover:bg-destructive/10 rounded-lg transition-colors flex-shrink-0"
            aria-label="Dismiss error"
          >
            <X className="w-4 h-4 text-destructive" />
          </button>
        )}
      </div>
    </div>
  );
}
