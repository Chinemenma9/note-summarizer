import { Feather, Sparkles, Zap } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="glass-card p-8 text-center animate-fade-in">
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
        <Feather className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-cursive text-3xl text-foreground mb-2">Ready to summarize</h3>
      <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
        Paste your notes above and click summarize to get a concise overview.
      </p>
      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>AI-powered</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary" />
          <span>Instant results</span>
        </div>
      </div>
    </div>
  );
}
