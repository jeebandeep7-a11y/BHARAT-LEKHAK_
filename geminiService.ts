
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiSuggestions = async (prompt: string) => {
  if (!API_KEY) return "AI assistance unavailable. Please check configuration.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert Indian story editor for "BHARAT LEKHAK". Help the author with this request: ${prompt}`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong while getting suggestions.";
  }
};

export const translateSummary = async (text: string, targetLang: string) => {
  if (!API_KEY) return text;
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Translate the following story summary into ${targetLang}. Keep the emotional tone intact. Content: ${text}`,
    });
    return response.text;
  } catch (error) {
    return text;
  }
};
