import { AlertCircle, X } from 'lucide-react';

interface ErrorCardProps {
  message: string;
  onDismiss?: () => void;
}

export function ErrorCard({ message, onDismiss }: ErrorCardProps) {
  return (
    <div className="card-error animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold mb-1">Something went wrong</h3>
          <p className="text-sm opacity-90">{message}</p>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="p-1 hover:bg-destructive/20 rounded transition-colors"
            aria-label="Dismiss error"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
