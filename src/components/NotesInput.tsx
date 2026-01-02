import { ChangeEvent } from 'react';
import { X } from 'lucide-react';

interface NotesInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  disabled?: boolean;
}

export function NotesInput({ value, onChange, onClear, disabled = false }: NotesInputProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative group">
      <textarea
        className="textarea-premium pr-12"
        value={value}
        onChange={handleChange}
        placeholder="Paste your notes here to get started..."
        disabled={disabled}
        aria-label="Notes input"
      />
      {value && !disabled && (
        <button
          onClick={onClear}
          className="absolute top-4 right-4 p-1.5 rounded-lg
                     text-muted-foreground hover:text-foreground
                     hover:bg-muted/50 transition-all duration-200
                     opacity-0 group-hover:opacity-100"
          aria-label="Clear input"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
