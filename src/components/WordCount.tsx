interface WordCountProps {
  text: string;
}

export function WordCount({ text }: WordCountProps) {
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <div className="flex items-center gap-3">
      <span className="badge-count">
        {wordCount} {wordCount === 1 ? 'word' : 'words'}
      </span>
      <span className="badge-count">
        {charCount} {charCount === 1 ? 'character' : 'characters'}
      </span>
    </div>
  );
}
