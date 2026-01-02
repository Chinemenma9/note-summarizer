import { NoteSummarizer } from '@/components/NoteSummarizer';
import { SummaryLength } from '@/components/LengthSelector';

// Mock summarization function - replace with actual implementation
const mockSummarize = async (text: string, length: SummaryLength): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1800));
  
  const sentences = text.split(/[.!?]+/).filter(s => s.trim());
  const wordCount = text.trim().split(/\s+/).length;
  
  if (wordCount < 10) {
    return text.trim();
  }
  
  // Adjust summary based on length preference
  const lengthMultiplier = {
    short: 0.2,
    medium: 0.4,
    detailed: 0.6,
  };
  
  const summaryLength = Math.max(1, Math.ceil(sentences.length * lengthMultiplier[length]));
  const summarySentences = sentences.slice(0, summaryLength);
  
  const prefix = {
    short: '📝 Quick summary: ',
    medium: '📋 Summary: ',
    detailed: '📖 Detailed summary: ',
  };
  
  return `${prefix[length]}${summarySentences.join('. ').trim()}.`;
};

const Index = () => {
  return (
    <div className="gradient-bg py-12 md:py-16">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <NoteSummarizer onSummarize={mockSummarize} />
      </div>
    </div>
  );
};

export default Index;
