import { ChangeEvent } from 'react';

interface NotesTextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function NotesTextarea({ 
  value, 
  onChange, 
  placeholder = "Paste your notes here...",
  disabled = false 
}: NotesTextareaProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <textarea
      className="textarea-notes"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      aria-label="Notes input"
    />
  );
}
