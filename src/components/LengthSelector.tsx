export type SummaryLength = 'short' | 'medium' | 'detailed';

interface LengthSelectorProps {
  value: SummaryLength;
  onChange: (length: SummaryLength) => void;
  disabled?: boolean;
}

const lengths: { value: SummaryLength; label: string }[] = [
  { value: 'short', label: 'Short' },
  { value: 'medium', label: 'Medium' },
  { value: 'detailed', label: 'Detailed' },
];

export function LengthSelector({ value, onChange, disabled = false }: LengthSelectorProps) {
  return (
    <div className="toggle-group">
      {lengths.map((length) => (
        <button
          key={length.value}
          onClick={() => onChange(length.value)}
          disabled={disabled}
          className={`toggle-item ${value === length.value ? 'active' : ''}`}
          aria-pressed={value === length.value}
        >
          {length.label}
        </button>
      ))}
    </div>
  );
}
