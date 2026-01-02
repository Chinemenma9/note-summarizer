import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

// Initialize AI client with your API key from .env
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

function NoteSummarizer() {
  const [notes, setNotes] = useState("");      // User input
  const [summary, setSummary] = useState("");  // AI output
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {
    if (!notes.trim()) return; // Do nothing if input is empty
    setLoading(true);
    setSummary("");

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Summarize these notes in a few sentences:\n${notes}`,
      });
      setSummary(response.text);
    } catch (error) {
      console.error(error);
      setSummary("Error generating summary. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Note Summarizer</h1>
      <textarea
        rows={10}
        style={{ width: "100%", padding: "0.5rem" }}
        placeholder="Paste your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button
        onClick={generateSummary}
        disabled={loading}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        {loading ? "Summarizing..." : "Summarize Notes"}
      </button>
      {summary && (
        <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default NoteSummarizer;
