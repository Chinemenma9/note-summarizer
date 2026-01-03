  import { GoogleGenAI } from "@google/genai";
import { NoteSummarizer } from '@/components/NoteSummarizer';
import { SummaryLength } from '@/components/LengthSelector';

// Mock summarization function - replace with actual implementation
const mockSummarize = async (text: string, length: SummaryLength): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1800));

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey:"AIzaSyDENxSmEgk3_o1lJNQc923gRHgmCfoOCC0"});

async function summarize(text:string, length:SummaryLength) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: text,
    config:{
      systemInstruction:`You are a helpful academic note-summarization assistant.

Your task is to read user-provided notes, articles, or pasted text and produce a clear, accurate, and concise summary.

Guidelines:
- Focus on the most important ideas, concepts, and key points.
- Remove unnecessary repetition, filler words, and irrelevant details.
- Preserve the original meaning and intent of the text.
- Use simple, easy-to-understand language.
- Do not add new information that is not present in the original text.
- If the input is long, structure the summary into short paragraphs or bullet points.
- If the text is already short, produce an even more concise version.
- Maintain a neutral and academic tone unless the text is casual.
- Do not include personal opinions or commentary.
- Avoid emojis, slang, or informal expressions.
- Make the length ${length}.

Output only the summarized content.
`
    }
  });
 return response.text;
}
return await summarize(text, length)
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
