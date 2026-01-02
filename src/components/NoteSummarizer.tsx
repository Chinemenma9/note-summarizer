import { useState, useCallback } from 'react';
import { NotesInput } from './NotesInput';
import { WordCounter } from './WordCounter';
import { LengthSelector, SummaryLength } from './LengthSelector';
import { ActionButtons } from './ActionButtons';
import { SummaryOutput } from './SummaryOutput';
import { ErrorState } from './ErrorState';
import { EmptyState } from './EmptyState';
import { ThemeToggle } from './ThemeToggle';
import { PenLine } from 'lucide-react';

interface NoteSummarizerProps {
  onSummarize: (text: string, length: SummaryLength) => Promise<string>;
}

export function NoteSummarizer({ onSummarize }: NoteSummarizerProps) {
  const [notes, setNotes] = useState('');
  const [summary, setSummary] = useState('');
  const [summaryLength, setSummaryLength] = useState<SummaryLength>('medium');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = useCallback(async () => {
    if (!notes.trim()) {
      setError('Please enter some notes to summarize.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSummary('');

    try {
      const result = await onSummarize(notes, summaryLength);
      setSummary(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate summary. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [notes, summaryLength, onSummarize]);

  const handleResummarize = useCallback(() => {
    handleSummarize();
  }, [handleSummarize]);

  const handleClear = useCallback(() => {
    setNotes('');
    setSummary('');
    setError(null);
  }, []);

  const handleDismissError = useCallback(() => {
    setError(null);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/25">
            <PenLine className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-cursive text-4xl md:text-5xl text-foreground">
              Note Summarizer
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Transform your notes into concise summaries
            </p>
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="space-y-6">
        {/* Input Card */}
        <div className="glass-card p-6 space-y-5">
          <NotesInput
            value={notes}
            onChange={setNotes}
            onClear={handleClear}
            disabled={isLoading}
          />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <WordCounter text={notes} />
            <LengthSelector
              value={summaryLength}
              onChange={setSummaryLength}
              disabled={isLoading}
            />
          </div>

          <div className="pt-2">
            <ActionButtons
              onSummarize={handleSummarize}
              onResummarize={handleResummarize}
              isLoading={isLoading}
              canSummarize={!!notes.trim()}
              hasSummary={!!summary}
            />
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          {error && (
            <ErrorState message={error} onDismiss={handleDismissError} />
          )}
          
          {summary && !error && (
            <SummaryOutput summary={summary} />
          )}

          {!summary && !error && !isLoading && (
            <EmptyState />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          Built with care • Your notes stay private
        </p>
      </footer>
    </div>
  );
}
